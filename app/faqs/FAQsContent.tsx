"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { faqCategories } from "./data";

export default function FAQsContent() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="pt-16">
      <section className="bg-forest py-20">
        <div className="container-custom text-center">
          <h1 className="heading-xl text-ivory mb-4">Frequently Asked Questions</h1>
          <p className="text-ivory/65 font-inter text-base max-w-xl mx-auto">
            Everything you need to know about studying at Samyut Yoga. Can&apos;t find your answer?{" "}
            <Link href="/contact" className="text-gold underline">Contact us</Link>.
          </p>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-custom max-w-3xl">
          {faqCategories.map((section) => (
            <div key={section.category} className="mb-10">
              <h2 className="font-cormorant text-2xl font-semibold text-forest mb-4 pb-2 border-b border-forest/20">
                {section.category}
              </h2>
              <div className="space-y-2">
                {section.items.map((item) => {
                  const key = `${section.category}-${item.q}`;
                  const isOpen = openItem === key;
                  return (
                    <div key={key} className="border border-forest/10 rounded-sm overflow-hidden">
                      <button
                        onClick={() => setOpenItem(isOpen ? null : key)}
                        className="w-full flex items-start justify-between px-5 py-4 bg-white hover:bg-forest/5 transition-colors text-left"
                      >
                        <span className="font-inter text-sm font-medium text-charcoal pr-4">{item.q}</span>
                        <ChevronDown className={`w-4 h-4 text-forest/60 flex-shrink-0 mt-0.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isOpen && (
                        <div className="px-5 py-4 bg-forest/5 border-t border-forest/10">
                          <p className="text-charcoal/70 font-inter text-sm leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="mt-10 bg-forest p-6 rounded-sm text-center">
            <p className="text-ivory font-cormorant text-xl mb-2">Still Have Questions?</p>
            <p className="text-ivory/60 font-inter text-sm mb-4">We are happy to answer personally. Reach us via WhatsApp or email.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/918073239301" target="_blank" rel="noopener noreferrer" className="btn-gold text-sm">
                WhatsApp Us
              </a>
              <Link href="/contact" className="btn-secondary text-sm">
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
