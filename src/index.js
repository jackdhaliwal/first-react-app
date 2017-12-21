import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  /*adding constructor for state, so current value of square will be stored in state, and we can change when square is clicked*/ 
  constructor(props) {
    super(props); //must call super() because constructor of a subclass
    this.state= {
      value: null,
    };
  }
  /*making square component interactive. when you click square, you get alert. (using arrow notation)*/ 
  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'X'})}>  
        {this.state.value}      
      </button>
    ); 
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;    //passing data through props.. (populating squares with values)
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
