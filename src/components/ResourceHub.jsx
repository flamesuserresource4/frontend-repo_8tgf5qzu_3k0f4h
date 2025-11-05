import React from 'react';
import { Link as LinkIcon, BookOpen, PlayCircle } from 'lucide-react';

const resources = [
  {
    title: 'Kana (Hiragana & Katakana)',
    icon: BookOpen,
    items: [
      { name: 'Tofugu Hiragana Guide', url: 'https://www.tofugu.com/japanese/learn-hiragana/' },
      { name: 'Tofugu Katakana Guide', url: 'https://www.tofugu.com/japanese/learn-katakana/' },
      { name: 'Real Kana Practice', url: 'https://realkana.com/' },
    ],
  },
  {
    title: 'Beginner Grammar',
    icon: BookOpen,
    items: [
      { name: "Tae Kim's Guide", url: 'https://guidetojapanese.org/learn/grammar' },
      { name: 'Imabi (Beginner)', url: 'https://imabi.org/beginners.htm' },
      { name: 'Wasabi Grammar', url: 'https://www.wasabi-jpn.com/japanese-grammar/' },
    ],
  },
  {
    title: 'Spaced Repetition & Vocab',
    icon: BookOpen,
    items: [
      { name: 'Anki (Flashcards)', url: 'https://apps.ankiweb.net/' },
      { name: 'Core 2k/6k Deck', url: 'https://ankiweb.net/shared/info/1557722831' },
      { name: 'Bunpro (Grammar SRS)', url: 'https://bunpro.jp/' },
    ],
  },
  {
    title: 'Listening & Video',
    icon: PlayCircle,
    items: [
      { name: 'JapanesePod101 (YouTube)', url: 'https://www.youtube.com/@JapanesePod101' },
      { name: 'Nihongo no Mori (JLPT N5/N4)', url: 'https://www.youtube.com/@nihongonomori' },
      { name: 'NHK Easy News (Reading+Audio)', url: 'https://www3.nhk.or.jp/news/easy/' },
    ],
  },
];

export default function ResourceHub() {
  return (
    <section id="resources" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Resource hub</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Curated, beginner-safe links to learn effectively without overwhelm.</p>
        </div>
        <a href="#trainer" className="text-sm font-medium text-indigo-600 hover:underline">Jump to Kana trainer →</a>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {resources.map(({ title, icon: Icon, items }) => (
          <div key={title} className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-900/70">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-indigo-600/10 p-2 text-indigo-600 dark:text-indigo-400"><Icon className="h-5 w-5" /></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            </div>
            <ul className="mt-4 space-y-2">
              {items.map((r) => (
                <li key={r.url}>
                  <a
                    className="group inline-flex items-center gap-2 rounded-lg px-2 py-1 text-indigo-700 hover:bg-indigo-50 dark:text-indigo-300 dark:hover:bg-indigo-950/40"
                    href={r.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <LinkIcon className="h-4 w-4 opacity-70 group-hover:opacity-100" />
                    <span className="font-medium">{r.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
