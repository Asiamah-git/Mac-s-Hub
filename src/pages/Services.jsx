import { Helmet } from "react-helmet-async";
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
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";

export default function ServicesPage() {
  return (
    <section className="py-12">
      <Helmet>
        <title>Mac's Hub Services | Startup & Identity Solutions</title>
        <meta
          name="description"
          content="Explore Mac's Hub services — from product strategy and growth support to legal identity services. Flexible, practical, and founder-focused."
        />
      </Helmet>

      {/* General Startup Services */}
      <SectionHeader eyebrow="What we do" title="À La Carte Services for Startups" />
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

      {/* Identity Services Section */}
      <div className="mt-16">
        <SectionHeader
          eyebrow="Identity Services"
          title="Government & Legal Documentation Assistance"
        />
        <p className="mt-2 text-gray-700 max-w-3xl font-medium">
          Trusted handling of sensitive documents — precise, secure, and professional support.
        </p>
        <p className="mt-4 text-gray-600 max-w-3xl">
          We assist with passports, birth certificates, driver’s licenses, business certificates,
          and selected permits. Our process emphasizes confidentiality and compliance — so paperwork
          doesn't slow down your startup.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <ServiceCard
            icon={<FileText size={20} />}
            title="Passport Assistance"
            desc="Application support and renewals."
          />
          <ServiceCard
            icon={<FileText size={20} />}
            title="Birth Certificates"
            desc="Secure retrieval and official processing."
          />
          <ServiceCard
            icon={<FileText size={20} />}
            title="Driver’s Licenses"
            desc="Application help and renewals."
          />
          <ServiceCard
            icon={<FileText size={20} />}
            title="Business Certificates"
            desc="Support to obtain required certificates."
          />
          <ServiceCard
            icon={<FileText size={20} />}
            title="Permits"
            desc="Assistance acquiring select operational permits."
          />
        </div>
      </div>
    </section>
  );
}
