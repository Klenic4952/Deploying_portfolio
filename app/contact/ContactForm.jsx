"use client";

export default function ContactForm() {
  return (
    <form
      name="contact"
      action="./success"
      method="POST"
      data-netlify="true"
      className="bg-beige rounded-xl p-5 my-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="yourname">Naam *</label> <br />
        <input
          required
          type="text"
          placeholder="Je naam"
          name="firstname"
          id="firstname"
        />
      </p>
      <p>
        <label htmlFor="youremail">Email *</label>
        <input
          required
          type="email"
          placeholder="Je mail-adres"
          name="email"
          id="youremail"
        />
      </p>
      <p>
        <label htmlFor="yourmessage">Bericht *</label>
        <textarea
          required
          placeholder="Je bericht"
          name="message"
          id="yourmessage"
          className="h-28"
        />
      </p>
      <p>
        <button type="submit">Verzenden</button>
      </p>
    </form>
  );
}
