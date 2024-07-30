import SectionContainer from "./SectionContainer";
const AboutUs = () => {
  return (
    <SectionContainer
      name={"about"}
      extraClass="about-section "
      title={"who i am "}
      subTitle={"skills & INTERESTS"}
      leftImage="static/img/title-1.jpg"
    >

<div className="col-md-8 md-m-30px-t">

 <div className="about-text">
            <h3 className="dark-color">I'm Imen Khatib</h3>
            <p className="m-0px">
            I graduated in 2023 with a Bachelor's degree in Computer Systems Engineering.
             Currently, I am pursuing a Master's degree in Artificial Intelligence and Data Analysis.
              At the same time, I am continuing my studies in Computer Engineering.
               I have developed applications in the field of e-commerce and am currently working on a website
                for the company IMOTION+. I have strong skills in artificial intelligence and computer science
                 in general. I am also skilled in motion graphic design....
            </p> <br/>
            </div>            </div>
        {/*skills 1*/}

          <div className="skill-row m-30px-t sm-m-20px-t">
              <div className="sub-title m-30px-b">
                     <h2 className="dark-color theme-after">IMEN's Skills</h2>
          </div>
                 <div className="row">
                   <div className="col-md-6 p-30px-l sm-p-15px-l sm-m-30px-t">
                        <h3 className="dark-color">Development :</h3> 
                      <div className="skills">
                         <div className="progress-lt">
                             <h6>React js</h6>
                                   <span className="theme-bg">92%</span>
                             <div className="progress">
                                 <div className="progress-bar" style={{ width: "92%" }}></div>
                                 </div>
                             </div>
                           <div className="progress-lt">
                                <h6>React Native</h6>
                                 <span className="theme-bg">84%</span>
                                   <div className="progress">
                                     <div className="progress-bar" style={{ width: "84%" }}></div>
                                   </div>
                           </div>
                                   <div className="progress-lt">
                                         <h6>Node.js </h6>
                                         <span className="theme-bg">88%</span>
                                        <div className="progress">
                                        <div className="progress-bar" style={{ width: "88%" }}></div>
                                    </div>
                      </div>
                      <div className="progress-lt">
                                         <h6>HTML5    </h6>
                                         <span className="theme-bg">88%</span>
                                        <div className="progress">
                                        <div className="progress-bar" style={{ width: "88%" }}></div>
                                    </div>
                      </div><div className="progress-lt">
                                         <h6> CSS3  </h6>
                                         <span className="theme-bg">88%</span>
                                        <div className="progress">
                                        <div className="progress-bar" style={{ width: "88%" }}></div>
                                    </div>
                      </div>
                     </div>
                    </div>

          {/*skills  2*/}
          <div className="col-md-6 p-30px-r sm-p-15px-r">
            <h3 className="dark-color">Programming Languages:</h3>
            <div className="skills">
              <div className="progress-lt">
                <h6>Python</h6>
                <span className="theme-bg">92%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "92%" }}></div>
                </div>
              </div>
              <div className="progress-lt">
                <h6>Java</h6>
                <span className="theme-bg">84%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "84%" }}></div>
                </div>
              </div>
              <div className="progress-lt">
                <h6>JavaScript</h6>
                <span className="theme-bg">88%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "88%" }}></div>
                </div>
              </div>
              <div className="progress-lt">
                <h6>C++</h6>
                <span className="theme-bg">88%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "88%" }}></div>
                </div>
              </div>
              <div className="progress-lt">
                <h6>PHP</h6>
                <span className="theme-bg">88%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "88%" }}></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        </div>
       <div className="skill-row m-30px-t sm-m-20px-t"> <br/>
                           {/*skills 3*/}
 
                 <div className="row">
          
                   <div className="col-md-6 p-30px-l sm-p-15px-l sm-m-30px-t">
                        <h3 className="dark-color">Graphic Design :</h3>{/*SQL (MySQL) / NoSQL (MongoDB)*/}
                      <div className="skills">
                         <div className="progress-lt">
                             <h6>Adobe Photoshop</h6>
                                   <span className="theme-bg">92%</span>
                             <div className="progress">
                                 <div className="progress-bar" style={{ width: "92%" }}></div>
                                 </div>
                             </div>
                           <div className="progress-lt">
                                <h6>Adobe Illustrator</h6>
                                 <span className="theme-bg">84%</span>
                                   <div className="progress">
                                     <div className="progress-bar" style={{ width: "84%" }}></div>
                                   </div>
                           </div>
                           <div className="progress-lt">
                                    <h6>  Adobe After Effects </h6>
                                    <span className="theme-bg">88%</span>
                                 <div className="progress">
                                          <div className="progress-bar" style={{ width: "88%" }}></div>
                                 </div>
                            </div>
                            <div className="progress-lt">
                                    <h6>  Adobe XD  Figma </h6>
                                    <span className="theme-bg">88%</span>
                                 <div className="progress">
                                          <div className="progress-bar" style={{ width: "88%" }}></div>
                                 </div>
                            </div>
                     </div>
                    </div>

                    {/*skills 4*/}
                    <div className="col-md-6 p-30px-r sm-p-15px-r ">
                                         <h3 className="dark-color">DATABASE :</h3>
                      <div className="skills">
                         <div className="progress-lt">
                                         <h6>SQL (MySQL)</h6>
                                          <span className="theme-bg">92%</span>
                             <div className="progress">
                                          <div className="progress-bar" style={{ width: "92%" }}></div>
                              </div>
                          </div>
                         <div className="progress-lt">
                                     <h6> NoSQL (MongoDB)</h6>
                                    <span className="theme-bg">84%</span>
                            <div className="progress">
                                      <div className="progress-bar" style={{ width: "84%" }}></div>
                            </div>
                         </div>
                           
                      </div>
                    </div>
          </div>
          </div>
          <br/>



          
          <div className="skill-row m-30px-t sm-m-20px-t">
              <div className="sub-title m-30px-b">
                     <h2 className="dark-color theme-after">IMEN's INTERESTS</h2> </div> </div>
      <div className="row">
     
        <div className="col-md-8 md-m-30px-t">
          <div className="about-text">
       
            <ul class="interests-list">
        <li>Leadership</li>
        <li>Communication Skills</li>
        <li>Problem Solving</li>
        <li>Photoshop / Illustrator</li>
        <li>Web/Mobile Development</li>
        <li>InDesign</li>
    </ul>

         
          </div>{" "} <br/>
          {/* row */}
          <div className="btn-bar">
            <a href="/imen_cv.pdf" className="btn btn-theme" download="imen_cv.pdf">
              Download CV
            </a>
          </div>
    

        </div>
      </div>{" "}
   
    </SectionContainer>
  );
};
export default AboutUs;
