import  { useState } from "react";
import { Wrapper } from "./Style";

const Qualification = () => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <Wrapper>
      <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggle === 1
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => {
                toggleTab(1);
              }}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
              Education
            </div>

            <div
              className={
                toggle === 2
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => {
                toggleTab(2);
              }}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
              Experience
            </div>
          </div>

          <div className="qualification__sections">
            <div
              className={
                toggle === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">SSC</h3>
                  <span className="qualification__subtitle">
                    R.R.P.D High School
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>2014-2015
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">HSC</h3>
                  <span className="qualification__subtitle">SAPS</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>2016-2018
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">IT</h3>
                  <span className="qualification__subtitle">
                    Gandhi institute for Technological advancement
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>2018 - 2022
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>

            <div
              className={
                toggle === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">SDE Intern</h3>
                  <span className="qualification__subtitle">
                    Spikewell india private ltd
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>2022
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Software Developer</h3>
                  <span className="qualification__subtitle">
                    Caledon technologies india Pvt. Ltd.
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>2022 - Present
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Qualification;
