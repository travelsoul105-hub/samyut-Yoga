"use client";

import { Award, Download, Lock } from "lucide-react";

// In production, check real progress from Supabase
const mockProgress = 45;
const isComplete = mockProgress >= 100;

export default function CertificatePage() {
  async function downloadCertificate() {
    const res = await fetch("/api/certificate/generate", { method: "POST" });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "samyut-yoga-certificate.pdf";
    a.click();
  }

  return (
    <div className="p-6 lg:p-8 max-w-2xl">
      <h1 className="font-heading text-4xl font-semibold text-forest mb-2">Your Certificate</h1>
      <p className="text-charcoal/55 font-body text-sm mb-8">
        Yoga Alliance RYT-200 Certification — available on course completion
      </p>

      {!isComplete ? (
        <div className="bg-white border border-forest/10 rounded-sm overflow-hidden">
          {/* Locked certificate preview */}
          <div className="relative bg-forest/5 p-10 text-center border-b border-forest/10">
            <div className="max-w-sm mx-auto border-2 border-gold/30 p-8 opacity-50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-8 bg-gold/50" />
                <span className="text-gold text-xs font-body tracking-widest">SAMYUT YOGA</span>
                <div className="h-px w-8 bg-gold/50" />
              </div>
              <p className="font-heading text-2xl font-semibold text-forest mb-1">Certificate of Completion</p>
              <p className="font-heading text-lg italic text-gold mb-3">200hrs Ashtanga Yoga TTC</p>
              <p className="text-charcoal/50 font-body text-sm">Sarah Johnson</p>
              <div className="mt-4 pt-4 border-t border-gold/20 flex justify-center">
                <Award className="w-8 h-8 text-gold/50" />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 border border-forest/20 rounded-sm px-5 py-3 flex items-center gap-2">
                <Lock className="w-4 h-4 text-charcoal/60" />
                <span className="font-body text-sm text-charcoal/70">Complete the course to unlock</span>
              </div>
            </div>
          </div>
          <div className="p-6">
            {/* Progress bar */}
            <div className="flex items-center justify-between mb-2">
              <span className="font-body text-sm text-charcoal/70">Course Progress</span>
              <span className="font-body text-sm font-semibold text-forest">{mockProgress}%</span>
            </div>
            <div className="w-full bg-forest/10 rounded-full h-2 mb-4">
              <div className="bg-forest h-2 rounded-full transition-all" style={{ width: `${mockProgress}%` }} />
            </div>
            <p className="text-charcoal/55 font-body text-xs leading-relaxed">
              Complete all modules, assignments and quizzes to unlock your certificate. You are {100 - mockProgress}% away from completion.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-forest/10 rounded-sm p-8 text-center">
          <Award className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="font-heading text-3xl font-semibold text-forest mb-2">Congratulations! 🎉</h2>
          <p className="text-charcoal/65 font-body text-sm mb-6">Your Samyut Yoga certificate is ready to download.</p>
          <button onClick={downloadCertificate}
            className="flex items-center gap-2 bg-forest text-ivory px-6 py-3 rounded font-body font-medium text-sm hover:bg-forest-light transition-colors mx-auto mb-6">
            <Download className="w-4 h-4" /> Download Certificate (PDF)
          </button>
          <div className="border-t border-forest/10 pt-5">
            <h3 className="font-heading text-lg font-semibold text-forest mb-3">Register with Yoga Alliance</h3>
            <p className="text-charcoal/60 font-body text-xs leading-relaxed mb-3">
              With your Samyut Yoga certificate, register as RYT-200 at yogaalliance.org. You will need: your Samyut Yoga certificate, a copy of your ID, and your Yoga Alliance registration fee.
            </p>
            <a href="https://www.yogaalliance.org" target="_blank" rel="noopener noreferrer"
              className="text-forest font-body text-xs underline hover:text-gold transition-colors">
              yogaalliance.org → Register as RYT-200
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
