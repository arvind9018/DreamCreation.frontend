"use client";

import Input from "@/components/Input";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;

    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // ✅ Save token
      localStorage.setItem("token", data.token);

      // ✅ Redirect
      window.location.href = "/dashboard";
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-32 pb-24 bg-dark text-secondary">
      <div className="w-full max-w-md bg-[#181818] p-8 rounded-2xl border border-white/10">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold mb-2">
            Welcome back
          </h1>
          <p className="text-secondary/70 text-sm">
            Sign in to continue building your projects
          </p>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-400 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email address"
            name="email"
          />

          <Input
            type="password"
            placeholder="Password"
            name="password"
          />

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
            className="w-full mt-4 py-3 rounded-lg bg-accent-gradient text-dark font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-secondary/70 mt-6 text-center">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-accent hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
