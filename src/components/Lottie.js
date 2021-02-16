import React, { Component } from "react";
import lottie from "lottie-web";

export default class Lottie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.options = {
      wrapper: this.el,
      renderer: "svg",
      loop: false,
      autoplay: false,
      prerender: true,
      animationData: this.props.animationData,
    };

    this.setState((state, props) => ({
      anim: lottie.loadAnimation(this.options),
      prevFrame: 0,
    }));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.speed && prevState.anim) {
      prevState.anim.setSpeed(nextProps.speed);
    }
    if (typeof nextProps.playFromCurrent === "boolean" && prevState.anim) {
      let s1 = !nextProps.playFromCurrent
        ? prevState.anim.currentFrame + prevState.prevFrame
        : prevState.anim.currentFrame;
      let s2 = nextProps.playFromCurrent ? prevState.anim.animationData.op : 0;
      prevState.prevFrame = prevState.anim.currentFrame;
      if (s1 !== s2) {
        prevState.anim.playSegments([s1, s2], true);
      }
    }
    if (nextProps.play === true && prevState.anim) {
      if (
        prevState.anim.currentFrame === prevState.anim.totalFrames - 1 ||
        prevState.anim.currentFrame === 0
      ) {
        prevState.anim.goToAndPlay(0, true);
      }
    }
    if (nextProps.playReverse === true && prevState.anim) {
      if (prevState.anim.currentFrame === prevState.anim.totalFrames - 1) {
        prevState.anim.playSegments([prevState.anim.totalFrames - 1, 0], true);
      }
    }
    return null;
  }

  render() {
    return (
      <div
        ref={(c) => {
          this.el = c;
        }}
      />
    );
  }
}
