import React, { useState, useEffect } from "react";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// Pages
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ServicesPage from "../pages/Services";
import NotFound from "../pages/NotFound";
import ContactForm from "../ContactForm";

// Components
import NavItem from "../components/NavItems";
import TikTokIcon from "../components/Tik";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function MacsHub() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900 antialiased">
      <ScrollToTop />

      {/* NAVBAR */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <NavLink to="/" aria-label="Mac's Hub home">
          <img
            src="/images/newlogo.png"
            alt="Mac's Hub Logo"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex gap-6 items-center text-sm text-gray-700"
          aria-label="Primary"
        >
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About Us" />
          <NavItem to="/services" label="Services" />
          <NavItem to="/contact" label="Contact Us" isButton />
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg border border-gray-200"
          onClick={() => setMobileOpen((s) => !s)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden px-6 pb-4 space-y-3"
          role="menu"
        >
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About Us" />
          <NavItem to="/services" label="Services" />
          <NavItem to="/contact" label="Contact Us" isButton />
        </div>
      )}

      {/* ROUTES */}
      <main className="max-w-6xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45 }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>

        {/* FOOTER */}
        <footer className="mt-12 py-8 text-sm text-gray-500 border-t">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/newlogo.png"
                alt="Mac's Hub Logo"
                className="h-12 md:h-14 w-auto object-contain"
              />
              <span>© {new Date().getFullYear()} Mac's Hub</span>
            </div>

            <div className="flex gap-6 items-center">
              <a href="#" className="hover:text-gray-900">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-900">
                Terms
              </a>
              <a
                href="tel:+233550103277"
                className="flex items-center gap-1 text-indigo-600 hover:underline"
              >
                <Phone className="w-4 h-4" /> +233 (550) 103-277
              </a>
              <a
                href="https://wa.me/233550103277"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-green-600 hover:underline"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href="https://www.tiktok.com/@macneroboss"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-pink-600 hover:underline"
              >
                <TikTokIcon className="w-4 h-4" /> TikTok
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
