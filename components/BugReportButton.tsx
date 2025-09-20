import React from 'react';

export const BugReportButton: React.FC = () => {
  const discordLink = 'https://discord.com/users/256339594126163968';

  return (
    <a
      href={discordLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Report a bug on Discord"
      className="group fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
    >
      {/* Bug Icon SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="m8 2 1.88 1.88" />
        <path d="M14.12 3.88 16 2" />
        <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
        <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
        <path d="M12 20v-9" />
        <path d="M6.53 9C4.6 9.64 3 11.42 3 13.5a3.5 3.5 0 0 0 3.5 3.5h1" />
        <path d="M17.5 17h1a3.5 3.5 0 0 0 3.5-3.5c0-2.08-1.6-3.86-3.53-4.5" />
      </svg>
      {/* Tooltip */}
      <span className="absolute -top-10 right-0 scale-0 rounded bg-slate-800 p-2 text-xs text-white transition-all duration-200 group-hover:scale-100 whitespace-nowrap">
        Report a Bug
      </span>
    </a>
  );
};
