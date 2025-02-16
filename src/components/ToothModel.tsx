
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls as OrbitControlsImpl } from 'three/examples/jsm/controls/OrbitControls.js';

const ToothModel = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) {
      console.error('Mount ref is not available');
      return;
    }

    console.log('Initializing Three.js scene');

    // Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // White background
    
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    console.log('Creating tooth geometry');

    // Create tooth geometry (more detailed)
    const toothGeometry = new THREE.CylinderGeometry(0.8, 1, 2, 32);
    const toothMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xe0e0e0, // Light gray color for better visibility
      shininess: 100,
      specular: 0x444444
    });
    const tooth = new THREE.Mesh(toothGeometry, toothMaterial);
    scene.add(tooth);

    console.log('Setting up lights');

    // Add stronger lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 3); // Increased intensity
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3); // Increased intensity
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 2); // Increased intensity
    pointLight.position.set(-5, 5, 5);
    scene.add(pointLight);

    // Add controls
    const controls = new OrbitControlsImpl(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Position camera better
    camera.position.set(0, 0, 5); // Changed position for better initial view
    camera.lookAt(tooth.position);

    console.log('Starting animation loop');

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      
      console.log('Resized:', width, height);
    };

    window.addEventListener('resize', handleResize);
    // Initial resize call
    handleResize();

    return () => {
      console.log('Cleaning up Three.js scene');
      mountRef.current?.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-[400px] rounded-lg overflow-hidden border-2 border-gray-200 bg-white shadow-lg"
      style={{ minHeight: '400px' }}
    />
  );
};

export default ToothModel;
