import React, { Component } from "react";

export class Temperature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: "celsius",
      num1: 0,
      result: 0,
    };
  }

  num1Change = (e) => {
    this.setState({
      num1: e.target.value,
    });
  };

  codeChange = (e) => {
    this.setState({
      code: e.target.value,
    });
  };

  selectAndButton = () => {
    return (
      <div>
        <select value={this.state.code} onChange={this.codeChange}>
          <option value="celsius">Celsius to Fahrenheit</option>
          <option value="fahrenheit">Fahrenheit to Celsius</option>
        </select>
        <input
          type="number"
          value={this.state.num1}
          onChange={this.num1Change}
        />
        <button onClick={this.result}>Update</button>
      </div>
    );
  };

  celsius = () => {
    return (
      <div>
        <div>{this.state.result} Fahrenheit</div>
        {this.selectAndButton()}
      </div>
    );
  };

  result = () => {
    if (this.state.code == "celsius") {
      this.setState({
        result: (parseInt(this.state.num1) * (9 / 5) + 32).toFixed(2),
      });
    } else {
      this.setState({
        result: ((parseInt(this.state.num1) - 32) * (5 / 9)).toFixed(2),
      });
    }
  };

  fahrenheit = () => {
    return (
      <div>
        <div>{this.state.result} Celsius</div>
        {this.selectAndButton()}
      </div>
    );
  };

  render() {
    if (this.state.code == "celsius") {
      return this.celsius();
    } else if (this.state.code == "fahrenheit") {
      return this.fahrenheit();
    }
  }
}

export default Temperature;
