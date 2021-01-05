import React, { Component } from "react";
import ido from "./ido.json";

export default class Ido extends Component {
  constructor(props) {
    super(props);
    this.state = { active: "Front" };
  }

  render() {
    let areas = [];
    let tec = [];
    for (let i in ido) {
      tec = [];
      for (let j in ido[i].tecnologies) {
        tec.push(
          <div key={j} className="center">
            <img alt="" src={ido[i].tecnologies[j].img} />
            <span>{ido[i].tecnologies[j].title}</span>
          </div>
        );
      }
      areas.push(
        <div
          key={i}
          onMouseEnter={(e) => {
            this.setState((state, props) => ({ active: ido[i].name }));
          }}
          className={
            "area link" + (this.state.active === ido[i].name ? " active" : "")
          }
        >
          <div className="tag center font-m bold">
            <div>
              <div className="line"></div>
              {ido[i].name}
            </div>
          </div>
          <div className="info">
            <p className="description font-s">{ido[i].description}</p>
            <div className="images">{tec}</div>
          </div>
        </div>
      );
    }
    return (
      <div id="ido" className="center scrollOut" data-section="ido">
        <div className="content">{areas}</div>
        <div className="bg-title font-xxl bold center unselectable">
          <h1>I do</h1>
        </div>
      </div>
    );
  }
}
