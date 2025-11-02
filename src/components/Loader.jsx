import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

function Loader() {
  const { progress, active } = useProgress();
  const [isVisible, setIsVisible] = useState(true);
  const pct = Math.round(progress);

  useEffect(() => {
    // hide 600 ms *after* loading finishes
    if (!active) {
      const t = setTimeout(() => setIsVisible(false), 600);
      return () => clearTimeout(t);
    } else if (!isVisible) {
      // show immediately once new load starts
      setIsVisible(true);
    }
  }, [active]);

  // ⚡ show immediately on first mount before progress is ready
  // so there’s no gap
  if (!isVisible) return null;

  return (
    <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
      <div className="loading-screen__container">
        <div className="progress__container">
          <div className="progress__bar" style={{ width: `${pct}%` }} />
        </div>
      </div>
      <div className="loader-progress-big">{pct}</div>

      <style>{`
        .loading-screen {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(17,17,17,0.95);
          z-index: 9999;
          transition: opacity 0.6s ease;
        }
        .loading-screen--hidden {
          opacity: 0;
          pointer-events: none;
        }
        .loading-screen__container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.2rem;
          min-width: 260px;
          padding: 2rem 2.5rem;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          color: #fff;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
        }
        .progress__container {
          width: 100%;
          height: 12px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.15);
          overflow: hidden;
        }
        .progress__bar {
          height: 100%;
          border-radius: 12px;
          background: linear-gradient(90deg, #ff6a00, #ff9400);
          transition: width 0.3s ease;
        }
        .loader-progress-big {
          position: fixed;
          right: 2.5rem;
          bottom: 2.5rem;
          font-size: 6rem;
          font-weight: 900;
          color: #fff;
          opacity: 0.95;
          letter-spacing: 0.05em;
          pointer-events: none;
          user-select: none;
          text-shadow: 0 4px 30px rgba(0,0,0,0.25);
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
        }
      `}</style>
    </div>
  );
}

export { Loader };
