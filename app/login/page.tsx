import type { Metadata } from "next";
import LoginContent from "./LoginContent";

export const metadata: Metadata = {
  title: "Student Login — Samyut Yoga Portal",
  description: "Sign in to your Samyut Yoga student dashboard to access course materials, video lessons, assignments, quizzes and the community forum.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/login" },
};

export default function LoginPage() {
  return <LoginContent />;
}
