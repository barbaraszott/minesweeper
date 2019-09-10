import React, { Component } from 'react';
import './Game.scss';

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
		return (
			<div className="game">
				<h1>Hi!</h1>
			</div>
		);
	}
}

export default Game;
