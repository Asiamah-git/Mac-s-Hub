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
        Practical services you can pick à la carte — built to get traction quickly.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <ServiceCard
          icon={<Sparkles size={20} />}
          title="Product Strategy"
          desc="Roadmaps, user research, and prioritization to accelerate product-market fit."
          details="We’ll refine your roadmap, validate ideas with customers, and prioritize features that accelerate growth. Includes product workshops and tailored strategy sessions."
        />
        <ServiceCard
          icon={<Target size={20} />}
          title="Go-to-Market Planning"
          desc="Channel playbooks, positioning, and focused early experiments."
          details="We’ll help you identify the best marketing channels, design launch campaigns, and measure results to iterate quickly for maximum traction."
        />
        <ServiceCard
          icon={<Users size={20} />}
          title="Fractional Leadership"
          desc="Interim CTO/CMO/CPO to lead execution while you hire full-time."
          details="Seasoned leaders step in to guide product, marketing, or operations on a fractional basis while you focus on building your team."
        />
        <ServiceCard
          icon={<Lightbulb size={20} />}
          title="Business Ideation"
          desc="Idea validation, rapid prototyping, and early metrics guidance."
          details="Validate your startup ideas, run prototypes, and build MVPs to gather early feedback before scaling."
        />
        <ServiceCard
          icon={<Globe size={20} />}
          title="Market Research"
          desc="Competitive analysis, customer discovery, and insight reports."
          details="We conduct detailed analysis of competitors and customer behaviors to provide insights that shape winning strategies."
        />
        <ServiceCard
          icon={<DollarSign size={20} />}
          title="Fundraising Support"
          desc="Pitch decks, story-building, and investor readiness coaching."
          details="From pitch deck design to investor Q&A prep, we help you craft a compelling narrative that attracts funding."
        />
        <ServiceCard
          icon={<Briefcase size={20} />}
          title="Operations Setup"
          desc="Processes and tooling to scale operations without chaos."
          details="Set up efficient workflows, team structures, and digital tools that prepare your business to scale without bottlenecks."
        />
        <ServiceCard
          icon={<BookOpen size={20} />}
          title="Founder Coaching"
          desc="Regular advisory sessions focused on prioritization & growth."
          details="One-on-one coaching to help you focus, make strategic decisions, and overcome founder challenges."
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
            details="Guidance and support for new passport applications, renewals, and required documentation."
          />
          <ServiceCard
            icon={<FileText size={20} />}
            title="Birth Certificates"
            desc="Secure retrieval and official processing."
            details="Assistance with applying for or retrieving official birth certificates quickly and securely."
          />
          <ServiceCard
            icon={<FileText size={20} />}
            title="Driver’s Licenses"
            desc="Application help and renewals."
            details="Support with license applications, renewals, and replacement processes with accurate guidance."
          />
          <ServiceCard
            icon={<FileText size={20} />}
            title="Business Certificates"
            desc="Support to obtain required certificates."
            details="We help startups register and acquire the business certificates required for compliance and operations."
          />
          <ServiceCard
            icon={<FileText size={20} />}
            title="Permits"
            desc="Assistance acquiring select operational permits."
            details="Get professional help in acquiring the permits your startup needs to operate legally and smoothly."
          />
        </div>
      </div>
    </section>
  );
}
