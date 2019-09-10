import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

class Board extends Component {
	createEmptyBoard = (height, width) => {
		const emptyBoard = [];
		for (let x = 0; x < width; x++) {
			emptyBoard.push([]);
			for (let y = 0; y < height; y++) {
				emptyBoard[x][y] = {
					x,
					y,
					isMine     : false,
					neighbour  : 0,
					isRevealed : false,
					isEmpty    : false,
					isFlagged  : false
				};
			}
		}

		return emptyBoard;
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
