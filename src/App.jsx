import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import { Leva } from "leva";
import { Suspense, useState } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import { Loader } from "./components/Loader";

function UseProgressFade({ children }) {
  const { active } = useProgress();
  // Only render children (UI) when not loading
  return !active ? children : null;
}

export default function App() {
  const [section, setSection] = useState(0);
  const { active } = useProgress();

  return (
    <>
      <Leva hidden />
      <Canvas camera={{ position: [0, 0, 3], fov: 30 }}>
        <color attach="background" args={["#111"]} />
        <Suspense fallback={<Loader />}>
          <group>
            <Experience section={section} />
          </group>
        </Suspense>
      </Canvas>
      <UseProgressFade>
        {!active && <UI section={section} onSectionChange={setSection} />}
      </UseProgressFade>
    </>
  );
}
