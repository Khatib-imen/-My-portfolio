import Isotope from "isotope-layout";
import { useCallback, useEffect, useRef, useState } from "react";
import SectionContainer from "./SectionContainer";
import Testimonials from "./Testimonials";

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    const imagesLoaded = require("imagesloaded");
    imagesLoaded(document.querySelector(".portfolio-cols"), function () {
      isotope.current = new Isotope(".portfolio-cols", {
        itemSelector: ".portfolio-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".portfolio-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    });
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <SectionContainer
      name={"portfolio"}
      title={"Latest Work"}
      subTitle={"Projects & Certifications"}
      leftImage="static/img/title-3.jpg"
    >
      <div className="portfolio-section">
        <div className="portfolio-filter m-10px-b">
          <ul className="filter text-left text-md-center">
            <li
              className={`${activeBtn("*")} theme-after`}
              onClick={handleFilterKeyChange("*")}
            >
              All
            </li>
            <li
              className={`${activeBtn("website")} theme-after`}
              onClick={handleFilterKeyChange("website")}
              data-filter=".website"
            >
              website
            </li>
            <li
              className={`${activeBtn("certifications")} theme-after`}
              onClick={handleFilterKeyChange("certifications")}
              data-filter=".certifications"
            >
              certifications
            </li>
          </ul>
        </div>
        <div className="portfolio-content">
          <ul className="portfolio-cols portfolio-cols-3">
            {/**site web */}
            <li className="portfolio-item website">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/portfolio-1.jpg" title alt />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        href="/Vidéos/Demo_app_web.mp4"
                        className="popup-video theme-color"
                      >
                        <i className="fa fa-play" />
                      </a>
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-1.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </a>
                      <a href="#" className="theme-color">
                        <i className="fa fa-link" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h5>Website E-commerce</h5>
                  <span>GOUA creation</span>
                </div>
              </div>
            </li>
            {/**AWS */}
            <li className="portfolio-item certifications">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/portfolio-5.jpg" title alt />
                    </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-5.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </a>
                      <a
                        href="https://www.credly.com/badges/f7888cad-91eb-4825-8068-3efa37b08b74/linked_in_profile"
                        className="theme-color"
                      >
                        <i className="fa fa-link" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h5>AWS badge</h5>
                  <span>AWS Academy Graduate</span>
                </div>
              </div>
            </li>
            {/**Cisco */}
            <li className="portfolio-item certifications">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/portfolio-4.jpg" title alt />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-4.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </a>
                      <a
                        href="https://www.credly.com/badges/5db010b4-a0c8-4d9b-8e23-2b8d19d95d7a"
                        className="theme-color"
                      >
                        <i className="fa fa-link" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h5>CCNA</h5>
                  <span>Cisco</span>
                </div>
              </div>
            </li>
            {/**App mobile */}
            <li className="portfolio-item app website">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/portfolio-6.jpg" title alt />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        href="/Vidéos/Demo_app_mob.mp4"
                        className="popup-video theme-color"
                      >
                        <i className="fa fa-play" />
                      </a>
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-6.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </a>
                      <a
                        href="#"
                        className="theme-color"
                      >
                        <i className="fa fa-link" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h5>Mobile application E-commerce</h5>
                  <span>Goua's creation</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Testimonials />
    </SectionContainer>
  );
};

export default Portfolio;
