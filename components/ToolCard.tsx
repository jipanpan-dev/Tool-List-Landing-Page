import React from 'react';
import type { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative">
        <img
          src={tool.thumbnailUrl}
          alt={`${tool.title} thumbnail`}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-100 mb-2">{tool.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{tool.description}</p>
        <div className="mt-4">
          <span className="inline-block bg-purple-600/20 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
            Learn More &rarr;
          </span>
        </div>
      </div>
    </a>
  );
};
