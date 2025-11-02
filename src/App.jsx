import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Suspense, useState } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import { Loader } from "./components/Loader";
import { useProgress } from "@react-three/drei";

export default function App() {
  const [section, setSection] = useState(0);
  const { active } = useProgress();

  return (
    <>
      <Loader />
      <Leva hidden />
      <Canvas camera={{ position: [0, 0, 3], fov: 30 }}>
        <color attach="background" args={["#111"]} />
        <Suspense fallback={null}>
          <group>
            <Experience section={section} />
          </group>
        </Suspense>
      </Canvas>
      {!active && <UI section={section} onSectionChange={setSection} />}
    </>
  );
}
