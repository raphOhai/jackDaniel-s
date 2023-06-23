import { hoverEvent, leveEvent } from "../../functions/animation1";
import "./btn.css";
interface slideComponents {
  slide: string;
  text: string;
}
const Btn = ({ slide, text }: slideComponents) => {
  return (
    <div
      onMouseOver={() => hoverEvent(slide, text)}
      onMouseLeave={() => leveEvent(slide, text)}
      className="btnContainer flex center"
    >
      <div className="flex">
        <div id={slide} className="slide transition2 "></div>
        <p id={text} className="default">
          demo
        </p>
      </div>
    </div>
  );
};

export default Btn;
