import React, { useState, useEffect } from 'react';

const PIECES = {
  PAWN: { 
    symbol: '♟', 
    color: 'bg-blue-400', 
    textColor: 'text-blue-800',
    moves: [[0, -1]], 
    maxDistance: 1 
  },
  ROOK: { 
    symbol: '♜', 
    color: 'bg-red-400',
    textColor: 'text-red-800',
    moves: [[0, 1], [0, -1], [1, 0], [-1, 0]], 
    maxDistance: 5
  },
  BISHOP: { 
    symbol: '♝', 
    color: 'bg-green-400',
    textColor: 'text-green-800',
    moves: [[1, 1], [1, -1], [-1, 1], [-1, -1]], 
    maxDistance: 5
  },
  QUEEN: { 
    symbol: '♛', 
    color: 'bg-purple-400',
    textColor: 'text-purple-800',
    moves: [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]], 
    maxDistance: 5
  },
  KNIGHT: { 
    symbol: '♞', 
    color: 'bg-yellow-400',
    textColor: 'text-yellow-800',
    moves: [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]], 
    maxDistance: 1
  },
  KING: { 
    symbol: '♚', 
    color: 'bg-orange-400',
    textColor: 'text-orange-800',
    moves: [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]], 
    maxDistance: 1 
  }
};

const BOARD_SIZE = 6;
const MATCH_SIZE = 3;
const ANIMATION_DURATION = 300;
const FALL_DELAY = 30;

