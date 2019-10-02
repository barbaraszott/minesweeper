import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Game.scss';

class Cell extends Component {
	getValue = () => {
		const cell = this.props.data;

		if (!cell.isRevealed) return cell.isFlagged ? 'F' : null;

		if (cell.hasMine) return 'B';

		if (cell.nearbyMines === 0) return null;

		return cell.nearbyMines;
	};

	createClassNames = (cell, isGameFinished) => {
		if (isGameFinished) {
			cell.isFlagged = false;
			cell.isRevealed = true;
		}

		if (cell.isFlagged) {
			return 'cell_flagged';
		}

		if (cell.isRevealed) {
			if (cell.isEmpty) {
				return 'cell_empty';
			} else if (cell.hasMine) {
				return 'cell_mine';
			} else {
				switch (cell.nearbyMines) {
					case 1:
						return 'cell_1-nearby';
					case 2:
						return 'cell_2-nearby';
					case 3:
						return 'cell_3-nearby';
					default:
						return 'cell_many-nearby';
				}
			}
		}

		return 'cell';
	};

	render() {
		const cell = this.props.data;
		const classNames = this.createClassNames(cell, this.props.isGameFinished);

		return (
			<div className={classNames} onClick={this.props.onClick}>
				{this.getValue()}
			</div>
		);
	}
}

Cell.propTypes = {
	onClick        : PropTypes.func,
	data           : PropTypes.object,
	isGameFinished : PropTypes.bool
};

export default Cell;
