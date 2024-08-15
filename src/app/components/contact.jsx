import ContactImg from "../utilities/ContactImg";
import ContactInfo from "../utilities/ContactInfo";

const Contact = () => {
  return (
    <div className="w-full max-w-[1950px] mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 md:px-10 px-5">
      <ContactInfo />
      <ContactImg />
    </div>
  );
};

export default Contact;
