import React from "react";
import me from "../../assets/me.webp";
import back from "../../assets/back.webp";

export default function Who() {
  return (
    <div id="who" className="center scrollOut" data-section="who">
      <div>
        <div>
          <h1 className="font-xxl">Who</h1>
          <p className="font-s">
            First of all it is amazing having you here, welcome! My name is
            Irving, I am a software developer who enjoy creating beautiful
            design and good experiences.
            <br />
            <br />
            I’m majorly involved into front-end developement and I like to play
            around with different tecnologies. I am passionate about technology
            and interactivity, the two fields which I'd love to stay more
            involved and keep about.
          </p>
        </div>
        <div className="center img">
          <img src={back} alt="background" />
          <img src={me} alt="Irving Mariscales" />
        </div>
      </div>
    </div>
  );
}
