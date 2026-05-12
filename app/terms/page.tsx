import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Samyut Yoga",
  description: "Terms and Conditions for Samyut Yoga teacher training programmes and services.",
};

export default function TermsPage() {
  return (
    <div className="pt-16">
      <section className="bg-forest py-16">
        <div className="container-custom text-center">
          <h1 className="heading-xl text-ivory mb-3">Terms and Conditions</h1>
          <p className="text-ivory/50 font-inter text-sm">Last updated: April 2026</p>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-custom max-w-3xl">
          <div className="bg-white border border-forest/10 p-8 sm:p-12 rounded-sm space-y-8">
            {[
              { title: "1. Registration and Application", body: "All registrations for Samyut Yoga Teacher Training Courses (TTC) are subject to availability and approval. Submission of a registration form does not guarantee enrolment. Samyut Yoga reserves the right to decline any application at its discretion." },
              { title: "2. Fees and Payment", body: "The application fee (₹25,000 for Indian students / €349 for international students) is payable at the time of registration to secure your seat. This fee is strictly non-refundable. The remaining course fee is due 30 days before the programme start date. Failure to complete payment within this period may result in forfeiture of your seat." },
              { title: "3. Cancellation and Refund Policy", body: "The application fee is non-refundable under all circumstances. For the remaining course fee: cancellations made more than 30 days before the programme start date will receive a 70% refund of the course fee. Cancellations within 30 days of the start date are non-refundable. In cases of genuine emergency, course fees (excluding application fee) may be transferred to a future batch at Samyut Yoga's discretion." },
              { title: "4. Programme Changes", body: "Samyut Yoga reserves the right to change programme dates, faculty, curriculum content, and facilities with reasonable notice. In the event of a programme cancellation by Samyut Yoga, a full refund including application fee will be provided. Force majeure events (natural disasters, pandemic restrictions, government orders) will be handled case-by-case." },
              { title: "5. Health and Safety", body: "Students are required to disclose any pre-existing medical conditions, injuries, or health concerns during registration. Samyut Yoga is not liable for any injury, illness or health complications arising during the programme. Students participate in all physical practices at their own risk and are encouraged to practice mindfully within their own limits." },
              { title: "6. Code of Conduct", body: "Students are expected to conduct themselves in a manner consistent with the spirit of yoga — with respect, discipline and integrity. Consumption of alcohol, non-prescription drugs, or meat is not permitted during the residential programme. Behaviour deemed disruptive or disrespectful may result in dismissal from the programme without refund." },
              { title: "7. Certification Requirements", body: "Yoga Alliance RYT-200 certification support is conditional on satisfactory completion of all programme requirements including attendance, assessments and practicum. Minimum 90% attendance is required. Students who do not meet requirements will not receive a completion certificate." },
              { title: "8. Intellectual Property", body: "All course materials, manuals, recordings and content provided during the programme are the intellectual property of Samyut Yoga and Yogacharya Aravind Prasad. Students may not reproduce, share or sell these materials without written permission." },
              { title: "9. Photography and Media", body: "Samyut Yoga may photograph or video sessions for promotional purposes. Students who do not wish to appear in promotional materials must inform us in writing at the time of registration." },
              { title: "10. Governing Law", body: "These terms and conditions are governed by the laws of Karnataka, India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Mysore, Karnataka." },
              { title: "11. Contact", body: "For any queries regarding these terms, contact us at info@samyutyoga.com or +91 81477 62621." },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="font-cormorant text-xl font-semibold text-forest mb-3">{section.title}</h2>
                <p className="font-inter text-sm text-charcoal/70 leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
