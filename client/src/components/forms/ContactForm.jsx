import { useState } from "react";
import { postJson } from "../../utils/api.js";
import { validateContact } from "../../utils/validate.js";
import Button from "../ui/Button.jsx";
import Field from "./Field.jsx";

const initial = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { errors: nextErrors, value } = validateContact(values);
    setErrors(nextErrors);
    setMessage("");
    if (Object.keys(nextErrors).length) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      await postJson("/contact", value);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrors(error.fields || {});
      setMessage(error.message);
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="border border-sand bg-ivory-deep/50 px-6 py-10">
        <p className="font-display text-5xl">Thank you.</p>
        <p className="mt-4 text-lg">Your note has been received. Because RIWAYAT is a portfolio demonstration, no restaurant will write back.</p>
        <Button className="mt-8" onClick={() => { setValues(initial); setStatus("idle"); }}>
          Write another note
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6">
      {message ? (
        <p role="alert" className="border border-terracotta/40 bg-terracotta/10 px-4 py-3 text-sm">
          {message}
        </p>
      ) : null}
      <Field id="contact-name" label="Name" error={errors.name}>
        <input id="contact-name" name="name" autoComplete="name" value={values.name} onChange={onChange} className="control" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} required />
      </Field>
      <Field id="contact-email" label="Email" error={errors.email}>
        <input id="contact-email" name="email" type="email" autoComplete="email" value={values.email} onChange={onChange} className="control" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} required />
      </Field>
      <Field id="contact-message" label="Message" error={errors.message}>
        <textarea id="contact-message" name="message" rows="5" value={values.message} onChange={onChange} className="control" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} required />
      </Field>
      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Sending…" : "Send a Note"}
      </Button>
    </form>
  );
}
