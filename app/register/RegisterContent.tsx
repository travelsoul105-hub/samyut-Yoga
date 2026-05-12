"use client";

import { useState } from "react";
import Link from "next/link";

const COUNTRIES = ["India", "United States", "United Kingdom", "Germany", "France", "Australia", "Canada", "Netherlands", "Spain", "Italy", "Singapore", "Malaysia", "UAE", "Other"];
const STATES = ["Andhra Pradesh", "Karnataka", "Kerala", "Tamil Nadu", "Maharashtra", "Delhi", "Gujarat", "Rajasthan", "Other (India)", "N/A (International)"];

export default function RegisterContent() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", dob: "", gender: "",
    state: "", country: "", phone: "", course: "", accommodation: "",
    date: "", experience: "", referral: "", food: "", injuries: "", questions: "", terms: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function update(key: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {}
    setLoading(false);
    setSubmitted(true);
  }

  const inputClass = "w-full border border-forest/20 rounded px-3 py-2.5 text-sm font-inter focus:outline-none focus:border-forest bg-white";
  const labelClass = "block text-xs font-inter font-medium text-charcoal/70 mb-1.5";

  if (submitted) {
    return (
      <div className="pt-16 min-h-screen bg-ivory flex items-center justify-center px-4">
        <div className="max-w-lg text-center">
          <div className="text-5xl mb-5">🙏</div>
          <h1 className="font-cormorant text-4xl font-semibold text-forest mb-3">Namaste!</h1>
          <p className="text-forest font-inter font-semibold mb-3">Application Received</p>
          <p className="text-charcoal/65 font-inter text-sm leading-relaxed mb-6">
            Thank you for applying to Samyut Yoga. We have received your application and will review it within 48 hours.
            A confirmation email has been sent to <strong>{form.email}</strong>.
          </p>
          <p className="text-charcoal/65 font-inter text-sm mb-8">
            Questions? WhatsApp us at{" "}
            <a href="https://wa.me/918073239301" className="text-forest underline">+91 80732 39301</a>
          </p>
          <Link href="/" className="btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <section className="bg-forest py-16">
        <div className="container-custom text-center">
          <h1 className="heading-xl text-ivory mb-3">Register for TTC</h1>
          <p className="text-ivory/65 font-inter text-base max-w-lg mx-auto">
            Complete this form to apply for the 200hr Yoga Teacher Training at Samyut Yoga, Mysore.
          </p>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-custom max-w-3xl">
          <div className="bg-white border border-forest/10 p-7 sm:p-10 rounded-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="font-cormorant text-xl font-semibold text-forest mb-4 pb-2 border-b border-forest/10">
                  Personal Details
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className={labelClass}>First Name *</label>
                    <input required type="text" className={inputClass} value={form.firstName}
                      onChange={(e) => update("firstName", e.target.value)} placeholder="First name" /></div>
                  <div><label className={labelClass}>Last Name *</label>
                    <input required type="text" className={inputClass} value={form.lastName}
                      onChange={(e) => update("lastName", e.target.value)} placeholder="Last name" /></div>
                  <div><label className={labelClass}>Email *</label>
                    <input required type="email" className={inputClass} value={form.email}
                      onChange={(e) => update("email", e.target.value)} placeholder="your@email.com" /></div>
                  <div><label className={labelClass}>Date of Birth *</label>
                    <input required type="date" className={inputClass} value={form.dob}
                      onChange={(e) => update("dob", e.target.value)} /></div>
                  <div><label className={labelClass}>Gender *</label>
                    <select required className={inputClass} value={form.gender} onChange={(e) => update("gender", e.target.value)}>
                      <option value="">Select gender</option>
                      <option>Male</option><option>Female</option><option>Non-binary</option><option>Prefer not to say</option>
                    </select></div>
                  <div><label className={labelClass}>Phone (with country code) *</label>
                    <input required type="tel" className={inputClass} value={form.phone}
                      onChange={(e) => update("phone", e.target.value)} placeholder="+91 98765 43210" /></div>
                  <div><label className={labelClass}>State / Province</label>
                    <select className={inputClass} value={form.state} onChange={(e) => update("state", e.target.value)}>
                      <option value="">Select state</option>
                      {STATES.map((s) => <option key={s}>{s}</option>)}
                    </select></div>
                  <div><label className={labelClass}>Country *</label>
                    <select required className={inputClass} value={form.country} onChange={(e) => update("country", e.target.value)}>
                      <option value="">Select country</option>
                      {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
                    </select></div>
                </div>
              </div>

              <div>
                <h2 className="font-cormorant text-xl font-semibold text-forest mb-4 pb-2 border-b border-forest/10">
                  Course Details
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className={labelClass}>Choose Course *</label>
                    <select required className={inputClass} value={form.course} onChange={(e) => update("course", e.target.value)}>
                      <option value="">Select course</option>
                      <option value="ashtanga">200hrs Ashtanga Yoga TTC</option>
                      <option value="hatha">200hrs Hatha Yoga TTC</option>
                    </select></div>
                  <div><label className={labelClass}>Accommodation Type *</label>
                    <select required className={inputClass} value={form.accommodation} onChange={(e) => update("accommodation", e.target.value)}>
                      <option value="">Select accommodation</option>
                      <option value="triple">Triple Sharing</option>
                      <option value="twin">Twin Sharing</option>
                      <option value="private">Private Room</option>
                    </select></div>
                  <div className="sm:col-span-2"><label className={labelClass}>Select Course Date *</label>
                    <select required className={inputClass} value={form.date} onChange={(e) => update("date", e.target.value)}>
                      <option value="">Select date</option>
                      <optgroup label="Ashtanga TTC">
                        <option value="ashtanga-aug-2026">August 1–21, 2026 (Ashtanga) — 8 Seats Left</option>
                        <option value="ashtanga-oct-2026">October 1–21, 2026 (Ashtanga) — 10 Seats Left</option>
                        <option value="ashtanga-dec-2026">December 1–21, 2026 (Ashtanga) — 10 Seats Left</option>
                      </optgroup>
                      <optgroup label="Hatha TTC">
                        <option value="hatha-jul-2026">July 1–21, 2026 (Hatha) — 10 Seats Left</option>
                        <option value="hatha-sep-2026">September 1–21, 2026 (Hatha) — 10 Seats Left</option>
                        <option value="hatha-nov-2026">November 1–21, 2026 (Hatha) — 10 Seats Left</option>
                      </optgroup>
                    </select></div>
                  <div><label className={labelClass}>Yoga Experience *</label>
                    <select required className={inputClass} value={form.experience} onChange={(e) => update("experience", e.target.value)}>
                      <option value="">Select experience</option>
                      <option value="less-6m">Less than 6 months</option>
                      <option value="less-1y">Less than 1 year</option>
                      <option value="more-1y">More than 1 year</option>
                      <option value="more-5y">More than 5 years</option>
                    </select></div>
                  <div><label className={labelClass}>How Did You Hear About Us?</label>
                    <select className={inputClass} value={form.referral} onChange={(e) => update("referral", e.target.value)}>
                      <option value="">Select option</option>
                      <option>Google Search</option>
                      <option>Instagram</option>
                      <option>YouTube</option>
                      <option>Facebook</option>
                      <option>Friend / Word of Mouth</option>
                      <option>Yoga Alliance Directory</option>
                      <option>Blog / Article</option>
                      <option>Other</option>
                    </select></div>
                </div>
              </div>

              <div>
                <h2 className="font-cormorant text-xl font-semibold text-forest mb-4 pb-2 border-b border-forest/10">
                  Additional Information
                </h2>
                <div className="space-y-4">
                  <div><label className={labelClass}>Food Preferences</label>
                    <select className={inputClass} value={form.food} onChange={(e) => update("food", e.target.value)}>
                      <option value="">Select preference</option>
                      <option>Vegetarian (standard)</option>
                      <option>Vegan</option>
                      <option>Gluten-free</option>
                      <option>Other (please specify in questions)</option>
                    </select></div>
                  <div><label className={labelClass}>Past Injuries or Health Conditions <span className="text-charcoal/40 font-normal">(confidential)</span></label>
                    <textarea rows={3} className={inputClass} value={form.injuries}
                      onChange={(e) => update("injuries", e.target.value)}
                      placeholder="Any injuries, surgeries or health conditions we should be aware of to ensure safe practice..." /></div>
                  <div><label className={labelClass}>Questions or Comments</label>
                    <textarea rows={3} className={inputClass} value={form.questions}
                      onChange={(e) => update("questions", e.target.value)}
                      placeholder="Anything you would like us to know or any questions about the programme..." /></div>
                </div>
              </div>

              <div className="bg-forest/5 border border-forest/15 p-4 rounded-sm">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input required type="checkbox" checked={form.terms}
                    onChange={(e) => update("terms", e.target.checked)}
                    className="mt-1 w-4 h-4 accent-forest flex-shrink-0" />
                  <span className="font-inter text-sm text-charcoal/70 leading-relaxed">
                    I agree to the{" "}
                    <Link href="/terms" className="text-forest underline" target="_blank">Terms and Conditions</Link>.
                    I understand the application fee is non-refundable and my application is subject to review by Samyut Yoga.
                  </span>
                </label>
              </div>

              <button type="submit" disabled={loading}
                className="w-full bg-terracotta hover:bg-terracotta/90 text-white py-4 rounded font-inter font-semibold text-base transition-all duration-200 disabled:opacity-60">
                {loading ? "Submitting..." : "Submit Application"}
              </button>
              <p className="text-center text-charcoal/45 font-inter text-xs">
                We will respond within 48 hours · info@samyutyoga.com · +91 81477 62621
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
