
import Connector from "../../assets/connector";
import InterSectionChecker from "../../hooks/oberserver";
import { Undraw3, draw3 } from "../../functions/animation1";

const Section4 = () => {
  InterSectionChecker("trigger2", "img3", draw3, Undraw3);
  return (
    <>
      <div className="flex center shiftTopSvg ">
        <div className="trigger2 connectorMargin">
          <Connector />
        </div>
      </div> 
    </>
  );
};

export default Section4;
