import ContactForm from "../components/contact-form";

export default function Contact() {
  return (
    <div className="bg-purplelight p-8 pt-5 lg:p-10 rounded-xl text-[17px]">
      <div className="sticky top-0 -mx-2 px-3 pt-5 pb-2 mb-4 bg-purplelight border-b-2 border-black md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="lg:sr-only">CONTACT</h2>
      </div>
      <p className="text-purpledark">
        Voel je vrij om me een berichtje te sturen. Een vraag, een idee, of
        gewoon even laten weten wat je van mijn portfolio vindt: ik hoor het
        graag!
      </p>
      <ContactForm />
    </div>
  );
}
