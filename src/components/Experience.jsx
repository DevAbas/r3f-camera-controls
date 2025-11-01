import { CameraControls, Environment, Float, Gltf } from "@react-three/drei";
import { button, useControls } from "leva";
import { useEffect, useRef, useState } from "react";
import { degToRad } from "three/src/math/MathUtils.js";
import { sections } from "./UI";

const cameraPositions = {
  intro: [
    -0.8408130777453015, -0.5579311237409535, -1.2494838493879465,
    0.09186000885066517, -0.013170057989714374, -0.15707536590700685,
  ],
  titanium: [
    -0.2022697040455287, -0.26852559537182874, -0.19356238473511142,
    -0.06024400385902626, -0.013170057989714379, -0.027212479301132964,
  ],
  camera: [
    -0.05686373257404011, 0.05459247759151993, -0.4174079876311954,
    0.007651361152447588, 0.1738224439733183, -0.10971973822747505,
  ],
  "action-button": [
    -0.88612937193474, -0.4964915367233699, 0.003459464080557469,
    -0.015160554557400105, 0.16977404132378549, 0.0015889919991764756,
  ],
};

const cameraPositionsSmallScreen = {
  intro: [
    -0.9168650841001468, -0.5579311237409535, -1.18455240608501,
    0.015808002495819512, -0.013170057989714375, -0.09214392260406992,
  ],
  titanium: [
    -0.1708158290825758, -0.5937539065692604, -0.4482987464721301,
    -0.06614990520729945, -0.04334453556892756, -0.13251272669096392,
  ],
  camera: [
    -0.06895429178639603, -0.11184089815513104, -0.3512963624485244,
    0.04067845278335647, 0.15194615506419323, 0.018620683161410793,
  ],
  "action-button": [
    -0.6259770949105332, -0.2529443173252278, -0.004747347677011271,
    -0.02485857424975495, 0.1912378489798071, -0.013710853350645076,
  ],
};

const SMALL_SCREEN_THRESHOLD = 900;

export const Experience = ({ section }) => {
  const controls = useRef();
  const box = useRef();
  const sphere = useRef();

  useControls("settings", {
    smoothTime: {
      value: 0.35,
      min: 0.1,
      max: 2,
      step: 0.01,
      onChange: (v) => (controls.current.smoothTime = v),
    },
  });

  useControls("dolly", {
    in: button(() => {
      controls.current.dolly(0.2, true);
    }),
    out: button(() => {
      controls.current.dolly(-0.2, true);
    }),
  });

  useControls("truck", {
    up: button(() => {
      controls.current.truck(0, -0.1, true);
    }),
    left: button(() => {
      controls.current.truck(-0.1, 0, true);
    }),
    down: button(() => {
      controls.current.truck(0, 0.1, true);
    }),

    right: button(() => {
      controls.current.truck(0.1, 0, true);
    }),
  });

  useControls("rotate", {
    up: button(() => {
      controls.current.rotate(0, -0.5, true);
    }),
    down: button(() => {
      controls.current.rotate(0, 0.5, true);
    }),
    left: button(() => {
      controls.current.rotate(-0.5, 0, true);
    }),
    right: button(() => {
      controls.current.rotate(0.5, 0, true);
    }),
  });

  useControls("fit", {
    fitToBox: button(() => {
      controls.current.fitToSphere(box.current, true);
    }),
    fitToSphere: button(() => {
      controls.current.fitToSphere(sphere.current, false);
    }),
  });

  const [introFinished, setIntroFinished] = useState(false);
  const intro = async () => {
    controls.current.setLookAt(0, 0, 5, 0, 0, 0, false);
    await controls.current.dolly(3, true);
    await controls.current.rotate(degToRad(45), degToRad(25), true);

    setIntroFinished(true);
    playTransition();
  };

  const playTransition = () => {
    if (window.innerWidth > SMALL_SCREEN_THRESHOLD) {
      controls.current.setLookAt(...cameraPositions[sections[section]], true);
    } else {
      controls.current.setLookAt(
        ...cameraPositionsSmallScreen[sections[section]],
        true
      );
    }
  };

  useControls("Helper", {
    getLookAt: button(() => {
      const position = controls.current.getPosition();
      const target = controls.current.getTarget();
      console.log([...position, ...target]);
    }),
    toJson: button(() => console.log(controls.current.toJSON())),
  });

  useEffect(() => {
    intro();
  }, []);

  useEffect(() => {
    if (!introFinished) {
      return;
    }
    playTransition();
  }, [section]);

  return (
    <>
      <CameraControls
        ref={controls}
        // disable all mouse buttons
        mouseButtons={{
          left: 0,
          middle: 0,
          right: 0,
          wheel: 0,
        }}
        // disable all touch gestures
        touches={{
          one: 0,
          two: 0,
          three: 0,
        }}
      />
      <mesh ref={box} visible={false}>
        <boxGeometry args={[0.5, 0.8, 0.2]} />
        <meshBasicMaterial color="mediumpurple" wireframe />
      </mesh>
      <mesh ref={sphere} visible={false}>
        <sphereGeometry args={[0.36, 64]} />
        <meshBasicMaterial color="hotpink" wireframe />
      </mesh>
      <Float
        speed={0.5}
        rotationIntensity={1.5}
        floatIntensity={1.5}
        enabled={false}
      >
        <Gltf
          position={[0, 0, 0]}
          scale={3}
          src="models/apple_iphone_17_pro_max.glb"
          // "Apple iPhone 17 Pro Max" (https://skfb.ly/oLpPT) by polyman is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
        />
      </Float>
      <group rotation-y={Math.PI}>
        <Environment preset="warehouse" blur />
      </group>
    </>
  );
};
