import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Model = ({ modelPath, scale, position, rotation, color }) => {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef();

  // Sử dụng useFrame để cập nhật góc quay của mô hình trong mỗi khung hình
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.001; // Tốc độ quay
    }
  });

  // Áp dụng màu sắc cho mô hình
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set(color);
    }
  });

  return (
    <group position={position} ref={modelRef}>
      <primitive object={scene} scale={scale} rotation={rotation} />
    </group>
  );
};

const CarModel = ({ modelPath, onClose, color }) => {
  // Điều chỉnh tỷ lệ của mô hình xe
  let scale;
  if (modelPath.includes("ferrari_296_widebody.glb")) {
    scale = [0.85, 0.85, 0.85];
  } else if (modelPath.includes("huracan_falcontm.glb")) {
    scale = [0.72, 0.72, 0.72];
  } else if (modelPath.includes("2016_bmw_x6m.glb")) {
    scale = [80, 80, 80];
  } else if (modelPath.includes("lamborghini_aventador.glb")) {
    scale = [0.81, 0.81, 0.81];
  } else {
    scale = [1, 1, 1];
  }

  // Điều chỉnh vị trí của mô hình để trục xoay nằm ở tâm
  let position;
  if (modelPath.includes("ferrari_296_widebody.glb")) {
    position = [0.2, -0.5, 0];
  } else if (modelPath.includes("huracan_falcontm.glb")) {
    position = [0.15, 0.1, 0];
  } else if (modelPath.includes("lamborghini_aventador.glb")) {
    position = [0.2, -0.6, 0];
  } else if (modelPath.includes("2016_bmw_x6m.glb")) {
    position = [0.3, -0.3, 0];
  } else {
    position = [0, 0, 0];
  }

  // Điều chỉnh góc xoay của mô hình để xe nằm ngang
  let rotation;
  if (modelPath.includes("lamborghini_aventador.glb")) {
    rotation = [Math.PI / 25, 5.5, 0]; // Xoay 90 độ quanh trục X
  } else if (modelPath.includes("ferrari_296_widebody.glb")) {
    rotation = [Math.PI / 25, 2.5, 0.02]; // Xoay 90 độ quanh trục X
  } else if (modelPath.includes("huracan_falcontm.glb")) {
    rotation = [Math.PI / 25, 2.4, 0]; // Xoay 90 độ quanh trục X
  } else if (modelPath.includes("2016_bmw_x6m.glb")) {
    rotation = [Math.PI / 25, 5.6, 0]; // Không xoay
  } else {
    rotation = [0, 0, 0]; // Không xoay
  }

  return (
    <div className="overlaySideBar">
      <Canvas style={{ width: "100%", height: "100%" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model
            modelPath={modelPath}
            scale={scale}
            position={position}
            rotation={rotation}
            color={color}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CarModel;