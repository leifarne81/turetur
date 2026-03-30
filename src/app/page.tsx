"use client";

import { useMemo, useState } from "react";
import { Plane, Search, ShieldCheck, Ticket } from "lucide-react";
import { LanguageSelector } from "../components/LanguageSelector";
import { TURETUR_COPY, type TureturLang } from "./tureturCopy";

export default function Home() {
  const [lang, setLang] = useState<TureturLang>("no");
  const t = useMemo(() => TURETUR_COPY[lang], [lang]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7F3EA] via-white to-[#F7F3EA] font-sans">
      <header className="sticky top-0 z-10 border-b border-blue-100/70 bg-[#F7F3EA]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
          <div
            className="flex items-center gap-3 group cursor-pointer select-none"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-200 transition-transform group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-white"
                aria-hidden="true"
              >
                <path d="M7 7h10" />
                <path d="M12 7v11" />
                <path d="M12 18H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3" />
                <path d="m15 10 2-3-2-3" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-[#0B3A6D] leading-none">
                {t.brand.name}
                <span className="text-blue-600">{t.brand.dot}</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400/80 leading-none mt-1">
                {t.brand.tag}
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            <a
              href="#find-reise"
              className="text-sm font-medium text-[#0B3A6D]/90 hover:text-[#0B3A6D]"
            >
              {t.header.navFind}
            </a>
            <a
              href="#selg-din-reise"
              className="text-sm font-medium text-[#0B3A6D]/90 hover:text-[#0B3A6D]"
            >
              {t.header.navSell}
            </a>
          </nav>

          <LanguageSelector
            lang={lang}
            onChange={setLang}
            labels={t.languages}
            label={t.header.languageLabel}
          />
        </div>
      </header>

      <main>
        <section className="relative pt-10 pb-8 sm:pt-14 sm:pb-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/60 px-4 py-2 text-sm font-semibold text-[#0B3A6D]/90 shadow-sm backdrop-blur">
                  <Plane className="h-4 w-4" aria-hidden="true" />
                  <span>{t.hero.badge}</span>
                </div>

                <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-[#0B3A6D] sm:text-5xl">
                  {t.hero.title}
                </h1>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-700">
                  {t.hero.subtitle}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#find-reise"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300"
                  >
                    <Search className="h-4 w-4" aria-hidden="true" />
                    {t.hero.ctaFind}
                  </a>
                  <a
                    href="#selg-din-reise"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-blue-100 bg-white/60 px-6 text-sm font-semibold text-[#0B3A6D] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-200"
                  >
                    <Ticket className="h-4 w-4" aria-hidden="true" />
                    {t.hero.ctaSell}
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-12 -right-12 h-56 w-56 rounded-full bg-blue-200/40 blur-2xl" />
                <div className="absolute -bottom-14 -left-14 h-56 w-56 rounded-full bg-amber-200/40 blur-2xl" />

                <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white/65 p-6 shadow-sm backdrop-blur sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm">
                      <Search className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-white/60 text-[#0B3A6D] shadow-sm">
                      <Ticket className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-white/60 text-[#0B3A6D] shadow-sm">
                      <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {[
                      { Icon: Search, label: "find" },
                      { Icon: Ticket, label: "sell" },
                      { Icon: ShieldCheck, label: "pay" },
                    ].map(({ Icon, label }) => (
                      <div
                        key={label}
                        className="relative flex h-28 flex-col items-center justify-center rounded-2xl border border-blue-100 bg-white/60"
                      >
                        <Icon className="h-6 w-6 text-[#0B3A6D]" aria-hidden="true" />
                        <div className="mt-3 h-2 w-16 rounded-full bg-blue-600/10" />
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between rounded-2xl border border-blue-100 bg-white/60 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                        <Plane className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div className="text-sm font-semibold text-[#0B3A6D]/90">
                        {t.cards.heading}
                      </div>
                    </div>
                    <div className="h-2 w-24 rounded-full bg-blue-600/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cards" className="pb-16 sm:pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-2xl font-semibold tracking-tight text-[#0B3A6D]">
                {t.cards.heading}
              </h2>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              <article
                id="find-reise"
                className="rounded-3xl border border-blue-100 bg-white/65 p-6 shadow-sm backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm">
                    <Search className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0B3A6D]">
                    {t.cards.find.title}
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-slate-700">
                  {t.cards.find.description}
                </p>
              </article>

              <article
                id="selg-din-reise"
                className="rounded-3xl border border-blue-100 bg-white/65 p-6 shadow-sm backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm">
                    <Ticket className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0B3A6D]">
                    {t.cards.sell.title}
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-slate-700">
                  {t.cards.sell.description}
                </p>
              </article>

              <article
                id="trygg-betaling"
                className="rounded-3xl border border-blue-100 bg-white/65 p-6 shadow-sm backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm">
                    <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0B3A6D]">
                    {t.cards.payment.title}
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-slate-700">
                  {t.cards.payment.description}
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-blue-100/70 bg-[#F7F3EA]/60 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-medium text-[#0B3A6D]/80">{t.footer.note}</p>
        </div>
      </footer>
    </div>
  );
}
