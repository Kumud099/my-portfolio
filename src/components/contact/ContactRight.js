import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";

const ACCENT = "#5eead4";
const MUTED = "#94a3b8";
const FIELD_BG = "#060a12";
const BORDER = "rgba(148, 163, 184, 0.18)";

const SERVICE_ID = (process.env.REACT_APP_EMAILJS_SERVICE_ID || "").trim();
const TEMPLATE_ID = (process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "").trim();
const PUBLIC_KEY = (process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "").trim();

function Field({
  label,
  index,
  error,
  children,
  className = "",
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em]"
        style={{ color: MUTED }}
      >
        <span style={{ color: ACCENT }}>{String(index).padStart(2, "0")}.</span>{" "}
        {label}
      </label>
      {children}
      {error ? (
        <p className="font-mono text-[10px] text-orange-400 tracking-wide">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputBase = {
  backgroundColor: FIELD_BG,
  border: `1px solid ${BORDER}`,
  color: "#e2e8f0",
};

function ContactRight() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [sending, setSending] = useState(false);

  const emailValidation = () =>
    String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);

  const fieldError = (msg) => (errMsg === msg ? msg : "");

  const handleSend = (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setErrMsg(
        "EmailJS is not configured. Check REACT_APP_EMAILJS_* values in .env and restart npm start."
      );
      setSuccessMsg("");
      return;
    }

    if (username === "") {
      setErrMsg("Username is required!");
      setSuccessMsg("");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
      setSuccessMsg("");
    } else if (email === "") {
      setErrMsg("Please provide your Email!");
      setSuccessMsg("");
    } else if (!emailValidation()) {
      setErrMsg("Provide a valid Email!");
      setSuccessMsg("");
    } else if (subject === "") {
      setErrMsg("Please provide a Subject!");
      setSuccessMsg("");
    } else if (message === "") {
      setErrMsg("Message is required!");
      setSuccessMsg("");
    } else {
      setSending(true);
      const templateParams = {
        username,
        phoneNumber,
        email,
        subject,
        message,
      };

      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, templateParams, {
          publicKey: PUBLIC_KEY,
        })
        .then(
          () => {
            setSuccessMsg("Your message has been sent successfully!");
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
          },
          (error) => {
            const detail =
              error?.text ||
              error?.message ||
              "Failed to send your message. Please try again later.";
            setErrMsg(detail);
            setSuccessMsg("");
          }
        )
        .finally(() => setSending(false));
    }
  };

  return (
    <form
      onSubmit={handleSend}
      className="w-full rounded-sm border p-5 sm:p-7 lg:p-8 flex flex-col gap-5"
      style={{
        backgroundColor: "rgba(8, 12, 22, 0.85)",
        borderColor: BORDER,
      }}
    >
      {errMsg &&
        ![
          "Username is required!",
          "Phone number is required!",
          "Please provide your Email!",
          "Provide a valid Email!",
          "Please provide a Subject!",
          "Message is required!",
        ].includes(errMsg) && (
          <p className="font-mono text-xs text-orange-400 tracking-wide">
            {errMsg}
          </p>
        )}
      {successMsg && (
        <p
          className="font-mono text-xs tracking-wide"
          style={{ color: ACCENT }}
        >
          {successMsg}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          label="Name"
          index={1}
          error={fieldError("Username is required!")}
        >
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your name"
            className="w-full h-11 px-3 font-mono text-sm outline-none transition-[border-color] focus:border-[#5eead4]/60"
            style={inputBase}
          />
        </Field>

        <Field
          label="Phone Number"
          index={2}
          error={fieldError("Phone number is required!")}
        >
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+977 …"
            className="w-full h-11 px-3 font-mono text-sm outline-none transition-[border-color] focus:border-[#5eead4]/60"
            style={inputBase}
          />
        </Field>
      </div>

      <Field
        label="Email Address"
        index={3}
        error={
          fieldError("Please provide your Email!") ||
          fieldError("Provide a valid Email!")
        }
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full h-11 px-3 font-mono text-sm outline-none transition-[border-color] focus:border-[#5eead4]/60"
          style={inputBase}
        />
      </Field>

      <Field
        label="Subject"
        index={4}
        error={fieldError("Please provide a Subject!")}
      >
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="What is this about?"
          className="w-full h-11 px-3 font-mono text-sm outline-none transition-[border-color] focus:border-[#5eead4]/60"
          style={inputBase}
        />
      </Field>

      <Field
        label="Message Body"
        index={5}
        error={fieldError("Message is required!")}
      >
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project or idea…"
          rows={7}
          className="w-full px-3 py-3 font-mono text-sm outline-none resize-none transition-[border-color] focus:border-[#5eead4]/60"
          style={inputBase}
        />
      </Field>

      <button
        type="submit"
        disabled={sending}
        className="mt-1 inline-flex items-center justify-center gap-2 h-12 px-6 font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.14em] transition-opacity hover:opacity-90 disabled:opacity-60"
        style={{ backgroundColor: ACCENT, color: "#041016" }}
      >
        <FiSend className="text-base" aria-hidden="true" />
        {sending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

export default ContactRight;
