import React from "react";

class Counter extends React.Component {
  state = {count: 0}
  plus = () => {
    this.setState((prevState) =>
        ({count: prevState.count + 1}))
  }
  minus = () => {
    this.setState((prevState) => 
      ({count : prevState.count - 1}))
  }
  render() {
    return <div>
      <h1>H}ello Class Counter</h1>
      <p>current count: {this.state.count}</p>
      <button onClick={this.plus}>plus</button>
      <button onClick={this.minus}>minus</button>
      </div>
  }
}

export default Counter;