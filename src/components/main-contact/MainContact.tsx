import React from "react";
import ContactForm from "../contact-form/ContactForm";

const MainContact = () => {
  return (
    <section id="contact" className="flex flex-col xl:flex-row items-center xl:items-start gap-[5rem] justify-between py-8 ">
      <h3 className="text-tertiary-h">Ask me anything or just say hi 👋...</h3>
      <ContactForm />
    </section>
  );
};

export default MainContact;
