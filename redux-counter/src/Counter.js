import React from 'react';
import { connect } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends React.Component {

  state = { count: 0 }

  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' })
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' })
  }

  reset = () => {
    this.props.dispatch({ type: 'RESET'})
  }
  render() {
    return (
      <div >
        <h2>Counter</h2>
        <div style={{background:"aqua", padding: "10px", margin: "auto", width: "100%"}} className=" d-inline-flex justify-content-center">
          <span style={{border:"solid white 1px", color:"white"}}className='px-2 me-3'>{this.props.count}</span>
          <button className="me-3" onClick={this.decrement}>-</button>
          <button className="me-3" onClick={this.increment}>+</button>
          <button onClick={this.reset}>reset</button>
        </div>
      </div>
    )
  }
}

// Add the mapStateToProps function:
function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);