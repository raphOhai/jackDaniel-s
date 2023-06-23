import Btn from "../coolBtn/btn";
import Tripplemesh2 from "../../assets/tripplemesh2";
import InterSectionChecker from "../../hooks/oberserver";
import { Undraw2, draw2 } from "../../functions/animation1";

const Section3 = () => {
  InterSectionChecker("start", "img2", draw2, Undraw2);
  return (
    <div className="section1Backgroun ">
      <div className="absolute sectionBackground"></div>S ection1
      <div className="maxWidth">
        <div className="gridSection1 sectionPadding">
          <div className="showMobileAndTab">
            <div className=" flex center1">
              <div className="stack2 gap1">
                <div className=" stack2 gap1 ">
                  <p className="sectionTextLarge capitalize start SlideUp group">
                    latest News
                  </p>
                  <p className="sectionTextParagraph start  SlideUp group">
                    What's new in the world of Jack? Click here and discover our
                    latest launches, partnerships, promotions and more.
                  </p>
                  <div className="start SlideUp group">
                    <Btn
                      slide={"btnsld4"}
                      text={"btntxt4"}
                      displayText="laern more"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className=" flex center1">
              <div className="imageTrickContainer3">
                <Tripplemesh2 />
                <img
                  id="img2"
                  // style={{ height: "46rem" }}
                  className="imageTrickContent3 fadeIn start"
                  src="/bunded.webp"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div style={{ marginTop: "10rem" }} className="hideMobileAndTab">
            <div className=" flex center1">
              <div className="stack2 gap1">
                <div className=" stack2 gap1 ">
                  <p className="sectionTextLarge capitalize start SlideUp group">
                    latest News
                  </p>
                  <p className="sectionTextParagraph start SlideUp group ">
                    What's new in the world of Jack? Click here and discover our
                    latest launches, partnerships, promotions and moreh.
                  </p>
                  <div className=" start SlideUp group">
                    <Btn
                      slide={"btnsld2"}
                      text={"btntxt2"}
                      displayText="laern more"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
