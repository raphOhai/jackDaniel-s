import { useState } from "react";
import { useEffect } from "react";
import useWindowSize from "./windowObserver";

export const SvgResize = (
  //   bp: number,
  defaultHeight: string,
  defaultWidth: string,
  newHeight: string,
  newWidth: string
) => {
  const size = useWindowSize();
  console.log(size);
  const [view, setView] = useState({
    width: "",
    height: "",
  });
  useEffect(() => {
    console.log("kk");
    if (size.width < 600) {
      setView({
        width: newWidth,
        height: newHeight,
      });
    } else {
      setView({
        width: defaultWidth,
        height: defaultHeight,
      });
    }
  }, [size, newHeight, newWidth, defaultHeight, defaultWidth]);
  return view;
};
