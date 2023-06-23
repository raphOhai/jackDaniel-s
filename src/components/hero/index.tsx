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
          src="/output3.mp4"
        ></video>
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
