const Hero = () => {
  return (
    <div className="mainStack">
      <div className="shiftTopHero overFlowHidden">
        <video
          id="v0"
          autoPlay
          muted
          loop
          // src="/mainVid.mp4"
          className="showMobileAndTab"
          src="https://res.cloudinary.com/daesuz8wk/video/upload/v1687543400/output4_wdcd7i.mp4"
          // src="/output3.mp4"
        ></video>
        <div>

        </div>
      </div>

      <div className="mainWra">
        <div className="videoWrap  hideMobileAndTab">
          <div className="vidDiv">
            <canvas
              width={window.innerWidth}
              height={window.innerHeight}
              data-pin-scroll
              className="heroWrap_canvas "
              id="mycanvas"
            ></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
