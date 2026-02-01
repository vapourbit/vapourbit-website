"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float, Environment, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

/**
 * A rotating, glass-like cube that reacts to mouse movement.
 */
function Cube() {
    const mesh = useRef<THREE.Mesh>(null);
    const materialRef = useRef<any>(null);

    useFrame((state, delta) => {
        if (!mesh.current) return;

        // Smoothly interpolate rotation based on mouse position
        // state.pointer.x and .y are normalized coordinates (-1 to 1)
        const targetRotationX = state.pointer.y * 0.5; // Tilt up/down
        const targetRotationY = state.pointer.x * 0.5; // Tilt left/right

        // Base continuous rotation
        const baseRotation = state.clock.getElapsedTime() * 0.2;

        // Apply easing (lerp) for smooth movement
        mesh.current.rotation.x = THREE.MathUtils.lerp(
            mesh.current.rotation.x,
            targetRotationX,
            delta * 2 // Smoothing factor
        );
        mesh.current.rotation.y = THREE.MathUtils.lerp(
            mesh.current.rotation.y,
            baseRotation + targetRotationY,
            delta * 2
        );
    });

    return (
        <Float
            floatIntensity={2}
            rotationIntensity={0.5}
            speed={1.5}
            floatingRange={[-0.2, 0.2]}
        >
            <mesh ref={mesh}>
                {/* Geometrically simple cube, slightly rounded corners for better reflections */}
                <boxGeometry args={[2.5, 2.5, 2.5]} />

                {/* 
                  MeshTransmissionMaterial creates the high-quality glass effect.
                  It calculates refractions based on what's behind the object.
                */}
                <MeshTransmissionMaterial
                    ref={materialRef}
                    backside
                    samples={6}            // Quality of blur/transmission
                    thickness={1.5}         // Refraction volume thickness
                    roughness={0.1}         // Surface roughness (0 = clear)
                    iridescence={1}       // Subtle rainbow surface effects
                    iridescenceIOR={1}
                    chromaticAberration={0.6} // Color splitting at edges
                    anisotropy={0.3}        // Directional reflection
                    distortion={0.4}        // Refraction distortion
                    distortionScale={0.5}
                    temporalDistortion={0.1}
                    clearcoat={1}           // Glossy top layer
                    attenuationDistance={0.5}
                    attenuationColor="#00d4ff" // Vapor Cyan tint inside
                    color="#ffffff"         // Base color
                    background={new THREE.Color("#000000")} // Helps with transmission calculations
                />
            </mesh>
        </Float>
    );
}

export default function InteractiveCube() {
    // Determine responsive settings (can be refined with useThree/viewport)

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
            {/* 
                Canvas is the React Three Fiber entry point.
                dpr: Device Pixel Ratio for sharp rendering on high-DPI screens.
            */}
            <Canvas
                className="w-full h-full"
                camera={{ position: [0, 0, 7], fov: 45 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
            >
                {/* Lighting setup for the glass effect */}
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 5]} intensity={4} color="#00d4ff" />
                <directionalLight position={[-10, -10, -5]} intensity={2} color="#ff006e" />
                <pointLight position={[0, 0, 0]} intensity={2} color="#ffffff" />

                <Cube />

                {/* Environment acts as the reflection map for the glass */}
                <Environment preset="city" />

                {/* Optional: Subtle stars or particles in background */}
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
            </Canvas>
        </div>
    );
}
