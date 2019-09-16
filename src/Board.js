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
		const updatedBoard = [
			...board
		];

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

		return updatedBoard;
	};

	componentDidMount = () => {
		const emptyBoard = this.createEmptyBoard();
		const boardWithMines = this.plantMines(emptyBoard);
		const fullBoard = this.countNearbyMines(boardWithMines);

		this.setState({
			board : fullBoard
		});
	};

	handleClick = (x, y) => {
		console.log(x, y);
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
