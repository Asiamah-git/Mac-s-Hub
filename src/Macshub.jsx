// MacsHub.jsx
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
import { Helmet } from "react-helmet-async";
import ContactForm from "./components/ContactForm";


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

  useEffect(() => {
    // close mobile menu on route change
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900 antialiased">
      <ScrollToTop />

      {/* NAV */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" aria-label="Mac's Hub home" className="flex items-center gap-4">
          <img
            src="/images/newlogo.png"
            alt="Mac's Hub Logo"
            className="h-16 md:h-20 w-auto object-contain"
            style={{ imageRendering: "optimizeQuality" }}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg border border-gray-200"
          onClick={() => setMobileOpen((s) => !s)}
          aria-controls="mobile-menu"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden px-6 pb-4 space-y-3" role="menu">
          <NavItem to="/" label="Home" />
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
            transition={{ duration: 0.45 }}
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
              <Route path="/contact" element={<ContactForm />} />
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
                aria-label="Call Mac's Hub"
              >
                <Phone className="w-4 h-4" />
                +233 (550) 103-277
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/233550103277"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-green-600 hover:underline"
                aria-label="Chat on WhatsApp"
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
                aria-label="Visit TikTok profile"
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

/* ---------- Pages & Sections ---------- */

function Home() {
  return (
    
    <section className="grid md:grid-cols-2 gap-8 items-center py-12">
      <Helmet>
  <title>Mac's Hub | Startup Consultancy & Founder Support</title>
  <meta
    name="description"
    content="Mac's Hub helps founders validate ideas, launch faster, and scale smarter. Startup consultancy with product strategy, fractional leadership, and growth support."
  />

  {/* Open Graph */}
  <meta property="og:title" content="Mac's Hub | Startup Consultancy & Founder Support" />
  <meta property="og:description" content="Validate your idea, launch faster, and scale smarter with Mac's Hub." />
  <meta property="og:image" content="/images/newlogo.png" />
  <meta property="og:url" content="https://yourdomain.com/" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Mac's Hub | Startup Consultancy & Founder Support" />
  <meta name="twitter:description" content="We help founders go from idea to impact with practical consultancy and growth services." />
  <meta name="twitter:image" content="/images/newlogo.png" />
</Helmet>

      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          One partner. Infinite possibilities.
          <span className="text-indigo-600"> Mac's Hub</span>
        </h1>

        {/* Tagline */}
        <p className="mt-3 text-lg text-gray-700 max-w-xl font-medium">
          We help founders move from idea to impact — faster, with less friction.
        </p>

        {/* Professional, convincing paragraph */}
        <p className="mt-6 text-gray-600 max-w-2xl">
          Mac's Hub is a focused consultancy for early-stage founders. We combine product strategy,
          market insight, and experienced fractional leadership to design practical roadmaps and
          execute the highest-impact work for your startup. Whether you need to validate product
          direction, build initial traction, or prepare for investment, our pragmatic approach
          delivers clarity and predictable next steps — no buzzwords, just measurable progress.
        </p>
      </div>

      {/* Optional visual/hero card */}
      <div className="rounded-2xl bg-white p-6 shadow flex items-center justify-center h-56">
        <div className="text-center">
          <div className="text-sm text-indigo-600 font-semibold">Trusted, practical help</div>
          <h3 className="mt-2 text-xl font-bold">Fractional leaders • Product strategy • GTM</h3>
          <p className="mt-3 text-sm text-gray-600 max-w-sm">
            Work with experts who’ve shipped startups and led teams — short-term, high-impact engagements.
          </p>
        </div>
      </div>
    </section>
    
  );
}

function About() {
  return (
    <section className="py-12">
      <Helmet>
  <title>About Mac's Hub | Who We Are</title>
  <meta
    name="description"
    content="Mac's Hub partners with ambitious founders to remove the guesswork from growth. Our team blends product, marketing, and operational expertise for measurable results."
  />

  {/* Open Graph */}
  <meta property="og:title" content="About Mac's Hub | Who We Are" />
  <meta property="og:description" content="Learn about Mac's Hub and how we help startups grow smarter with clarity, strategy, and execution." />
  <meta property="og:image" content="/images/newlogo.png" />
  <meta property="og:url" content="https://yourdomain.com/about" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About Mac's Hub | Who We Are" />
  <meta name="twitter:description" content="Trusted consultancy for founders. Discover our mission and team." />
  <meta name="twitter:image" content="/images/newlogo.png" />
</Helmet>

      <SectionHeader eyebrow="About" title="Who we are" />
      <p className="mt-4 text-gray-600 max-w-3xl">
        Mac's Hub partners with ambitious founders to remove the guesswork from early-stage growth.
        Our team blends product, marketing, and operational experience to accelerate learning and execution.
        We focus on outcomes you can measure — activation, retention, and sustainable acquisition.
      </p>
    </section>
  );
}

function Services() {
  return (
    <section className="py-12">
      <Helmet>
  <title>Mac's Hub Services | Startup & Identity Solutions</title>
  <meta
    name="description"
    content="Explore Mac's Hub services — from product strategy and growth support to legal identity services. Flexible, practical, and founder-focused."
  />

  {/* Open Graph */}
  <meta property="og:title" content="Mac's Hub Services | Startup & Identity Solutions" />
  <meta property="og:description" content="À la carte startup services and trusted identity solutions — built to get traction quickly and securely." />
  <meta property="og:image" content="/images/newlogo.png" />
  <meta property="og:url" content="https://yourdomain.com/services" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Mac's Hub Services | Startup & Identity Solutions" />
  <meta name="twitter:description" content="Startup consultancy and identity services you can trust. Practical, secure, and designed for growth." />
  <meta name="twitter:image" content="/images/newlogo.png" />
</Helmet>

      <SectionHeader eyebrow="What we do" title="À La Carte Services for Startups" />

      {/* Tagline before cards */}
      <p className="mt-3 text-gray-700 max-w-3xl font-medium">
        Practical services you can pick a la carte — built to get traction quickly.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <ServiceCard
          icon={<Sparkles size={20} />}
          title="Product Strategy"
          desc="Roadmaps, user research, and prioritization to accelerate product-market fit."
        />
        <ServiceCard
          icon={<Target size={20} />}
          title="Go-to-Market Planning"
          desc="Channel playbooks, positioning, and focused early experiments."
        />
        <ServiceCard
          icon={<Users size={20} />}
          title="Fractional Leadership"
          desc="Interim CTO/CMO/CPO to lead execution while you hire full-time."
        />
        <ServiceCard
          icon={<Lightbulb size={20} />}
          title="Business Ideation"
          desc="Idea validation, rapid prototyping, and early metrics guidance."
        />
        <ServiceCard
          icon={<Globe size={20} />}
          title="Market Research"
          desc="Competitive analysis, customer discovery, and insight reports."
        />
        <ServiceCard
          icon={<DollarSign size={20} />}
          title="Fundraising Support"
          desc="Pitch decks, story-building, and investor readiness coaching."
        />
        <ServiceCard
          icon={<Briefcase size={20} />}
          title="Operations Setup"
          desc="Processes and tooling to scale operations without chaos."
        />
        <ServiceCard
          icon={<BookOpen size={20} />}
          title="Founder Coaching"
          desc="Regular advisory sessions focused on prioritization & growth."
        />
      </div>
    </section>
  );
}

function IdentityServices() {
  return (
    <section className="py-12">
<Helmet>
  <title>Mac's Hub Identity Services | Secure Legal & Government Docs</title>
  <meta
    name="description"
    content="Mac's Hub offers trusted assistance with passports, birth certificates, driver's licenses, business certificates, and permits. Secure, precise, and professional support for founders."
  />

  {/* Open Graph */}
  <meta property="og:title" content="Mac's Hub Identity Services | Secure Legal & Government Docs" />
  <meta property="og:description" content="Trusted handling of sensitive documents — passports, licenses, certificates, and more. Secure and reliable support for startups." />
  <meta property="og:image" content="/images/newlogo.png" />
  <meta property="og:url" content="https://yourdomain.com/services#identity" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Mac's Hub Identity Services | Secure Legal & Government Docs" />
  <meta name="twitter:description" content="Professional and secure document services — passports, licenses, and certificates handled with care." />
  <meta name="twitter:image" content="/images/newlogo.png" />
</Helmet>


      <SectionHeader eyebrow="Identity Services" title="Government & Legal Documentation Assistance" />

      {/* Trust-focused tagline */}
      <p className="mt-2 text-gray-700 max-w-3xl font-medium">
        Trusted handling of sensitive documents — precise, secure, and professional support.
      </p>

      <p className="mt-4 text-gray-600 max-w-3xl">
        We assist with passports, birth certificates, driver’s licenses, business certificates,
        and selected permits. Our process emphasizes confidentiality and compliance — so paperwork
        doesn't slow down your startup.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <ServiceCard icon={<FileText size={20} />} title="Passport Assistance" desc="Application support and renewals." />
        <ServiceCard icon={<FileText size={20} />} title="Birth Certificates" desc="Secure retrieval and official processing." />
        <ServiceCard icon={<FileText size={20} />} title="Driver’s Licenses" desc="Application help and renewals." />
        <ServiceCard icon={<FileText size={20} />} title="Business Certificates" desc="Support to obtain required certificates." />
        <ServiceCard icon={<FileText size={20} />} title="Permits" desc="Assistance acquiring select operational permits." />
      </div>
    </section>
  );
}

/* ---------- Promotions (carousel) ---------- */
function Promotions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flyers = [
    { src: "/images/flyer1buscert.png", desc: "Startup Growth Workshop — Join us this weekend." },
    { src: "/images/2.png", desc: "Special consultancy package for first-time founders." },
    { src: "/images/3.png", desc: "Client spotlight: case studies and outcomes." },
  ];

  useEffect(() => {
    if (flyers.length > 1) {
      const id = setInterval(() => setCurrentIndex((p) => (p + 1) % flyers.length), 5000);
      return () => clearInterval(id);
    }
  }, [flyers.length]);

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
              <div className="h-[300px] md:h-[420px] w-full">
                <img src={flyer.src} alt={`Flyer ${idx + 1}`} className="w-full h-full object-contain" />
              </div>
              <p className="p-5 text-sm text-gray-600 text-center bg-gray-50">{flyer.desc}</p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {flyers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-3 h-3 rounded-full ${idx === currentIndex ? "bg-indigo-600" : "bg-gray-300 hover:bg-gray-400"}`}
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

/* ---------- NotFound ---------- */
function NotFound() {
  return (
    <section className="py-12 text-center">
      <Helmet>
  <title>Page Not Found | Mac's Hub</title>
  <meta
    name="description"
    content="Oops! The page you’re looking for doesn’t exist. Return to Mac's Hub and explore how we can help your startup succeed."
  />

  {/* Open Graph */}
  <meta property="og:title" content="Page Not Found | Mac's Hub" />
  <meta property="og:description" content="The page you’re searching for isn’t here. Head back to Mac's Hub to learn more." />
  <meta property="og:image" content="/images/newlogo.png" />
  <meta property="og:url" content="https://yourdomain.com/404" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Page Not Found | Mac's Hub" />
  <meta name="twitter:description" content="This page doesn’t exist. Visit Mac's Hub homepage instead." />
  <meta name="twitter:image" content="/images/newlogo.png" />
</Helmet>

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

/* ---------- Tiny SVG TikTok Icon ---------- */
function TikTokIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className={className}>
      <path d="M448,209.9a210,210,0,0,1-122.5-39.2V349.4c0,90.2-73.3,162.6-163.5,162.6A162.6,162.6,0,0,1,0,349.4c0-90.2,73.3-163.5,162.5-163.5a163.2,163.2,0,0,1,24.1,1.8v81.5a81.9,81.9,0,0,0-24.1-3.8A81.1,81.1,0,1,0,244,349.4V0h81.5a128.6,128.6,0,0,0,122.5,128.5Z" />
    </svg>
  );
}
