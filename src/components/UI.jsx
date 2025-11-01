export const sections = ["intro", "titanium", "camera", "action-button"];
import { useEffect, useState } from "react";

export const UI = ({ section, onSectionChange }) => {
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsInit(true);
    }, 2000);
  }, []);

  return (
    <main className="fixed inset-0 flex flex-col p-6 pointer-events-none select-none">
      <div className="flex flex-1 items-center justify-between text-white">
        <button
          aria-label="Previous section"
          className="pointer-events-auto inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/25 transition-[background,transform,opacity] duration-200 shadow-lg backdrop-blur-md ring-1 ring-white/15 hover:-translate-x-0.5"
          onClick={() =>
            onSectionChange(section === 0 ? sections.length - 1 : section - 1)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="w-4 h-4 drop-shadow"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <div className="relative flex-1 h-full">
          <section
            className={`absolute inset-4 flex flex-col items-center justify-center text-center transition-opacity duration-1000 ${
              sections[section] === "intro" && isInit
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <div className="mx-auto max-w-xl rounded-xl bg-black/20 backdrop-blur-md ring-1 ring-white/10 px-5 py-4 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)]">
              <h1 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                iPhone 17 Pro Max
              </h1>
              <p className="mt-1 text-3xl md:text-5xl font-bold text-white/90 tracking-tight leading-none">
                Cosmic Orange
              </p>
            </div>
          </section>

          <section
            className={`absolute inset-4 flex flex-col justify-end text-center transition-opacity duration-1000 ${
              sections[section] === "titanium" ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="mx-auto max-w-md rounded-xl bg-black/25 backdrop-blur-md ring-1 ring-white/10 px-5 py-4 shadow-[0_8px_25px_-10px_rgba(0,0,0,0.6)]">
              <h1 className="text-lg font-semibold text-white tracking-tight">
                Titanium Strength
              </h1>
              <p className="text-white/80 mt-1 text-sm">Built to last.</p>
            </div>
          </section>

          <section
            className={`absolute inset-4 flex flex-col justify-end text-center transition-opacity duration-1000 ${
              sections[section] === "camera" ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="mx-auto max-w-md rounded-xl bg-black/25 backdrop-blur-md ring-1 ring-white/10 px-5 py-4 shadow-[0_8px_25px_-10px_rgba(0,0,0,0.6)]">
              <h1 className="text-lg font-semibold text-white tracking-tight">
                Pro Camera
              </h1>
              <p className="text-white/80 mt-1 text-sm">Every shot, perfect.</p>
            </div>
          </section>

          <section
            className={`absolute inset-4 flex flex-col justify-end text-center transition-opacity duration-1000 ${
              sections[section] === "action-button"
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <div className="mx-auto max-w-md rounded-xl bg-black/25 backdrop-blur-md ring-1 ring-white/10 px-5 py-4 shadow-[0_8px_25px_-10px_rgba(0,0,0,0.6)]">
              <h1 className="text-lg font-semibold text-white tracking-tight">
                Action Button
              </h1>
              <p className="text-white/80 mt-1 text-sm">Press. Hold. Go.</p>
            </div>
          </section>
        </div>

        <button
          aria-label="Next section"
          className="pointer-events-auto inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/25 transition-[background,transform,opacity] duration-200 shadow-lg backdrop-blur-md ring-1 ring-white/15 hover:translate-x-0.5"
          onClick={() =>
            onSectionChange(section === sections.length - 1 ? 0 : section + 1)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="w-4 h-4 drop-shadow"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      <div className="flex justify-center items-center gap-2 mt-3">
        {sections.map((sectionItem, idx) => (
          <button
            key={sectionItem}
            aria-label={`Go to ${sectionItem}`}
            className={`pointer-events-auto group inline-flex items-center h-2.5 rounded-full border border-white/50 overflow-hidden transition-[width,opacity,background] duration-200 ${
              section === idx
                ? "w-5 bg-white"
                : "w-2.5 bg-transparent hover:bg-white/30"
            }`}
            onClick={() => onSectionChange(idx)}
          >
            <span className="sr-only">{sectionItem}</span>
          </button>
        ))}
      </div>
    </main>
  );
};