const ChessMatch3 = () => {
  const [board, setBoard] = useState([]);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [validMoves, setValidMoves] = useState([]);
  const [animatingPieces, setAnimatingPieces] = useState(new Map());
  const [swappingPieces, setSwappingPieces] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    initializeBoard();
  }, []);

  const initializeBoard = () => {
    const newBoard = Array(BOARD_SIZE).fill(0).map(() => 
      Array(BOARD_SIZE).fill(0).map(() => {
        const pieceTypes = Object.keys(PIECES);
        return pieceTypes[Math.floor(Math.random() * pieceTypes.length)];
      })
    );
    setBoard(newBoard);
  };

  const getValidMoves = (row, col, piece) => {
    const moves = new Set();
    const pieceData = PIECES[piece];
    
    pieceData.moves.forEach(([dx, dy]) => {
      for (let dist = 1; dist <= pieceData.maxDistance; dist++) {
        const newRow = row + dy * dist;
        const newCol = col + dx * dist;
        
        if (newRow >= 0 && newRow < BOARD_SIZE && 
            newCol >= 0 && newCol < BOARD_SIZE) {
          moves.add(`${newRow}-${newCol}`);
        } else {
          break;
        }
      }
    });
    
    return Array.from(moves).map(pos => {
      const [r, c] = pos.split('-').map(Number);
      return [r, c];
    });
  };

  const checkMatches = () => {
    const matches = new Set();
    
    // Check horizontal matches
    for (let i = 0; i < BOARD_SIZE; i++) {
      for (let j = 0; j <= BOARD_SIZE - MATCH_SIZE; j++) {
        const piece = board[i][j];
        let matchLength = 1;
        let currentMatch = [`${i}-${j}`];
        
        for (let k = 1; k < BOARD_SIZE - j; k++) {
          if (board[i][j + k] === piece) {
            matchLength++;
            currentMatch.push(`${i}-${j + k}`);
          } else {
            break;
          }
        }
        
        if (matchLength >= MATCH_SIZE) {
          currentMatch.forEach(pos => matches.add(pos));
        }
      }
    }
    
    // Check vertical matches
    for (let j = 0; j < BOARD_SIZE; j++) {
      for (let i = 0; i <= BOARD_SIZE - MATCH_SIZE; i++) {
        const piece = board[i][j];
        let matchLength = 1;
        let currentMatch = [`${i}-${j}`];
        
        for (let k = 1; k < BOARD_SIZE - i; k++) {
          if (board[i + k][j] === piece) {
            matchLength++;
            currentMatch.push(`${i + k}-${j}`);
          } else {
            break;
          }
        }
        
        if (matchLength >= MATCH_SIZE) {
          currentMatch.forEach(pos => matches.add(pos));
        }
      }
    }
    
    return Array.from(matches).map(pos => pos.split('-').map(Number));
  };

  const animateMatch = async (matches, newBoard) => {
    setIsAnimating(true);
    const animations = new Map();

    // Mark matching pieces for removal
    matches.forEach(([r, c]) => {
      animations.set(`${r}-${c}`, { type: 'match', delay: 0 });
    });
    setAnimatingPieces(animations);

    await new Promise(resolve => setTimeout(resolve, ANIMATION_DURATION));

    // Calculate falls
    const columns = new Map();
    matches.forEach(([r, c]) => {
      if (!columns.has(c)) columns.set(c, []);
      columns.get(c).push(r);
    });

    const updatedBoard = [...newBoard];
    const newAnimations = new Map();

    columns.forEach((rows, col) => {
      rows.sort((a, b) => a - b);
      let emptySpaces = 0;
      
      // Move pieces down
      for (let row = BOARD_SIZE - 1; row >= 0; row--) {
        if (rows.includes(row)) {
          emptySpaces++;
        } else if (emptySpaces > 0) {
          updatedBoard[row + emptySpaces][col] = updatedBoard[row][col];
          newAnimations.set(`${row}-${col}`, {
            type: 'fall',
            distance: emptySpaces,
            delay: (BOARD_SIZE - row) * FALL_DELAY
          });
        }
      }

      // Fill empty spaces at top
      for (let i = 0; i < emptySpaces; i++) {
        const pieceTypes = Object.keys(PIECES);
        const newPiece = pieceTypes[Math.floor(Math.random() * pieceTypes.length)];
        updatedBoard[i][col] = newPiece;
        newAnimations.set(`${i}-${col}`, {
          type: 'new',
          delay: i * FALL_DELAY
        });
      }
    });

    setAnimatingPieces(newAnimations);
    await new Promise(resolve => setTimeout(resolve, ANIMATION_DURATION + BOARD_SIZE * FALL_DELAY));
    
    setBoard(updatedBoard);
    setAnimatingPieces(new Map());
    setIsAnimating(false);
    
    // Check for any new matches
    const newMatches = checkMatches();
    if (newMatches.length > 0) {
      setScore(score + newMatches.length * 10);
      await animateMatch(newMatches, updatedBoard);
    }
  };

  const handleCellClick = async (row, col) => {
    if (isAnimating) return;

    if (!selected) {
      setSelected([row, col]);
      setValidMoves(getValidMoves(row, col, board[row][col]));
    } else {
      const [selectedRow, selectedCol] = selected;
      const isValidMove = validMoves.some(([r, c]) => r === row && c === col);

      if (isValidMove) {
        setIsAnimating(true);
        setSwappingPieces({ from: [selectedRow, selectedCol], to: [row, col] });

        await new Promise(resolve => setTimeout(resolve, ANIMATION_DURATION));

        const newBoard = [...board];
        const temp = newBoard[row][col];
        newBoard[row][col] = newBoard[selectedRow][selectedCol];
        newBoard[selectedRow][selectedCol] = temp;

        const matches = checkMatches();
        if (matches.length > 0) {
          setScore(score + matches.length * 10);
          await animateMatch(matches, newBoard);
        } else {
          // Revert the swap if no matches
          const revertBoard = [...newBoard];
          const temp = revertBoard[row][col];
          revertBoard[row][col] = revertBoard[selectedRow][selectedCol];
          revertBoard[selectedRow][selectedCol] = temp;
          setBoard(revertBoard);
          setIsAnimating(false);
        }
      }
      
      setSelected(null);
      setValidMoves([]);
      setSwappingPieces(null);
    }
  };

  const getPieceStyle = (rowIndex, colIndex) => {
    const key = `${rowIndex}-${colIndex}`;
    const animating = animatingPieces.get(key);

    if (swappingPieces) {
      const { from, to } = swappingPieces;
      if (rowIndex === from[0] && colIndex === from[1]) {
        const dx = to[1] - from[1];
        const dy = to[0] - from[0];
        return {
          transform: `translate(${dx * 100}%, ${dy * 100}%)`,
          transition: `transform ${ANIMATION_DURATION}ms cubic-bezier(0.25, 0.1, 0.25, 1)`
        };
      }
      if (rowIndex === to[0] && colIndex === to[1]) {
        const dx = from[1] - to[1];
        const dy = from[0] - to[0];
        return {
          transform: `translate(${dx * 100}%, ${dy * 100}%)`,
          transition: `transform ${ANIMATION_DURATION}ms cubic-bezier(0.25, 0.1, 0.25, 1)`
        };
      }
    }

    if (animating) {
      if (animating.type === 'match') {
        return {
          transform: 'scale(0.8)',
          opacity: 0,
          transition: `all ${ANIMATION_DURATION}ms cubic-bezier(0.25, 0.1, 0.25, 1)`
        };
      }
      if (animating.type === 'fall') {
        return {
          transform: `translateY(${animating.distance * 100}%)`,
          transition: `transform ${ANIMATION_DURATION}ms cubic-bezier(0.25, 0.1, 0.25, 1) ${animating.delay}ms`
        };
      }
      if (animating.type === 'new') {
        return {
          transform: 'translateY(-100%)',
          transition: `transform ${ANIMATION_DURATION}ms cubic-bezier(0.25, 0.1, 0.25, 1) ${animating.delay}ms`
        };
      }
    }

    return {
      transform: 'none',
      opacity: 1,
      transition: `all ${ANIMATION_DURATION}ms cubic-bezier(0.25, 0.1, 0.25, 1)`
    };
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-2xl font-bold">Score: {score}</div>
      <div className="grid grid-cols-6 gap-1 p-4 bg-gray-200 rounded-lg shadow-lg">
        {board.map((row, rowIndex) => (
          row.map((piece, colIndex) => {
            const isSelected = selected && selected[0] === rowIndex && selected[1] === colIndex;
            const isValidMove = validMoves.some(([r, c]) => r === rowIndex && c === colIndex);
            
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`w-12 h-12 flex items-center justify-center cursor-pointer rounded-lg relative
                  ${isSelected ? 'ring-2 ring-blue-500' : ''}
                  ${isValidMove ? 'ring-2 ring-green-500' : ''}`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                <div 
                  style={getPieceStyle(rowIndex, colIndex)}
                  className={`w-11 h-11 rounded-lg flex items-center justify-center shadow-md
                    ${PIECES[piece].color} ${PIECES[piece].textColor}
                    transform transition-transform will-change-transform`}
                >
                  <span className="text-xl font-bold select-none">
                    {PIECES[piece].symbol}
                  </span>
                </div>
              </div>
            );
          })
        ))}
      </div>
    </div>
  );
};

export default ChessMatch3;