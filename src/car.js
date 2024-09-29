import React, { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

// based on "Chevrolet Corvette (C7)" (https://sketchfab.com/3d-models/chevrolet-corvette-c7-2b509d1bce104224b147c81757f6f43a) 
// by Martin Trafas (https://sketchfab.com/Bexxie) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
export function Car() {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/car/scene.gltf"
  );
  
  useEffect(() => {
    console.log(gltf.scene)
    gltf.scene.scale.set(0.08, 0.08, 0.08);
    gltf.scene.position.set(1, -0.6, 1.5);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  useFrame((state, delta) => {
    let t = state.clock.getElapsedTime();

    let group = gltf.scene.children[0].children[0].children[0].children[0];
    group.children[2].rotation.x = t * 2;
    group.children[3].rotation.x = t * 2;
    group.children[4].rotation.x = t * 2;
    group.children[5].rotation.x = t * 2;
  });

  return <primitive object={gltf.scene} />;
}
