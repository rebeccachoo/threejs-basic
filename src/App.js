import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";

function App() {
  return (
    <div className="App">
      <Canvas
        style={{ height: "500px", width: "700px", backgroundColor: "#111" }}
      >
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Box />
      </Canvas>
    </div>
  );
}

export default App;
