import React from "react";
import "./CSS/qualification.css";
import "./CSS/home.css";

function Qualification() {
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
                      <p style={{ color: "green" }}>High School</p>
                    </div>
                    <p
                      className="pt-2"
                      style={{ fontSize: "x-small", color: "green" }}
                    >
                      2014
                    </p>
                    <p className="text-muted">DPM School</p>
                  </div>
                </li>

                <li className="list-inline-item items-list">
                  <div className="px-4">
                    <div className="event-date ">
                      <p style={{ color: "orange" }}>First year</p>
                    </div>
                    <p
                      className="pt-2"
                      style={{ fontSize: "x-small", color: "orange" }}
                    >
                      2015
                    </p>
                    <p className="text-muted">DPM School</p>
                  </div>
                </li>
                <li className="list-inline-item items-list">
                  <div className="px-4">
                    <div className="event-date">
                      <p style={{ color: "blue" }}>Intermediate</p>
                    </div>
                    <p
                      className="pt-2"
                      style={{ fontSize: "x-small", color: "blue" }}
                    >
                      2016
                    </p>
                    <p className="text-muted">DPM School</p>
                  </div>
                </li>
                <li className="list-inline-item items-list">
                  <div className="px-4">
                    <div className="event-date">
                      <p style={{ color: "red" }}>BCA</p>
                    </div>
                    <p
                      className="pt-2"
                      style={{ fontSize: "x-small", color: "red" }}
                    >
                      2021
                    </p>
                    <p className="text-muted">CSJM Univ.</p>
                  </div>
                </li>
              </ul>

              <div style={{ fontSize: "xx-small" }}>
                <p>
                  I've completed my High school in 2014 with 76% after that my
                  first year got completed in 2016. Later on I've completed my
                  Intermediate in 2016 with 79%. I was a science student so i
                  decided to prepare for JEE exam, I tried 2 years but i was
                  unlucky. Eventually I decided to do my Bachelors in Computer
                  Application. It took 3 years and I have completed it in 2021.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Qualification;
