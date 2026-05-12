import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import {
  LayoutDashboard,
  BookOpen,
  Video,
  FileText,
  HelpCircle,
  Download,
  MessageSquare,
  Calendar,
  Award,
  LogOut,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  { icon: BookOpen, label: "Modules", href: "/dashboard/modules" },
  { icon: Video, label: "Lessons", href: "/dashboard/modules" },
  { icon: FileText, label: "Assignments", href: "/dashboard/assignments" },
  { icon: HelpCircle, label: "Quizzes", href: "/dashboard/quizzes" },
  { icon: Download, label: "Resources", href: "/dashboard/resources" },
  { icon: MessageSquare, label: "Forum", href: "/dashboard/forum" },
  { icon: Calendar, label: "Live Sessions", href: "/dashboard/live-sessions" },
  { icon: Award, label: "Certificate", href: "/dashboard/certificate" },
];

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: student } = await supabase
    .from("students")
    .select("status")
    .eq("auth_user_id", user.id)
    .single();

  if (!student || student.status !== "active") redirect("/pending");

  return (
    <div className="min-h-screen bg-ivory flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-60 bg-forest fixed left-0 top-0 bottom-0 z-40">
        <div className="p-5 border-b border-ivory/10">
          <p className="font-cormorant text-xl font-semibold text-ivory">Samyut Yoga</p>
          <p className="text-ivory/40 text-xs font-inter mt-0.5">Student Portal</p>
        </div>
        <nav className="flex-1 py-4 overflow-y-auto">
          {navItems.map(({ icon: Icon, label, href }) => (
            <Link
              key={label} href={href}
              className="flex items-center gap-3 px-5 py-2.5 text-ivory/70 hover:text-ivory hover:bg-ivory/10 transition-colors text-sm font-inter"
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-ivory/10">
          <form action="/api/auth/logout" method="POST">
            <button
              type="submit"
              className="flex items-center gap-2 text-ivory/50 hover:text-ivory text-xs font-inter transition-colors w-full"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-forest px-4 py-3 flex items-center justify-between">
        <p className="font-cormorant text-lg text-ivory">Student Portal</p>
        <div className="flex gap-3">
          {navItems.slice(0, 4).map(({ icon: Icon, href }) => (
            <Link key={href} href={href} className="text-ivory/70 hover:text-ivory">
              <Icon className="w-4 h-4" />
            </Link>
          ))}
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 md:ml-60 pt-14 md:pt-0 min-h-screen">
        {children}
      </main>
    </div>
  );
}
