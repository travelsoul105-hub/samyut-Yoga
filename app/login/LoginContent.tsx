"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Tab = "signin" | "signup";

const COURSE_OPTIONS = [
  { value: "ashtanga_ttc", label: "Ashtanga TTC (200hrs)" },
  { value: "hatha_ttc", label: "Hatha TTC (200hrs)" },
  { value: "beyond_asana", label: "Beyond Asana Workshops" },
];

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
        setSignInError(data.error || "Invalid email or password. Please try again.");
      }
    } catch {
      setSignInError("Connection error. Please try again.");
    }
    setSignInLoading(false);
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
    "w-full bg-white/10 border border-ivory/20 rounded px-4 py-3 text-ivory text-sm font-inter placeholder-ivory/30 focus:outline-none focus:border-gold";
  const labelClass = "block text-ivory/70 font-inter text-xs font-medium mb-1.5";

  return (
    <div className="min-h-screen bg-forest flex items-center justify-center px-4 py-12">
      <LotusBackground />

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="Samyut Yoga" width={52} height={52} className="rounded-full"
            />
            <div className="text-left">
              <p className="font-cormorant text-2xl font-semibold text-ivory">Samyut Yoga</p>
              <p className="text-ivory/40 text-xs font-inter">Student Portal</p>
            </div>
          </Link>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-ivory/10 rounded-sm p-8">
          <div className="flex border-b border-ivory/10 mb-7">
            <button
              onClick={() => setTab("signin")}
              className={`flex-1 pb-3 font-inter text-sm font-medium transition-colors ${tab === "signin" ? "text-gold border-b-2 border-gold" : "text-ivory/40 hover:text-ivory/70"}`}
            >
              Sign In
            </button>
            <button
              onClick={() => setTab("signup")}
              className={`flex-1 pb-3 font-inter text-sm font-medium transition-colors ${tab === "signup" ? "text-gold border-b-2 border-gold" : "text-ivory/40 hover:text-ivory/70"}`}
            >
              Sign Up
            </button>
          </div>

          {tab === "signin" && (
            <>
              <h1 className="font-cormorant text-3xl font-semibold text-ivory mb-1 text-center">Welcome Back</h1>
              <p className="text-ivory/50 font-inter text-sm text-center mb-7">Sign in to your student dashboard</p>

              {signInError && (
                <div className="bg-red-500/10 border border-red-400/30 text-red-300 font-inter text-sm px-4 py-3 rounded mb-5">
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
                <button type="submit" disabled={signInLoading}
                  className="w-full bg-terracotta hover:bg-terracotta/90 text-white py-3.5 rounded font-inter font-semibold text-sm transition-all duration-200 disabled:opacity-60">
                  {signInLoading ? "Signing inâ€¦" : "Sign In to Dashboard"}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-ivory/40 font-inter text-xs">
                  Need help?{" "}
                  <a href="mailto:info@samyutyoga.com" className="text-ivory/60 hover:text-gold transition-colors">
                    info@samyutyoga.com
                  </a>
                </p>
              </div>
            </>
          )}

          {tab === "signup" && (
            <>
              <h1 className="font-cormorant text-3xl font-semibold text-ivory mb-1 text-center">Create Account</h1>
              <p className="text-ivory/50 font-inter text-sm text-center mb-7">Begin your journey with Samyut Yoga</p>

              {signUpSuccess ? (
                <div className="bg-gold/10 border border-gold/30 rounded px-5 py-6 text-center">
                  <p className="font-cormorant text-2xl text-gold mb-3">Namaste ðŸ™</p>
                  <p className="text-ivory/80 font-inter text-sm leading-relaxed">
                    Your application has been received. We will review and confirm your enrollment within 24 hours. Please check your email.
                  </p>
                </div>
              ) : (
                <>
                  {signUpError && (
                    <div className="bg-red-500/10 border border-red-400/30 text-red-300 font-inter text-sm px-4 py-3 rounded mb-5">
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
                        <option value="" disabled className="bg-forest">Select a courseâ€¦</option>
                        {COURSE_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value} className="bg-forest">{o.label}</option>
                        ))}
                      </select>
                    </div>
                    <button type="submit" disabled={signUpLoading}
                      className="w-full bg-terracotta hover:bg-terracotta/90 text-white py-3.5 rounded font-inter font-semibold text-sm transition-all duration-200 disabled:opacity-60 mt-1">
                      {signUpLoading ? "Creating accountâ€¦" : "Create Account"}
                    </button>
                  </form>
                </>
              )}

              <div className="mt-6 text-center">
                <p className="text-ivory/40 font-inter text-xs">
                  Already have an account?{" "}
                  <button onClick={() => setTab("signin")} className="text-gold hover:underline">
                    Sign in â†’
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


