"use client";

import { FormEvent, useMemo, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";
  const [status, setStatus] = useState<Status>("idle");
  const [checked, setChecked] = useState(false);

  const message = useMemo(() => {
    if (status === "success") return "送信ありがとうございました";
    if (status === "error")
      return "送信できませんでした。時間をおいて再度お試しください。";
    return "";
  }, [status]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!checked || status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" }
        });

        if (!response.ok) throw new Error("Form submission failed");
      } else {
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      form.reset();
      setChecked(false);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" aria-label="お問い合わせフォーム">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-semibold text-ink">
          お名前
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="min-h-12 rounded border border-line bg-white px-4 text-base outline-none transition focus:border-navy focus:ring-4 focus:ring-navy/10"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-semibold text-ink">
          メールアドレス
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="min-h-12 rounded border border-line bg-white px-4 text-base outline-none transition focus:border-navy focus:ring-4 focus:ring-navy/10"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-ink">
          お問い合わせ内容
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="resize-y rounded border border-line bg-white px-4 py-3 text-base outline-none transition focus:border-navy focus:ring-4 focus:ring-navy/10"
        />
      </div>

      <label className="flex items-start gap-3 rounded border border-line bg-white px-4 py-3 text-sm leading-6 text-steel">
        <input
          name="not_sales"
          type="checkbox"
          required
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
          className="mt-1 h-4 w-4 accent-navy"
        />
        <span>営業・勧誘目的ではありません</span>
      </label>

      <button
        type="submit"
        disabled={!checked || status === "sending"}
        className="min-h-12 rounded bg-navy px-6 py-3 text-base font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink hover:shadow-lift disabled:cursor-not-allowed disabled:bg-steel/45 disabled:shadow-none disabled:hover:translate-y-0"
      >
        {status === "sending" ? "送信中です" : "お問い合わせを送信"}
      </button>

      {message ? (
        <p
          className={`rounded px-4 py-3 text-sm font-semibold ${
            status === "success" ? "bg-mist text-navy" : "bg-red-50 text-red-700"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
