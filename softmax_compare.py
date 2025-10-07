import numpy as np
import matplotlib.pyplot as plt
from scipy.special import softmax as scipy_softmax
import warnings
warnings.filterwarnings('ignore')

# Base exp-free softmax implementations
def sparsemax(x):
    """Sparsemax - sparse alternative to softmax"""
    x_sorted = np.sort(x)[::-1]
    cumsum = np.cumsum(x_sorted)
    k_array = np.arange(1, len(x) + 1)
    threshold_candidates = (cumsum - 1) / k_array
    
    valid_k = x_sorted > threshold_candidates
    if np.any(valid_k):
        k = np.where(valid_k)[0][-1] + 1
        threshold = threshold_candidates[k-1]
    else:
        k = 1
        threshold = threshold_candidates[0]
    
    result = np.maximum(x - threshold, 0)
    if np.sum(result) > 0:
        return result / np.sum(result)
    else:
        return np.ones_like(x) / len(x)

def linear_softmax(x, temperature=1.0):
    """Linear approximation of softmax using ReLU-like activation"""
    scaled_x = x / temperature
    shifted_x = scaled_x - np.max(scaled_x)
    activated = np.maximum(0, shifted_x + 1)
    
    if np.sum(activated) > 0:
        return activated / np.sum(activated)
    else:
        return np.ones_like(x) / len(x)

def entmax_approximation(x, alpha=1.5):
    """Approximation of entmax without exp"""
    if alpha == 1:
        return linear_softmax(x)
    
    n = len(x)
    threshold_approx = np.mean(x) - (alpha - 1) / (alpha * n)
    shifted = x - threshold_approx
    
    if alpha != 1:
        activated = np.maximum(0, shifted) ** (1 / (alpha - 1))
    else:
        activated = np.maximum(0, shifted)
    
    if np.sum(activated) > 0:
        return activated / np.sum(activated)
    else:
        return np.ones_like(x) / len(x)

def piecewise_softmax(x, num_pieces=3):
    """Piecewise linear approximation"""
    min_x, max_x = np.min(x), np.max(x)
    
    if max_x == min_x:
        return np.ones_like(x) / len(x)
    
    normalized = (x - min_x) / (max_x - min_x)
    activated = np.zeros_like(normalized)
    
    for i in range(num_pieces):
        lower = i / num_pieces
        upper = (i + 1) / num_pieces
        mask = (normalized >= lower) & (normalized < upper)
        slope = (i + 1) * 2.0
        activated[mask] = slope * (normalized[mask] - lower) + i
    
    activated[normalized >= 1.0] = num_pieces
    activated = np.maximum(activated, 0.1)
    
    return activated / np.sum(activated)

def hardmax(x):
    """Hard softmax - one-hot at argmax position"""
    result = np.zeros_like(x, dtype=float)
    result[np.argmax(x)] = 1.0
    return result

# Newton refinement methods - WORKING VERSIONS
def newton_refinement_v1(x, initial_probs, num_iterations=1):
    """
    Newton refinement using exp-free iterative improvement
    Minimizes KL divergence from true softmax without using exp
    """
    p = initial_probs.copy().astype(np.float64)
    x_float = x.astype(np.float64)
    
    # Normalize inputs
    x_centered = x_float - np.mean(x_float)
    x_scaled = x_centered / (np.std(x_centered) + 1e-8)
    
    for _ in range(num_iterations):
        # Ensure valid probabilities
        p = np.maximum(p, 1e-12)
        p = p / np.sum(p)
        
        # Current "effective logits" from probabilities
        log_p = np.log(p)
        log_p_centered = log_p - np.mean(log_p)
        
        # Target: move log_p toward x_scaled
        residual = x_scaled - log_p_centered
        
        # Newton-like update using polynomial approximation
        # Instead of p_new = p * exp(residual), use Taylor expansion
        step_size = 0.2  # Conservative step
        
        # Polynomial approximation: exp(r) ≈ 1 + r + r²/2 for small r
        clipped_residual = np.clip(residual * step_size, -0.5, 0.5)
        exp_approx = 1 + clipped_residual + 0.5 * clipped_residual**2
        
        p_new = p * exp_approx
        p = np.maximum(p_new, 1e-12)
        p = p / np.sum(p)
    
    return p

