import { Helmet } from "react-helmet-async";
import SectionHeader from "../components/SectionHeader";
import Testimonial from "../components/Testimonial";

export default function AboutPage() {
  return (
    <>
      <About />
      <Testimonials />
    </>
  );
}

function About() {
  return (
    <section className="py-12">
      <Helmet>
        <title>About Mac's Hub | Who We Are</title>
        <meta
          name="description"
          content="Mac's Hub partners with ambitious founders to remove the guesswork from growth."
        />
      </Helmet>
      <SectionHeader eyebrow="About" title="Who we are" />
      <p className="mt-4 text-gray-600 max-w-3xl">
        Mac's Hub partners with ambitious founders to remove the guesswork from early-stage growth.
        Our team blends product, marketing, and operational experience to accelerate learning and execution.
      </p>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-12">
      <SectionHeader eyebrow="Trusted by" title="What founders say" />
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <Testimonial
          name="Lina — Co-founder"
          quote="Mac's Hub helped us crystallize our product strategy and double activation in three months."
        />
        <Testimonial
          name="Raj — CEO"
          quote="They acted as an extension of our team — clear, fast, and measurable."
        />
        <Testimonial
          name="Maya — Head of Growth"
          quote="From hiring to experiments, their support was pivotal to our Series A."
        />
      </div>
    </section>
  );
}
