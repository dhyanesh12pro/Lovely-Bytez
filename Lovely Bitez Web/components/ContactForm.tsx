"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type FormState = {
  name: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  }

  function validate() {
    const nextErrors: Partial<FormState> = {};
    if (form.name.trim().length < 2) {
      nextErrors.name = "Enter your name.";
    }
    if (!/^[0-9+\-\s()]{7,18}$/.test(form.phone.trim())) {
      nextErrors.phone = "Enter a valid phone number.";
    }
    if (form.message.trim().length < 8) {
      nextErrors.message = "Add a short message.";
    }
    return nextErrors;
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-brand bg-white p-5 shadow-soft">
      <div className="grid gap-4">
        <div>
          <label htmlFor="name" className="text-sm font-black text-charcoal">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="mt-2 w-full rounded-brand border border-charcoal/14 bg-cream px-4 py-3 text-base text-charcoal"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="mt-2 text-sm font-bold text-chilli">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-black text-charcoal">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="mt-2 w-full rounded-brand border border-charcoal/14 bg-cream px-4 py-3 text-base text-charcoal"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-2 text-sm font-bold text-chilli">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-black text-charcoal">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="mt-2 min-h-32 w-full resize-y rounded-brand border border-charcoal/14 bg-cream px-4 py-3 text-base text-charcoal"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message ? (
            <p id="message-error" className="mt-2 text-sm font-bold text-chilli">
              {errors.message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-brand bg-chilli px-5 py-4 text-base font-black text-white transition hover:bg-charcoal"
        >
          <Send className="h-5 w-5" />
          Check Message
        </button>
      </div>

      {submitted ? (
        <div className="mt-5 rounded-brand border border-crunch/45 bg-crunch/15 p-4 text-sm leading-6 text-charcoal">
          This form is ready for validation, but it is not connected to a server
          yet. Please call Lovely Bitez or message on Instagram for the fastest
          response.
        </div>
      ) : null}
    </form>
  );
}
