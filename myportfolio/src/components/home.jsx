import { React, useState } from "react";
import Nav from "./nav";
import "./CSS/home.css";
import Mypic from "./images/me.jpg";
import CountUp from "react-countup";
import myResume from "./Files/Anurag-Resume.pdf";
import Experience from "../components/experience";
import Qualification from "../components/qualification";
import Indications from "./indications";
import Certifications from "./certifications";
import Contactme from "./Contactme";
import Themes from "../components/themes";
import Insta2022 from "./images/Insta2022.png";
import Insta2023 from "./images/Insta2023.png";
import { motion } from "framer-motion"

const Home = () => {
  const [isQualificationClicked, setisQualificationClicked] = useState(false);
  const [isExperienceClicked, setisExperienceClicked] = useState(false);
  return (
    <>
      <Nav />
      <br />
      <br />
      <br />
      <div className="container text-center">
        <div className="row" id="mainRow">
          <div className="col-sm">
            <img src={Mypic} id="mypic" alt="me" />
          </div>
          <div className="col-sm">
            <ul id="introUl">
              <h2 id="name">Anurag Nishad</h2>
              <li>Full Stack .NET Developer</li>
              <li>Full Stack Web Developer</li>
              <li>A Passionate coder</li>
              <br />
              <motion.li   animate={{ rotateX:360
               }} transition={{ ease: "easeOut", duration: 2 }}>
                <a  id="msgMeBtn" href="#contactmeSegment" > 
                  Message me<i className="fa-solid fa-paper-plane"></i>
                </a>
              </motion.li>
            </ul>
          </div>
          <div className="col-sm" id="follow-card">
            <ul id="followUl">
              <h5 id="followOn">Follow on</h5>
              <li>
                <i
                  style={{ color: "#0077b5" }}
                  className="fa-brands fa-linkedin "
                ></i>
                <a
                  href="https://www.linkedin.com/in/anurag-nishad-439084212"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <i className="fa-brands fa-x-twitter"></i>
                <a
                  href="https://https://twitter.com/Anurag10681372?t=c0U2DE9_iG9tYddPYZ2U5g&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X-Twitter
                </a>
              </li>
              <li>
                <i
                  style={{ color: "#bc2a8d" }}
                  className="fa-brands fa-instagram"
                ></i>
                <a
                  href="https://www.instagram.com/coder.anu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <i
                  style={{ color: "#171515" }}
                  className="fa-brands fa-github "
                ></i>
                <a
                  href="https://github.com/CoderAnu786/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <i
                  style={{ color: "red" }}
                  className="fa-brands fa-youtube "
                ></i>
                <a
                  href="https://www.youtube.com/@AnuragNishadDev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <i>
              <a
                href="https://www.linkedin.com/in/anurag-nishad-439084212"
                style={{ color: "#0077b5" }}
                className="fa-brands fa-linkedin i-con"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </i>
            <i>
              <a
                href="https://www.instagram.com/coder.anu/"
                style={{ color: "#bc2a8d" }}
                className="fa-brands fa-instagram i-con"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </i>
            <i>
              <a
                href="https://twitter.com/Anurag10681372?t=c0U2DE9_iG9tYddPYZ2U5g&s=09"
                style={{ color: "black" }}
                className="fa-brands fa-x-twitter i-con"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </i>
            <i>
              <a
                href="https://github.com/CoderAnu786/"
                style={{ color: "#171515" }}
                className="fa-brands fa-github i-con"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </i>
            <i>
              <a
                href="https://www.youtube.com/@AnuragNishadDev/"
                style={{ color: "red" }}
                className="fa-brands fa-youtube i-con"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </i>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row" id="about">
          <div className="col">
            <div id="introHeading">
              <h3>About me</h3>
              <p id="quickintro">- A quick intro</p>
              <div id="downloadResume">
                <span>
                  <a href={myResume} download="">
                    Download Resume<i className="fa-solid fa-download"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div className="about-cards">
              <i className="fa-solid fa-trophy"></i>
              <br />
              <span className="About-EPW">Experience </span>
              <br />
              <span className="EPW-description">
                <CountUp start={0} end={2} duration={5} /> years
              </span>
            </div>
          </div>

          <div className="col-sm">
            <div className="about-cards">
              <i className="fa-solid fa-diagram-project"></i>
              <br />
              <span className="About-EPW">Projects</span>
              <br />
              <span className="EPW-description">
                <CountUp end={20} duration={5} />+
              </span>
            </div>
          </div>

          <div className="col-sm">
            <div className="about-cards">
              <i className="fa-solid fa-briefcase"></i>
              <br />
              <span className="About-EPW">Works at Infosys </span>
              <br />
              <span className="EPW-description">Since 2021</span>
            </div>
            <div id="downloadResumeMobileView">
              <span>
                <a href={myResume} download="">
                  Download Resume<i className="fa-solid fa-download"></i>
                </a>
              </span>
            </div>
            <br />
          </div>
          <div class="container overflow-hidden">
            <div className="row" id="SoftSkillsPallete">
              <div className="col themes-cards" style={{color:"green",backgroundColor:"#dff8bc"}} >
                Curious <br/>Personality
              </div>
              <div className="col themes-cards"  style={{color:"red" , backgroundColor:"#ffeee6"}}>
                Optimistic <br/> Nature
              </div>
              <div className="col themes-cards"  style={{color:"orange",backgroundColor:"#ffe9a6"}}>
                Time <br/> management
              </div>
              <div className="col themes-cards"  style={{color:"black",backgroundColor:"#fffcc5"}}>
                Result <br/> Oriented
              </div>
              <div className="col themes-cards"  style={{color:"black", backgroundColor:"#eee"}}>
                Problem <br/> Solving
              </div>
              
              <div className="col themes-cards"  style={{color:"brown", backgroundColor:"#e6d6ad"}}>
                Quick <br/> Learner
              </div>
              <div className="col themes-cards"  style={{color:"blue", backgroundColor:"#e2faf6"}}>
                Good <br/> Communication
              </div>
            </div>
          </div>
          <div className="about-intro-card">
            <p>
              A dedicated and passionate Full Stack .NET Developer with 2 years
              of experience.I'm always ready for new things to learn. I'm also a
              collaborative and creative front-end developer, experienced in
              React, Javascript, Html and css. I develop dynamic and responsive
              interfaces that provide an optimal user experience.
            </p>
          </div>
        </div>

        <div className="row" id="skillRow">
          <h3>Skills</h3>
          <p id="skillsintro">- With proficiency out of 5</p>
          <div className="col-sm">
            <div className="skill-card">
              <h4>Front-End</h4>
              <ul>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Bootstrap</li>
                <li>Sass</li>
              </ul>

              <ul id="ratings-front">
                <li style={{ color: "blue" }}>5/5</li>
                <li style={{ color: "red" }}>5/5</li>
                <li style={{ color: "#788adb" }}>4/5</li>
                <li style={{ color: "orange" }}>4/5</li>
                <li style={{ color: "purple" }}>5/5</li>
                <li style={{ color: "#ec86ba" }}>5/5</li>
              </ul>
              <span>
                <i style={{ color: "blue" }} className="fa-brands fa-react"></i>
              </span>
              <span>
                <i style={{ color: "red" }} className="fa-brands fa-html5"></i>
              </span>
              <span>
                <i
                  style={{ color: "#788adb" }}
                  className="fa-brands fa-css3-alt"
                ></i>
              </span>
              <span>
                <i
                  style={{ color: "orange" }}
                  className="fa-brands fa-square-js"
                ></i>
              </span>
              <span>
                <i
                  style={{ color: "purple" }}
                  className="fa-brands fa-bootstrap"
                ></i>
              </span>
              <span>
                <i
                  style={{ color: "#ec86ba" }}
                  className="fa-brands fa-sass"
                ></i>
              </span>
            </div>
          </div>

          <div className="col-sm">
            <div className="skill-card" id="skills">
              <h4>Soft Skills</h4>
              <ul>
                <li>Communication</li>
                <li>Problem Solving</li>
                <li>Adaptibility</li>
                <li>Leadership</li>
                <li>Quick Learner</li>
                <li>Time management</li>
                <li></li>
              </ul>

              <ul id="ratings-soft">
                <li style={{ color: "orange" }}>5/5</li>
                <li style={{ color: "#56d598" }}>5/5</li>
                <li style={{ color: "red" }}>4/5</li>
                <li style={{ color: "purple" }}>4/5</li>
                <li style={{ color: "brown" }}>5/5</li>
                <li style={{ color: "blue" }}>5/5</li>
              </ul>
              <span>
                <i
                  style={{ color: "orange", fontSize: "12px" }}
                  class="fa-solid fa-user-tie"
                ></i>
              </span>
              <span>
                <i
                  style={{ color: "#56d598", fontSize: "12px" }}
                  class="fa-regular fa-circle-question"
                ></i>
              </span>
              <span>
                <i
                  style={{ color: "red", fontSize: "12px" }}
                  class="fa-solid fa-bullseye"
                ></i>
              </span>
              <span>
                <i
                  style={{ color: "purple", fontSize: "12px" }}
                  class="fa-solid fa-chart-line"
                ></i>
              </span>
              <span>
                <i
                  style={{ color: "brown", fontSize: "12px" }}
                  class="fa-solid fa-bolt-lightning"
                ></i>
              </span>
              <span>
                <i
                  style={{ color: "blue", fontSize: "12px" }}
                  class="fa-regular fa-clock"
                ></i>
              </span>
            </div>
          </div>
          <div className="col-sm">
            <div className="skill-card">
              <h4>Back-End</h4>
              <ul>
                <li>SQL Server</li>
                <li>MongoDb</li>
                <li>Firebase</li>
                <li>C Sharp</li>
                <li>.NET MVC</li>
                <li>Javascript</li>
              </ul>
              <ul id="ratings-backend">
                <li style={{ color: "brown" }}>4/5</li>
                <li style={{ color: "green" }}>5/5</li>
                <li style={{ color: "orange" }}>4/5</li>
                <li style={{ color: "purple" }}>4/5</li>
                <li style={{ color: "purple" }}>5/5</li>
                <li style={{ color: "orange" }}>5/5</li>
              </ul>
              <span>
                <i
                  style={{ color: "brown", fontSize: "13px" }}
                  class="fa-solid fa-database"
                ></i>
              </span>
              <span>
                <i
                  style={{ color: "green", fontSize: "13px" }}
                  class="fa-brands fa-envira"
                ></i>
              </span>
              <span>
                <i
                  style={{ color: "orange", fontSize: "13px" }}
                  class="fa-solid fa-cloud"
                ></i>
              </span>
            
              <span style={{ color: "purple", fontSize: "13px" }}>C#</span>
            
              <span style={{ color: "purple", fontSize: "13px" }}>.NET</span>
              {"   "}
              <span>
                <i
                  style={{ color: "orange", fontSize: "13px" }}
                  class="fa-brands fa-square-js"
                ></i>
              </span>
            </div>
          </div>
        </div>

        <div className="row" id="QualiExRow">
          <h3>Qualification & Experience</h3>
          <p id="skillsintro">- My Journey </p>

          <div className="col-sm">
            <div className="QualiEx-card">
              {isQualificationClicked === true ? (
                <span className="QualiEx-heading">Qualification</span>
              ) : <span className="QualiEx-heading">Indications</span> &&
                isExperienceClicked === true ? (
                <span className="QualiEx-heading">Experience</span>
              ) : (
                <span className="QualiEx-heading">Indications</span>
              )}
              <div className="timeline-data">
                {isQualificationClicked === true ? (
                  <Qualification />
                ) : <Indications /> && isExperienceClicked === true ? (
                  <Experience />
                ) : (
                  <Indications />
                )}
              </div>
            </div>
          </div>

          <div className="col-sm QualiEx-upperCard">
            <div className="QualiEx-card">
              <div className="row inner-card-qualiEx">
                <p id="skillsintro" style={{ textAlign: "center" }}>
                  - Check my milestones{" "}
                </p>
                <div
                  onClick={() => {
                    setisQualificationClicked(true);
                    setisExperienceClicked(false);
                  }}
                  className="col-sm qualiExDiv"
                >
                  Qualification
                </div>

                <div
                  onClick={() => {
                    setisExperienceClicked(true);
                    setisQualificationClicked(false);
                  }}
                  className="col-sm qualiExDiv"
                >
                  Experience
                </div>
              </div>
            </div>
          </div>
        </div>

        <Certifications />

        <div className="row" id="awardRow">
          <h3>Awards</h3>
          <p id="skillsintro">-From Infosys </p>

          <div className="col-sm">
            <img src={Insta2022} alt="Insta2022" className="Awards" />
            <p className="Awards-details">Insta Award 2022</p>
          </div>

          <div className="col-sm">
            <img src={Insta2023} alt="Insta2023" className="Awards" />
            <p className="Awards-details">Insta Award 2023</p>
          </div>
        </div>

        <Contactme />

        <Themes />
      </div>
      <br />
      <footer>
        <span>
          Developed & managed by
          <br />
          <span id="devName">Anurag Nishad</span>
        </span>
      </footer>
    </>
  );
};

export default Home;
