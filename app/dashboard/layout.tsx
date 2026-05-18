import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { LogOut } from "lucide-react";
import DashboardNav, { navItems } from "./DashboardNav";

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
    .select("first_name, last_name, status")
    .eq("auth_user_id", user.id)
    .single();

  if (!student || student.status !== "active") redirect("/pending");

  const initials = `${student.first_name?.[0] ?? ""}${student.last_name?.[0] ?? ""}`.toUpperCase();
  const fullName = `${student.first_name ?? ""} ${student.last_name ?? ""}`.trim();

  return (
    <div className="min-h-screen bg-ivory flex">
      {/* ── Desktop Sidebar ── */}
      <aside className="hidden md:flex flex-col w-64 bg-forest fixed left-0 top-0 bottom-0 z-40 shadow-xl">
        {/* Logo */}
        <div className="p-5 border-b border-ivory/10">
          <Link href="/" className="block">
            <p className="font-heading text-xl text-ivory">Samyut Yoga</p>
            <p className="text-ivory/40 text-xs font-body mt-0.5">Student Portal</p>
          </Link>
        </div>

        {/* Nav — client component for active highlighting */}
        <DashboardNav />

        {/* Student info + logout */}
        <div className="p-4 border-t border-ivory/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
              <span className="text-gold text-xs font-semibold">{initials || "S"}</span>
            </div>
            <p className="text-ivory/70 text-xs font-body truncate">{fullName || "Student"}</p>
          </div>
          <form action="/api/auth/logout" method="POST">
            <button
              type="submit"
              className="flex items-center gap-2 text-ivory/40 hover:text-ivory text-xs font-body transition-colors w-full"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* ── Mobile Top Bar ── */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-forest px-4 py-3 flex items-center justify-between shadow-md">
        <p className="font-heading text-lg text-ivory">Student Portal</p>
        <div className="flex gap-4">
          {navItems.slice(0, 5).map(({ icon: Icon, href, label }) => (
            <Link key={label} href={href} aria-label={label} className="text-ivory/70 hover:text-ivory transition-colors">
              <Icon className="w-4 h-4" />
            </Link>
          ))}
        </div>
      </div>

      {/* ── Main Content ── */}
      <main className="flex-1 md:ml-64 pt-14 md:pt-0 min-h-screen">
        {children}
      </main>
    </div>
  );
}
