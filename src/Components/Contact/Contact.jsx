import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import insta_icon from '../../assets/insta_icon.jpg'
import linkedin_icon from '../../assets/linkedin_icon.jpg'
import leetcode from '../../assets/leetcode.png'
import github from '../../assets/github.png'
import codeforces from '../../assets/codeforces.png'


const Contact = ()=> {


    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          alert("Email Sent Successfully");
        //   console.log("Success", data);
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };



    return (
      <div id="contact" className="contact">
        <div className="contact-title">
          <h1>Get in Touch</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's Connect</h1>
            <p>
              {" "}
              Always eager to discuss new projects, opportunities, or just chat.{" "}
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src={mail_icon} alt="" />{" "}
                <p>yashvardhangupta318@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={call_icon} alt="" /> <p>9873656048</p>
              </div>
              <div className="contact-detail">
                <img src={location_icon} alt="" /> <p>Delhi</p>
              </div>
              <div style={{ display: "flex" }}>
                <div
                  className="contact-detail"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    margin: "20px 50px",
                    marginLeft: "0",
                  }}
                >
                  <a
                    href="https://www.instagram.com/yashvardhann15/"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={insta_icon}
                      style={{ width: "24px", height: "24px" }}
                      alt=""
                    />{" "}
                    <p style={{ margin: 0, marginLeft: "10px" }}>Instagram</p>
                  </a>
                </div>
                <div
                  className="contact-detail"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/yashvardhangupta152004/"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={linkedin_icon}
                      style={{ width: "24px", height: "24px" }}
                      alt=""
                    />{" "}
                    <p style={{ margin: 0, marginLeft: "10px" }}>LinkedIn</p>
                  </a>
                  <a
                    href="https://github.com/yashvardhann15/"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={github}
                      style={{ width: "24px", height: "24px" }}
                      alt=""
                    />{" "}
                    <p style={{ margin: 0, marginLeft: "10px" }}>Github</p>
                  </a>
                                    <a
                    href="https://leetcode.com/u/yashvardhannn152004/"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={leetcode}
                      style={{ width: "24px", height: "24px" }}
                      alt=""
                    />{" "}
                    <p style={{ margin: 0, marginLeft: "10px" }}>Leetcode</p>
                  </a>
                                                      <a
                    href="https://codeforces.com/profile/yashvardhann15"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={codeforces}
                      style={{ width: "24px", height: "24px" }}
                      alt=""
                    />{" "}
                    <p style={{ margin: 0, marginLeft: "10px" }}>Codeforces</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter Your Email" name="email" />
            <label htmlFor="">Write your message here</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter Your Message"
            ></textarea>
            <button className="contact-submit" type="submit">
              Submit Now
            </button>
          </form>
        </div>
      </div>
    );
}

export default Contact
