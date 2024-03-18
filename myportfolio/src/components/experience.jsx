import React from 'react'
import './CSS/home.css'
import "./CSS/qualification.css";
import "./CSS/home.css";


function Experience() {
  return (
    <>
    <div className="container-fluid py-5">
    <p id="QualiExp-scroll-down-msg">- Scroll down for more details <i className="fa-solid fa-computer-mouse"></i> </p>

      <div className="timeline">
        <div className="col-lg-12">
          <div className="horizontal-timeline">
            <ul className="list-inline items">
              <li className="list-inline-item items-list">
                <div className="px-4">
                  <div className="event-date">
                    <p style={{ color: "green" }}>PMKVY</p>
                  </div>
                  <p
                    className="pt-2"
                    style={{ fontSize: "x-small", color: "green" }}
                  >
                    2018
                  </p>
                  <p className="text-muted">PMKVY <br/>Camp</p>
                </div>
              </li>

              <li className="list-inline-item items-list">
                <div className="px-4">
                  <div className="event-date ">
                    <p style={{ color: "orange" }}>Operations Executive</p>
                  </div>
                  <p
                    className="pt-2"
                    style={{ fontSize: "x-small", color: "orange" }}
                  >
                    2021
                  </p>
                  <p className="text-muted">Infosys<br/>Pune</p>
                </div>
              </li>
              <li className="list-inline-item items-list">
                <div className="px-4">
                  <div className="event-date">
                    <p style={{ color: "blue" }}>Systems Associate</p>
                  </div>
                  <p
                    className="pt-2"
                    style={{ fontSize: "x-small", color: "blue" }}
                  >
                    2023
                  </p>
                  <p className="text-muted">Infosys<br/>Pune</p>
                </div>
              </li>
              <li className="list-inline-item items-list">
                <div className="px-4">
                  <div className="event-date">
                    <p style={{ color: "red" }}>Sr. Systems Associate</p>
                  </div>
                  <p
                    className="pt-2"
                    style={{ fontSize: "x-small", color: "red" }}
                  >
                  Present
                  </p>
                  <p className="text-muted">Infosys<br/>Pune</p>
                </div>
              </li>
            </ul>

            <div style={{ fontSize: "xx-small" }}>
              <p>
               I was the candidate of PMKVY in 2018 , where I got certified with its certification on the Knowledge of Computer Hardware & Software.
               In 2021, after completing my BCA , I got selected at Infosys as Operations Executive. Now I'm working as a Senior Systems Associate.</p>
               <p>Reference<br/><p style={{color:"purple"}}>*PMKVY - Pradhan Mantri Kaushal Vikas Yojna</p></p>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Experience
