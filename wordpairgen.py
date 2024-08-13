import random
import nltk
from nltk.corpus import brown
from collections import Counter

# Download the Brown corpus if not already present
nltk.download('brown', quiet=True)

def load_common_words(n=5000):
    # Get all words from the Brown corpus
    words = brown.words()
    
    # Convert to lowercase and filter out non-alphabetic words
    words = [word.lower() for word in words if word.isalpha()]
    
    # Count word frequencies
    word_freq = Counter(words)
    
    # Get the n most common words
    common_words = [word for word, _ in word_freq.most_common(n)]
    
    return common_words

def generate_word_pairs(num_pairs, word_list):
    pairs = []
    for _ in range(num_pairs):
        start = random.choice(word_list)
        target = random.choice(word_list)
        while target == start:  # Ensure start and target are different
            target = random.choice(word_list)
        pairs.append((start, target))
    return pairs

def write_pairs_to_file(pairs, filename):
    with open(filename, 'w') as f:
        for start, target in pairs:
            f.write(f"{{ start: '{start}', target: '{target}' }},\n")

# Main execution
if __name__ == "__main__":
    word_list = load_common_words()
    num_pairs = int(input("Enter the number of word pairs to generate: "))
    filename = "common_word_pairs.txt"
    
    generated_pairs = generate_word_pairs(num_pairs, word_list)
    write_pairs_to_file(generated_pairs, filename)
    
    print(f"{len(generated_pairs)} common word pairs have been written to {filename}")