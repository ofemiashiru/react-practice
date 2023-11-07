import React from "react";

export default class StatefulClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      color: "red",
    };
  }

  setCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  takeAway = () => {
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  };

  toggleColor = () => {
    this.setState((prevState) => {
      return { color: prevState.color === "red" ? "blue" : "red" };
    });
  };

  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>Click {this.state.count} times</h2>
        <button onClick={this.setCount}>Add 1</button>
        <button onClick={this.takeAway}>Subtract 1</button>
        <h2 style={{ color: this.state.color }}>
          Toggle Color: {this.state.color}
        </h2>
        <button onClick={this.toggleColor}>Toggle Color</button>
      </div>
    );
  }
}
