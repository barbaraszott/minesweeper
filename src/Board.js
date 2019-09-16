import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import './Game.scss';

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			board          : [],
			isGameFinished : false,
			didUserWin     : false
		};
	}

	createEmptyBoard = () => {
		const { height, width } = this.props;
		const emptyBoard = [];
		for (let x = 0; x < width; x++) {
			emptyBoard.push([]);
			for (let y = 0; y < height; y++) {
				emptyBoard[x][y] = {
					x,
					y,
					hasMine     : false,
					nearbyMines : 0,
					isRevealed  : false,
					isEmpty     : false,
					isFlagged   : false
				};
			}
		}

		return emptyBoard;
	};

	// get random number from 0 to maxNumber (exclusive)
	getRandomNumber = (maxNumber) => Math.floor(Math.random() * maxNumber);

	plantMines = (board) => {
		const { width, height, mines } = this.props;

		let minesPlanted = 0;

		while (minesPlanted < mines) {
			const randomX = this.getRandomNumber(height);
			const randomY = this.getRandomNumber(width);

			if (!board[randomX][randomY].hasMine) {
				board[randomX][randomY].hasMine = true;
				minesPlanted++;
			}
		}
	};

	findNeighbouringCells = (x, y, board) => {
		const neighbours = [];

		// top
		if (x > 0) {
			neighbours.push(board[x - 1][y]);
		}

		// bottom
		if (x < this.props.height - 1) {
			neighbours.push(board[x + 1][y]);
		}

		// left
		if (y > 0) {
			neighbours.push(board[x][y - 1]);
		}

		// right
		if (y < this.props.width - 1) {
			neighbours.push(board[x][y + 1]);
		}

		// top-left
		if (x > 0 && y > 0) {
			neighbours.push(board[x - 1][y - 1]);
		}

		// top-right
		if (x > 0 && y < this.props.width - 1) {
			neighbours.push(board[x - 1][y + 1]);
		}

		// bottom-right
		if (x < this.props.height - 1 && y < this.props.width - 1) {
			neighbours.push(board[x + 1][y + 1]);
		}

		// bottom-left
		if (x < this.props.height - 1 && y > 0) {
			neighbours.push(board[x + 1][y - 1]);
		}

		return neighbours;
	};

	countNearbyMines = (board) => {
		const { width, height } = this.props;

		for (let i = 0; i < height; i++) {
			for (let j = 0; j < width; j++) {
				const cell = board[i][j];
				if (!cell.hasMine) {
					let nearbyMines = 0;
					const neighbourhood = this.findNeighbouringCells(cell.x, cell.y, board);

					neighbourhood.forEach((cell) => {
						if (cell.hasMine) nearbyMines++;
					});

					if (nearbyMines === 0) {
						cell.isEmpty = true;
					}

					cell.nearbyMines = nearbyMines;
				}
			}
		}
	};

	componentDidMount = () => {
		const board = this.createEmptyBoard();

		this.plantMines(board);
		this.countNearbyMines(board);

		this.setState({
			board
		});
	};

	revealBoard = () => {
		const board = [
			...this.state.board
		].map((row) => row.map((cell) => (cell.isRevealed = true)));

		this.setState({
			board
		});
	};

	getHidden = (board) => {
		let hidden = 0;

		board.forEach((row) => {
			hidden += row.filter((cell) => cell.isRevealed === false).length;
		});

		return hidden;
	};

	revealEmpty = (x, y, board) => {
		const area = this.findNeighbouringCells(x, y, board);

		area.forEach((cell) => {
			if (!cell.isFlagged && !cell.isRevealed && (cell.isEmpty || !cell.hasMine)) {
				board[cell.x][cell.y].isRevealed = true;
				if (cell.isEmpty) {
					this.revealEmpty(cell.x, cell.y, board);
				}
			}
		});
	};

	handleClick = (x, y) => {
		const board = [
			...this.state.board
		];
		const cell = board[x][y];
		console.log(cell);

		// If cell is already revealed or flagged by user - do nothing
		if (cell.isRevealed || cell.isFlagged) return;

		// If user clicked a cell with mine - game over
		if (cell.hasMine) {
			this.setState({
				isGameFinished : true
			});
			console.log('game over :(');
			this.revealBoard();
		}

		board[x][y].isRevealed = true;

		if (cell.isEmpty) {
			this.revealEmpty(x, y, board);
		}

		if (this.getHidden(board) === this.props.mines) {
			this.setState({
				isGameFinished : true,
				didUserWin     : true
			});
			console.log('You won! :)');
			this.revealBoard();
		}

		this.setState({
			board
		});
	};

	render() {
		const board = this.state.board;

		return (
			<div className="board">
				{board.map((row, rowIndex) => (
					<div className="board-row" key={rowIndex}>
						{row.map((cell) => (
							<Cell onClick={() => this.handleClick(cell.x, cell.y)} data={cell} key={cell.x * row.length + cell.y} />
						))}
					</div>
				))}
			</div>
		);
	}
}

Board.propTypes = {
	width  : PropTypes.number,
	height : PropTypes.number,
	mines  : PropTypes.number
};

export default Board;
