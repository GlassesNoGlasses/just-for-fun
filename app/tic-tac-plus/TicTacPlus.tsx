'use client'

import { useState } from "react"
import { TicTacPlusProps } from "./TicTacPlusProps";

export const TicTac = ({

}: TicTacPlusProps) => {

  const [size, setSize] = useState<number>(3);
  const [turn, setTurn] = useState<number>(1);
  const [board, setBoard] = useState<number[][]>(
    [[0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]);

  const checkWinner = (): number => {
    let row_seq: number = 0;
    let column_seq: number = 0;
    let left_diag_seq: number = 0;
    let right_diag_seq: number = 0;
    let winner: number = 0;

    for (let i = 1; i < size; i++) {
      // check columns
      if (board[0][i] === board[0][i-1] && !board[0][i]) {
        column_seq++;
      } else {
        column_seq = 0;
      }

      // check rows
      if (board[i][0] === board[i-1][0] && !board[i][0]) {
        row_seq++;
      } else {
        row_seq = 0;
      }

      // check left diagonal
      if (board[i][i] === board[i-1][i-1] && !board[i][i]) {
        left_diag_seq++;
      } else {
        left_diag_seq = 0;
      }

      // check right diagonal
      if (board[i][size-i] === board[i-1][size-i-1] && !board[i][size-i]) {
        right_diag_seq++;
      } else {
        right_diag_seq = 0;
      }

      // check winners for each sequence
      if (row_seq === size) {
        winner = board[i][0];
      } else if (column_seq === size) {
        winner = board[0][i];
      } else if (left_diag_seq === size) {
        winner = board[i][i];
      } else if (right_diag_seq === size) {
        winner = board[i][size-i];
      }
    }
    
    return winner;
  }

  const handleClick = (row: number, col: number) => {
    const newBoard = board;
    newBoard[row][col] = 1;
    setBoard(newBoard);
  }

  return (
    <div className="flex h-full w-full">
        {board.map((row, rowIndex) => {
          return (
            <div className="flex flex-row">
              {row.map((cell, colIndex) => {
                return (
                  <button className="h-16 w-16 border-2 border-black" onClick={() => handleClick(rowIndex, colIndex)}>
                    {cell}
                  </button>
                )
              })}
            </div>
          )
        })}
    </div>
  )
}


