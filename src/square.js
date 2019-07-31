import React from 'react';
import PropTypes from 'prop-types';

export default class Square extends React.Component {

    render() {
        let {
            x,
            y,
            rowCount,
            columnCount,
            changeRobot
        } = this.props;
        return (
            <span onClick={changeRobot.bind(this, rowCount, columnCount)}>
                {x === rowCount && y === columnCount && <img alt="robo" className="robo" src="https://img.icons8.com/color/48/000000/mr.-hustler-robot.png" />}
            </span>
        );
    }

}

Square.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    rowCount: PropTypes.number.isRequired,
    columnCount: PropTypes.number.isRequired,
    changeRobot: PropTypes.func.isRequired
}

Square.defaultProps = {
    x: 0,
    y: 0
}