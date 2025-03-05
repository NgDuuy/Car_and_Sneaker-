import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';

const CarModel = () => {
  const { scene } = useGLTF('/models/ferrari_296_widebody.glb');
  const carRef = useRef();
  const [isExploded, setIsExploded] = useState(false);

  useEffect(() => {
    console.log('Full Scene Object:', scene);
    console.log('Children:', scene.children);
  
    scene.traverse((child) => {
      console.log('Part Name:', child.name, child);
    });
  }, [scene]);
  

  const handleClick = () => {
    if (!carRef.current) return;
  
    // Xác định các bộ phận vỏ ngoài dựa trên tên thực tế từ log
    const outerParts = [];
    
    carRef.current.traverse((child) => {
      if (['Object_19', 'Object_25', 'Object_28', 'Object_29'].includes(child.name)) {
        outerParts.push(child);
      }
    });
  
    console.log('Identified Parts:', outerParts);
  
    outerParts.forEach((part) => {
      gsap.to(part.position, {
        x: isExploded ? part.position.x - 5 : part.position.x + 5,
        y: isExploded ? part.position.y - 2 : part.position.y + 2,
        z: isExploded ? part.position.z - 3 : part.position.z + 3,
        duration: 1,
        ease: 'power2.out',
      });
    });
  
    setIsExploded(!isExploded);
  };
  
  

  return <primitive ref={carRef} object={scene} onClick={handleClick} />;
};

const CarShow = () => {
  return (
    <Canvas
      camera={{ position: [0, 10, 0], fov: 20, near: 0.1, far: 100 }} // Camera từ trên nhìn xuống
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <CarModel />
      <OrbitControls enableZoom={false}   />
    </Canvas>
  );
};

export default CarShow;
