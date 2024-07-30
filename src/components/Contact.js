import emailjs from "emailjs-com";
import { useState } from "react";
import SectionContainer from "./SectionContainer";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) => {
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
    } else {
      emailjs
        .send(
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };

  return (
    <SectionContainer
      name={"contact"}
      title="CONTACT ME"
      subTitle={"GET IN TOUCH"}
      leftImage="static/img/title-4.jpg"
    >
      <div className="row">
        <div className="col-lg-12 m-30px-b sm-m-15px-b">
          <div className="contact-form">
            <h4 className="dark-color font-alt m-20px-b">Get in Touch</h4>
            <form className="contactform" onSubmit={onSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      id="name"
                      name="name"
                      onChange={onChange}
                      value={name}
                      type="text"
                      placeholder="Name"
                      className="validate form-control"
                      required
                    />
                    <span className="input-focus-effect theme-bg" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      id="email"
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={onChange}
                      value={email}
                      className="validate form-control"
                      required
                    />
                    <span className="input-focus-effect theme-bg" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      id="message"
                      placeholder="Your Message"
                      name="message"
                      onChange={onChange}
                      value={message}
                      className="form-control"
                      required
                    />
                    <span className="input-focus-effect theme-bg" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="send">
                    <button className="btn btn-theme" type="submit">
                      Send Message
                    </button>
                  </div>
                  <span
                    id="success_message"
                    className="text-success mt-3"
                    style={{ display: success ? "block" : "none" }}
                  >
                    Message sent successfully!
                  </span>
                  <span
                    id="error_message"
                    className="text-danger mt-3"
                    style={{ display: error ? "block" : "none" }}
                  >
                    Please fill out all fields.
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 m-15px-tb">
          <div className="contact-info">
            <i className="theme-color ti-location-pin" />
            <h6 className="dark-color font-alt">Address</h6>
            <p>126, Street Sadrbaal, Jammal, Monastir, Tunisie.</p>
          </div>
        </div>
        <div className="col-md-4 m-15px-tb">
          <div className="contact-info">
            <i className="theme-color ti-mobile" />
            <h6 className="dark-color font-alt">Phone</h6>
            <p>+216 50659115</p>
          </div>
        </div>
        <div className="col-md-4 m-15px-tb sm-m-0px-b">
          <div className="contact-info">
            <i className="theme-color ti-email" />
            <h6 className="dark-color font-alt">Email</h6>
            <p>khatibimenkhatib10@gmail.com</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
