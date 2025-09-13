import React, { useState, useEffect } from "react";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";
import {
  Sparkles,
  Target,
  Users,
  Lightbulb,
  Globe,
  DollarSign,
  Briefcase,
  BookOpen,
  FileText,
  Menu,
  X,
  Phone,
  MessageCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

/* ---------- ScrollToTop ---------- */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

/* ---------- Main Layout ---------- */
export default function MacsHub() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900 antialiased">
      <ScrollToTop />

      {/* NAV */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-4">
          <img
            src="images/newlogo.png"
            alt="Mac's Hub Logo"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-sm text-gray-700">
          <NavItem to="/about" label="About Us" />
          <NavItem to="/services" label="Services" />
          <NavItem to="/contact" label="Contact Us" isButton />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg border border-gray-200"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          <NavItem to="/about" label="About Us" />
          <NavItem to="/services" label="Services" />
          <NavItem to="/contact" label="Contact Us" isButton />
        </div>
      )}

      {/* Routes with smooth transitions */}
      <main className="max-w-6xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <Promotions />
                    <Gallery />
                  </>
                }
              />
              <Route
                path="/about"
                element={
                  <>
                    <About />
                    <Testimonials />
                  </>
                }
              />
              <Route
                path="/services"
                element={
                  <>
                    <Services />
                    <IdentityServices />
                  </>
                }
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>

        {/* FOOTER */}
        <footer className="mt-12 py-8 text-sm text-gray-500 border-t">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src="images/newlogo.png"
                alt="Mac's Hub Logo"
                className="h-16 md:h-20 w-auto object-contain"
              />
              <span>© {new Date().getFullYear()} Mac's Hub</span>
            </div>

            {/* Footer Links */}
            <div className="flex gap-6 items-center">
              <a href="#" className="hover:text-gray-900">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-900">
                Terms
              </a>

              {/* Phone */}
              <a
                href="tel:+233550103277"
                className="flex items-center gap-1 text-indigo-600 hover:underline"
              >
                <Phone className="w-4 h-4" />
                Call
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/233550103277"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-green-600 hover:underline"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@macneroboss"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-pink-600 hover:underline"
              >
                <TikTokIcon className="w-4 h-4" />
                TikTok
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* ---------- NavItem ---------- */
function NavItem({ to, label, isButton }) {
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

/* ---------- Pages ---------- */
function Home() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center py-12">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          One partner. Infinite possibilities —{" "}
          <span className="text-indigo-600">Mac's Hub</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl">
          We help early-stage startups shape product, strategy, and go-to-market
          with practical advice, fractional leadership, and hands-on execution.
          Built for founders who want clarity and speed.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-12">
      <SectionHeader eyebrow="About" title="Who we are" />
      <p className="mt-4 text-gray-600 max-w-3xl">
        Mac's Hub is a consultancy designed for ambitious startup founders. We
        combine product expertise, market insights, and hands-on leadership to
        accelerate growth. Our mission is to make clarity, speed, and measurable
        outcomes the norm for every founder we partner with.
      </p>
    </section>
  );
}

function Services() {
  return (
    <section className="py-12">
      <SectionHeader
        eyebrow="What we do"
        title="À La Carte Services for Startups"
      />
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <ServiceCard
          icon={<Sparkles size={20} />}
          title="Product Strategy"
          desc="Roadmaps, user research, and product prioritization to accelerate PMF."
        />
        <ServiceCard
          icon={<Target size={20} />}
          title="Go-to-Market Planning"
          desc="Channel playbooks, positioning, and early growth experiments."
        />
        <ServiceCard
          icon={<Users size={20} />}
          title="Fractional Leadership"
          desc="Interim CTO/CMO/CPO to lead execution while you hire full-time."
        />
        <ServiceCard
          icon={<Lightbulb size={20} />}
          title="Business Ideation"
          desc="Brainstorming, validation, and shaping new startup ideas."
        />
        <ServiceCard
          icon={<Globe size={20} />}
          title="Market Research"
          desc="Competitive analysis, customer discovery, and insight reports."
        />
        <ServiceCard
          icon={<DollarSign size={20} />}
          title="Fundraising Support"
          desc="Pitch decks, investor connections, and capital strategy."
        />
        <ServiceCard
          icon={<Briefcase size={20} />}
          title="Operations Setup"
          desc="Legal, HR, and infrastructure setup for scaling businesses."
        />
        <ServiceCard
          icon={<BookOpen size={20} />}
          title="Founder Coaching"
          desc="One-on-one advisory sessions to help founders stay focused and resilient."
        />
      </div>
    </section>
  );
}

