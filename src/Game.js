import React, { Component } from 'react';
import './Game.scss';
import Board from './Board';

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height : 10,
			width  : 10,
			mines  : 10
		};
	}

	render() {
		const { height, width, mines } = this.state;
		return (
			<div className="game">
				<Board height={height} width={width} mines={mines} />
			</div>
		);
	}
}

export default Game;
