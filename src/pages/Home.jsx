import { Helmet } from "react-helmet-async";
import SectionHeader from "../components/SectionHeader";
import GalleryImage from "../components/GalleryImage";
import { useEffect, useState } from "react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Promotions />
      <Gallery />
    </>
  );
}

function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center py-12">
      <Helmet>
        <title>Mac's Hub | Startup Consultancy & Founder Support</title>
        <meta
          name="description"
          content="Mac's Hub helps founders validate ideas, launch faster, and scale smarter."
        />
      </Helmet>
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          One partner. Infinite possibilities.
          <span className="text-indigo-600"> Mac's Hub</span>
        </h1>
        <p className="mt-3 text-lg text-gray-700 max-w-xl font-medium">
          We help founders move from idea to impact — faster, with less friction.
        </p>
      </div>
      <div className="rounded-2xl bg-white p-6 shadow flex items-center justify-center h-56">
        <div className="text-center">
          <div className="text-sm text-indigo-600 font-semibold">Trusted, practical help</div>
          <h3 className="mt-2 text-xl font-bold">
            Fractional leaders • Product strategy • GTM
          </h3>
        </div>
      </div>
    </section>
  );
}

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
                <img src={flyer.src} alt={`Flyer ${idx + 1}`} loading="lazy" className="w-full h-full object-contain" />
              </div>
              <p className="p-5 text-sm text-gray-600 text-center bg-gray-50">{flyer.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
