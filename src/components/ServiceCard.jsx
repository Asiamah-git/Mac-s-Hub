// src/components/ServiceCard.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceCard({ icon, title, desc, details }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleContact = () => {
    // Navigate to contact page with pre-filled service name
    navigate("/contact", { state: { service: title } });
  };

  return (
    <article className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition-all">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-md bg-indigo-50 flex items-center justify-center">
          {icon}
        </div>
        <h4 className="font-semibold">{title}</h4>
      </div>

      <p className="mt-2 text-sm text-gray-600">{desc}</p>

      {/* Accordion toggle */}
      {details && (
        <>
          <button
            onClick={() => setOpen(!open)}
            className="mt-3 text-indigo-600 text-sm font-medium hover:underline"
          >
            {open ? "Hide details" : "View details"}
          </button>

          {open && (
            <div className="mt-3 text-sm border-t pt-3 space-y-3">
              <p className="text-gray-700">{details}</p>
              <button
                onClick={handleContact}
                className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition"
              >
                Contact Us About {title}
              </button>
            </div>
          )}
        </>
      )}
    </article>
  );
}
