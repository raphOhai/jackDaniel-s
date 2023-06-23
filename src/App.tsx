import "./App.css";

import { ScrollVid } from "./hooks/scrollVid";

import Hero from "./components/hero";
import Header from "./components/header";

import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section1 from "./components/section1/section1";

function App() {
  ScrollVid("https://res.cloudinary.com/daesuz8wk/video/upload/v1687528782/output3_hx7ipm.3gp");
  // Hooks();
  return (
    <>
      <Header />
      <div className="stack2  gap1">
        <Hero />
        <Section3 />
        <Section2 />

        <Section4 />
        <Section1 />
      </div>
    </>
  );
}

export default App;
