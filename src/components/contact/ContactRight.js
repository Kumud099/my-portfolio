import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactRight() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Email validation
  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();

    // Validation checks
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please provide your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Provide a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please provide a Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      // Send email using EmailJS
      const templateParams = {
        username,
        phoneNumber,
        email,
        subject,
        message,
      };

      emailjs
        .send(
          "service_3ydvzll", // Replace with your Service ID
          "template_ptguq0o", // Replace with your Template ID
          templateParams,
          "XdCvhH2Zq7ZqmRgF7" // Replace with your Public Key
        )
        .then(
          (response) => {
            setSuccessMsg("Your message has been sent successfully!");
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
          },
          (error) => {
            setErrMsg("Failed to send your message. Please try again later.");
          }
        );
    }
  };

  return (
    <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
      <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
        {errMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
            {errMsg}
          </p>
        )}
        {successMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
            {successMsg}
          </p>
        )}
        <div className="w-full flex flex-col lgl:flex-row gap-10">
          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Your name
            </p>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className={`${
                errMsg === "Username is required!" && "outline-designColor"
              } contactInput`}
              type="text"
            />
          </div>
          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Phone Number
            </p>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              className={`${
                errMsg === "Phone number is required!" && "outline-designColor"
              } contactInput`}
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={`${
              errMsg === "Please provide your Email!" && "outline-designColor"
            } contactInput`}
            type="email"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Subject
          </p>
          <input
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            className={`${
              errMsg === "Please provide a Subject!" && "outline-designColor"
            } contactInput`}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Message
          </p>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className={`${
              errMsg === "Message is required!" && "outline-designColor"
            } contactTextArea`}
            cols="30"
            rows="8"
          ></textarea>
        </div>
        <div className="w-full">
          <button
            onClick={handleSend}
            className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactRight;
