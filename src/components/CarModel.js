import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = ({ modelPath, scale, position, rotation }) => {
  const { scene } = useGLTF(modelPath);
  return (
    <group position={position}>
      <primitive object={scene} scale={scale} rotation={rotation} />
    </group>
  );
};

const CarModel = ({ modelPath, onClose }) => {
  // Điều chỉnh tỷ lệ của mô hình xe
  let scale;
  if (modelPath.includes('modified_lamborghini_urus.glb')) {
    scale = [0.09, 0.09, 0.09];
  } else if (modelPath.includes('huracan_falcontm.glb')) {
    scale = [0.8, 0.8, 0.8];
  } else {
    scale = [1, 1, 1];
  }
  // Điều chỉnh vị trí của mô hình để trục xoay nằm ở tâm
  let position;
  if (modelPath.includes('modified_lamborghini_urus.glb')) {
    position = [-0.5, -0.6, 0];
  } else if (modelPath.includes('huracan_falcontm.glb')) {
    position = [0.7, -0.2, 0];
  } else if (modelPath.includes('lamborghini_aventador.glb')) {
    position = [0.5, -0.6, 0];
  } else {
    position = [0, 0, 0];
  }
  // Điều chỉnh góc xoay của mô hình để xe nằm ngang
  let rotation;
  if (modelPath.includes('lamborghini_aventador.glb')) {
    rotation = [Math.PI / 25, 4.7, 0]; // Xoay 90 độ quanh trục X
  } else if (modelPath.includes('modified_lamborghini_urus.glb')) {
    rotation = [Math.PI / 25, 5.5, 0.02]; // Xoay 90 độ quanh trục X
  } else if (modelPath.includes('huracan_falcontm.glb')) {
    rotation = [Math.PI / 25, 1.6, 0]; // Xoay 90 độ quanh trục X
  } else {
    rotation = [0, 0, 0]; // Không xoay
  }

  return (
    <div className="overlay">
      <button className="close-button" onClick={onClose}>X</button>
      <Canvas style={{ width: '100%', height: '100%' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Model modelPath={modelPath} scale={scale} position={position} rotation={rotation} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CarModel;