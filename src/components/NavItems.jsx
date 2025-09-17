import { NavLink } from "react-router-dom";

export default function NavItem({ to, label, isButton }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isButton
          ? `block px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
              isActive
                ? "bg-indigo-700 text-white"
                : "bg-indigo-600 text-white hover:opacity-95"
            }`
          : isActive
          ? "text-indigo-600 font-semibold block"
          : "hover:text-gray-900 transition-colors duration-300 block"
      }
    >
      {label}
    </NavLink>
  );
}
