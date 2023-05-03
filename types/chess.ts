/**
 * ChessPieceType is a union type representing the six different types
 * of chess pieces: pawn, rook, knight, bishop, queen, and king.
 */
export type ChessPieceType =
  | "pawn"
  | "rook"
  | "knight"
  | "bishop"
  | "queen"
  | "king";

/**
 * The ChessPiece interface represents a single chess piece on the board.
 *
 * @property {ChessPieceType} type - The type of the chess piece (pawn, rook, knight, bishop, queen, or king).
 * @property {'white' | 'black'} color - The color of the chess piece, either 'white' or 'black'.
 * @property {{x: number; y: number}} position - The current position of the chess piece on the board.
 *                 x represents the column (0-7, corresponding to a-h) and y represents the row (0-7).
 */
export interface ChessPiece {
  type: ChessPieceType;
  color: "white" | "black";
  position: {
    x: number; // 0-7 representing the columns a-h
    y: number; // 0-7 representing the rows 1-8
  };
}

/**
 * The ChessBoard type represents an 8x8 chess board with ChessPiece objects
 * at each position. It is a 2D array where each cell contains a ChessPiece
 * or null if the cell is empty.
 *
 * The first dimension represents the columns (indexed 0-7, corresponding to a-h),
 * and the second dimension represents the rows (indexed 0-7, corresponding to 1-8).
 */
export type ChessBoard = (ChessPiece | null)[][];

/**
 * The initialChessBoard const represents the starting position of all chess
 * pieces on an 8x8 chess board before a game takes place. It is a 2D array
 * where each cell contains a ChessPiece or null if the cell is empty.
 *
 * The first dimension represents the columns (indexed 0-7, corresponding to a-h),
 * and the second dimension represents the rows (indexed 0-7, corresponding to 1-8).
 *
 * The initial positions of the pieces are:
 * - White and black pawns are placed on rows 2 and 7, respectively.
 * - Rooks, knights, bishops, queen, and king are placed on rows 1 and 8, with the
 *   white pieces on row 8 and the black pieces on row 1.
 * - The remaining rows (3-6) are empty.
 */
export const initialChessBoard: ChessBoard = [
  [
    { type: "rook", color: "black", position: { x: 0, y: 0 } },
    { type: "knight", color: "black", position: { x: 1, y: 0 } },
    { type: "bishop", color: "black", position: { x: 2, y: 0 } },
    { type: "queen", color: "black", position: { x: 3, y: 0 } },
    { type: "king", color: "black", position: { x: 4, y: 0 } },
    { type: "bishop", color: "black", position: { x: 5, y: 0 } },
    { type: "knight", color: "black", position: { x: 6, y: 0 } },
    { type: "rook", color: "black", position: { x: 7, y: 0 } },
  ],
  Array(8)
    .fill({ type: "pawn", color: "black" })
    .map((pawn, i) => ({ ...pawn, position: { x: i, y: 1 } })),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8)
    .fill({ type: "pawn", color: "white" })
    .map((pawn, i) => ({ ...pawn, position: { x: i, y: 6 } })),
  [
    { type: "rook", color: "white", position: { x: 0, y: 7 } },
    { type: "knight", color: "white", position: { x: 1, y: 7 } },
    { type: "bishop", color: "white", position: { x: 2, y: 7 } },
    { type: "queen", color: "white", position: { x: 3, y: 7 } },
    { type: "king", color: "white", position: { x: 4, y: 7 } },
    { type: "bishop", color: "white", position: { x: 5, y: 7 } },
    { type: "knight", color: "white", position: { x: 6, y: 7 } },
    { type: "rook", color: "white", position: { x: 7, y: 7 } },
  ],
];

/**
 * The ChessGame class represents a chess game and manages its state.
 * It provides methods to interact with the game, such as getting the
 * current board state and moving pieces.
 *
 * @example
 * const game = new ChessGame();
 * const currentBoard = game.getBoard();
 * console.log(currentBoard);
 */
export class ChessGame {
  private board: ChessBoard;

  /**
   * Creates a new ChessGame instance with the initial chess board setup.
   */
  constructor() {
    this.board = JSON.parse(JSON.stringify(initialChessBoard));
  }

  /**
   * Gets the current chess board state.
   *
   * @returns {ChessBoard} The current chess board state.
   */
  getBoard(): ChessBoard {
    return this.board;
  }

  // Additional methods for the game logic can be added here.
}
