"use client";

import Input from "@/components/Input";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Signup failed");

      window.location.href = "/login";
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-dark text-secondary">
      <div className="
  w-full max-w-5xl grid md:grid-cols-2
  bg-[#181818]
  rounded-2xl
  border border-accent/20
  shadow-[0_0_40px_rgba(0,229,255,0.08)]
  overflow-hidden
">

        {/* LEFT – SIGNUP FORM */}
        <div className="p-10 flex flex-col justify-center">

          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2">
              Create your account ✨
            </h1>
            <p className="text-secondary/70 text-sm">
              Start building your dream projects today
            </p>
          </div>

          {error && (
            <p className="text-red-400 text-sm mb-4">
              {error}
            </p>
          )}

          <form className="space-y-4" onSubmit={handleSignup}>
            <Input type="text" placeholder="Full name" name="name" />
            <Input type="email" placeholder="Email address" name="email" />
            <Input type="password" placeholder="Password" name="password" />

            <button
              type="submit"
              disabled={loading}
              className="
                w-full mt-6 py-3 rounded-lg
                bg-accent-gradient text-dark font-semibold
                hover:opacity-90 transition
                disabled:opacity-50
              "
            >
              {loading ? "Creating account..." : "Sign up"}
            </button>
          </form>

          <p className="text-sm text-secondary/70 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-accent hover:underline">
              Sign in
            </Link>
          </p>
        </div>

        {/* RIGHT – IMAGE + EFFECT */}
        <div className="
          hidden md:flex items-center justify-center
          relative bg-[#141414]
        ">
          {/* Glow */}
          <div className="
            absolute w-80 h-80 rounded-full
            bg-accent/20 blur-3xl
            animate-pulse
          " />

          {/* Image */}
          <Image
            src="/hero/signup.png"   // put image in /public/signup.png
            alt="Secure Signup"
            width={300}
            height={300}
            className="relative z-10 animate-float"
          />
        </div>

      </div>
    </div>
  );
}
