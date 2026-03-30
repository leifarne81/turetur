"use client";

import type { TureturLang } from "../app/tureturCopy";

export function LanguageSelector({
  lang,
  onChange,
  labels,
  label,
}: {
  lang: TureturLang;
  onChange: (lang: TureturLang) => void;
  labels: { no: string; se: string; dk: string };
  label: string;
}) {
  const options: Array<{ id: TureturLang; label: string }> = [
    { id: "no", label: labels.no },
    { id: "se", label: labels.se },
    { id: "dk", label: labels.dk },
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-[#0B3A6D]/80">{label}</span>
      <div className="inline-flex rounded-full border border-blue-100 bg-white/60 p-1 shadow-sm backdrop-blur">
        {options.map((opt) => {
          const selected = opt.id === lang;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onChange(opt.id)}
              className={[
                "min-w-[44px] rounded-full px-3 py-1.5 text-sm font-semibold transition-colors",
                selected
                  ? "bg-blue-600 text-white"
                  : "bg-transparent text-[#0B3A6D] hover:bg-blue-50",
              ].join(" ")}
              aria-pressed={selected}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

