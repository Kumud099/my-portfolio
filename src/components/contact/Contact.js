import React from "react";
import Title from "../layout/Title";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col sm:flex-row justify-between gap-10 sm:gap-16">
          {/* ContactLeft and ContactRight are stacked on small screens, side-by-side on larger screens */}
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
    </section>
  );
};

export default Contact;
