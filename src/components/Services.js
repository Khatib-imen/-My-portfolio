import SectionContainer from "./SectionContainer";

const Services = () => {
  return (
    <SectionContainer
      name={"resume"}
      extraClass={"resume-section"}
      title={"My Resume"}
      subTitle={"History"}
      leftImage="static/img/cv2.svg"
    >
      <div className="row">
        <div className="col-md-6">
          <div className="resume-row">
            <h2 className="theme-after dark-color">Experience</h2>
            <ul>
              {/* Experience 1 */}
              <li>
                <div className="r-name">
                  <i className="theme-bg ti-briefcase" />
                  <span className="dark-color">Internship Prodigy InfoTech</span>
                  <label>1 JULY - 31 JULY 2024</label>
                </div>
                <div className="r-info">
                  <p>
                    <strong>WEB DEVELOPER:</strong> <br />
                    Built a Stopwatch Web Application <br/>
Created a Tic-Tac-Toe Web Application <br/>
Developed a Personal Portfolio <br/>
Built a Weather App that fetches and displays weather data from a weather API based on user
location or input using and Weather API.<br/>
                  </p>
                </div>
              </li>
              {/* Experience 2 */}
              <li>
                <div className="r-name">
                  <i className="theme-bg ti-briefcase" />
                  <span className="dark-color">Internship NXTYA</span>
                  <label>FEB - JUNE  2023</label>
                </div>
                <div className="r-info">
                  <p>
                    <strong>WEB/MOBILE DEVELOPER:</strong> <br />
                    Design and development of a mobile and web e-commerce
                    application for a company newsletter (React Native/Node.js/MongoDB/PRESTASHOP/PHP). 
                    Creation and production of graphic tools such as infographics for the application, flyers, a logo, etc.
                  </p>
                </div>
              </li>
              {/* Experience 3 */}
              <li>
                <div className="r-name">
                  <i className="theme-bg ti-briefcase" />
                  <span className="dark-color">Internship IMotion+</span>
                  <label>JUNE - AUGUST 2022</label>
                </div>
                <div className="r-info">
                  <p>
                    <strong>WEB DEVELOPER:</strong><br />
                    Creation of the social website of a company newsletter (HTML/CSS/JS/PHP/MYSQL)
                  </p>
                </div>
              </li>
              {/* Experience 4 */}
              <li>
                <div className="r-name">
                  <i className="theme-bg ti-briefcase" />
                  <span className="dark-color">Freelance</span>
                  <label>JUNE - AUGUST 2020 - 2022</label>
                </div>
                <div className="r-info">
                  <p>
                    <strong>WEB & GRAPHIC DESIGNER:</strong><br />
                    Conceptualization of graphic tools such as infographics, flyers, business cards, etc.
                    Cosmetic website using: HTML/PHP/CSS/JavaScript/MySQL. Method: Scrum
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Education Section */}
        <div className="col-md-6">
          <div className="resume-row">
            <h2 className="theme-after dark-color">Education</h2>
            <ul>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas fa-graduation-cap" />
                  <span className="dark-color">EPI</span>
                  <label>SEP 2023 - until now</label>
                </div>
                <div className="r-info">
                  <p>
                    <strong>Engineering Student :</strong> Specialized in Computer Software
                  </p>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas fa-graduation-cap" />
                  <span className="dark-color">Higher Institute of Computer Science and Communication (ISITCOM)</span>
                  <label>SEP 2023 - until now</label>
                </div>
                <div className="r-info">
                  <p>
                    <strong>MR Student :</strong> Specialized in AI and Data Analysis
                  </p>
                </div>
                <div className="r-name">
                  <label>SEP 2020 - JUNE 2023</label>
                </div>
                <div className="r-info">
                  <p>
                    <strong>Licence degree :</strong> Specialized in Internet of Things (IOT)
                  </p>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas fa-graduation-cap" />
                  <span className="dark-color">HIGH SCHOOL JAMMEL</span>
                  <label>SEP 2019 - 2020</label>
                </div>
                <div className="r-info">
                  <p>
                    <strong>Baccalaureate :</strong> Specialized in Experimental Sciences
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Services;
