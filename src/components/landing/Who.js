import React, { useContext } from "react";
import Context from "../../store/context";

export default function Who() {
  const { state, actions } = useContext(Context);
  const cursorImage = () => {
    actions({
      type: "setState",
      payload: { ...state, cursor: { type: "image" } },
    });
  };
  const resetCursor = () => {
    actions({
      type: "setState",
      payload: { ...state, cursor: { type: "default" } },
    });
  };

  return (
    <div
      id="who"
      className="center scrollOut"
      data-section="who"
      onMouseEnter={cursorImage}
      onMouseLeave={resetCursor}
    >
      <div>
        <h1 className="font-m">In a few words</h1>
        <p className="font-s">
          I am a software developer who enjoy creating beautiful design and good
          experiences. Simply passionated with create pixel perfect experiences.
          <br />
          <br />
          I’m majorly involved into front-end developement and I like to play
          around with different tecnologies. I see myself every day more
          involved into interactivity.
        </p>
      </div>
    </div>
  );
}
