import { useState } from "react";
import Contact from "./Contact";
import SectionHeader from "./SectionHeader";

const Contacts = ({ contacts }) => {
  const [contact, setContact] = useState(contacts);
  return (
    <div className="contacts-section">
      <SectionHeader id={"contacts-header"} text={"contact"} position={true} />
      <div className="contact-text">
        <h4 className="contact-text-1">contact me</h4>
        <h2 className="contact-text-2">do you have an idea in mind?</h2>
      </div>
      <div className="contacts">
        {contact.map((item) => {
          return <Contact key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};
export default Contacts;
