import React from 'react';
import Hero from './components/Hero.jsx';
import LessonRoadmap from './components/LessonRoadmap.jsx';
import KanaTrainer from './components/KanaTrainer.jsx';
import ResourceHub from './components/ResourceHub.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50">
      <Hero />
      <LessonRoadmap />
      <KanaTrainer />
      <ResourceHub />

      <footer className="border-t border-gray-200 px-6 py-10 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
        Built for absolute beginners — consistent practice beats intensity. 頑張って!
      </footer>
    </div>
  );
}

export default App;
