import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = ({ modelPath, scale }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={scale} />;
};

const CarModel = ({ modelPath, onClose }) => {
  // Điều chỉnh tỷ lệ của mô hình xe thứ ba
  const scale = modelPath.includes('modified_lamborghini_urus.glb') ? [0.07, 0.07, 0.07] : [1, 1, 1];

  return (
    <div className="overlay">
      <button className="close-button" onClick={onClose}>X</button>
      <Canvas style={{ width: '100%', height: '100%' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Model modelPath={modelPath} scale={scale} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CarModel;