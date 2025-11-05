import React, { useEffect, useMemo, useState } from 'react';
import { PlayCircle, RotateCcw } from 'lucide-react';

const HIRAGANA = [
  { kana: 'あ', romaji: 'a' },
  { kana: 'い', romaji: 'i' },
  { kana: 'う', romaji: 'u' },
  { kana: 'え', romaji: 'e' },
  { kana: 'お', romaji: 'o' },
  { kana: 'か', romaji: 'ka' },
  { kana: 'き', romaji: 'ki' },
  { kana: 'く', romaji: 'ku' },
  { kana: 'け', romaji: 'ke' },
  { kana: 'こ', romaji: 'ko' },
  { kana: 'さ', romaji: 'sa' },
  { kana: 'し', romaji: 'shi' },
  { kana: 'す', romaji: 'su' },
  { kana: 'せ', romaji: 'se' },
  { kana: 'そ', romaji: 'so' },
];

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function KanaTrainer() {
  const questions = useMemo(() => shuffle(HIRAGANA).slice(0, 10), []);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const current = questions[index];

  const options = useMemo(() => {
    const wrong = shuffle(HIRAGANA.filter((x) => x.romaji !== current.romaji)).slice(0, 3);
    const all = shuffle([current.romaji, ...wrong.map((w) => w.romaji)]);
    return all;
  }, [current]);

  useEffect(() => {
    setSelected(null);
    setShowResult(false);
  }, [index]);

  const handleChoose = (opt) => {
    if (selected) return;
    setSelected(opt);
    const correct = opt === current.romaji;
    if (correct) setScore((s) => s + 1);
    setShowResult(true);
  };

  const handleNext = () => {
    if (index < questions.length - 1) setIndex((i) => i + 1);
  };

  const reset = () => {
    // simple reset by reloading the page state
    setIndex(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
  };

  const progress = Math.round(((index + (showResult ? 1 : 0)) / questions.length) * 100);

  return (
    <section id="trainer" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Kana trainer (Hiragana)</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Choose the correct reading for each character. Short, focused practice builds real speed.</p>
        </div>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200"
        >
          <RotateCcw className="h-4 w-4" /> Reset
        </button>
      </div>

      <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
        <div className="h-full bg-indigo-600 transition-all" style={{ width: `${progress}%` }} />
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Character</div>
          <div className="mt-2 text-8xl font-bold">{current.kana}</div>
          <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">Question {index + 1} of {questions.length}</div>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="text-sm font-medium text-gray-700 dark:text-gray-200">Pick the correct reading</div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {options.map((opt) => {
              const isCorrect = showResult && opt === current.romaji;
              const isWrong = showResult && selected === opt && opt !== current.romaji;
              return (
                <button
                  key={opt}
                  onClick={() => handleChoose(opt)}
                  className={`rounded-xl border px-4 py-3 text-center text-lg font-semibold transition focus:outline-none focus:ring-2
                    ${isCorrect ? 'border-green-600 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300' : ''}
                    ${isWrong ? 'border-red-600 bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300' : ''}
                    ${!showResult ? 'border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800' : ''}
                  `}
                  disabled={!!selected}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-600 dark:text-gray-300">Score: <span className="font-semibold">{score}</span> / {questions.length}</div>
            <button
              onClick={handleNext}
              disabled={!showResult || index === questions.length - 1}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 disabled:cursor-not-allowed disabled:bg-indigo-300"
            >
              <PlayCircle className="h-4 w-4" /> Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
