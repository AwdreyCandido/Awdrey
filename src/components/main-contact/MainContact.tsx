import React from "react";
import ContactForm from "../contact-form/ContactForm";

const MainContact = () => {
  return (
    <section className="flex justify-between py-8  px-[11rem]">
      <p className="text-tertiary-h">Ask me anything or just say hi 👋...</p>
      <ContactForm />
    </section>
  );
};

export default MainContact;
