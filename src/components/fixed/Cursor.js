import React, { useContext } from "react";
import Context from "../../store/context";

export default function Cursor() {
  const { state } = useContext(Context);

  return (
    <div id="cursor" className={"center cursor-" + state.cursor.type}>
      <div></div>
      <div className="hover back"></div>
      <div className="hover"></div>
    </div>
  );
}
