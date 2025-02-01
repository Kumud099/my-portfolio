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
      <div className="w-full max-w-5xl mx-auto">
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Stacks vertically on small screens, side by side on larger screens */}
          <div className="w-full md:w-[200%] min-h-[400px]">
            <ContactLeft />
          </div>
          <div className="w-full md:w-[200%] min-h-[400px]">
            <ContactRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
