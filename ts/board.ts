import { COLS, ROWS } from './constants';

export class Board {
    grid: number[][] = [];
    
    reset() {
        this.grid = this.generateEmptyBoard();
    }

    generateEmptyBoard = () => Array.from(
        { length: ROWS }, () => Array(COLS).fill(0)
    )
}

