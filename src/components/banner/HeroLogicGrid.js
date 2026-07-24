import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Background wireframe orbs for the hero.
 * Color matches the provided MeshPhongMaterial (0x3B82F6).
 */
const DEFAULT_ORBS = [
  // Top left — frames the upper corner
  { x: -4.2, y: 2.4, z: -2.2, scale: 0.95, amp: 0.18, speed: 0.00045, spin: 0.0012, phase: 0.4 },
  // Lower right — near the quiet corner / sparkle
  { x: 3.5, y: -1.15, z: -1.6, scale: 0.95, amp: 0.22, speed: 0.00038, spin: 0.0009, phase: 2.1 },
  // Far upper back — depth cue, never competes with the face
  { x: 1.6, y: 2.35, z: -3.8, scale: 0.55, amp: 0.14, speed: 0.00052, spin: 0.0015, phase: 4.0 },
];

const HeroLogicGrid = ({ orbs: orbsConfig = DEFAULT_ORBS }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const root = new THREE.Group();
    scene.add(root);

    const material = new THREE.MeshPhongMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });

    const geometry = new THREE.IcosahedronGeometry(1.25, 2);
    const disposables = [geometry, material];

    scene.add(new THREE.AmbientLight(0x404040));
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    const orbs = orbsConfig.map((cfg) => {
      const pivot = new THREE.Group();
      pivot.position.set(cfg.x, cfg.y, cfg.z);
      pivot.scale.setScalar(cfg.scale);

      const wire = new THREE.Mesh(geometry, material);
      pivot.add(wire);

      pivot.userData = {
        baseY: cfg.y,
        amp: cfg.amp,
        speed: cfg.speed,
        spin: cfg.spin,
        phase: cfg.phase,
        wire,
      };
      root.add(pivot);
      return pivot;
    });

    let mouseX = 0;
    let mouseY = 0;
    let frameId = 0;
    let reducedMotion = false;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => {
      reducedMotion = mq.matches;
    };
    syncMotion();
    mq.addEventListener?.("change", syncMotion);

    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const setSize = () => {
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      if (width === 0 || height === 0) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const now = Date.now();

      if (!reducedMotion) {
        orbs.forEach((pivot) => {
          const { baseY, amp, speed, spin, phase, wire } = pivot.userData;
          pivot.position.y = baseY + Math.sin(now * speed + phase) * amp;
          wire.rotation.y += spin;
          wire.rotation.x += spin * 0.35;
        });

        // Very light parallax — enough for depth, not a tilt toy
        root.rotation.y += (mouseX * 0.06 - root.rotation.y) * 0.03;
        root.rotation.x += (mouseY * 0.04 - root.rotation.x) * 0.03;
      }

      renderer.render(scene, camera);
    };

    setSize();
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", setSize);
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", setSize);
      mq.removeEventListener?.("change", syncMotion);
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [orbsConfig]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden opacity-90"
    />
  );
};

export default HeroLogicGrid;
export { DEFAULT_ORBS };
