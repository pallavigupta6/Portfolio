// import React from "react";
import { Wrapper } from "./Style";

const Frontend = () => {
  return (
    <Wrapper>
      <div className="skills__content">
        <h3 className="skills__title">Frontend Developer</h3>

        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">HTML</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">CSS</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>

          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">Tailwind</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">Git</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">React</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">React-Native</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">Unit-testing</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Frontend;
