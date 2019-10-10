import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FlagCounter.scss';

class FlagCounter extends Component {
	render() {
		const flagsLeft = this.props.flagsLeft;

		return (
			<div className="flag-counter">
				<span>{flagsLeft}</span>
			</div>
		);
	}
}

FlagCounter.propTypes = {
	flagsLeft : PropTypes.number
};

export default FlagCounter;
