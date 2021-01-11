import React, { Component } from "react";
import Lottie from "../Lottie";
import smile from "../../assets/smile";

export default class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = { isHover: null, reverse: false, playFromCurrent: true };
  }

  onMouseEnter = () => {
    this.setState(
      (state, props) => ({ isHover: true, playFromCurrent: true }),
      () => {
        this.setState((state, props) => ({ playFromCurrent: false }));
      }
    );
  };
  onMouseLeave = () => {
    this.setState(
      (state, props) => ({ isHover: false, playFromCurrent: true }),
      () => {
        this.setState((state, props) => ({ playFromCurrent: false }));
      }
    );
  };
  onClick = () => {
    this.setState(
      (state, props) => ({ reverse: true, playFromCurrent: false }),
      () =>
        setTimeout(
          function () {
            this.setState({ reverse: false });
          }.bind(this),
          500
        )
    );
  };

  render() {
    return (
      <label
        className="unselectable"
        onClick={this.onClick}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div className="smile">
          <Lottie
            animationData={smile}
            playFromCurrent={
              this.state.playFromCurrent ? this.state.isHover : null
            }
          />
        </div>
      </label>
    );
  }
}
