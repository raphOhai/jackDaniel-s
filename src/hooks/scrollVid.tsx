import { useEffect } from "react";

export const ScrollVid = (videoSrc: string) => {
  return useEffect(() => {
    const html = document.documentElement;
    const canvas: any = document.getElementById("mycanvas");
    const context = canvas.getContext("2d");
    const video = document.createElement("video");
    video.src = videoSrc;
    video.crossOrigin = "anonymous";

    video.addEventListener(
      "loadeddata",
      function () {
        video.currentTime = 0;
        // console.log("loaded")
      },
      false
    );

    const wrap: any = canvas?.parentNode?.parentNode;
    // console.log(wrap);


    window.addEventListener("scroll", () => {
      const scrollTop = html.scrollTop - wrap.offsetTop;
      const maxScrollTop = wrap.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;

      video.currentTime = video.duration * scrollFraction;
    // video.currentTime = scrollY/100
      // console.log(video.currentTime, video.duration);
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
    });
  }, []);
};
