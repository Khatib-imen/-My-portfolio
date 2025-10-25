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
         {/* Experience 0 */}
              <li>
                <div className="r-name">
                  <i className="theme-bg ti-briefcase" />
                  <span className="dark-color">Internship Winshot</span>
                  <label>1 JULY - august 2025</label>
                </div>
                <div className="r-info">
                  <p>
                    <strong>AI intern:</strong> <br />
                   
Development of an AI agent for web scraping driven by objectives.<br/>
                  </p>
                </div>
              </li>
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
                    Cosmetic website "Beauty +" (HTML/CSS/JS/PHP)
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
                    <strong>5th Year Engineering Student :</strong> Specialized in Software Engineering with a focus on Artificial Intelligence
                  </p>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas fa-graduation-cap" />
                  <span className="dark-color">Higher Institute of Computer Science and Communication (ISITCOM)</span>
                  <label>SEP 2023 - until now "Thesis Phase"</label>
                </div>
                <div className="r-info">
                  <p>
                    <strong>MR Student :</strong> Specialized in AI and Data Analysis
          Specialized in Deep Learning (CNN, NLP) and AI models.

Developing intelligent applications by implementing theoretical models (TensorFlow/PyTorch) into scalable solutions (APIs, edge devices).

Conducting research resulting in a paper accepted at AMC-AI IEEE AMCAI 2025,
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
