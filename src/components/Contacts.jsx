import { useState, useEffect } from "react";
import Contact from "./Contact";
import SectionHeader from "./SectionHeader";
import { useElementOnScreen } from "../hooks/useElementOnScreen";

const Contacts = ({ contacts, visibleElement, setVisibleElement }) => {
  const [contact, setContact] = useState(contacts);
  const { containerRef, isVisible } = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: [0.25, 0.5, 0.75],
  });

  useEffect(() => {
    setVisibleElement({ ...visibleElement, contact: isVisible });
  }, [isVisible]);

  return (
    <section className="contacts-section" id="contact" ref={containerRef}>
      <SectionHeader id={"contacts-header"} text={"contact"} position={true} />
      <div className="contact-text">
        <h4 className="contact-text-1">contact me</h4>
        <h2 className="contact-text-2">do you have an idea in mind?</h2>
      </div>
      <div className="contacts">
        {contact.map((item, index) => {
          return <Contact key={item.id} {...item} delay={index} />;
        })}
      </div>
    </section>
  );
};
export default Contacts;
