import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const location = useLocation();
  const serviceFromRoute = location.state?.service || "";

  const [service, setService] = useState(serviceFromRoute);
  const [message, setMessage] = useState("");

  // Set default message when service comes from ServiceCard
  useEffect(() => {
    if (serviceFromRoute) {
      setMessage(`Hello, I’m interested in the ${serviceFromRoute} service.`);
    }
  }, [serviceFromRoute]);

  const services = [
    "Product Strategy",
    "Go-to-Market Planning",
    "Fractional Leadership",
    "Business Ideation",
    "Market Research",
    "Fundraising Support",
    "Operations Setup",
    "Founder Coaching",
    "Passport Assistance",
    "Birth Certificates",
    "Driver’s Licenses",
    "Business Certificates",
    "Permits",
  ];

  return (
    <form className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

      {/* Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          required
          className="mt-1 w-full border rounded-lg px-3 py-2"
          placeholder="Your full name"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          required
          className="mt-1 w-full border rounded-lg px-3 py-2"
          placeholder="you@example.com"
        />
      </div>

      {/* Service Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Service</label>
        <select
          className="mt-1 w-full border rounded-lg px-3 py-2"
          value={service}
          onChange={(e) => {
            setService(e.target.value);
            setMessage(
              e.target.value
                ? `Hello, I’m interested in the ${e.target.value} service.`
                : ""
            );
          }}
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          rows={5}
          required
          className="mt-1 w-full border rounded-lg px-3 py-2"
          placeholder="Write your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
      >
        Send Message
      </button>
    </form>
  );
}
