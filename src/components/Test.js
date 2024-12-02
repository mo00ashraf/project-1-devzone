import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>count: {count}</h1>
        <button className="btn btn-info p-2 m-2" onClick={this.increment}>
          increment
        </button>
        <button className="btn btn-danger p-2 m-2" onClick={this.decrement}>
          decrement
        </button>

        <div>
          <h1>
            my name is{" "}
            <span
              style={{
                color: count > 10 ? "yellow" : count > 5 ? "red" : "green",
              }}
            >
              mohamed ashraf
            </span>
          </h1>
          <h1>
            my age is{" "}
            <span style={{ color: count > 8 ? "blue" : "black" }}>22</span> yrs
          </h1>
          <h1>
            i ve been in egypt sicne{" "}
            <span
              style={{
                color: count > 5 ? "blue" : count > 10 ? "yellow" : " ",
              }}
            >
              2015
            </span>
          </h1>
        </div>
      </div>
    );
  }
}

export default Test;
