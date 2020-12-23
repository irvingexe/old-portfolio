import React from "react";
import "../../styles/mockup.css";

const Mockup = (props) => {
  let device = props.device;
  let img1 = props.img1;
  let img2 = props.img2;
  return create(device, img1, img2);
};

function create(device, img1, img2) {
  switch (device) {
    case 0:
      return (
        <div className="desktop">
          <div
            class="scene"
            style={{
              transform:
                "rotate3d(-2.8, -0.45, -0.5, 450deg) scale3d(0.7, 0.7, 0.7)",
            }}
          >
            <div class="shape cuboid-2 desk-body">
              <div class="face ft"></div>
              <div class="face bk"></div>
              <div class="face rt"></div>
              <div class="face lt"></div>
              <div class="face bm"></div>
              <div class="face tp shadow"></div>
              <div class="cr cr-0">
                <div class="face side s0"></div>
                <div class="face side s1"></div>
                <div class="face side s2"></div>
              </div>
              <div class="cr cr-1">
                <div class="face side s0"></div>
                <div class="face side s1"></div>
                <div class="face side s2"></div>
              </div>
              <div class="cr cr-2">
                <div class="face side s0"></div>
                <div class="face side s1"></div>
                <div class="face side s2"></div>
              </div>
              <div class="cr cr-3">
                <div class="face side s0"></div>
                <div class="face side s1"></div>
                <div class="face side s2"></div>
              </div>
            </div>
            <div class="shape cuboid-5 desk-power">
              <div class="face ft"></div>
              <div class="face bk"></div>
              <div class="face rt"></div>
              <div class="face lt"></div>
              <div class="face bm"></div>
              <div class="face tp"></div>
              <div class="cr cr-0">
                <div class="face side s0"></div>
                <div class="face side s1"></div>
                <div class="face side s2"></div>
              </div>
              <div class="cr cr-1">
                <div class="face side s0"></div>
                <div class="face side s1"></div>
                <div class="face side s2"></div>
              </div>
              <div class="cr cr-2">
                <div class="face side s0"></div>
                <div class="face side s1"></div>
                <div class="face side s2"></div>
              </div>
              <div class="cr cr-3">
                <div class="face side s0"></div>
                <div class="face side s1"></div>
                <div class="face side s2"></div>
              </div>
            </div>
            <div class="shape cuboid-6 desk-screen">
              <div class="face ft"></div>
              <div class="face bk"></div>
              <div class="face rt"></div>
              <div class="face lt"></div>
              <div class="face bm"></div>
              <div
                class="face tp"
                style={{
                  background: "url(" + img1 + ")",
                }}
              ></div>
              <div class="cr cr-0">
                <div class="face side s0"></div>
                <div class="face side s1"></div>
                <div class="face side s2"></div>
              </div>
              <div class="cr cr-1">
                <div class="face side s0"></div>
                <div class="face side s1"></div>
                <div class="face side s2"></div>
              </div>
              <div class="cr cr-2">
                <div class="face side s0"></div>
                <div class="face side s1"></div>
                <div class="face side s2"></div>
              </div>
              <div class="cr cr-3">
                <div class="face side s0"></div>
                <div class="face side s1"></div>
                <div class="face side s2"></div>
              </div>
            </div>
            <div class="shape cuboid-7 desk-vol">
              <div class="face ft"></div>
              <div class="face bk"></div>
              <div class="face rt"></div>
              <div class="face lt"></div>
              <div class="face bm"></div>
              <div class="face tp"></div>
              <div class="cr cr-0">
                <div class="face side s0"></div>
                <div class="face side s1"></div>
                <div class="face side s2"></div>
              </div>
              <div class="cr cr-1">
                <div class="face side s0"></div>
                <div class="face side s1"></div>
                <div class="face side s2"></div>
              </div>
              <div class="cr cr-2">
                <div class="face side s0"></div>
                <div class="face side s1"></div>
                <div class="face side s2"></div>
              </div>
              <div class="cr cr-3">
                <div class="face side s0"></div>
                <div class="face side s1"></div>
                <div class="face side s2"></div>
              </div>
            </div>
          </div>
        </div>
      );
      break;

    case 1:
      return (
        <div className="phone">
          <div
            className="scene"
            style={{
              transform: "rotate3d(-2.8, -1, -1, 75deg) scale3d(0.7, 0.7, 0.7)",
            }}
          >
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
      break;

    default:
      break;
  }
}

export default Mockup;
