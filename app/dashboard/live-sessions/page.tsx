export default function LiveSessionsPage() {
  return (
    <div className="p-6 lg:p-8 max-w-3xl">
      <h1 className="font-heading text-4xl font-semibold text-forest mb-2">Live Sessions</h1>
      <p className="text-charcoal/55 font-body text-sm mb-8">
        Book a 1-on-1 consultation with Yogacharya Aravind Prasad
      </p>

      <div className="bg-white border border-forest/10 p-6 rounded-sm mb-6">
        <h2 className="font-heading text-xl font-semibold text-forest mb-3">Personal Consultation</h2>
        <p className="text-charcoal/65 font-body text-sm leading-relaxed mb-5">
          As a TTC student, you have access to scheduled one-on-one consultations with Yogacharya Aravind Prasad.
          Use these sessions to ask questions about your practice, teaching preparation, or philosophy study.
        </p>
        {/* Cal.com embed */}
        <div className="bg-forest/5 border border-forest/15 rounded-sm p-10 text-center">
          <p className="text-charcoal/50 font-body text-sm mb-4">Cal.com Booking Widget (embedded here)</p>
          <a href="https://cal.com" target="_blank" rel="noopener noreferrer"
            className="bg-forest text-ivory px-6 py-3 rounded font-body font-medium text-sm hover:bg-forest-light transition-colors inline-block">
            Open Booking Calendar
          </a>
        </div>
      </div>

      <div className="bg-gold/10 border border-gold/30 p-5 rounded-sm">
        <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">Guidelines</h3>
        <ul className="space-y-2">
          {[
            "Sessions are 30 minutes via Zoom or Google Meet",
            "Prepare your questions in advance for best use of time",
            "24-hour cancellation notice required",
            "Sessions conducted in English",
          ].map((g) => (
            <li key={g} className="flex items-start gap-2 text-xs font-body text-charcoal/70">
              <span className="text-gold mt-0.5">✦</span>
              {g}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
