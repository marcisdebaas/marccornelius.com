"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      router.push("/thank-you/newsletter");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your e-mail address"
        className="w-full sm:flex-1 px-5 py-3.5 rounded-lg bg-dark-card border border-dark-border text-dark-heading text-sm placeholder:text-[#666] focus:outline-none focus:border-dark-accent"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-dark-accent text-dark-bg font-semibold text-sm transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send me that Timehacker!"}
      </button>
      {error && (
        <p className="text-red-400 text-sm w-full text-center">{error}</p>
      )}
    </form>
  );
}
