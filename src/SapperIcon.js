import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SapperIcon.scss';

class SapperIcon extends Component {
	render() {
		const { isGameFinished, didUserWin } = this.props;

		const appearance = {
			face  : 'sapper-face',
			eyes  : 'sapper-eyes',
			mouth : 'sapper-mouth'
		};

		if (isGameFinished) {
			const modifier = didUserWin ? '_win' : '_loose';

			for (let feature in appearance) {
				appearance[feature] += modifier;
			}
		}

		const { face, eyes, mouth } = appearance;

		return (
			<div className={face}>
				<div className={eyes} />
				<div className={mouth} />
			</div>
		);
	}
}

SapperIcon.propTypes = {
	isGameFinished : PropTypes.bool,
	didUserWin     : PropTypes.bool
};

export default SapperIcon;
