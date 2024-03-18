import { React, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./CSS/contactme.css";
import ContacPic from "./images/contactpic.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contactme = () => {
  const notify = () =>
    toast.success(
      "Your message has been sent. Please expect reply within 24 hours.",
      {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        position: toast.POSITION.TOP_CENTER,
        className:'toast-message'
      }
    );

  const form = useRef();

  const [isChecked, setisChecked] = useState(false);
  const handleChange = (e) => {
  if(e.target.checked){
    e.target.form[0].value ="Anonymous";
    e.target.form[2].value ="anonymous@mail.com";
  }
  else{
    e.target.form[0].value ="";
    e.target.form[2].value ="";
    form.current.reset();
  }
 


    setisChecked(!isChecked);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,

        form.current,
        process.env.REACT_APP_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="container" id="contactmeSegment">
        <div className="row contactme-upper-card" id="contactRow">
          <h3>Contact me</h3>
          <p id="skillsintro">-Email me down there</p>
          <br />
          <div className="col-sm">
            <div className="skill-card contact-card">
              <h4>Connect with me</h4>

              <form ref={form} onSubmit={sendEmail}>
                <div className="form-outline mb-2">
                  <label className="form-label" for="user_name">
                    {" "}
                    Your Name
                  </label>
                  {isChecked === true ? (
                    <input
                      type="text"
                      id="user_name"
                      placeholder="Enter your good name"
                      className="form-control"
                      name="from_name"
                      
                      required
                    />
                  ) : (
                    <input
                      type="text"
                      id="user_name"
                      placeholder="Enter your good name"
                      className="form-control"
                      name="from_name"
                      defaultValue=""
                      required
                    />
                  )}
                  <input
                    type="text"
                    id="to_name"
                    className="form-control"
                    value="Anurag"
                    name="to_name"
                    hidden
                  />
                </div>

                <div className="form-outline mb-2">
                  <label className="form-label" for="user_email">
                    {" "}
                    Your Email
                  </label>
                  {isChecked === true ? (
                    <input
                      type="email"
                      id="user_email"
                      placeholder="Enter your email"
                      className="form-control"
                      name="reply_to"
                      
                      required
                    />
                  ) : (
                    <input
                      type="email"
                      id="user_email"
                      placeholder="Enter your email"
                      className="form-control"
                      name="reply_to"
                      defaultValue=""
                      required
                    />
                  )}
                </div>

                <div className="form-outline mb-2">
                  <label className="form-label" name="message" for="message">
                    Message for me
                  </label>
                  <textarea
                    className="form-control"
                    style={{ fontSize: "smaller" }}
                    id="message"
                    placeholder="Write your message here"
                    rows="4"
                    name="message"
                    height="30"
                    width="50"
                    required
                  ></textarea>
                </div>

                <br />
                <div className="form-check d-flex justify-content-center">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="checkBox"
                    onChange={handleChange}
                  />
                  <label
                    style={{ color: "darkslateblue" }}
                    className="form-check-label"
                    for="checkBox"
                  >
                    Want to stay Anonymous?
                  </label>
                </div>

                <button type="submit" className="sendbtn" value="Send">
                  Send message
                </button>
                <ToastContainer />
              </form>
            </div>
          </div>

          <div className="col-sm">
            <div className="skill-card pic-area-card">
              <h4>A message from me</h4>

              <div className="col-sm ">
                <img
                  src={ContacPic}
                  alt="contact_pic"
                  className="Contact-pic"
                />
              </div>
              <br />

              <div>
                <p id="message-from-me">
                  Hi there, you can message me if you feel to. You need to just
                  simply click on the "Send message" button after providing your
                  email and name.
                  <br />
                  <br />
                  <ol>
                    <li>All fields are required.</li>
                    <li>Working email Id is needed, if you want a reply.</li>
                    <li>
                      If you want to keep yourself "Anonymous", just click on
                      the check box.
                    </li>
                    <li>
                      Being "Anonymous" will create a dummy username and email.
                    </li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactme;
