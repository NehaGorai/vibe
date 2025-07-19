import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Sphere, Torus, Plane } from '@react-three/drei';
import * as THREE from 'three';

// Animated Box Component
function AnimatedBox() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Box ref={meshRef} args={[1, 1, 1]} position={[-2, 0, 0]} castShadow>
      <meshStandardMaterial color="#3b82f6" />
    </Box>
  );
}

// Animated Sphere Component
function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.z += delta * 0.4;
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.8, 32, 32]} position={[0, 0, 0]} castShadow>
      <meshStandardMaterial color="#10b981" />
    </Sphere>
  );
}

// Animated Torus Component
function AnimatedTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Torus ref={meshRef} args={[0.6, 0.2, 16, 32]} position={[2, 0, 0]} castShadow>
      <meshStandardMaterial color="#f59e0b" />
    </Torus>
  );
}

// Floating Particles Component
function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const [particles] = useState(() => {
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  });

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.6} />
    </points>
  );
}

// Ground Surface Component
function GroundSurface() {
  return (
    <Plane 
      args={[12, 12]} 
      position={[0, -2, 0]} 
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <meshStandardMaterial 
        color="#1e293b" 
        transparent 
        opacity={0.8}
        metalness={0.1}
        roughness={0.8}
      />
    </Plane>
  );
}

// Main Three Scene Component
export default function ThreeScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        shadows
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff6b6b" />
        
        {/* Ground Surface */}
        <GroundSurface />
        
        {/* 3D Objects */}
        <AnimatedBox />
        <AnimatedSphere />
        <AnimatedTorus />
        <FloatingParticles />
        
        {/* Controls */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          autoRotate={false}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
} 