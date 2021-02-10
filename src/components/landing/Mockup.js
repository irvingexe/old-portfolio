import React from "react";
import "../../styles/mockup.css";

const Mockup = (props) => {
  return create(props.device, props.img1, props.img2);
};

function create(device, img1, img2) {
  switch (device) {
    case 0:
      return (
        <div className="desktop">
          <div className="scene">
            <div className="shape cuboid-2 desk-body">
              <div className="face ft"></div>
              <div className="face bk"></div>
              <div className="face rt"></div>
              <div className="face lt"></div>
              <div className="face bm"></div>
              <div className="face tp shadow"></div>
              <div className="cr cr-0">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
              <div className="cr cr-1">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
              <div className="cr cr-2">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
              <div className="cr cr-3">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
            </div>
            <div className="shape cuboid-5 desk-power">
              <div className="face ft"></div>
              <div className="face bk"></div>
              <div className="face rt"></div>
              <div className="face lt"></div>
              <div className="face bm"></div>
              <div className="face tp"></div>
              <div className="cr cr-0">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
              <div className="cr cr-1">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
              <div className="cr cr-2">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
              <div className="cr cr-3">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
            </div>
            <div className="shape cuboid-6 desk-screen">
              <div className="face ft"></div>
              <div className="face bk"></div>
              <div className="face rt"></div>
              <div className="face lt"></div>
              <div className="face bm"></div>
              <div
                className="face tp"
                style={{
                  background: "url(" + img1 + ")",
                }}
              ></div>
              <div className="cr cr-0">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
              <div className="cr cr-1">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
              <div className="cr cr-2">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
              <div className="cr cr-3">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
            </div>
            <div className="shape cuboid-7 desk-vol">
              <div className="face ft"></div>
              <div className="face bk"></div>
              <div className="face rt"></div>
              <div className="face lt"></div>
              <div className="face bm"></div>
              <div className="face tp"></div>
              <div className="cr cr-0">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
              <div className="cr cr-1">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
              <div className="cr cr-2">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
              <div className="cr cr-3">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
            </div>
          </div>
        </div>
      );

    case 1:
      return (
        <div className="phone">
          <div className="scene">
            <div className="shape cuboid-2 phone-body">
              <div className="face ft"></div>
              <div className="face bk"></div>
              <div className="face rt"></div>
              <div className="face lt"></div>
              <div className="face bm"></div>
              <div className="face tp shadow"></div>
              <div className="cr cr-0">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
                <div className="face side s3"></div>
                <div className="face side s4"></div>
              </div>
              <div className="cr cr-1">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
                <div className="face side s3"></div>
                <div className="face side s4"></div>
              </div>
              <div className="cr cr-2">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
                <div className="face side s3"></div>
                <div className="face side s4"></div>
              </div>
              <div className="cr cr-3">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
                <div className="face side s3"></div>
                <div className="face side s4"></div>
              </div>
            </div>
            <div className="shape cuboid-5 phone-power">
              <div className="face ft"></div>
              <div className="face bk"></div>
              <div className="face rt"></div>
              <div className="face lt"></div>
              <div className="face bm"></div>
              <div className="face tp"></div>
              <div className="cr cr-0">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
              <div className="cr cr-1">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
              <div className="cr cr-2">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
              <div className="cr cr-3">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
            </div>
            <div className="shape cuboid-6 phone-screen">
              <div className="face ft"></div>
              <div className="face bk"></div>
              <div className="face rt"></div>
              <div className="face lt"></div>
              <div className="face bm"></div>
              <div
                className="face tp"
                style={{
                  background: "url(" + img1 + ")",
                }}
              ></div>
              <div className="cr cr-0">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
              <div className="cr cr-1">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
              <div className="cr cr-2">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
              <div className="cr cr-3">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
            </div>
            <div className="shape cuboid-7 phone-vol">
              <div className="face ft"></div>
              <div className="face bk"></div>
              <div className="face rt"></div>
              <div className="face lt"></div>
              <div className="face bm"></div>
              <div className="face tp"></div>
              <div className="cr cr-0">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
              <div className="cr cr-1">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
              <div className="cr cr-2">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
              <div className="cr cr-3">
                <div className="face side s0"></div>
                <div className="face side s1"></div>
                <div className="face side s2"></div>
              </div>
            </div>
            <div className="shape cuboid-1 phone-img">
              <div className="face ft"></div>
              <div className="face bk"></div>
              <div className="face rt"></div>
              <div className="face lt"></div>
              <div className="face bm"></div>
              <div
                className="face tp shadow"
                style={{
                  background: "url(" + img2 + ")",
                }}
              ></div>
            </div>
          </div>
        </div>
      );

    default:
      break;
  }
}

export default Mockup;
