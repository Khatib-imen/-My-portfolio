import { useContext } from "react";
import TypingAnimation from "./TypingAnimation";
import { ImenContext } from "../Context";

const HomeBanner = () => {
  const { nav, changeNav } = useContext(ImenContext);
  const activePageClass = () => (nav === "home" ? "" : "page--inactive");

  return (
    <div className={`page home-banner white-bg ${activePageClass()}`} id={"home"} onClick={() => changeNav("home", false)}>
      <div className="container-fluid p-0">
        <div className="row no-gutters full-screen">
          <div className="col-lg-3 col-xl-4 blue-bg">
            <div className="d-flex align-items-end home-user-avatar v-center-box">
              <img className="home-user-image" src="static/img/title-1.jpg" alt="User" />
            </div>
          </div>
          <div className="col-lg-9 col-xl-8">
            <div className="page-scroll">
              <div className="page-content">
                <div className="v-center-box d-flex align-items-center">
                  <div className="home-text">
                    <h6 className="dark-color theme-after">Hello, There</h6>
                    <h1 className="dark-color blue-after">I'm Imen Khatib</h1>
                    <p>AI Developer <TypingAnimation /></p>
                    <div className="btn-bar">
                      <a href="/cv_imen.pdf" className="btn btn-theme" download="cv_imen.pdf">
                        Imen's CV
                      </a>
                    </div>
                  </div>
                  <ul className="social-icons">
                    <li>
                      <a className="facebook" href="https://www.facebook.com/imen.khatib1">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a className="linkedin" href="https://www.linkedin.com/in/khatib-imen-607219206/">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
