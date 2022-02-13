import React, { Component } from "react";
import Todocard from "./todocard";
import "../styles/cards.css";

class Cards extends Component {
  state = {
    value: [],
    text: "",
    ipnutText: "",
  };
  getLocalItems = () => {
    let lst = localStorage.getItem("lists");
    if (lst) {
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [];
    }
  };
  onChangeText = (e) => {
    this.setState({ text: e.target.value });
    console.log(this.state.value);
  };
  handleSubmit = () => {
    //this.state.value.setState({value:this.getLocalItems()})
    //for local storage we use this function to return array from stored json
    if (this.state.text.length !== 0) {
      const value = [...this.getLocalItems(), this.state.text];
      localStorage.setItem("lists", JSON.stringify(value));
      this.setState({ value });
      this.setState({ text: "" });
    } else {
      {
        alert("Enter Something!!!");
      }
    }
  };

  resetStuff = () => {
    const value = [];
    localStorage.setItem("lists", JSON.stringify(value));
    this.setState({ value });
  };
  totalSum = () => {
    let sum = 0;

    for (let i = 0; i < this.getLocalItems().length; i++) {
      //sum += this.state.value[i];
      //this gives 10 + 2 = 102

      //but use parseInt to make sure its adding numbers not concatinating strings
      sum += parseInt(this.state.value[i]);
    }
    return sum;
  };

  render() {
    return (
      <React.Fragment>
        {/* <h3>sum is {this.totalSum()}</h3> */}
        <h2>Number of items: {this.getLocalItems().length}</h2>
        <div className="">
          <input
            type={"text"}
            value={this.state.text}
            onChange={this.onChangeText}
            className="inputField"
            placeholder="Enter your thoughts"
          />
        </div>
        {/* <input type={'text'} value = {this.state.inputText} onChange = {(e)=>this.setState({text:e.target.value})}/> */}
        <button
          onClick={this.handleSubmit}
          className="ButtonClick"
          type="submit"
        >
          hello
        </button>
        <div>
          <button
            onClick={this.resetStuff}
            type="reset"
            className="resetButton"
          >
            Reset
          </button>
        </div>

        {this.getLocalItems().map((v) => (
          <Todocard value={v} />
        ))}
      </React.Fragment>
    );
  }
}

export default Cards;
