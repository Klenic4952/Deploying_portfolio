"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_CONTACT_FORM);

  if (state.succeeded) {
    return (
      <div className="p-10 mt-10 font-semibold bg-beige rounded-xl">
        <p>Hartelijk dank, je bericht is verzonden!</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-beige rounded-xl p-5 mt-10 mb-5"
    >
      <input
        required
        type="text"
        placeholder="Naam *"
        name="firstname"
        id="firstname"
      />
      <ValidationError
        prefix="Firstname"
        field="firstname"
        errors={state.errors}
      />
      <input
        required
        id="email"
        type="email"
        placeholder="Email *"
        name="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        required
        id="message"
        placeholder="Bericht *"
        name="message"
        className="h-28"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Verzend bericht
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
