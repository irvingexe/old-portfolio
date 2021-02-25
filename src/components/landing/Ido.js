import React from "react";
import ido from "./ido.json";
import "../../styles/landing.css";

export default function Ido() {
  const blocks = [];
  let key = 0;
  ido.forEach((e) => {
    blocks.push(
      <div key={key++} className="box title">
        <div className="border center title">
          <div className="content center">
            <div className="center font-s">{e.description}</div>
            <div className="center">
              {e.name}
              <br />
              {e.name2}
            </div>
          </div>
        </div>
        <div className="top-left"></div>
        <div className="top-right"></div>
        <div className="bottom-left"></div>
        <div className="bottom-right"></div>
      </div>
    );

    e.tecnologies.forEach((e2) => {
      blocks.push(
        <div key={key++} className="box">
          <div className="border center">
            <div className="content center unselectable undragable">
              <div className="center">
                <img alt="" src={e2.img} />
              </div>
            </div>
          </div>
          <div className="top-left"></div>
          <div className="top-right"></div>
          <div className="bottom-left"></div>
          <div className="bottom-right"></div>
        </div>
      );
    });
  });

  return (
    <div id="ido" className="center scrollOut link" data-section="ido">
      <div className="font-xxl">
        <div>What I do</div>
        <div className="font-s">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel nunc
          laoreet, viverra nunc vel, condimentum metus. Suspendisse maximus nisl
          tortor, non tincidunt massa tincidunt id.
        </div>
      </div>
      <div className="container">
        <div className="footer">{blocks}</div>
      </div>
    </div>
  );
}
