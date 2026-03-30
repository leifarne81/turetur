"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

const countries = [
  { value: "Norge", label: "Norge" },
  { value: "Sverige", label: "Sverige" },
  { value: "Danmark", label: "Danmark" },
];

export default function LeggUtReise() {
  const [tittel, setTittel] = useState("");
  const [beskrivelse, setBeskrivelse] = useState("");
  const [pris, setPris] = useState<number | "">("");
  const [startDato, setStartDato] = useState("");
  const [sluttDato, setSluttDato] = useState("");
  const [land, setLand] = useState("Norge");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (
      !tittel ||
      !beskrivelse ||
      pris === "" ||
      !startDato ||
      !sluttDato ||
      !land
    ) {
      setError("Alle felter må fylles ut.");
      setLoading(false);
      return;
    }

    if (sluttDato < startDato) {
      setError("Sluttdato kan ikke være før startdato.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("listings").insert([
      {
        title: tittel,
        description: beskrivelse,
        price: Number(pris),
        start_date: startDato,
        end_date: sluttDato,
        country: land,
      },
    ]);

    if (error) {
      setError("Noe gikk galt. Prøv igjen senere.");
      setLoading(false);
      return;
    }

    setTittel("");
    setBeskrivelse("");
    setPris("");
    setStartDato("");
    setSluttDato("");
    setLand("Norge");
    setSuccess(true);
    setLoading(false);
  }

  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-gray-50 px-2 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Legg ut reise</h1>
          <p className="text-gray-500 mb-4">
            Fyll inn skjemaet for å legge ut en ny reise på Turetur.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="tittel" className="font-medium text-gray-700">
              Tittel
            </label>
            <input
              id="tittel"
              type="text"
              value={tittel}
              onChange={(e) => setTittel(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              placeholder="F.eks. Oppdag Lofoten"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="beskrivelse" className="font-medium text-gray-700">
              Beskrivelse
            </label>
            <textarea
              id="beskrivelse"
              value={beskrivelse}
              onChange={(e) => setBeskrivelse(e.target.value)}
              className="border rounded-lg px-4 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              placeholder="Beskriv reisen…"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="pris" className="font-medium text-gray-700">
              Pris (NOK)
            </label>
            <input
              id="pris"
              type="number"
              value={pris}
              min={0}
              onChange={(e) =>
                setPris(e.target.value === "" ? "" : Number(e.target.value))
              }
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              placeholder="Eks. 3500"
              required
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="startDato" className="font-medium text-gray-700">
                Startdato
              </label>
              <input
                id="startDato"
                type="date"
                value={startDato}
                onChange={(e) => setStartDato(e.target.value)}
                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="sluttDato" className="font-medium text-gray-700">
                Sluttdato
              </label>
              <input
                id="sluttDato"
                type="date"
                value={sluttDato}
                min={startDato || undefined}
                onChange={(e) => setSluttDato(e.target.value)}
                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="land" className="font-medium text-gray-700">
              Land
            </label>
            <select
              id="land"
              value={land}
              onChange={(e) => setLand(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition bg-white"
              required
            >
              {countries.map((c) => (
                <option value={c.value} key={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-700 transition disabled:bg-blue-300"
            disabled={loading}
          >
            {loading ? "Lagrer…" : "Legg ut reise"}
          </button>
        </form>

        {success && (
          <div className="text-green-700 bg-green-100 border border-green-200 rounded-md py-2 px-4 text-center">
            Reisen er lagret!
          </div>
        )}
        {error && (
          <div className="text-red-700 bg-red-100 border border-red-200 rounded-md py-2 px-4 text-center">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}