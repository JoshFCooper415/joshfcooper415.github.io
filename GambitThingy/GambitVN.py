import pygame
import sys
import numpy as np
from gambit_ai import GambitGame, minimax, mcts, QLearningAgent, train_q_learning

# Initialize Pygame
pygame.init()

# Constants
ROWS, COLS = 5, 7
SQUARE_SIZE = 80
WIDTH, HEIGHT = COLS * SQUARE_SIZE, ROWS * SQUARE_SIZE + 100
BOARD_ORIGIN = (0, 0)
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (255, 0, 0)
BLUE = (0, 0, 255)

# Set up the display
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Gambit")

class GambitGUI:
    def __init__(self):
        self.game = GambitGame()
        self.selected_piece = None
        self.ai_agent = None
        self.q_agent = train_q_learning()

    def draw_board(self):
        for row in range(ROWS):
            for col in range(COLS):
                pygame.draw.rect(screen, WHITE, (col * SQUARE_SIZE, row * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE), 1)

    def draw_pieces(self):
        for row in range(ROWS):
            for col in range(COLS):
                if self.game.board[row][col] == 1:
                    pygame.draw.circle(screen, RED, (col * SQUARE_SIZE + SQUARE_SIZE // 2, row * SQUARE_SIZE + SQUARE_SIZE // 2), SQUARE_SIZE // 2 - 5)
                elif self.game.board[row][col] == 2:
                    pygame.draw.circle(screen, BLUE, (col * SQUARE_SIZE + SQUARE_SIZE // 2, row * SQUARE_SIZE + SQUARE_SIZE // 2), SQUARE_SIZE // 2 - 5)

    def highlight_selected(self):
        if self.selected_piece:
            row, col = self.selected_piece
            pygame.draw.rect(screen, (255, 255, 0), (col * SQUARE_SIZE, row * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE), 3)

    def highlight_valid_moves(self):
        if self.selected_piece:
            valid_moves = self.game.get_valid_moves(self.game.current_player)
            for move in valid_moves:
                if move[:2] == self.selected_piece:
                    pygame.draw.rect(screen, (0, 255, 0), (move[3] * SQUARE_SIZE, move[2] * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE), 3)

    def handle_click(self, pos):
        col = pos[0] // SQUARE_SIZE
        row = pos[1] // SQUARE_SIZE

        if row >= ROWS:  # Click is below the game board
            return False

        if self.selected_piece:
            move = (*self.selected_piece, row, col)
            if move in self.game.get_valid_moves(self.game.current_player):
                self.game.make_move(move)
                self.selected_piece = None
                return True
            else:
                self.selected_piece = None
        elif self.game.board[row][col] == self.game.current_player:
            self.selected_piece = (row, col)
        return False

    def ai_move(self):
        if self.ai_agent == "Random":
            moves = self.game.get_valid_moves(self.game.current_player)
            move = random.choice(moves) if moves else None
        elif self.ai_agent == "Minimax":
            _, move = minimax(self.game, depth=3, alpha=float('-inf'), beta=float('inf'), maximizing_player=True)
        elif self.ai_agent == "MCTS":
            move = mcts(self.game)
        elif self.ai_agent == "Q-Learning":
            move = self.q_agent.get_best_action(self.game)
        
        if move:
            self.game.make_move(move)
        else:
            self.game.current_player = 3 - self.game.current_player

    def run(self):
        clock = pygame.time.Clock()
        font = pygame.font.Font(None, 36)

        # Choose AI agent
        ai_options = ["Random", "Minimax", "MCTS", "Q-Learning"]
        ai_index = 0

        choosing_ai = True
        while choosing_ai:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()
                    sys.exit()
                if event.type == pygame.KEYDOWN:
                    if event.key == pygame.K_RETURN:
                        self.ai_agent = ai_options[ai_index]
                        choosing_ai = False
                    elif event.key == pygame.K_LEFT:
                        ai_index = (ai_index - 1) % len(ai_options)
                    elif event.key == pygame.K_RIGHT:
                        ai_index = (ai_index + 1) % len(ai_options)

            screen.fill(BLACK)
            text = font.render(f"Choose AI: {ai_options[ai_index]}", True, WHITE)
            screen.blit(text, (WIDTH // 2 - text.get_width() // 2, HEIGHT // 2))
            pygame.display.flip()
            clock.tick(30)

        while True:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()
                    sys.exit()
                if event.type == pygame.MOUSEBUTTONDOWN:
                    if self.game.current_player == 1:  # Human player
                        if self.handle_click(event.pos):
                            if not self.game.is_game_over():
                                self.ai_move()

            screen.fill(BLACK)
            self.draw_board()
            self.draw_pieces()
            self.highlight_selected()
            self.highlight_valid_moves()

            if self.game.is_game_over():
                winner = self.game.get_winner()
                if winner == 0:
                    text = font.render("It's a draw!", True, WHITE)
                else:
                    text = font.render(f"Player {winner} wins!", True, WHITE)
                screen.blit(text, (WIDTH // 2 - text.get_width() // 2, HEIGHT - 50))

            pygame.display.flip()
            clock.tick(30)

if __name__ == "__main__":
    gui = GambitGUI()
    gui.run()