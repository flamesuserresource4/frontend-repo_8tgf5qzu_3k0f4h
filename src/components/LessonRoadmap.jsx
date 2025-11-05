import React from 'react';
import { BookOpen, Target, Rocket, Star } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    title: 'Start with Kana',
    detail: 'Learn Hiragana first, then Katakana. Master reading and writing the building blocks of Japanese.',
    tips: ['15–20 minutes a day', 'Write by hand', 'Say sounds aloud'],
  },
  {
    icon: Target,
    title: 'Core Grammar & Phrases',
    detail: 'Understand basic sentence structure and survival phrases for daily situations.',
    tips: ['は/が/を particles', 'です/ます basics', 'Common greetings'],
  },
  {
    icon: Star,
    title: 'Essential Vocabulary',
    detail: 'Build a foundation of the most common 500 words using spaced repetition.',
    tips: ['Numbers & time', 'Days & months', 'Family & food'],
  },
  {
    icon: Rocket,
    title: 'Listening & Shadowing',
    detail: 'Train your ear with slow, clear audio and mimic native pronunciation.',
    tips: ['5–10 min daily', 'Repeat after audio', 'Record yourself'],
  },
];

export default function LessonRoadmap() {
  return (
    <section id="roadmap" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Your beginner roadmap</h2>
      <p className="mt-2 max-w-2xl text-gray-600 dark:text-gray-300">
        Follow this sequence to progress smoothly. Keep sessions short and consistent.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {steps.map(({ icon: Icon, title, detail, tips }) => (
          <div key={title} className="group rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900/70">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-indigo-600/10 p-3 text-indigo-600 group-hover:bg-indigo-600/20 dark:text-indigo-400">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{detail}</p>
                <ul className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400">
                  {tips.map((t) => (
                    <li key={t} className="rounded-full bg-gray-100 px-2.5 py-1 dark:bg-gray-800">{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
