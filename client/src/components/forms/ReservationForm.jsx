import { useState } from "react";
import { occasions } from "../../data/site.js";
import { postJson } from "../../utils/api.js";
import { formatTime, timeSlots, todayInputValue } from "../../utils/format.js";
import { validateReservation } from "../../utils/validate.js";
import Button from "../ui/Button.jsx";
import Field from "./Field.jsx";

const initial = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  occasion: "",
  requests: "",
};

const occasionForExperience = {
  "Family Celebrations": "Family gathering",
  "Corporate Gatherings": "Business",
  "Private Dining": "Celebration",
  "Chef's Tasting Experience": "Just dinner",
};

export default function ReservationForm({ experience = "" }) {
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
    const note = experience ? `Experience: ${experience}` : "";
    const requests = [note, values.requests].filter(Boolean).join("\n");
    const { errors: nextErrors, value } = validateReservation({
      ...values,
      occasion: values.occasion || occasionForExperience[experience] || "",
      requests,
    });
    setErrors(nextErrors);
    setMessage("");
    if (Object.keys(nextErrors).length) {
      setStatus("error");
      const first = Object.keys(nextErrors)[0];
      document.getElementById(first)?.focus();
      return;
    }

    setStatus("loading");
    try {
      await postJson("/reservations", value);
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
        <p className="mt-4 max-w-md text-lg">Your reservation request has been received. Our team will contact you shortly to confirm your table.</p>
        {experience ? <p className="mt-3 font-display text-2xl">{experience}</p> : null}
        <p className="mt-4 text-sm text-brown">This is a portfolio demonstration. No real restaurant will call.</p>
        <Button className="mt-8" onClick={() => { setValues(initial); setStatus("idle"); }}>
          Make another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6">
      {experience ? (
        <p className="border border-brass/50 bg-ivory-deep/60 px-4 py-4">
          <span className="text-[11px] uppercase tracking-[0.16em] text-brown">Experience</span>
          <span className="mt-1 block font-display text-3xl">{experience}</span>
        </p>
      ) : null}
      {message ? (
        <p role="alert" className="border border-terracotta/40 bg-terracotta/10 px-4 py-3 text-sm">
          {message}
        </p>
      ) : null}
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <input id="name" name="name" autoComplete="name" value={values.name} onChange={onChange} className="control" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} required />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={onChange} className="control" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} required />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={onChange} className="control" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} required />
        </Field>
        <Field id="guests" label="Number of Guests" error={errors.guests}>
          <select id="guests" name="guests" value={values.guests} onChange={onChange} className="control" aria-invalid={Boolean(errors.guests)} aria-describedby={errors.guests ? "guests-error" : undefined}>
            {Array.from({ length: 10 }, (_, index) => index + 1).map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
        </Field>
        <Field id="date" label="Date" error={errors.date}>
          <input id="date" name="date" type="date" min={todayInputValue()} value={values.date} onChange={onChange} className="control" aria-invalid={Boolean(errors.date)} aria-describedby={errors.date ? "date-error" : "date-hint"} required />
          <p id="date-hint" className="mt-2 text-sm text-brown">
            Monday is closed. Lunch 12:00–3:30. Dinner 6:30–11:30.
          </p>
        </Field>
        <Field id="time" label="Time" error={errors.time}>
          <select id="time" name="time" value={values.time} onChange={onChange} className="control" aria-invalid={Boolean(errors.time)} aria-describedby={errors.time ? "time-error" : undefined} required>
            <option value="">Select a time</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {formatTime(slot)}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field id="occasion" label="Occasion" error={errors.occasion}>
        <select id="occasion" name="occasion" value={values.occasion} onChange={onChange} className="control">
          <option value="">No particular occasion</option>
          {occasions.map((occasion) => (
            <option key={occasion} value={occasion}>
              {occasion}
            </option>
          ))}
        </select>
      </Field>
      <Field id="requests" label="Special Requests" error={errors.requests}>
        <textarea id="requests" name="requests" rows="4" maxLength="500" value={values.requests} onChange={onChange} className="control" aria-invalid={Boolean(errors.requests)} aria-describedby={errors.requests ? "requests-error" : undefined} />
      </Field>
      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Sending…" : "Request a Reservation"}
      </Button>
    </form>
  );
}
