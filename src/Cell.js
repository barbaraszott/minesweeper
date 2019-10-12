import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Cell.scss';

class Cell extends PureComponent {
	createClassNames = () => {
		const { hasMine, nearbyMines, isRevealed, isEmpty, isFlagged } = this.props;

		if (isFlagged) {
			return 'cell_flagged';
		}

		if (isRevealed) {
			if (isEmpty) {
				return 'cell_empty';
			} else if (hasMine) {
				return 'cell_mine';
			} else {
				switch (nearbyMines) {
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
		const { x, y, nearbyMines, isRevealed } = this.props;

		const classNames = this.createClassNames();

		return (
			<div className={classNames} onClick={() => this.props.onClick(x, y)}>
				{isRevealed && nearbyMines ? nearbyMines : null}
			</div>
		);
	}
}

Cell.propTypes = {
	onClick        : PropTypes.func,
	isGameFinished : PropTypes.bool,
	x              : PropTypes.number,
	y              : PropTypes.number,
	hasMine        : PropTypes.bool,
	nearbyMines    : PropTypes.number,
	isRevealed     : PropTypes.bool,
	isEmpty        : PropTypes.bool,
	isFlagged      : PropTypes.bool
};

export default Cell;
