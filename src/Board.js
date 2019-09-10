import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

class Board extends Component {
	createEmptyBoard = () => {
		const { height, width } = this.props;
		const emptyBoard = [];
		for (let x = 0; x < width; x++) {
			emptyBoard.push([]);
			for (let y = 0; y < height; y++) {
				emptyBoard[x][y] = {
					x,
					y,
					hasMine    : false,
					neighbour  : 0,
					isRevealed : false,
					isEmpty    : false,
					isFlagged  : false
				};
			}
		}

		return emptyBoard;
	};

	// get random number from 0 to maxNumber (exclusive)
	getRandomNumber = (maxNumber) => Math.floor(Math.random() * maxNumber);

	plantMines = () => {
		const { width, height, mines } = this.props;
		const boardWithMines = this.createEmptyBoard();

		let minesPlanted = 0;

		while (minesPlanted < mines) {
			const randomX = this.getRandomNumber(width);
			const randomY = this.getRandomNumber(height);

			if (!boardWithMines[randomX][randomY].hasMine) {
				boardWithMines[randomX][randomY].hasMine = true;
				minesPlanted++;
			}
		}

		return boardWithMines;
	};

	render() {
		return (
			<div>
				<h1>Board</h1>
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
