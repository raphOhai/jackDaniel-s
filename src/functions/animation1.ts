export const draw1 = () => {
  const svg1 = document.getElementById("path1");
  svg1?.classList.add("drawPath1");
};

export const Undraw1 = () => {
  const svg1 = document.getElementById("path1");
  svg1?.classList.remove("drawPath1");
};

export const draw2 = () => {
  const svg2 = document.getElementById("path2");
  svg2?.classList.add("drawPath2");
};

export const Undraw2 = () => {
  const svg2 = document.getElementById("path2");
  svg2?.classList.remove("drawPath2");
};


export const draw3 = () => {
  const svg2 = document.getElementById("path3");
  svg2?.classList.add("drawPath3");
};

export const Undraw3 = () => {
  const svg2 = document.getElementById("path3");
  svg2?.classList.remove("drawPath3");
};

export const hoverEvent = (slide: string, innerText: string) => {
  const slider = document.getElementById(slide);
  const text = document.getElementById(innerText);

  slider?.classList.add("right0");
  text?.classList.replace("default", "showText");
};

export const leveEvent = (slide: string, innerText: string) => {
  const slider = document.getElementById(slide);
  const text = document.getElementById(innerText);

  slider?.classList.remove("right0");
  text?.classList.add("default");
};
