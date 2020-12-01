import { COLS, BLOCK_SIZE, ROWS} from './constants';
import { Board } from './board';

const canvas = <HTMLCanvasElement> document.getElementById('board');
const ctx = canvas.getContext('2d');

// Calculate size of canvas from constants.
ctx!.canvas.width = COLS * BLOCK_SIZE;
ctx!.canvas.height = ROWS * BLOCK_SIZE;

// Scale blocks
ctx!.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board()

const newGame = () => {
  board.reset();
  console.table(board.grid);
}

const newGameButton = <HTMLButtonElement> document.getElementById('new-game');
newGameButton.onclick = newGame;