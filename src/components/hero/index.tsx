import { Hooks } from "../../hooks/vidSroll2";

const Hero = () => {
  Hooks();
  return (
    <div className="mainStack">
      <div className="shiftTopHero overFlowHidden">
        <video
          id="v"
          autoPlay
          muted
          loop
          // src="/mainVid.mp4"
          className="showMobileAndTab"
          src="https://res.cloudinary.com/daesuz8wk/video/upload/v1687543400/output4_wdcd7i.mp4"
          // src="/output4.mp4"
        ></video>
        <div></div>
      </div>

      <div className="mainWra">
        <div className="videoWrap  hideMobileAndTab">
          <div className="vidDiv">
            <video
              id="v0"
           
              muted
              loop
              // src="/mainVid.mp4"
              className=" heroWrap_canvas "
              src="https://res.cloudinary.com/daesuz8wk/video/upload/v1687543400/output4_wdcd7i.mp4"
              // src="/output4.mp4"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
