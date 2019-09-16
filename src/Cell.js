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

	render() {
		const cell = this.props.data;
		return (
			<div className="cell" onClick={this.props.onClick} style={cell.isRevealed ? { backgroundColor: 'red' } : {}}>
				{this.getValue()}
			</div>
		);
	}
}

Cell.propTypes = {};

export default Cell;