function IdentityServices() {
  return (
    <section className="py-12">
      <SectionHeader
        eyebrow="Identity Services"
        title="Government & Legal Documentation Assistance"
      />
      <p className="mt-4 text-gray-600 max-w-3xl">
        Beyond consultancy, Mac's Hub helps clients with essential documentation
        services: passports, birth certificates, driver’s licenses, business
        certificates, and select business operation permits. We ensure your
        paperwork is handled professionally and efficiently, so you can focus on
        your goals.
      </p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <ServiceCard
          icon={<FileText size={20} />}
          title="Passport Assistance"
          desc="Guidance and application support for new or renewed passports."
        />
        <ServiceCard
          icon={<FileText size={20} />}
          title="Birth Certificates"
          desc="Secure retrieval and processing of official birth records."
        />
        <ServiceCard
          icon={<FileText size={20} />}
          title="Driver’s Licenses"
          desc="Application help and renewals with step-by-step guidance."
        />
        <ServiceCard
          icon={<FileText size={20} />}
          title="Business Certificates"
          desc="Assistance in acquiring essential certificates to operate legally."
        />
        <ServiceCard
          icon={<FileText size={20} />}
          title="Permits"
          desc="Support in obtaining select business operation permits quickly."
        />
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-12">
      <SectionHeader eyebrow="Contact" title="Let's work together" />

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {/* Contact Form */}
        <ContactForm />

        {/* Contact Links */}
        <div className="flex flex-col gap-4 text-gray-700">
          <a
            href="tel:+233550103277"
            className="flex items-center gap-2 text-indigo-600 hover:underline"
          >
            <Phone className="w-5 h-5" />
            +233 (550) 103-277
          </a>
          <a
            href="https://wa.me/233550103277"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-600 hover:underline"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Chat
          </a>
          <a
            href="https://www.tiktok.com/@macneroboss"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-pink-600 hover:underline"
          >
            <TikTokIcon className="w-5 h-5" />
            TikTok Profile
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Promotions ---------- */
function Promotions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flyers = [
    { src: "/images/flyer1buscert.png", desc: "Exclusive Startup Growth Workshop — Join us this weekend!" },
    { src: "/images/2.png", desc: "Special consultancy package for first-time founders." },
    { src: "/images/3.png", desc: "Mac’s Hub client spotlight — see how we helped startups grow." },
  ];

  useEffect(() => {
    if (flyers.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % flyers.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [flyers]);

  return (
    <section className="py-12">
      <SectionHeader eyebrow="Promotions" title="Current Campaigns" />
      <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg bg-white">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {flyers.map((flyer, idx) => (
            <div key={idx} className="w-full flex-shrink-0">
              <div className="h-[300px] md:h-[500px] w-full">
                <img src={flyer.src} alt={`Flyer ${idx + 1}`} className="w-full h-full object-contain" />
              </div>
              <p className="p-5 text-sm text-gray-600 text-center bg-gray-50">
                {flyer.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {flyers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? "bg-indigo-600" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Gallery ---------- */
function Gallery() {
  return (
    <section className="py-12">
      <SectionHeader eyebrow="Gallery" title="A glimpse of our journey" />
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <GalleryImage src="/images/contract.jpg" alt="Mac's Hub Branding" />
        <GalleryImage src="/images/branded_meeting.png" alt="Collaboration and teamwork" />
        <GalleryImage src="/images/branded_discussion.png" alt="Strategic planning session" />
        <GalleryImage src="/images/office space.jpg" alt="Startup growth concept" />
        <GalleryImage src="/images/paperwork.jpg" alt="Document assistance" />
        <GalleryImage src="/images/team work.jpg" alt="Innovation and vision" />
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  return (
    <section className="py-12">
      <SectionHeader eyebrow="Trusted by" title="What founders say" />
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <Testimonial name="Lina — Co-founder" quote="Mac's Hub helped us crystallize our product strategy and double activation in three months." />
        <Testimonial name="Raj — CEO" quote="They acted as an extension of our team — clear, fast, and measurable." />
        <Testimonial name="Maya — Head of Growth" quote="From hiring to experiments, their support was pivotal to our Series A." />
      </div>
    </section>
  );
}

/* ---------- Not Found ---------- */
function NotFound() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold">Page Not Found</h2>
      <p className="mt-2 text-gray-600">The page you’re looking for doesn’t exist.</p>
    </section>
  );
}

/* ---------- Subcomponents ---------- */
function SectionHeader({ eyebrow, title }) {
  return (
    <header>
      <div className="text-sm text-indigo-600 font-semibold">{eyebrow}</div>
      <h2 className="mt-2 text-2xl font-bold">{title}</h2>
    </header>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <article className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 rounded-md bg-indigo-50 flex items-center justify-center">{icon}</div>
      <h4 className="mt-4 font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </article>
  );
}

function Testimonial({ name, quote }) {
  return (
    <blockquote className="p-6 bg-white rounded-2xl shadow">
      <p className="text-sm text-gray-700">“{quote}”</p>
      <footer className="mt-4 text-xs text-gray-500">— {name}</footer>
    </blockquote>
  );
}

function GalleryImage({ src, alt }) {
  return (
    <div className="overflow-hidden rounded-2xl shadow hover:shadow-lg transition-shadow">
      <img src={src} alt={alt} className="w-full h-48 object-cover" />
    </div>
  );
}

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name") || "";
    const email = form.get("email") || "";
    const message = form.get("message") || "";
    const subject = encodeURIComponent(`Chat request from ${name} — Mac's Hub`);
    const body = encodeURIComponent(message + "\n\nContact: " + email);
    window.location.href = `mailto:macshubcompany@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full grid gap-3">
      <input name="name" required placeholder="Your name" className="px-4 py-3 rounded-lg border border-gray-200" />
      <input name="email" type="email" required placeholder="Email" className="px-4 py-3 rounded-lg border border-gray-200" />
      <textarea name="message" rows={4} placeholder="Tell us about your challenge" className="px-4 py-3 rounded-lg border border-gray-200" />
      <button type="submit" className="px-5 py-3 rounded-full bg-indigo-600 text-white font-medium">Schedule call</button>
    </form>
  );
}

function TikTokIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className={className}>
      <path d="M448,209.9a210,210,0,0,1-122.5-39.2V349.4c0,90.2-73.3,162.6-163.5,162.6A162.6,162.6,0,0,1,0,349.4c0-90.2,73.3-163.5,162.5-163.5a163.2,163.2,0,0,1,24.1,1.8v81.5a81.9,81.9,0,0,0-24.1-3.8A81.1,81.1,0,1,0,244,349.4V0h81.5a128.6,128.6,0,0,0,122.5,128.5Z"/>
    </svg>
  );
}
