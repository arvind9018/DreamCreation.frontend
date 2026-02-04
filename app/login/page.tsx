"use client";

import Input from "@/components/Input";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { getUser } from "@/lib/auth";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔐 Redirect if already logged in
  useEffect(() => {
    const user = getUser();
    if (user) {
      window.location.href = "/dashboard";
    }
  }, []);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      // ✅ Store full user object (IMPORTANT)
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: data.user.name,
          email: data.user.email,
          role: data.user.role,
          token: data.token,
        })
      );

      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-dark text-secondary">
      <div
        className="
          w-full max-w-5xl grid md:grid-cols-2
          bg-[#181818]
          rounded-2xl
          border border-accent/20
          shadow-[0_0_40px_rgba(0,229,255,0.08)]
          overflow-hidden
        "
      >
        {/* LEFT – LOGIN FORM */}
        <div className="p-10 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2">
              Welcome back 👋
            </h1>
            <p className="text-secondary/70 text-sm">
              Sign in to continue building your projects
            </p>
          </div>

          {error && (
            <p className="text-red-400 text-sm mb-4">
              {error}
            </p>
          )}

          <form className="space-y-4" onSubmit={handleLogin}>
            <Input type="email" placeholder="Email address" name="email" />
            <Input type="password" placeholder="Password" name="password" />

            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-sm text-accent hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="
                w-full mt-4 py-3 rounded-lg
                bg-accent-gradient text-dark font-semibold
                hover:opacity-90 transition
                disabled:opacity-50
              "
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p className="text-sm text-secondary/70 mt-6">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-accent hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        {/* RIGHT – IMAGE + ANIMATION */}
        <div
          className="
            hidden md:flex items-center justify-center
            relative bg-[#141414]
          "
        >
          {/* Glow */}
          <div
            className="
              absolute w-72 h-72 rounded-full
              bg-accent/20 blur-3xl
              animate-pulse
            "
          />

          {/* Image */}
          <Image
            src="/hero/login.png"
            alt="Secure Login"
            width={260}
            height={260}
            className="relative z-10 animate-float"
          />
        </div>
      </div>
    </div>
  );
}

