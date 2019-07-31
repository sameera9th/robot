import React from 'react';
import './App.css';
import Square from './square';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      rows: [0, 1, 2, 3, 4],
      columns: [0, 1, 2, 3, 4]
    }
  }

  changeRobot = (rowCount, columnCount) => {
    try {
      let delay = (rowCount + columnCount) - (this.state.x + this.state.y);
      setTimeout(() => {
        this.setState({ x: rowCount, y: columnCount });
      }, Math.abs(delay) * 100);
    } catch (ex) {
      console.log(ex);
      throw ex;
    }
  }

  navigator = (direction) => {
    try {
      let { x, y } = this.state;
      if (direction === 1 && y > 0) { //left
        this.setState({ y: --y });
      }

      if (direction === 2 && x > 0) { //top
        this.setState({ x: --x });
      }

      if (direction === 3 && y < 4) { //right
        this.setState({ y: ++y });
      }

      if (direction === 4 && x < 4) { //down
        this.setState({ x: ++x });
      }
    } catch (ex) {
      console.log(ex);
      throw ex;
    }
  }

  render() {

    let { x, y, rows, columns } = this.state;

    let squares = rows.map((row) => {
      return columns.map((column) => {
        return (
          <Square
            key={row + '' + column}
            x={x}
            y={y}
            rowCount={row}
            columnCount={column}
            changeRobot={this.changeRobot}
          />
        )
      })
    });

    return (
      <div className="grid">
        {squares}
        <Navigation onClick={this.navigator.bind(this)} />
      </div>
    );
  }
}

function Navigation({ onClick }) {

  return (
    <div className="projectNavigation">
      <button id="b1" onClick={onClick.bind(this, 2)}><i className="up"></i></button>
      <button id="b2" onClick={onClick.bind(this, 3)}><i className="right"></i></button>
      <button id="b3" onClick={onClick.bind(this, 4)}><i className="down"></i></button>
      <button id="b4" onClick={onClick.bind(this, 1)}><i className="left"></i></button>
    </div>
  )
}

export default App;


