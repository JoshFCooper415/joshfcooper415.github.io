import random
from copy import deepcopy
from collections import defaultdict

# Constants
ROWS = 7
COLS = 5
EMPTY = 0
PLAYER1 = 1
PLAYER2 = 2

def initialize_board():
    board = [[EMPTY for _ in range(COLS)] for _ in range(ROWS)]
    for col in range(COLS):
        board[1][col] = PLAYER1
        board[0][col] = PLAYER1
        board[ROWS - 2][col] = PLAYER2
        board[ROWS - 1][col] = PLAYER2
    return board

def is_valid_move(board, from_row, from_col, to_row, to_col, player):
    if to_col < 0 or to_col >= COLS or to_row < 0 or to_row >= ROWS:
        return False
    direction = 1 if player == PLAYER1 else -1
    
    # Forward move
    if to_row == from_row + direction and to_col == from_col and board[to_row][to_col] == EMPTY:
        return True
    
    # Diagonal capture
    if to_row == from_row + direction and abs(to_col - from_col) == 1 and board[to_row][to_col] == (PLAYER2 if player == PLAYER1 else PLAYER1):
        return True
    
    return False

def make_move(board, from_row, from_col, to_row, to_col, player):
    new_board = deepcopy(board)
    new_board[to_row][to_col] = player
    new_board[from_row][from_col] = EMPTY
    return new_board

def get_all_possible_moves(board, player):
    moves = []
    for row in range(ROWS):
        for col in range(COLS):
            if board[row][col] == player:
                possible_moves = [
                    (row, col, row + (1 if player == PLAYER1 else -1), col),
                    (row, col, row + (1 if player == PLAYER1 else -1), col - 1),
                    (row, col, row + (1 if player == PLAYER1 else -1), col + 1)
                ]
                for move in possible_moves:
                    if is_valid_move(board, *move, player):
                        moves.append(move)
    return moves

def is_game_over(board):
    return PLAYER2 in board[0] or PLAYER1 in board[ROWS - 1] or not get_all_possible_moves(board, PLAYER1) or not get_all_possible_moves(board, PLAYER2)

def minimax(board, depth, maximizing_player, alpha, beta, evaluate_board):
    if depth == 0 or is_game_over(board):
        return evaluate_board(board)

    if maximizing_player:
        max_eval = float('-inf')
        for move in get_all_possible_moves(board, PLAYER2):
            new_board = make_move(board, *move, PLAYER2)
            eval = minimax(new_board, depth - 1, False, alpha, beta, evaluate_board)
            max_eval = max(max_eval, eval)
            alpha = max(alpha, eval)
            if beta <= alpha:
                break
        return max_eval
    else:
        min_eval = float('inf')
        for move in get_all_possible_moves(board, PLAYER1):
            new_board = make_move(board, *move, PLAYER1)
            eval = minimax(new_board, depth - 1, True, alpha, beta, evaluate_board)
            min_eval = min(min_eval, eval)
            beta = min(beta, eval)
            if beta <= alpha:
                break
        return min_eval

def get_best_move(board, player, evaluate_board, depth=5):
    best_move = None
    if player == PLAYER2:
        best_eval = float('-inf')
        for move in get_all_possible_moves(board, PLAYER2):
            new_board = make_move(board, *move, PLAYER2)
            eval = minimax(new_board, depth - 1, False, float('-inf'), float('inf'), evaluate_board)
            if eval > best_eval:
                best_eval = eval
                best_move = move
    else:
        best_eval = float('inf')
        for move in get_all_possible_moves(board, PLAYER1):
            new_board = make_move(board, *move, PLAYER1)
            eval = minimax(new_board, depth - 1, True, float('-inf'), float('inf'), evaluate_board)
            if eval < best_eval:
                best_eval = eval
                best_move = move
    return best_move

def play_game(evaluate_board1, evaluate_board2):
    board = initialize_board()
    current_player = PLAYER1
    while not is_game_over(board):
        if current_player == PLAYER1:
            move = get_best_move(board, PLAYER1, evaluate_board1)
        else:
            move = get_best_move(board, PLAYER2, evaluate_board2)
        
        if move is None:
            break
        
        board = make_move(board, *move, current_player)
        current_player = PLAYER2 if current_player == PLAYER1 else PLAYER1
    
    if PLAYER2 in board[0]:
        return PLAYER2
    elif PLAYER1 in board[ROWS - 1]:
        return PLAYER1
    else:
        return EMPTY  # Draw

# Example evaluation functions
def simple_evaluation(board):
    score = 0
    for row in range(ROWS):
        for col in range(COLS):
            if board[row][col] == PLAYER2:
                score += ROWS - row
            elif board[row][col] == PLAYER1:
                score -= row + 1
    return score

def advanced_evaluation(board):
    score = 0
    for row in range(ROWS):
        for col in range(COLS):
            if board[row][col] == PLAYER2:
                score += (ROWS - row) ** 2
                if col > 0 and row > 0 and board[row - 1][col - 1] == PLAYER1:
                    score += 5
                if col < COLS - 1 and row > 0 and board[row - 1][col + 1] == PLAYER1:
                    score += 5
            elif board[row][col] == PLAYER1:
                score -= (row + 1) ** 2
                if col > 0 and row < ROWS - 1 and board[row + 1][col - 1] == PLAYER2:
                    score -= 5
                if col < COLS - 1 and row < ROWS - 1 and board[row + 1][col + 1] == PLAYER2:
                    score -= 5
    return score

