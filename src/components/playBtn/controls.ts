// import { useEffect, useState } from "react";

// type Props = {
//     isPlaying: boolean;
//   };

// const Controls = ({}) => {

//   const video:any = document.getElementById("v0");
//   const VidChecker = () => {
//     const video:any = document.getElementById("v0");
//     console.log(video);

//     if (video !== null) {
//       //   if (video.currentTime > 1.5) {
//       //     setIsPlaying(true);
//       //   }
//       // Control()
//       video.onplaying = function () {
//         isPlaying = true;
//       };
//       if (!video?.paused) {
       
//         isPlaying = false;
//       } else {
        
//         isPlaying= true;
//       }
//     }
//   };

//   const Control = () => {
//    const video:any = document.getElementById("v0");
//     if (!video?.paused) {
//       video?.pause();
//       isPlaying=false;
//     } else {
//       video?.play();
//       isPlaying(true);
//     }
//   };
//   useEffect(() => {
//     VidChecker();
//     Control()
//   }, [video]);

//   return <div onclick={Control}> {isPlaying? <PulseBtn /> : <PlayBtn />}</div>;
// };

// export default Controls;
