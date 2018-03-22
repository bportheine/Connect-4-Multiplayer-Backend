import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { Board, Symbol, Row } from './entities';

@ValidatorConstraint()
export class IsBoard implements ValidatorConstraintInterface {

  validate(board: Board) {
    const symbols = [ 'x', 'o', null ]
    return board.length === 7 &&
      board.every(row =>
        row.length === 7 &&
        row.every(symbol => symbols.includes(symbol))
      )
  }
}

export const isValidTransition = (playerSymbol: Symbol, from: Board, to: Board) => {
  const changes = from
    .map(
      (row, rowIndex) => row.map((symbol, columnIndex) => ({
        from: symbol,
        to: to[rowIndex][columnIndex]
      }))
    )
    .reduce((a,b) => a.concat(b))
    .filter(change => change.from !== change.to)

  return changes.length === 1 &&
    changes[0].to === playerSymbol &&
    changes[0].from === null
}

export const calculateWinnerHorizontal = (board: Board): Symbol | null =>
  board
    .filter(row => row[0] && row.join().includes('x,x,x,x') || row.join().includes('o,o,o,o'))
    .map(row => row[0])[0] || null

export const calculateWinnerVertical = (board: Board): Symbol | null =>
  {var name=board[0].map((col, i) => board.map(row => row[i]))
    .filter(row => row[0] && true|| row.join().includes('x,x,x,x') || row.join().includes('o,o,o,o'))
  return name.map(row => row[3])[0] || null}

export const finished = (board: Board): boolean =>
  board
    .reduce((a,b) => a.concat(b) as Row)
    .filter(symbol => symbol === null)
    .length === 0
