import React from 'react';
import { TOOLS } from './constants';
import { ToolCard } from './components/ToolCard';
import { BugReportButton } from './components/BugReportButton';
import type { Tool } from './types';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <main className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            VOMMU Tools
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400">
            A curated collection of innovative tools designed to boost your productivity and creativity. Explore what's possible.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOOLS.map((tool: Tool) => (
            <ToolCard key={tool.title} tool={tool} />
          ))}
        </div>
      </main>

      <footer className="text-center py-8 border-t border-slate-800">
        <p className="text-slate-500">&copy; {new Date().getFullYear()} VOMMU Tools. All rights reserved.</p>
      </footer>

      <BugReportButton />
    </div>
  );
};

export default App;
