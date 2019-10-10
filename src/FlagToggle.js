import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FlagToggle.scss';

class FlagToggle extends Component {
	render() {
		return (
			<div className={'flag-toggle-container'} onClick={this.props.onClick}>
				<div className={`flag-toggle ${this.props.isOn ? 'isOn' : ''}`} />
			</div>
		);
	}
}

FlagToggle.propTypes = {
	onClick : PropTypes.func
};

export default FlagToggle;
