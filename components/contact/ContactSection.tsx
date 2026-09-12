"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SectionContainer from "@/components/layout/SectionContainer";
import { RESEARCH_IDENTITY } from "@/data/research";
import { Mail, MapPin, Send, ExternalLink, GraduationCap, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { FadeIn, HoverLift } from "@/components/ui/motion";

interface FormErrors {
  name?: string;
  email?: string;
  topic?: string;
  message?: string;
}

export default function ContactSection() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    topic: "PhD / Research Advisory (2027)",
    message: "",
    hp_website: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateField = (field: string, value: string): string | undefined => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Please enter your name.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        return undefined;
      case "email":
        if (!value.trim()) return "Please enter your email address.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid academic or professional email address.";
        return undefined;
      case "message":
        if (!value.trim()) return "Please enter your inquiry or message.";
        if (value.trim().length < 15) return "Please provide at least 15 characters describing your inquiry.";
        return undefined;
      default:
        return undefined;
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (submitError) {
      setSubmitError(null);
    }
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setSubmitError(null);

    // Validate all fields
    const nameErr = validateField("name", formData.name);
    const emailErr = validateField("email", formData.email);
    const msgErr = validateField("message", formData.message);

    const newErrors = {
      name: nameErr,
      email: emailErr,
      message: msgErr,
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (nameErr || emailErr || msgErr) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        const message =
          data?.error ||
          "Unable to deliver message at this time. Please try again or email directly.";
        setSubmitError(message);
        setIsSubmitting(false);
        return;
      }

      // Save submission to sessionStorage for thank-you page personalization
      if (typeof window !== "undefined") {
        sessionStorage.setItem("last_inquiry_name", formData.name);
        sessionStorage.setItem("last_inquiry_topic", formData.topic);
      }

      router.push(`/thank-you?name=${encodeURIComponent(formData.name)}&topic=${encodeURIComponent(formData.topic)}`);
    } catch (err) {
      setSubmitError(
        "Network error: Failed to contact the dispatch service. Please verify your connection or reach out via direct email."
      );
      setIsSubmitting(false);
    }
  };

  return (
    <SectionContainer
      id="contact"
      tag="Get in Touch"
      title="Let's Discuss Research"
      subtitle="I am actively interested in discussing graduate research opportunities, potential lab openings, and research collaborations."
      className="bg-slate-50/50"
    >
      <FadeIn direction="up" distance={20} className="max-w-5xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Outreach Details */}
          <div className="lg:col-span-5 space-y-6">
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
                  <span className="text-xs text-slate-400 font-mono block">RESEARCH STATUS</span>
                  <span className="font-medium text-slate-800">
                    Graduated (BS CS) · Available for 2027 Research Roles
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-all hover:scale-105"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-50" />
              </a>

              <a
                href={RESEARCH_IDENTITY.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-all hover:scale-105"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-50" />
              </a>
            </div>

            {/* Direct Email Fallback */}
            <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200/80 text-xs text-slate-650 space-y-1">
              <span className="font-semibold text-blue-950 block">Direct Email Client:</span>
              <p>
                Prefer sending via your email client? Write directly to{" "}
                <a href={`mailto:${RESEARCH_IDENTITY.email}`} className="font-mono text-blue-900 underline font-medium">
                  {RESEARCH_IDENTITY.email}
                </a>.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Research Inquiry Form */}
          <div className="lg:col-span-7 p-6 sm:p-7 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-900 uppercase tracking-wider">
                <Send className="w-3.5 h-3.5" />
                <span>Send Research Inquiry</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                SLA: &lt; 24h reply
              </span>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Spam Honeypot Field (hidden from real users) */}
              <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
                <label htmlFor="inquiry-hp">Do not fill this field</label>
                <input
                  id="inquiry-hp"
                  type="text"
                  name="hp_website"
                  value={formData.hp_website}
                  onChange={(e) => handleChange("hp_website", e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Submission Error Banner */}
              {submitError && (
                <div
                  role="alert"
                  className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2.5 transition-all"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-semibold block text-red-900">Delivery Encountered an Issue</span>
                    <p className="leading-relaxed">{submitError}</p>
                    <p className="pt-1 text-slate-650">
                      Feel free to retry or email directly:{" "}
                      <a
                        href={`mailto:${RESEARCH_IDENTITY.email}?subject=${encodeURIComponent(
                          `Academic Inquiry: ${formData.topic || "Research Inquiry"}`
                        )}`}
                        className="font-medium text-blue-900 underline hover:text-blue-950"
                      >
                        {RESEARCH_IDENTITY.email}
                      </a>
                    </p>
                  </div>
                </div>
              )}

              {/* Name field */}
              <div>
                <label htmlFor="inquiry-name" className="block text-xs font-semibold text-slate-800 mb-1">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="inquiry-name"
                  type="text"
                  disabled={isSubmitting}
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  placeholder="Prof. Alex Chen / Dr. Jane Doe"
                  className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 transition-all disabled:bg-slate-100 disabled:cursor-not-allowed ${
                    errors.name
                      ? "border-red-400 focus:ring-red-200 bg-red-50/30"
                      : "border-slate-300 focus:ring-blue-200 focus:border-blue-900"
                  }`}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email and Institution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="inquiry-email" className="block text-xs font-semibold text-slate-800 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="inquiry-email"
                    type="email"
                    disabled={isSubmitting}
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    placeholder="name@university.edu"
                    className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 transition-all disabled:bg-slate-100 disabled:cursor-not-allowed ${
                      errors.email
                        ? "border-red-400 focus:ring-red-200 bg-red-50/30"
                        : "border-slate-300 focus:ring-blue-200 focus:border-blue-900"
                    }`}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="inquiry-institution" className="block text-xs font-semibold text-slate-800 mb-1">
                    Institution / Lab <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="inquiry-institution"
                    type="text"
                    disabled={isSubmitting}
                    value={formData.institution}
                    onChange={(e) => handleChange("institution", e.target.value)}
                    placeholder="e.g., Stanford / MPI / Oxford"
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-200 focus:border-blue-900 transition-all disabled:bg-slate-100 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Inquiry Topic */}
              <div>
                <label htmlFor="inquiry-topic" className="block text-xs font-semibold text-slate-800 mb-1">
                  Inquiry Focus
                </label>
                <select
                  id="inquiry-topic"
                  disabled={isSubmitting}
                  value={formData.topic}
                  onChange={(e) => handleChange("topic", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border border-slate-300 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-200 focus:border-blue-900 transition-all disabled:bg-slate-100 disabled:cursor-not-allowed"
                >
                  <option value="PhD / Research Advisory (2027)">PhD / Research Advisory (2027)</option>
                  <option value="Research Collaboration">Research Collaboration</option>
                  <option value="Paper / Codebase Discussion">Paper / Codebase Discussion</option>
                  <option value="Academic Speaking / Peer-Review">Academic Speaking / Peer-Review</option>
                  <option value="General Academic Inquiry">General Academic Inquiry</option>
                </select>
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="inquiry-message" className="block text-xs font-semibold text-slate-800 mb-1">
                  Message / Context <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="inquiry-message"
                  rows={4}
                  disabled={isSubmitting}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  placeholder="Describe your research opening, collaboration idea, or discussion points..."
                  className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 transition-all resize-none disabled:bg-slate-100 disabled:cursor-not-allowed ${
                    errors.message
                      ? "border-red-400 focus:ring-red-200 bg-red-50/30"
                      : "border-slate-300 focus:ring-blue-200 focus:border-blue-900"
                  }`}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-blue-950 hover:bg-slate-900 disabled:opacity-60 transition-all duration-200 shadow-xs hover:shadow-md active:scale-98"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Dispatching Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Academic Inquiry</span>
                  </>
                )}
              </button>

              <span className="text-[11px] text-slate-400 block text-center mt-2">
                Protected by privacy-preserving protocol · Direct to researcher&apos;s mailbox
              </span>
            </form>
          </div>
        </div>
      </FadeIn>
    </SectionContainer>
  );
}
