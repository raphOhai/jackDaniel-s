import LogoLine from "../../assets/logoLine";
import { Undraw4, draw4 } from "../../functions/animation1";
import InterSectionChecker from "../../hooks/oberserver";

const Footer = () => {
  InterSectionChecker("start", "img4", draw4, Undraw4);
  return (
    <div
      style={{ marginTop: "20rem" }}
      className="flex center1 footerMarginButtom"
    >
      <div
        style={{ marginTop: "-5.8rem" }}
        id="img4"
        className="absolute section1Background fadeIn "
      ></div>
      <div className="stack2 gap2">
        <div className="flex center1">
          <div className="imageTrickContainer4 ">
            <img
              style={{ height: "35px", width: "100px" }}
            
              src="https://www.jackdaniels.com/themes/JDTheme2/css/img/navLogo.png"
              alt=""
            />
            <div className="imageTrickContent4">
              <LogoLine />
            </div>
          </div>
        </div>
        <div className=" stack sectionPadding">
          <p className="footerText flex center ">
            JACK DANIEL DISTILLERY LYNCHBURG, TENNESSEE JACK, JACK DANIEL'S, OLD
            NO. 7, GENTLEMAN JACK, and JD are trademarks of Jack Daniel's
            Properties, Inc. © 2023 Jack Daniel's Properties, Inc.{" "}
          </p>
          <p className="footerText flex center">
            All rights reserved. All other trademarks and trade names are
            properties of their respective owners. TO FIND OUT MORE ABOUT
            RESPONSIBLE CONSUMPTION, VISIT RESPONSIBILITY.ORG AND
            OURTHINKINGABOUTDRINKING.COM
          </p>
          <p className="footerText flex center start">
            Please do not share or forward with anyone under the legal drinking
            age.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
