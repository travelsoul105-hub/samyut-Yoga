"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { Loader2 } from "lucide-react";

const COURSE_OPTIONS = [
  { value: "ashtanga_ttc", label: "Ashtanga TTC (200hrs)" },
  { value: "hatha_ttc", label: "Hatha TTC (200hrs)" },
  { value: "beyond_asana", label: "Beyond Asana Workshops" },
];

type Tab = "signin" | "signup";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

function LotusBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
      <svg viewBox="0 0 400 400" className="w-[500px] h-[500px]" fill="none">
        <circle cx="200" cy="200" r="190" stroke="#F7F3EC" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="140" stroke="#F7F3EC" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="90" stroke="#C9A84C" strokeWidth="0.5" />
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <ellipse
            key={a}
            cx="200" cy="200" rx="25" ry="70"
            stroke="#F7F3EC" strokeWidth="0.5" fill="none"
            transform={`rotate(${a} 200 200) translate(0 -70)`}
          />
        ))}
      </svg>
    </div>
  );
}

export default function LoginContent() {
  const [tab, setTab] = useState<Tab>("signin");

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signInLoading, setSignInLoading] = useState(false);
  const [signInError, setSignInError] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [courseInterest, setCourseInterest] = useState("");
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [signUpError, setSignUpError] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setSignInLoading(true);
    setSignInError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: signInEmail, password: signInPassword }),
      });
      const data = await res.json();
      if (res.ok) {
        window.location.href = data.status === "active" ? "/dashboard" : "/pending";
      } else {
        setSignInError(data.error || "Incorrect email or password. Please try again.");
      }
    } catch {
      setSignInError("Connection error. Please try again.");
    }
    setSignInLoading(false);
  }

  async function handleGoogleSignIn() {
    setGoogleLoading(true);
    setSignInError("");
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams: { access_type: "offline", prompt: "consent" },
      },
    });
    if (error) {
      setSignInError(error.message);
      setGoogleLoading(false);
    }
  }

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setSignUpLoading(true);
    setSignUpError("");
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email: signUpEmail, phone, password: signUpPassword, courseInterest }),
      });
      const data = await res.json();
      if (res.ok) {
        setSignUpSuccess(true);
      } else {
        setSignUpError(data.error || "Signup failed. Please try again.");
      }
    } catch {
      setSignUpError("Connection error. Please try again.");
    }
    setSignUpLoading(false);
  }

  const inputClass =
    "w-full bg-white/10 border border-ivory/20 rounded px-4 py-3 text-ivory text-sm font-body placeholder-ivory/30 focus:outline-none focus:border-gold";
  const labelClass = "block text-ivory/70 font-body text-xs font-medium mb-1.5";

  return (
    <div className="min-h-screen bg-forest flex items-center justify-center px-4 py-12">
      <LotusBackground />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image src="/images/logo.jpg" alt="Samyut Yoga" width={52} height={52} className="rounded-full" />
            <div className="text-left">
              <p className="font-heading text-2xl text-ivory">Samyut Yoga</p>
              <p className="text-ivory/40 text-xs font-body">Student Portal</p>
            </div>
          </Link>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-ivory/10 rounded-sm p-8">
          {/* Tabs */}
          <div className="flex border-b border-ivory/10 mb-7">
            <button
              onClick={() => setTab("signin")}
              className={`flex-1 pb-3 font-body text-sm font-medium transition-colors ${tab === "signin" ? "text-gold border-b-2 border-gold" : "text-ivory/40 hover:text-ivory/70"}`}
            >
              Sign In
            </button>
            <button
              onClick={() => setTab("signup")}
              className={`flex-1 pb-3 font-body text-sm font-medium transition-colors ${tab === "signup" ? "text-gold border-b-2 border-gold" : "text-ivory/40 hover:text-ivory/70"}`}
            >
              Sign Up
            </button>
          </div>

          {/* ── Sign In ── */}
          {tab === "signin" && (
            <>
              <h1 className="font-heading text-3xl text-ivory mb-1 text-center">Welcome Back</h1>
              <p className="text-ivory/50 font-body text-sm text-center mb-6">Sign in to your student dashboard</p>

              {/* Google */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={googleLoading || signInLoading}
                className="w-full flex items-center justify-center gap-3 bg-white hover:bg-white/90 text-charcoal rounded px-4 py-2.5 text-sm font-body font-medium transition-colors disabled:opacity-60 mb-4"
              >
                {googleLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <GoogleIcon />}
                {googleLoading ? "Redirecting…" : "Continue with Google"}
              </button>

              <div className="flex items-center gap-3 mb-5">
                <div className="flex-1 h-px bg-ivory/10" />
                <span className="text-xs font-body text-ivory/30">or</span>
                <div className="flex-1 h-px bg-ivory/10" />
              </div>

              {signInError && (
                <div className="bg-red-500/10 border border-red-400/30 text-red-300 font-body text-sm px-4 py-3 rounded mb-5">
                  {signInError}
                </div>
              )}

              <form onSubmit={handleSignIn} className="space-y-5">
                <div>
                  <label className={labelClass}>Email</label>
                  <input required type="email" value={signInEmail}
                    onChange={(e) => setSignInEmail(e.target.value)}
                    className={inputClass} placeholder="your@email.com" />
                </div>
                <div>
                  <label className={labelClass}>Password</label>
                  <input required type="password" value={signInPassword}
                    onChange={(e) => setSignInPassword(e.target.value)}
                    className={inputClass} placeholder="Your password" />
                </div>
                <button type="submit" disabled={signInLoading || googleLoading}
                  className="w-full bg-terracotta hover:bg-terracotta/90 text-white py-3.5 rounded font-body font-semibold text-sm transition-all disabled:opacity-60 flex items-center justify-center gap-2">
                  {signInLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                  {signInLoading ? "Signing in…" : "Sign In to Dashboard"}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-ivory/40 font-body text-xs">
                  Need help?{" "}
                  <a href="mailto:info@samyutyoga.com" className="text-ivory/60 hover:text-gold transition-colors">
                    info@samyutyoga.com
                  </a>
                </p>
              </div>
            </>
          )}

          {/* ── Sign Up ── */}
          {tab === "signup" && (
            <>
              <h1 className="font-heading text-3xl text-ivory mb-1 text-center">Create Account</h1>
              <p className="text-ivory/50 font-body text-sm text-center mb-7">Begin your journey with Samyut Yoga</p>

              {signUpSuccess ? (
                <div className="bg-gold/10 border border-gold/30 rounded px-5 py-6 text-center">
                  <p className="font-heading text-2xl text-gold mb-3">Namaste 🙏</p>
                  <p className="text-ivory/80 font-body text-sm leading-relaxed">
                    Your application has been received. We will review and confirm your enrollment within 24 hours. Please check your email.
                  </p>
                </div>
              ) : (
                <>
                  {signUpError && (
                    <div className="bg-red-500/10 border border-red-400/30 text-red-300 font-body text-sm px-4 py-3 rounded mb-5">
                      {signUpError}
                    </div>
                  )}

                  <form onSubmit={handleSignUp} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>First Name</label>
                        <input required type="text" value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className={inputClass} placeholder="Arjun" />
                      </div>
                      <div>
                        <label className={labelClass}>Last Name</label>
                        <input required type="text" value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className={inputClass} placeholder="Sharma" />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Email</label>
                      <input required type="email" value={signUpEmail}
                        onChange={(e) => setSignUpEmail(e.target.value)}
                        className={inputClass} placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className={labelClass}>Phone</label>
                      <input required type="tel" value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={inputClass} placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className={labelClass}>Password</label>
                      <input required type="password" value={signUpPassword}
                        onChange={(e) => setSignUpPassword(e.target.value)}
                        className={inputClass} placeholder="Min. 8 characters" minLength={8} />
                    </div>
                    <div>
                      <label className={labelClass}>Course Interest</label>
                      <select required value={courseInterest}
                        onChange={(e) => setCourseInterest(e.target.value)}
                        className={`${inputClass} appearance-none`}>
                        <option value="" disabled className="bg-forest">Select a course…</option>
                        {COURSE_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value} className="bg-forest">{o.label}</option>
                        ))}
                      </select>
                    </div>
                    <button type="submit" disabled={signUpLoading}
                      className="w-full bg-terracotta hover:bg-terracotta/90 text-white py-3.5 rounded font-body font-semibold text-sm transition-all disabled:opacity-60 mt-1 flex items-center justify-center gap-2">
                      {signUpLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                      {signUpLoading ? "Creating account…" : "Create Account"}
                    </button>
                  </form>
                </>
              )}

              <div className="mt-6 text-center">
                <p className="text-ivory/40 font-body text-xs">
                  Already have an account?{" "}
                  <button onClick={() => setTab("signin")} className="text-gold hover:underline">
                    Sign in →
                  </button>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
