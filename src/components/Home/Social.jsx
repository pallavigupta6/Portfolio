import React from "react";
import { Socialcss } from "./Style";

const Social = () => {
  return (
    <Socialcss>
      <div className="home__social">
        <a
          href="https://www.linkedin.com/in/pallavigupta0609/"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-linkedin-alt"></i>
        </a>
        <a
          href="https://www.instagram.com/reactjs_knowledge/"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-instagram"></i>
        </a>

        <a
          href="https://github.com/pallavigupta6"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-github-alt"></i>
        </a>
      </div>
    </Socialcss>
  );
};

export default Social;
