import { useEffect, useState } from "react";
import { Hooks } from "../../hooks/vidSroll2";
import PulseBtn from "../../assets/pauseBtn";
import PlayBtn from "../../assets/playBtn";

const Hero = () => {
  const [isPlaying, setIsplaying] = useState(Boolean);
  const vid = document.getElementById("demovid") as HTMLVideoElement;
  const Control = () => {
    const vid = document.getElementById("demovid") as HTMLVideoElement;
    if (!vid?.paused) {
      vid?.pause();
      setIsplaying(false);
    } else {
      vid?.play();
      setIsplaying(true);
    }
  };

  const VidChecker = () => {
    const vid = document.getElementById("demovid") as HTMLVideoElement;
    console.log(vid);

    if (vid !== null) {
      vid.onplaying = function () {
        setIsplaying(true);
      };
      if (!vid.paused) {
        setIsplaying(false);
      } else {
        setIsplaying(true);
      }
    }
  };

  useEffect(() => {
    VidChecker();
    Control();
  }, [vid]);
  Hooks();
  useEffect(() => {
    const item = document.getElementById("demovid") as HTMLVideoElement;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          item.play();
          console.log(item.currentTime, item);
        }
      });
    });

    observer.observe(item);
  }, []);
  return (
    <div className="mainStack">
      <div className="shiftTopHero overFlowHidden">
        <video
          id="demovid"
          autoPlay
          muted
          loop
          className="showMobileAndTab"
          src="https://res.cloudinary.com/daesuz8wk/video/upload/v1687543400/output4_wdcd7i.mp4"
          // src="/output4.mp4"
        ></video>
        <div className="absolut1 elevate showMobileAndTab">
          <div className="flex center1 ">
            <div className="showMobileAndTab" onClick={Control}>
              {isPlaying ? <PulseBtn /> : <PlayBtn />}
            </div>
          </div>
        </div>
      </div>

      <div className="mainWra">
        <div className="videoWrap  hideMobileAndTab">
          <div className="vidDiv">
            <video
              id="v0"
              muted
              loop
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
