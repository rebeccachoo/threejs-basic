import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Sphere = () => {
  // reference will give us direct access to the mesh
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  return <mesh ref={ref} geometry={"sphere"} material={"red"} />;
};

export default Sphere;
