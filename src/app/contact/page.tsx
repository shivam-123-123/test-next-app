"use client";

import { useState } from "react";
import { handleSubmitForm } from "./action";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [disbsled , setDisbaled] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setDisbaled(true);
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      await handleSubmitForm(name, email, message);
      setSent(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }finally{
      setDisbaled(false)
    }
  };

  return (
    <main>
      <section className="hero">
        <h1>Contact</h1>
        <p className="sub">
          Send us a message and we'll get back to you.
        </p>
      </section>

      <section className="card wide">
        {sent ? (
          <div className="notice">
            <strong>Thanks</strong>
            <p>We received your message.</p>

            <button 
              className="btn ghost"
              onClick={() => setSent(false)}
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Name
              <input
                name="name"
                required
                placeholder="Ada Lovelace"
              />
            </label>

            <label>
              Email
              <input
                name="email"
                type="email"
                required
                placeholder="ada@example.com"
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                required
                placeholder="Hello..."
              />
            </label>

            <button className="btn" type="submit" disabled={disbsled}>
              Send message
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
