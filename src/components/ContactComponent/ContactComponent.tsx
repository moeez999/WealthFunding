import ContactForm from "../ContactForm";

const ContactComponent = () => {
  return (
    <>
      <section
        className="py-[1.5rem] px-[1.5rem] w-full rounded-[0.875rem]"
        style={{
          borderRadius: "0.875rem",
          border: "1px solid rgba(255, 255, 255, 0.10)",
          background: "rgba(255, 255, 255, 0.04)",
        }}
      >
        <div className="flex items-start w-full" id="form">
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default ContactComponent;
