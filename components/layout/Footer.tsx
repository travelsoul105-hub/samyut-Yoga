import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Star } from "lucide-react";
// Social icons — inline SVG used because lucide barrel optimizer issue with these icons
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <circle cx="12" cy="12" r="10"/><path d="M8 13s1-1 4-1 4 1 4 1"/><path d="M7 10.5s1.5-1.5 5-1.5 5 1.5 5 1.5"/><path d="M9 16s1-.5 3-.5 3 .5 3 .5"/>
  </svg>
);

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Ashtanga TTC", href: "/teacher-training/ashtanga" },
  { label: "Hatha TTC", href: "/teacher-training/hatha" },
  { label: "Beyond Asana", href: "/beyond-asana" },
  { label: "Blog", href: "/blog" },
  { label: "Facilities", href: "/facilities" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
  { label: "Register", href: "/register" },
  { label: "Terms", href: "/terms" },
];

const socialLinks = [
  { icon: InstagramIcon, href: "https://instagram.com/samyutyogamysore", label: "Instagram" },
  { icon: YoutubeIcon, href: "https://youtube.com/@samyutyoga", label: "YouTube" },
  { icon: FacebookIcon, href: "https://www.facebook.com/profile.php?id=61561163703486", label: "Facebook" },
  { icon: SpotifyIcon, href: "https://open.spotify.com/user/samyutyoga", label: "Spotify" },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="https://samyutyoga.com/storage/2024/07/SVAYAMLOGOPNG-1024x1024.png"
                alt="Samyut Yoga"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-cormorant text-xl font-semibold">Samyut Yoga</p>
                <p className="text-ivory/50 text-xs">The Traditional Yoga School</p>
              </div>
            </Link>
            <p className="text-ivory/70 text-sm leading-relaxed mb-5">
              Scientific & Mystical Yoga for Universal Transformation. An authentic space for Vedanta, Tantra and Yoga.
            </p>
            {/* Accreditation badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="border border-gold/40 text-gold text-xs px-2.5 py-1 rounded">
                E-RYT 500
              </span>
              <span className="border border-gold/40 text-gold text-xs px-2.5 py-1 rounded">
                YACEP
              </span>
              <span className="border border-gold/40 text-gold text-xs px-2.5 py-1 rounded">
                Yoga Alliance RYS
              </span>
            </div>
            {/* Trustpilot */}
            <div className="flex items-center gap-1.5 text-sm">
              <div className="flex">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
                <Star className="w-3.5 h-3.5 text-gold fill-gold/40" />
              </div>
              <span className="text-ivory/60 text-xs">4.3★ Trustpilot</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cormorant text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ivory/70 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-cormorant text-lg font-semibold mb-4 text-gold">More Pages</h4>
            <ul className="space-y-2">
              {quickLinks.slice(6).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ivory/70 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/dashboard" className="text-ivory/70 hover:text-gold text-sm transition-colors">
                  Student Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cormorant text-lg font-semibold mb-4 text-gold">Contact</h4>
            <div className="space-y-3 mb-6">
              <a href="mailto:info@samyutyoga.com" className="flex items-center gap-2 text-ivory/70 hover:text-gold text-sm transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@samyutyoga.com
              </a>
              <a href="tel:+918073239301" className="flex items-center gap-2 text-ivory/70 hover:text-gold text-sm transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 80732 39301
              </a>
              <a href="tel:+919538015757" className="flex items-center gap-2 text-ivory/70 hover:text-gold text-sm transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 9538015757
              </a>
            </div>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 border border-ivory/20 rounded flex items-center justify-center text-ivory/60 hover:text-gold hover:border-gold transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ivory/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-ivory/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Samyut Yoga. All rights reserved. Mysore, Karnataka, India.
          </p>
          <p className="text-ivory/40 text-xs">
            Scientific & Mystical Yoga for Universal Transformation
          </p>
        </div>
      </div>
    </footer>
  );
}
