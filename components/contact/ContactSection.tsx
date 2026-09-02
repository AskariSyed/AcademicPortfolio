import React from "react";
import SectionContainer from "@/components/layout/SectionContainer";
import { RESEARCH_IDENTITY } from "@/data/research";
import { Mail, MapPin, Send, ExternalLink, GraduationCap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export default function ContactSection() {
  return (
    <SectionContainer
      id="contact"
      tag="Get in Touch"
      title="Let's Discuss Research"
      subtitle="I am interested in discussing research opportunities, potential collaborations, and graduate study."
      className="bg-slate-50/50"
    >
      <div className="max-w-4xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Direct Outreach Details */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-blue-900 uppercase tracking-wider block mb-1">
                Candidate Contact Information
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                {RESEARCH_IDENTITY.name}
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                {RESEARCH_IDENTITY.title}
              </p>
            </div>

            <div className="space-y-3.5 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono block">LOCATION</span>
                  <span className="font-medium text-slate-800">Islamabad, Pakistan</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono block">DIRECT EMAIL</span>
                  <a
                    href={`mailto:${RESEARCH_IDENTITY.email}`}
                    className="font-medium text-blue-900 hover:underline break-all"
                  >
                    {RESEARCH_IDENTITY.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono block">STATUS</span>
                  <span className="font-medium text-slate-800">
                    Graduated (BS Computer Science) · Available for Master&apos;s &amp; Research Roles
                  </span>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
              <a
                href={RESEARCH_IDENTITY.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-50" />
              </a>

              <a
                href={RESEARCH_IDENTITY.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-50" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Mailto Card for Professors */}
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold text-blue-900 uppercase tracking-wider">
                <Send className="w-3.5 h-3.5" />
                <span>Academic Inquiry</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                Academic &amp; Research Inquiries
              </h4>
              <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                If you are an academic researcher, prospective collaborator, or laboratory evaluator interested in robust computer vision, domain shift, or intelligent systems, I would be delighted to connect.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80">
              <a
                href={`mailto:${RESEARCH_IDENTITY.email}?subject=Research%20Inquiry%20-%20Muhammad%20Hassan%20Askari`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-blue-950 hover:bg-slate-900 transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Initiate Research Email</span>
              </a>
              <span className="text-[11px] text-slate-400 block text-center mt-2">
                Expected response time: within 24 hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
