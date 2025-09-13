// src/components/ContactForm.jsx
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  const validate = () => {
    const e = {};
    if (!formState.name.trim()) e.name = "Please enter your name.";
    if (!formState.email.trim()) {
      e.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!formState.message.trim()) e.message = "Please tell us about your challenge.";
    else if (formState.message.trim().length < 10) e.message = "Please provide a bit more detail (min 10 chars).";
    return e;
  };

  const handleChange = (e) => {
    setFormState((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);

    if (Object.keys(validation).length === 0) {
      const subject = encodeURIComponent(`Inquiry from ${formState.name} — Mac's Hub`);
      const body = encodeURIComponent(`${formState.message}\n\nContact: ${formState.email}`);
      window.location.href = `mailto:macshubcompany@gmail.com?subject=${subject}&body=${body}`;

      setToast("✅ Your message has been sent successfully!");
      setTimeout(() => setToast(null), 4000);

      setFormState({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="relative">
      {/* SEO Metadata for Contact Page */}
      <Helmet>
        <title>Contact Us | Mac's Hub Startup Consultancy</title>
        <meta
          name="description"
          content="Get in touch with Mac's Hub today. Reach out via email, phone, or WhatsApp to discuss your startup challenges and discover how we can help you succeed."
        />
        {/* Open Graph */}
        <meta property="og:title" content="Contact Us | Mac's Hub" />
        <meta property="og:description" content="Mac's Hub is here to support your startup journey. Contact us today." />
        <meta property="og:image" content="/images/newlogo.png" />
        <meta property="og:url" content="https://yourdomain.com/contact" />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Mac's Hub" />
        <meta name="twitter:description" content="Get in touch with Mac's Hub today. We're here to help startups thrive." />
        <meta name="twitter:image" content="/images/newlogo.png" />
      </Helmet>

      <form onSubmit={handleSubmit} noValidate className="max-w-md w-full grid gap-3">
        <input
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Your name"
          aria-label="Name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`px-4 py-3 rounded-lg border ${errors.name ? "border-red-300" : "border-gray-200"}`}
        />
        {errors.name && <div id="name-error" className="text-xs text-red-600">{errors.name}</div>}

        <input
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="Email"
          aria-label="Email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`px-4 py-3 rounded-lg border ${errors.email ? "border-red-300" : "border-gray-200"}`}
        />
        {errors.email && <div id="email-error" className="text-xs text-red-600">{errors.email}</div>}

        <textarea
          id="message"
          name="message"
          rows={4}
          value={formState.message}
          onChange={handleChange}
          placeholder="Tell us about your challenge"
          aria-label="Message"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`px-4 py-3 rounded-lg border ${errors.message ? "border-red-300" : "border-gray-200"}`}
        />
        {errors.message && <div id="message-error" className="text-xs text-red-600">{errors.message}</div>}

        <button
          type="submit"
          disabled={!!toast}
          className={`px-5 py-3 rounded-full font-medium transition ${
            toast
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
        >
          Send Inquiry
        </button>
      </form>

      {/* Toast Notification */}
      {toast && (
        <div
          className="fixed bottom-5 right-5 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in"
          aria-live="polite"
        >
          {toast}
        </div>
      )}
    </div>
  );
}
