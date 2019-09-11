import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Game.scss';

class Cell extends Component {
	getValue = () => {
		const cell = this.props.data;

		if (cell.hasMine) return 'B';

		if (cell.nearbyMines === 0) return null;

		return cell.nearbyMines;
	};

	render() {
		return (
			<div className="cell" onClick={this.props.onClick}>
				{this.getValue()}
			</div>
		);
	}
}

Cell.propTypes = {};

export default Cell;
