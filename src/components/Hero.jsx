import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-500 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              Beginner friendly • Step-by-step path
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              Learn Japanese from Zero — one friendly step at a time
            </h1>
            <p className="mt-4 text-white/90">
              Master the basics with bite-sized lessons, interactive Kana drills, and a curated set of resources trusted by learners worldwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#roadmap" className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-indigo-700 shadow hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-white/80">
                Explore the roadmap
              </a>
              <a href="#trainer" className="rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/80">
                Try Kana trainer
              </a>
            </div>
          </div>
          <div className="">
            <div className="relative mx-auto h-64 w-full max-w-md rounded-2xl bg-white/10 p-6 backdrop-blur md:h-80">
              <div className="grid h-full w-full place-items-center rounded-xl bg-gradient-to-br from-white/10 to-white/5">
                <div className="text-center">
                  <div className="text-7xl">あ ア 日 本 語</div>
                  <p className="mt-3 text-sm text-white/80">Hiragana • Katakana • Basic Kanji</p>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-violet-300/40 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
