import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Reset.scss';

class Reset extends Component {
	render() {
		const didUserWin = this.props.didUserWin;
		return (
			<div className={`reset ${didUserWin ? 'reset_win' : 'reset_loose'}`} onClick={this.props.onClick}>
				Play again
			</div>
		);
	}
}

Reset.propTypes = {
	didUserWin : PropTypes.bool,
	onClick    : PropTypes.func
};

export default Reset;
