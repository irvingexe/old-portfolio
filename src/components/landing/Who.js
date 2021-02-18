import React from "react";
import me from "../../assets/me.jpg";

export default function Who() {
  return (
    <div id="who" className="center scrollOut" data-section="who">
      <div>
        <div>
          <h1 className="font-xxl">WHO</h1>
          <p className="font-s">
            I am a software developer who enjoy creating beautiful design and
            good experiences. Simply passionated with create pixel perfect
            experiences.
            <br />
            <br />
            I’m majorly involved into front-end developement and I like to play
            around with different tecnologies. I see myself every day more
            involved into interactivity.
          </p>
        </div>
        <div className="center">
          <img src={me} alt="Irving Mariscales" />
        </div>
      </div>
    </div>
  );
}
