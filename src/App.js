import React, { Component } from "react";
import * as S from "./Style/AppStyle";

export default class Contador extends Component {
  state = {
    number: 0
  };

  add = () => {
    if (this.state.number < 10) {
      this.setState({
        number: this.state.number + 1
      });
    }
  };

  remove = () => {
    if (this.state.number < 10) {
      this.setState({
        number: this.state.number - 1
      });
    }
  };

  render() {
    return (
      <S.Div>
        <S.GlobalStyle />
        <S.Counter>{this.state.number}</S.Counter>
        <button
          onClick={() => {
            this.add();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.remove();
          }}
        >
          -
        </button>
        <div></div>
      </S.Div>
    );
  }
}
