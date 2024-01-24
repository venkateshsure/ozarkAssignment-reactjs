import Header from "../Header";

import "./index.css";

const Contact = () => {
  const onSubmitForm = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Header />
      <div className="contact-con">
        <div className="fir-con-contact">
          <p className="contact-para">CONTACT US</p>
          <span className="contact-span">Home | Contact us</span>
        </div>
        <div className="sec-con-contact">
          <p className="contact-para">Interested in discussing?</p>
          <form onSubmit={onSubmitForm} className="form-con">
            <div className="name-con">
              <label htmlFor="name">Name* </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                className="input"
              />
            </div>
            <div className="name-con">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="input"
              />
            </div>
            <div className="name-con">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                placeholder="Enter Your Subject"
                className="input"
              />
            </div>
            <div className="name-con">
              <label htmlFor="phone">Phone </label>
              <input
                type="number"
                id="phone"
                placeholder="Enter Your Number"
                className="input"
              />
            </div>
            <div className="message-con">
              <label htmlFor="message">Message</label>
              <textarea
                placeholder="Enter Your Message"
                className="message-input"
              ></textarea>
            </div>
            <button className="send-mes-btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
        <div className="third-con-contact"></div>
      </div>
    </>
  );
};

export default Contact;
