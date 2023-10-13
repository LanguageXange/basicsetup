import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

function App() {
  const cameraSetting = { zoom: 1.5, near: 0.1, far: 100, position: [3, 5, 3] };
  return (
    <Canvas shadows={true} gl={{ antialias: false }} camera={cameraSetting}>
      <Experience />
    </Canvas>
  );
}

export default App;
