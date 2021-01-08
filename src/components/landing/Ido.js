import React from "react";
import ido from "./ido.json";
import "../../styles/landing.css";

export default function Ido() {
  let blocks = [];
  for (let i = 0; i < 18; i++) {
    blocks.push(
      <div href="#" className="box">
        <div className="border"></div>
        <div className="top-left"></div>
        <div className="top-right"></div>
        <div className="bottom-left"></div>
        <div className="bottom-right"></div>
      </div>
    );
  }
  return (
    <div id="ido">
      <div className="container center">
        <div className="footer">{blocks}</div>
      </div>
    </div>
  );
}
