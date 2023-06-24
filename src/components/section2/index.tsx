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
                <p className="sectionTextLarge capitalize trigger  SlideUp group">
                  JACK DANIEL'S TRIPLE MASH
                </p>
                <p className="sectionTextParagraph trigger  SlideUp group">
                  A blend of three straight Bottled-in-Bond Whiskeys - Jack
                  Daniel's American Malt, Jack Daniel's Tennessee Rye and Jack
                  Daniel's Tennessee Whiskey. Its unique flavor is bottled at
                  100 proof.
                </p>
                <div className="trigger  SlideUp group">
                  <Btn
                    slide={"btnsld1"}
                    text={"btntxt1"}
                    displayText="learn more"
                  />
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
