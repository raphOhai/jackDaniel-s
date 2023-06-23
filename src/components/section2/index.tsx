import Btn from "../coolBtn/btn";

import Tripplemesh from "../../assets/tripplemesh";
import InterSectionChecker from "../../hooks/oberserver";
import { Undraw1, draw1 } from "../../functions/animation1";

const Section2 = () => {
  InterSectionChecker("trigger", "img1", draw1, Undraw1);
  return (
    <div className="section1Backgroun ">
      <div className="absolute sectionBackground"></div>S ection1
      <div className="maxWidth">
        <div className="gridSection1 sectionPadding ">
          <div className="flex ">
        
            <div className=" flex center1">
              <div className=" stack2 gap1  ">
                <p className="sectionTextLarge capitalize">latest News</p>
                <p className="sectionTextParagraph ">
                  What's new in the world of Jack? Click here and discover our
                  latest launches, partnerships, promotions and more.
                </p>
                <div >
                  <Btn slide={"btnsld1"} text={"btntxt1"} displayText="laern more" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex alignEn">
            <div className=" flex center1">
              <div className="stack2 gap1">
                <div className="imageTrickContainer2">
                  <Tripplemesh />
                  <img
                    id="img1"
                    className="imageTrickContent2 fadeIn trigger"
                    src="/3mesh.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
