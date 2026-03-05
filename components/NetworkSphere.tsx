"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function NetworkSphere() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(1);

    const radius = 3;
    const segments = 32;
    const geo = new THREE.IcosahedronGeometry(radius, 1);
    const edges = new THREE.EdgesGeometry(geo);
    const line = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: 0x94a3b8, transparent: true, opacity: 1 })
    );
    scene.add(line);

    const setSize = () => {
      const cw = wrap.clientWidth;
      const ch = wrap.clientHeight;
      if (cw === 0 || ch === 0) return;
      const size = Math.min(cw, ch);
      renderer.setSize(size, size);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    setSize();
    const ro = new ResizeObserver(setSize);
    ro.observe(wrap);

    const startTime = Date.now();
    const ROTATION_DURATION_MS = 120000;
    let frame: number;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const elapsed = (Date.now() - startTime) % ROTATION_DURATION_MS;
      line.rotation.y = (elapsed / ROTATION_DURATION_MS) * Math.PI * 2;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      ro.disconnect();
      cancelAnimationFrame(frame);
      renderer.dispose();
      geo.dispose();
      edges.dispose();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="network-sphere-canvas-wrap"
    >
      <canvas
        ref={canvasRef}
        className="block"
        style={{ display: "block" }}
        aria-hidden
      />
    </div>
  );
}
