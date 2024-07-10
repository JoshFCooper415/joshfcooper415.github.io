import numpy as np
import random
import math
from collections import defaultdict

class GambitGame:
    def __init__(self):
        self.board = np.zeros((5, 7), dtype=int)
        self.board[0:2, :] = 1  # Player 1's pawns
        self.board[3:5, :] = 2  # Player 2's pawns
        self.current_player = 1

    def get_valid_moves(self, player):
        moves = []
        direction = 1 if player == 1 else -1
        for i in range(5):
            for j in range(7):
                if self.board[i][j] == player:
                    # Move forward
                    if 0 <= i + direction < 5 and self.board[i + direction][j] == 0:
                        moves.append((i, j, i + direction, j))
                    # Capture diagonally
                    if j > 0 and 0 <= i + direction < 5 and self.board[i + direction][j - 1] == 3 - player:
                        moves.append((i, j, i + direction, j - 1))
                    if j < 6 and 0 <= i + direction < 5 and self.board[i + direction][j + 1] == 3 - player:
                        moves.append((i, j, i + direction, j + 1))
        return moves

    def make_move(self, move):
        i, j, new_i, new_j = move
        self.board[new_i][new_j] = self.board[i][j]
        self.board[i][j] = 0
        self.current_player = 3 - self.current_player

    def is_game_over(self):
        if 1 in self.board[4] or 2 in self.board[0]:
            return True
        return len(self.get_valid_moves(1)) == 0 and len(self.get_valid_moves(2)) == 0

    def get_winner(self):
        if 1 in self.board[4]:
            return 1
        if 2 in self.board[0]:
            return 2
        score1 = sum([i for i in range(5) for j in range(7) if self.board[i][j] == 1])
        score2 = sum([4-i for i in range(5) for j in range(7) if self.board[i][j] == 2])
        return 1 if score1 > score2 else 2 if score2 > score1 else 0

    def clone(self):
        new_game = GambitGame()
        new_game.board = self.board.copy()
        new_game.current_player = self.current_player
        return new_game

def minimax(game, depth, alpha, beta, maximizing_player):
    if depth == 0 or game.is_game_over():
        return evaluate(game), None

    if maximizing_player:
        max_eval = float('-inf')
        best_move = None
        for move in game.get_valid_moves(game.current_player):
            new_game = game.clone()
            new_game.make_move(move)
            eval, _ = minimax(new_game, depth - 1, alpha, beta, False)
            if eval > max_eval:
                max_eval = eval
                best_move = move
            alpha = max(alpha, eval)
            if beta <= alpha:
                break
        return max_eval, best_move
    else:
        min_eval = float('inf')
        best_move = None
        for move in game.get_valid_moves(game.current_player):
            new_game = game.clone()
            new_game.make_move(move)
            eval, _ = minimax(new_game, depth - 1, alpha, beta, True)
            if eval < min_eval:
                min_eval = eval
                best_move = move
            beta = min(beta, eval)
            if beta <= alpha:
                break
        return min_eval, best_move

def evaluate(game):
    if game.is_game_over():
        winner = game.get_winner()
        if winner == 1:
            return 1000
        elif winner == 2:
            return -1000
        else:
            return 0
    
    score = 0
    for i in range(5):
        for j in range(7):
            if game.board[i][j] == 1:
                score += i
            elif game.board[i][j] == 2:
                score -= (4 - i)
    return score

class MCTSNode:
    def __init__(self, game, parent=None, move=None):
        self.game = game
        self.parent = parent
        self.move = move
        self.children = []
        self.visits = 0
        self.value = 0

    def expand(self):
        moves = self.game.get_valid_moves(self.game.current_player)
        for move in moves:
            new_game = self.game.clone()
            new_game.make_move(move)
            self.children.append(MCTSNode(new_game, self, move))

    def is_fully_expanded(self):
        return len(self.children) == len(self.game.get_valid_moves(self.game.current_player))

    def select_child(self):
        return max(self.children, key=lambda c: c.uct_value())

    def uct_value(self, c=1.41):
        if self.visits == 0:
            return float('inf')
        return self.value / self.visits + c * math.sqrt(math.log(self.parent.visits) / self.visits)

