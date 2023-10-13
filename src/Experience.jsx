import { OrbitControls, Text3D } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";

export default function Experience() {
  const { myCubeColor, myTextColor, showWireFrame } = useControls({
    myCubeColor: "#4c0ffb",
    myTextColor: "#ffa500",
    showWireFrame: true,
  });

  return (
    <>
      <OrbitControls />
      <directionalLight castShadow />
      <ambientLight intensity={0.5} />
      <Text3D
        font="./Pixelify_Sans_Regular.json"
        position={[-2, 1, -2]}
        size={0.8}
        bevelEnabled
        bevelThickness={0.03}
        bevelSize={0.01}
      >
        Start
        <meshBasicMaterial color={myTextColor} />
      </Text3D>

      <mesh receiveShadow={true} position-x={-0.5}>
        <boxGeometry />
        <meshBasicMaterial color={myCubeColor} wireframe={showWireFrame} />
      </mesh>
      <mesh receiveShadow={true} position-x={0.8}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial wireframe={showWireFrame} />
      </mesh>

      <mesh receiveShadow={true} rotation-x={-Math.PI / 2} position-y={-0.6}>
        <planeGeometry args={[3, 3]} />
        <meshBasicMaterial color={"grey"} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}