def newton_refinement_v2(x, initial_probs, num_iterations=1):
    """
    Alternative Newton refinement using direct probability adjustment
    """
    p = initial_probs.copy().astype(np.float64)
    x_float = x.astype(np.float64)
    
    # Normalize x to [0,1] for stability
    x_norm = (x_float - np.min(x_float)) / (np.max(x_float) - np.min(x_float) + 1e-8)
    
    for _ in range(num_iterations):
        p = np.maximum(p, 1e-12)
        p = p / np.sum(p)
        
        # Target: probabilities should be proportional to "softmax-like" weights
        # Use x_norm to guide the adjustment
        target_weights = x_norm + 0.1  # Ensure all positive
        target_weights = target_weights / np.sum(target_weights)
        
        # Blend current p with target
        blend_factor = 0.3  # Conservative blending
        p_new = (1 - blend_factor) * p + blend_factor * target_weights
        
        p = np.maximum(p_new, 1e-12)
        p = p / np.sum(p)
    
    return p

def newton_refinement_v3(x, initial_probs, num_iterations=1):
    """
    Newton refinement using gradient-based approach without exp
    """
    p = initial_probs.copy().astype(np.float64)
    x_float = x.astype(np.float64)
    
    for _ in range(num_iterations):
        p = np.maximum(p, 1e-12)
        p = p / np.sum(p)
        
        # Compute gradient of KL divergence w.r.t. log probabilities
        # Without computing true softmax (which needs exp)
        log_p = np.log(p)
        
        # Approximate gradient: should point toward making log_p proportional to x
        x_normalized = (x_float - np.mean(x_float)) / (np.std(x_float) + 1e-8)
        log_p_normalized = (log_p - np.mean(log_p)) / (np.std(log_p) + 1e-8)
        
        gradient = x_normalized - log_p_normalized
        
        # Apply gradient step
        step_size = 0.1
        log_p_new = log_p + step_size * gradient
        
        # Convert back to probabilities using polynomial approximation
        # exp(log_p_new) ≈ exp(log_p) * exp(step_size * gradient)
        delta = step_size * gradient
        delta_clipped = np.clip(delta, -0.3, 0.3)
        exp_delta_approx = 1 + delta_clipped + 0.5 * delta_clipped**2
        
        p_new = p * exp_delta_approx
        p = np.maximum(p_new, 1e-12)
        p = p / np.sum(p)
    
    return p

# Newton-enhanced variants
def sparsemax_newton_v1(x, num_iterations=1):
    initial = sparsemax(x)
    return newton_refinement_v1(x, initial, num_iterations)

def sparsemax_newton_v2(x, num_iterations=1):
    initial = sparsemax(x)
    return newton_refinement_v2(x, initial, num_iterations)

def sparsemax_newton_v3(x, num_iterations=1):
    initial = sparsemax(x)
    return newton_refinement_v3(x, initial, num_iterations)

def linear_newton_v1(x, num_iterations=1):
    initial = linear_softmax(x, 1.0)
    return newton_refinement_v1(x, initial, num_iterations)

def linear_newton_v2(x, num_iterations=1):
    initial = linear_softmax(x, 1.0)
    return newton_refinement_v2(x, initial, num_iterations)

def linear_newton_v3(x, num_iterations=1):
    initial = linear_softmax(x, 1.0)
    return newton_refinement_v3(x, initial, num_iterations)

def entmax_newton_v1(x, num_iterations=1):
    initial = entmax_approximation(x, 1.5)
    return newton_refinement_v1(x, initial, num_iterations)

def entmax_newton_v2(x, num_iterations=1):
    initial = entmax_approximation(x, 1.5)
    return newton_refinement_v2(x, initial, num_iterations)

def piecewise_newton_v1(x, num_iterations=1):
    initial = piecewise_softmax(x, 3)
    return newton_refinement_v1(x, initial, num_iterations)

# Test functions
def generate_test_vectors():
    """Generate test cases for 8-bit integer inputs"""
    np.random.seed(42)
    
    test_cases = []
    test_cases.append(np.random.randint(0, 256, 10).astype(np.int8))
    test_cases.append(np.array([0, 50, 100, 150, 200, 255], dtype=np.int8))
    test_cases.append(np.array([100, 101, 102, 103, 104], dtype=np.int8))
    test_cases.append(np.array([-128, -64, 0, 64, 127], dtype=np.int8))
    test_cases.append(np.array([50, 51, 52, 53, 127], dtype=np.int8))
    test_cases.append(np.array([100, 100, 100, 100], dtype=np.int8))
    
    return test_cases

