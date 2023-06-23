import { useEffect } from "react";

export const Hooks = () => {
  useEffect(() => {
    // const Element2 = document.getElementById("section-1");
    const vid: any = document.getElementById("v0");
    const html = document.documentElement;
    const wrap: any = vid.parentNode.parentNode;
    const scrollTop = html.scrollTop - wrap.offsetTop;
    const maxScrollTop = wrap.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const divid = (item: number) => {
      const val = item / 500;
      return  val;
    };

    const changeBackground = () => {
      const increament = divid(window.scrollY);
      vid.currentTime = increament;
      if (vid.currentTime >= 10) {
        // Element2.classList.replace("fixedVid2", "fixed2");
        // RemoveBorder();
        console.log(scrollFraction)
      } else {
        // Element2.classList.replace("fixed2", "fixedVid2");
        // AddBorderRadius();
      }
    };

    window.addEventListener("scroll", changeBackground);
  }, []);
};
