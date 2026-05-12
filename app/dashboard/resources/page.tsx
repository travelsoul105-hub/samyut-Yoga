import { FileText, Download } from "lucide-react";

const resources = [
  { name: "Course Manual — Ashtanga TTC", type: "PDF", size: "4.2 MB", path: "/resources/course-manual.pdf" },
  { name: "Primary Series Asana Chart", type: "PDF", size: "2.1 MB", path: "/resources/primary-series-chart.pdf" },
  { name: "Yoga Sutras Study Notes", type: "PDF", size: "1.8 MB", path: "/resources/yoga-sutras-notes.pdf" },
  { name: "Daily Timetable", type: "PDF", size: "0.3 MB", path: "/resources/timetable.pdf" },
  { name: "Anatomy Reference — Musculo-Skeletal", type: "PDF", size: "3.5 MB", path: "/resources/anatomy.pdf" },
  { name: "Sanskrit Pronunciation Guide", type: "PDF", size: "0.9 MB", path: "/resources/sanskrit.pdf" },
  { name: "Hatha Yoga Pradipika — Selected Passages", type: "PDF", size: "1.2 MB", path: "/resources/hyp.pdf" },
  { name: "Vijnana Bhairava Tantra — 112 Techniques", type: "PDF", size: "0.8 MB", path: "/resources/vbt.pdf" },
];

export default function ResourcesPage() {
  return (
    <div className="p-6 lg:p-8 max-w-3xl">
      <h1 className="font-cormorant text-4xl font-semibold text-forest mb-2">Resources</h1>
      <p className="text-charcoal/55 font-inter text-sm mb-8">Course materials, charts and reference documents</p>
      <div className="space-y-3">
        {resources.map((r) => (
          <div key={r.name} className="bg-white border border-forest/10 p-4 rounded-sm flex items-center gap-4 hover:border-gold/30 transition-colors">
            <div className="w-10 h-10 bg-forest/5 rounded flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-forest" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-inter text-sm font-medium text-charcoal truncate">{r.name}</p>
              <p className="font-inter text-xs text-charcoal/40">{r.type} · {r.size}</p>
            </div>
            <a href={r.path} download
              className="flex items-center gap-1.5 border border-forest/20 text-forest hover:bg-forest hover:text-ivory hover:border-forest px-3 py-1.5 rounded text-xs font-inter font-medium transition-all flex-shrink-0">
              <Download className="w-3 h-3" /> Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