def calculate_metrics(reference, prediction):
    """Calculate accuracy metrics"""
    ref = reference.astype(np.float64)
    pred = prediction.astype(np.float64)
    
    mae = np.mean(np.abs(ref - pred))
    rmse = np.sqrt(np.mean((ref - pred)**2))
    
    epsilon = 1e-15
    ref_safe = np.maximum(ref, epsilon)
    pred_safe = np.maximum(pred, epsilon)
    kl_div = np.sum(ref_safe * np.log(ref_safe / pred_safe))
    
    max_error = np.max(np.abs(ref - pred))
    cos_sim = np.dot(ref, pred) / (np.linalg.norm(ref) * np.linalg.norm(pred))
    sparsity = np.sum(pred > 1e-6) / len(pred)
    
    return {
        'mae': mae,
        'rmse': rmse,
        'kl_divergence': kl_div,
        'max_error': max_error,
        'cosine_similarity': cos_sim,
        'sparsity': sparsity
    }

def run_comparison():
    """Run the comparison with working Newton methods"""
    
    # Define all variants
    variants = {
        # Base methods
        'Sparsemax': sparsemax,
        'Linear': lambda x: linear_softmax(x, 1.0),
        'Entmax': lambda x: entmax_approximation(x, 1.5),
        'Piecewise': lambda x: piecewise_softmax(x, 3),
        'Hardmax': hardmax,
        
        # Newton v1 (polynomial approximation)
        'Sparsemax+Newton1': lambda x: sparsemax_newton_v1(x, 1),
        'Linear+Newton1': lambda x: linear_newton_v1(x, 1),
        'Entmax+Newton1': lambda x: entmax_newton_v1(x, 1),
        'Piecewise+Newton1': lambda x: piecewise_newton_v1(x, 1),
        
        # Newton v2 (direct blending)
        'Sparsemax+Newton2': lambda x: sparsemax_newton_v2(x, 1),
        'Linear+Newton2': lambda x: linear_newton_v2(x, 1),
        'Entmax+Newton2': lambda x: entmax_newton_v2(x, 1),
        
        # Newton v3 (gradient-based)
        'Sparsemax+Newton3': lambda x: sparsemax_newton_v3(x, 1),
        'Linear+Newton3': lambda x: linear_newton_v3(x, 1),
        
        # 2 iterations for best methods
        'Sparsemax+Newton1(2)': lambda x: sparsemax_newton_v1(x, 2),
        'Linear+Newton1(2)': lambda x: linear_newton_v1(x, 2),
    }
    
    test_vectors = generate_test_vectors()
    test_names = [
        'Random 8-bit',
        'Large Range', 
        'Close Values',
        'Extreme Values',
        'One Outlier',
        'All Same'
    ]
    
    # Use scipy softmax as reference
    reference_func = lambda x: scipy_softmax(x.astype(np.float64))
    
    results = {variant: {metric: [] for metric in ['mae', 'rmse', 'kl_divergence', 'max_error', 'cosine_similarity', 'sparsity']} 
               for variant in variants.keys()}
    
    print("EXP-FREE SOFTMAX WITH WORKING NEWTON REFINEMENT")
    print("=" * 70)
    print("Testing 3 different Newton approaches + multi-iteration variants")
    print("=" * 70)
    
    # Run tests
    for i, test_vector in enumerate(test_vectors):
        print(f"\nTest Case {i+1}: {test_names[i]}")
        print(f"Input: {test_vector}")
        
        reference = reference_func(test_vector)
        
        for variant_name, variant_func in variants.items():
            try:
                prediction = variant_func(test_vector)
                metrics = calculate_metrics(reference, prediction)
                
                for metric_name, metric_value in metrics.items():
                    results[variant_name][metric_name].append(metric_value)
                    
            except Exception as e:
                print(f"Error in {variant_name}: {e}")
                for metric_name in results[variant_name].keys():
                    results[variant_name][metric_name].append(np.nan)
    
    # Calculate summary statistics
    print("\n" + "=" * 100)
    print("SUMMARY RESULTS")
    print("=" * 100)
    
    summary_stats = {}
    for variant_name in variants.keys():
        summary_stats[variant_name] = {}
        for metric_name in ['mae', 'rmse', 'kl_divergence', 'max_error', 'cosine_similarity', 'sparsity']:
            values = np.array(results[variant_name][metric_name])
            valid_values = values[~np.isnan(values)]
            if len(valid_values) > 0:
                summary_stats[variant_name][metric_name] = np.mean(valid_values)
            else:
                summary_stats[variant_name][metric_name] = np.nan
    
    # Print detailed results table
    print(f"{'Variant':<22} {'MAE':<10} {'RMSE':<10} {'KL-Div':<10} {'Max Err':<10} {'Cos Sim':<10}")
    print("-" * 82)
    
    for variant_name, stats in summary_stats.items():
        print(f"{variant_name:<22} "
              f"{stats['mae']:<10.6f} "
              f"{stats['rmse']:<10.6f} "
              f"{stats['kl_divergence']:<10.6f} "
              f"{stats['max_error']:<10.6f} "
              f"{stats['cosine_similarity']:<10.6f}")
    
    # Newton improvement analysis
    print("\n" + "=" * 100)
    print("NEWTON REFINEMENT IMPROVEMENT ANALYSIS")
    print("=" * 100)
    
    base_methods = ['Sparsemax', 'Linear', 'Entmax', 'Piecewise']
    newton_methods = [
        ('Newton1', 'Sparsemax+Newton1', 'Linear+Newton1', 'Entmax+Newton1', 'Piecewise+Newton1'),
        ('Newton2', 'Sparsemax+Newton2', 'Linear+Newton2', 'Entmax+Newton2', None),
        ('Newton3', 'Sparsemax+Newton3', 'Linear+Newton3', None, None),
    ]
    
    print(f"{'Method':<12} {'Base MAE':<12} {'Newton1 MAE':<14} {'Improve1':<10} {'Newton2 MAE':<14} {'Improve2':<10}")
    print("-" * 92)
    
    for i, base in enumerate(base_methods):
        if base in summary_stats:
            base_mae = summary_stats[base]['mae']
            
            line = f"{base:<12} {base_mae:<12.6f} "
            
            # Newton1
            newton1_key = newton_methods[0][1+i]
            if newton1_key and newton1_key in summary_stats:
                newton1_mae = summary_stats[newton1_key]['mae']
                improve1 = ((base_mae - newton1_mae) / base_mae) * 100
                line += f"{newton1_mae:<14.6f} {improve1:<10.1f}% "
            else:
                line += f"{'N/A':<14} {'N/A':<10} "
            
            # Newton2  
            newton2_key = newton_methods[1][1+i] if i < len(newton_methods[1])-1 else None
            if newton2_key and newton2_key in summary_stats:
                newton2_mae = summary_stats[newton2_key]['mae']
                improve2 = ((base_mae - newton2_mae) / base_mae) * 100
                line += f"{newton2_mae:<14.6f} {improve2:<10.1f}%"
            else:
                line += f"{'N/A':<14} {'N/A':<10}"
            
            print(line)
    
    # Find best performers
    print("\n" + "=" * 100)
    print("TOP PERFORMERS")
    print("=" * 100)
    
    # Sort by MAE
    mae_sorted = [(name, stats['mae']) for name, stats in summary_stats.items() 
                  if not np.isnan(stats['mae'])]
    mae_sorted.sort(key=lambda x: x[1])
    
    print("🏆 TOP 10 BY MAE (Mean Absolute Error):")
    for i, (name, mae) in enumerate(mae_sorted[:10]):
        cos_sim = summary_stats[name]['cosine_similarity']
        kl_div = summary_stats[name]['kl_divergence']
        print(f"{i+1:2d}. {name:<22} MAE: {mae:.6f}, Cos Sim: {cos_sim:.4f}, KL: {kl_div:.4f}")
    
    print("\n🎯 KEY INSIGHTS:")
    print("• Newton refinement methods should show significant MAE improvements")
    print("• Method 1 (polynomial approx) vs Method 2 (blending) vs Method 3 (gradient)")
    print("• 2 iterations should provide additional gains over 1 iteration")
    print("• All methods remain completely exp-free throughout refinement")
    
    return results, summary_stats

if __name__ == "__main__":
    results, summary = run_comparison()