from collections import defaultdict
num_games = 4
# Updated result calculation
def evaluate_methods(eval_methods, num_games=num_games):
    results = defaultdict(int)
    for _ in range(num_games):
        for i in range(len(eval_methods)):
            for j in range(i + 1, len(eval_methods)):
                winner = play_game(eval_methods[i], eval_methods[j])
                if winner == PLAYER1:
                    results[(i, j)] += 1
                elif winner == PLAYER2:
                    results[(j, i)] += 1
                else:
                    results[(i, j)] += 0.5
                    results[(j, i)] += 0.5
    return results

# Multiple evaluation methods
def simple_evaluation(board):
    score = 0
    for row in range(ROWS):
        for col in range(COLS):
            if board[row][col] == PLAYER2:
                score += ROWS - row
            elif board[row][col] == PLAYER1:
                score -= row + 1
    return score

def advanced_evaluation(board):
    score = 0
    for row in range(ROWS):
        for col in range(COLS):
            if board[row][col] == PLAYER2:
                score += (ROWS - row) ** 2
                if col > 0 and row > 0 and board[row - 1][col - 1] == PLAYER1:
                    score += 5
                if col < COLS - 1 and row > 0 and board[row - 1][col + 1] == PLAYER1:
                    score += 5
            elif board[row][col] == PLAYER1:
                score -= (row + 1) ** 2
                if col > 0 and row < ROWS - 1 and board[row + 1][col - 1] == PLAYER2:
                    score -= 5
                if col < COLS - 1 and row < ROWS - 1 and board[row + 1][col + 1] == PLAYER2:
                    score -= 5
    return score

def distance_based_evaluation(board):
    score = 0
    for row in range(ROWS):
        for col in range(COLS):
            if board[row][col] == PLAYER2:
                score += (ROWS - row) * 10
            elif board[row][col] == PLAYER1:
                score -= (row + 1) * 10
    return score

def piece_count_evaluation(board):
    player2_count = sum(row.count(PLAYER2) for row in board)
    player1_count = sum(row.count(PLAYER1) for row in board)
    return player2_count - player1_count

def advanced_evaluation(board):
    score = 0
    for row in range(ROWS):
        for col in range(COLS):
            if board[row][col] == PLAYER2:
                score += (ROWS - row) ** 2
                if col > 0 and row > 0 and board[row - 1][col - 1] == PLAYER1:
                    score += 5
                if col < COLS - 1 and row > 0 and board[row - 1][col + 1] == PLAYER1:
                    score += 5
            elif board[row][col] == PLAYER1:
                score -= (row + 1) ** 2
                if col > 0 and row < ROWS - 1 and board[row + 1][col - 1] == PLAYER2:
                    score -= 5
                if col < COLS - 1 and row < ROWS - 1 and board[row + 1][col + 1] == PLAYER2:
                    score -= 5
    return score

def piece_count_evaluation(board):
    player2_count = sum(row.count(PLAYER2) for row in board)
    player1_count = sum(row.count(PLAYER1) for row in board)
    return player2_count - player1_count

# New evaluation methods
def weighted_advance_evaluation(board):
    score = 0
    for row in range(ROWS):
        for col in range(COLS):
            if board[row][col] == PLAYER2:
                score += (ROWS - row) ** 3  # Increased weight for advancement
            elif board[row][col] == PLAYER1:
                score -= (row + 1) ** 3
    return score

def mobility_evaluation(board):
    player2_moves = len(get_all_possible_moves(board, PLAYER2))
    player1_moves = len(get_all_possible_moves(board, PLAYER1))
    return player2_moves - player1_moves

def formation_evaluation(board):
    score = 0
    for row in range(ROWS):
        for col in range(COLS):
            if board[row][col] == PLAYER2:
                # Reward piece pairs
                if col > 0 and board[row][col-1] == PLAYER2:
                    score += 5
                if col < COLS-1 and board[row][col+1] == PLAYER2:
                    score += 5
                # Reward protected pieces
                if row < ROWS-1:
                    if col > 0 and board[row+1][col-1] == PLAYER2:
                        score += 10
                    if col < COLS-1 and board[row+1][col+1] == PLAYER2:
                        score += 10
            elif board[row][col] == PLAYER1:
                # Penalize opponent's piece pairs and protected pieces
                if col > 0 and board[row][col-1] == PLAYER1:
                    score -= 5
                if col < COLS-1 and board[row][col+1] == PLAYER1:
                    score -= 5
                if row > 0:
                    if col > 0 and board[row-1][col-1] == PLAYER1:
                        score -= 10
                    if col < COLS-1 and board[row-1][col+1] == PLAYER1:
                        score -= 10
    return score

def combined_evaluation(board):
    return (
        2 * advanced_evaluation(board) +
        3 * piece_count_evaluation(board) +
        2 * weighted_advance_evaluation(board) +
        mobility_evaluation(board) +
        2 * formation_evaluation(board)
    )

# Test the evaluation methods
eval_methods = [
    advanced_evaluation,
    weighted_advance_evaluation,
]
results = evaluate_methods(eval_methods, num_games=num_games)

print("Evaluation method comparison results:")
for (i, j), score in results.items():
    print(f"Method {i} vs Method {j}: {score}")

# Calculate win rates
total_games = sum(results.values()) // 2
win_rates = [sum(score for (i, _), score in results.items() if i == method_index) / (len(eval_methods) - 1) / (num_games / 2) for method_index in range(len(eval_methods))]

print("\nWin rates:")
for i, rate in enumerate(win_rates):
    print(f"Method {i}: {rate:.2%}")

# Method names for reference
method_names = [
    "Advanced Evaluation",
    "Weighted Advance Evaluation",
]

print("\nMethod Index Reference:")
for i, name in enumerate(method_names):
    print(f"{i}: {name}")