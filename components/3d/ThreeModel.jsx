import THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useEffect, useRef } from 'react';

const ThreeModel = ({ modelType, modelPath }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let loader, mesh;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    switch (modelType) {
      case 'stl':
        loader = new STLLoader();
        loader.load(modelPath, (geometry) => {
          mesh = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
          scene.add(mesh);
        });
        break;
      case 'obj':
        loader = new OBJLoader();
        loader.load(modelPath, (object) => {
          mesh = object;
          scene.add(mesh);
        });
        break;
      case 'gltf':
        loader = new GLTFLoader();
        loader.load(modelPath, (gltf) => {
          mesh = gltf.scene;
          scene.add(mesh);
        });
        break;
      default:
        break;
    }

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }, [modelType, modelPath]);

  return <canvas ref={canvasRef} />;
};

export {ThreeModel};
