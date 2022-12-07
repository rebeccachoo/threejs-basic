import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";
// import Sphere from "./Sphere";

function App() {
  // console.log(var1);

  let var1 = 1;
  return (
    <div className="App">
      <Canvas
        style={{ height: "500px", width: "700px", backgroundColor: "#111" }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box />
      </Canvas>
    </div>
  );
}

export default App;
