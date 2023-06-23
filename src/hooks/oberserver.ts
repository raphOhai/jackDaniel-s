import { useEffect } from "react";

export default function InterSectionChecker(
  trigger: string,
  item: string,
  action: any,
  revarseAction: any
) {
  useEffect(() => {
    const hiddenElements1 = document.getElementById(item);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            action();
            const showPicture = () => {
              hiddenElements1?.classList.add("show");
            };
            setTimeout(showPicture, 1000);
          } else {
            revarseAction();
            const showPicture = () => {
              hiddenElements1?.classList.remove("show");
            };
            setTimeout(showPicture, 1000);
          }
        },
        { threshold: 0.5 }
      );
    });
    const hiddenElements = document.querySelectorAll("." + trigger);

    hiddenElements.forEach((el) => observer.observe(el));
  }, []);
}
