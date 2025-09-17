// src/components/Testimonial.jsx
export default function Testimonial({ name, quote }) {
  return (
    <blockquote className="p-6 bg-white rounded-2xl shadow">
      <p className="text-sm text-gray-700">“{quote}”</p>
      <footer className="mt-4 text-xs text-gray-500">— {name}</footer>
    </blockquote>
  );
}
