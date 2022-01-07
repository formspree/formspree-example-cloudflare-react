import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mqldaqwx");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form method="POST" onSubmit={handleSubmit} className="form">
      <label htmlFor="name">Full Name</label>
      <input id="name" type="text" name="name" required />
      <ValidationError
        prefix="Name"
        field="name"
        className="fieldErrors"
        errors={state.errors}
      />

      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" required />
      <ValidationError
        prefix="Email"
        field="email"
        className="fieldErrors"
        errors={state.errors}
      />

      <label for="message">Message</label>
      <textarea id="message" name="message" required></textarea>
      <ValidationError
        prefix="Message"
        field="message"
        className="fieldErrors"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      <ValidationError className="formErrors" errors={state.errors} />
    </form>
  );
}
