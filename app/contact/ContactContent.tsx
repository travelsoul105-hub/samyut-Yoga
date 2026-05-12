"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactContent() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {}
    setSent(true);
  }

  return (
    <div className="pt-16">
      <section className="bg-forest py-20">
        <div className="container-custom text-center">
          <h1 className="heading-xl text-ivory mb-4">Contact Us</h1>
          <p className="text-ivory/65 font-inter text-base max-w-xl mx-auto">
            We welcome enquiries about our programmes. Reach us by any of the channels below — we respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact details */}
            <div className="lg:col-span-1 space-y-7">
              <div>
                <h2 className="font-cormorant text-2xl font-semibold text-forest mb-5">Get in Touch</h2>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "info@samyutyoga.com", href: "mailto:info@samyutyoga.com" },
                    { icon: Phone, label: "Phone 1", value: "+91 9538015757", href: "tel:+919538015757" },
                    { icon: Phone, label: "Phone 2", value: "+91 80732 39301", href: "tel:+918073239301" },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <a key={label} href={href} className="flex items-center gap-3 group">
                      <div className="w-9 h-9 border border-forest/20 flex items-center justify-center group-hover:bg-forest group-hover:border-forest transition-colors">
                        <Icon className="w-4 h-4 text-forest group-hover:text-ivory transition-colors" />
                      </div>
                      <div>
                        <p className="text-charcoal/50 font-inter text-xs">{label}</p>
                        <p className="text-forest font-inter text-sm font-medium group-hover:text-gold transition-colors">{value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-cormorant text-lg font-semibold text-forest mb-3">Location</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <p className="text-charcoal/70 font-inter text-sm leading-relaxed">
                    Samyut Yoga Gurukulam<br />
                    Mysore, Karnataka, India
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-cormorant text-lg font-semibold text-forest mb-3">Response Times</h3>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <p className="text-charcoal/70 font-inter text-sm leading-relaxed">
                    Email: within 24 hours<br />
                    WhatsApp: same day<br />
                    IST (India Standard Time)
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-cormorant text-lg font-semibold text-forest mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { label: "Instagram", href: "https://instagram.com/samyutyogamysore" },
                    { label: "YouTube", href: "https://youtube.com/@samyutyoga" },
                    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61561163703486" },
                  ].map(({ label, href }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 border border-forest/20 flex items-center justify-center hover:bg-forest hover:border-forest transition-colors group text-forest hover:text-ivory text-xs font-bold">
                      {label[0]}
                    </a>
                  ))}
                </div>
              </div>

              <a href="https://wa.me/918073239301" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-3 rounded font-inter font-medium text-sm transition-all">
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Chat
              </a>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2 bg-white p-7 rounded-sm border border-forest/10">
              <h2 className="font-cormorant text-2xl font-semibold text-forest mb-6">Send a Message</h2>
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">🙏</div>
                  <p className="font-cormorant text-2xl text-forest mb-2">Namaste!</p>
                  <p className="text-charcoal/65 font-inter text-sm">Thank you for reaching out. We will respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-inter font-medium text-charcoal/70 mb-1.5">Your Name *</label>
                      <input required type="text" value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-forest/20 rounded px-3 py-2.5 text-sm font-inter focus:outline-none focus:border-forest"
                        placeholder="Full name" />
                    </div>
                    <div>
                      <label className="block text-xs font-inter font-medium text-charcoal/70 mb-1.5">Email *</label>
                      <input required type="email" value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-forest/20 rounded px-3 py-2.5 text-sm font-inter focus:outline-none focus:border-forest"
                        placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-inter font-medium text-charcoal/70 mb-1.5">Subject *</label>
                    <input required type="text" value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full border border-forest/20 rounded px-3 py-2.5 text-sm font-inter focus:outline-none focus:border-forest"
                      placeholder="e.g., Enquiry about Ashtanga TTC October 2026" />
                  </div>
                  <div>
                    <label className="block text-xs font-inter font-medium text-charcoal/70 mb-1.5">Message *</label>
                    <textarea required rows={6} value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border border-forest/20 rounded px-3 py-2.5 text-sm font-inter focus:outline-none focus:border-forest resize-none"
                      placeholder="Tell us about yourself, your yoga experience and what you would like to know..." />
                  </div>
                  <button type="submit" className="w-full btn-primary justify-center py-3.5">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
