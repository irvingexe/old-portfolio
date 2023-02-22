import React, { useContext } from "react";
import Context from "../../store/context";
import Lottie from "../Lottie";
import eye from "../../assets/eye.json";
import arrow from "../../assets/arrow.svg";

export default function Cursor() {
  const { state } = useContext(Context);

  return (
    <div id="cursor" className={"center cursor-" + state.cursor.type}>
      <div></div>
      <div className="hover back"></div>
      <div className="hover center ">
        <Lottie animationData={eye} play={state.cursor.type === "hover eye"} />
      </div>
      <div className="hover center img">
        <img src={arrow} alt="" />
      </div>
    </div>
  );
}
