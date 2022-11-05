import { init } from "ityped";
import React, { useEffect, useRef } from "react";
import "./Intro.scss";

const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 50,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img
            src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/man.png"
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Anandu Reghu</h1>
          <h3>
            Freelance <span ref={textRef}>Designer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img
            src="https://github.com/safak/youtube/blob/react-portfolio/public/assets/down.png?raw=true"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Intro;
