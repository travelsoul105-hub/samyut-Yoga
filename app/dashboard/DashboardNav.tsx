"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, BookOpen, FileText, HelpCircle,
  Download, MessageSquare, Calendar, Award,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Overview",      href: "/dashboard" },
  { icon: BookOpen,        label: "Modules",       href: "/dashboard/modules" },
  { icon: FileText,        label: "Assignments",   href: "/dashboard/assignments" },
  { icon: HelpCircle,      label: "Quizzes",       href: "/dashboard/quizzes" },
  { icon: Download,        label: "Resources",     href: "/dashboard/resources" },
  { icon: MessageSquare,   label: "Forum",         href: "/dashboard/forum" },
  { icon: Calendar,        label: "Live Sessions", href: "/dashboard/live-sessions" },
  { icon: Award,           label: "Certificate",   href: "/dashboard/certificate" },
];

export { navItems };

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 py-4 overflow-y-auto">
      {navItems.map(({ icon: Icon, label, href }) => {
        const active =
          href === "/dashboard" ? pathname === "/dashboard" : pathname.startsWith(href);
        return (
          <Link
            key={label}
            href={href}
            className={`flex items-center gap-3 px-5 py-3 text-sm font-body transition-colors group ${
              active
                ? "bg-ivory/15 text-ivory border-r-2 border-gold"
                : "text-ivory/65 hover:text-ivory hover:bg-ivory/10"
            }`}
          >
            <Icon
              className={`w-4 h-4 flex-shrink-0 transition-colors ${
                active ? "text-gold" : "group-hover:text-gold"
              }`}
            />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