def mcts(game, num_simulations=1000):
    root = MCTSNode(game)

    for _ in range(num_simulations):
        node = root
        while not node.game.is_game_over() and node.is_fully_expanded():
            node = node.select_child()

        if not node.game.is_game_over():
            node.expand()
            node = random.choice(node.children)

        winner = simulate(node.game)
        
        while node is not None:
            node.visits += 1
            node.value += 1 if winner == node.game.current_player else 0
            node = node.parent

    return max(root.children, key=lambda c: c.visits).move

def simulate(game):
    game = game.clone()
    while not game.is_game_over():
        moves = game.get_valid_moves(game.current_player)
        if moves:
            move = random.choice(moves)
            game.make_move(move)
        else:
            game.current_player = 3 - game.current_player
    return game.get_winner()

class QLearningAgent:
    def __init__(self, alpha=0.1, epsilon=0.1, discount=0.95):
        self.q_values = defaultdict(float)
        self.alpha = alpha
        self.epsilon = epsilon
        self.discount = discount

    def get_q_value(self, state, action):
        return self.q_values[(state, action)]

    def get_best_action(self, game):
        state = self.get_state(game)
        actions = game.get_valid_moves(game.current_player)
        if not actions:
            return None
        if random.random() < self.epsilon:
            return random.choice(actions)
        return max(actions, key=lambda a: self.get_q_value(state, a))

    def update(self, state, action, next_state, reward):
        old_q = self.get_q_value(state, action)
        next_max_q = max([self.get_q_value(next_state, a) for a in self.get_valid_actions(next_state)], default=0)
        new_q = old_q + self.alpha * (reward + self.discount * next_max_q - old_q)
        self.q_values[(state, action)] = new_q

    def get_state(self, game):
        return tuple(map(tuple, game.board))

    def get_valid_actions(self, state):
        game = GambitGame()
        game.board = np.array(state)
        return game.get_valid_moves(game.current_player)

def train_q_learning(num_episodes=10000):
    agent = QLearningAgent()
    for _ in range(num_episodes):
        game = GambitGame()
        state = agent.get_state(game)
        while not game.is_game_over():
            action = agent.get_best_action(game)
            if action is None:
                game.current_player = 3 - game.current_player
                continue
            game.make_move(action)
            next_state = agent.get_state(game)
            reward = 1 if game.is_game_over() and game.get_winner() == 3 - game.current_player else 0
            agent.update(state, action, next_state, reward)
            state = next_state
    return agent

def compare_strategies(num_games=100):
    results = {
        "Random": {"wins": 0, "losses": 0, "draws": 0},
        "Minimax": {"wins": 0, "losses": 0, "draws": 0},
        "MCTS": {"wins": 0, "losses": 0, "draws": 0},
        "Q-Learning": {"wins": 0, "losses": 0, "draws": 0}
    }

    q_agent = train_q_learning()

    for _ in range(num_games):
        for strategy in ["Random", "Minimax", "MCTS", "Q-Learning"]:
            game = GambitGame()
            while not game.is_game_over():
                if game.current_player == 1:
                    if strategy == "Random":
                        moves = game.get_valid_moves(1)
                        move = random.choice(moves) if moves else None
                    elif strategy == "Minimax":
                        _, move = minimax(game, depth=3, alpha=float('-inf'), beta=float('inf'), maximizing_player=True)
                    elif strategy == "MCTS":
                        move = mcts(game)
                    else:  # Q-Learning
                        move = q_agent.get_best_action(game)
                else:
                    moves = game.get_valid_moves(2)
                    move = random.choice(moves) if moves else None

                if move:
                    game.make_move(move)
                else:
                    game.current_player = 3 - game.current_player

            winner = game.get_winner()
            if winner == 1:
                results[strategy]["wins"] += 1
            elif winner == 2:
                results[strategy]["losses"] += 1
            else:
                results[strategy]["draws"] += 1

    for strategy, result in results.items():
        print(f"{strategy} Strategy:")
        print(f"  Wins: {result['wins']}")
        print(f"  Losses: {result['losses']}")
        print(f"  Draws: {result['draws']}")
        print(f"  Win Rate: {result['wins'] / num_games:.2%}")
        print()

if __name__ == "__main__":
    compare_strategies()