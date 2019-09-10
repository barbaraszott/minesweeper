import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Board extends Component {
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
