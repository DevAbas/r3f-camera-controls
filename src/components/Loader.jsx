import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  const pct = Math.round(progress);

  return (
    <Html center>
      <div className="loader">
        <div className="loader-bar">
          <div className="loader-bar-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="loader-text">{pct}%</div>
      </div>

      <style>{`
        .loader {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
          min-width: 200px;
          padding: 1rem 1.5rem;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(10px);
          color: #fff;
          font-family: system-ui, -apple-system, sans-serif;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
        }

        .loader-bar {
          width: 100%;
          height: 8px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.15);
          overflow: hidden;
        }

        .loader-bar-fill {
          height: 100%;
          border-radius: 10px;
          background: linear-gradient(
            90deg,
            #ff6a00,
            #ff9400
          );
          transition: width 0.3s ease;
        }

        .loader-text {
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          opacity: 0.9;
        }
      `}</style>
    </Html>
  );
}

export { Loader };
