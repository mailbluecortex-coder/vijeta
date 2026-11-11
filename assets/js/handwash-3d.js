/**
 * VIJETA ENTERPRISES — 3D HANDWASH CONTAINER VIEWER
 * Authentic 5-Litre HDPE Container with Handle, Magenta Cap, and Pink Liquid Shader
 * Built with Three.js & Scroll-Linked Motion
 */

(function () {
  'use strict';

  const container = document.getElementById('handwash3dCanvas');
  if (!container || !window.THREE) return;

  // --- Scene, Camera, Renderer ---
  const width = container.clientWidth || 480;
  const height = container.clientHeight || 480;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
  camera.position.set(0, 0.4, 3.8);

  const renderer = new THREE.WebGLRenderer({
    canvas: container,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // --- Lighting Setup (Studio FMCG Rig) ---
  const ambientLight = new THREE.AmbientLight(0xfff5f9, 0.85);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
  keyLight.position.set(3, 4, 4);
  keyLight.castShadow = true;
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xffb5d0, 0.8);
  fillLight.position.set(-3, 2, -2);
  scene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0xd80a68, 1.0);
  rimLight.position.set(0, 3, -4);
  scene.add(rimLight);

  // --- 5-Litre Canister Geometry Group ---
  const bottleGroup = new THREE.Group();

  // 1. Main Bottle Body (5L Canister proportions: wide, deep, sturdy)
  const bodyGeo = new THREE.BoxGeometry(1.3, 1.6, 0.85, 8, 8, 8);
  // Soften vertices for realistic blow-molded look
  const pos = bodyGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const factor = 1 - 0.08 * (Math.abs(x) * Math.abs(z));
    pos.setXYZ(i, x * factor, y, z * factor);
  }
  bodyGeo.computeVertexNormals();

  const plasticMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    roughness: 0.28,
    transmission: 0.65, // translucent HDPE plastic
    ior: 1.45,
    clearcoat: 0.35,
    clearcoatRoughness: 0.2
  });

  const bodyMesh = new THREE.Mesh(bodyGeo, plasticMaterial);
  bodyMesh.position.y = -0.1;
  bodyMesh.castShadow = true;
  bodyMesh.receiveShadow = true;
  bottleGroup.add(bodyMesh);

  // 2. Liquid Volume Inside (Rose Pink)
  const liquidGeo = new THREE.BoxGeometry(1.22, 1.35, 0.77);
  const liquidMaterial = new THREE.MeshStandardMaterial({
    color: 0xd80a68,
    roughness: 0.15,
    metalness: 0.05,
    transparent: true,
    opacity: 0.82
  });
  const liquidMesh = new THREE.Mesh(liquidGeo, liquidMaterial);
  liquidMesh.position.y = -0.2;
  bottleGroup.add(liquidMesh);

  // 3. Ergonomic Top Handle
  const handleCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.35, 0.7, 0),
    new THREE.Vector3(-0.35, 1.05, 0),
    new THREE.Vector3(0.35, 1.05, 0),
    new THREE.Vector3(0.35, 0.7, 0)
  ]);
  const handleGeo = new THREE.TubeGeometry(handleCurve, 24, 0.085, 12, false);
  const handleMesh = new THREE.Mesh(handleGeo, plasticMaterial);
  bottleGroup.add(handleMesh);

  // 4. Bottle Neck & Magenta Screw Cap
  const neckGeo = new THREE.CylinderGeometry(0.18, 0.2, 0.22, 24);
  const neckMesh = new THREE.Mesh(neckGeo, plasticMaterial);
  neckMesh.position.set(0.32, 0.8, 0);
  bottleGroup.add(neckMesh);

  const capGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.25, 24);
  const capMaterial = new THREE.MeshStandardMaterial({
    color: 0xd80a68, // Primary Brand Magenta
    roughness: 0.3,
    metalness: 0.1
  });
  const capMesh = new THREE.Mesh(capGeo, capMaterial);
  capMesh.position.set(0.32, 0.98, 0);
  bottleGroup.add(capMesh);

  // 5. Authentic Product Label (Front Face)
  const canvasLabel = document.createElement('canvas');
  canvasLabel.width = 512;
  canvasLabel.height = 512;
  const ctx = canvasLabel.getContext('2d');

  // Background of label
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, 512, 512);

  // Top magenta band
  ctx.fillStyle = '#D80A68';
  ctx.fillRect(0, 0, 512, 100);

  // Brand Name in Marathi & English
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 36px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('VIJETA ENTERPRISES', 256, 62);

  // Subtitle
  ctx.fillStyle = '#142D62';
  ctx.font = 'bold 30px sans-serif';
  ctx.fillText('VIJETA HANDWASH', 256, 170);

  ctx.fillStyle = '#D80A68';
  ctx.font = 'bold 24px sans-serif';
  ctx.fillText('5 L • PINK FRAGRANCE', 256, 215);

  // Brand Tagline
  ctx.fillStyle = '#77727D';
  ctx.font = '500 18px sans-serif';
  ctx.fillText('Cleanliness • Health • Trust', 256, 260);

  // Fresh floral/water icon representation
  ctx.strokeStyle = '#D80A68';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(256, 340, 48, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = '#142D62';
  ctx.font = '600 16px sans-serif';
  ctx.fillText('Kurduwadi, Solapur (MS)', 256, 440);

  const labelTexture = new THREE.CanvasTexture(canvasLabel);
  const labelGeo = new THREE.PlaneGeometry(0.9, 1.0);
  const labelMat = new THREE.MeshBasicMaterial({
    map: labelTexture
  });
  const labelMesh = new THREE.Mesh(labelGeo, labelMat);
  labelMesh.position.set(0, -0.1, 0.435);
  bottleGroup.add(labelMesh);

  scene.add(bottleGroup);

  // --- Studio Shadow Plane ---
  const shadowGeo = new THREE.PlaneGeometry(3, 3);
  const shadowCanvas = document.createElement('canvas');
  shadowCanvas.width = 256;
  shadowCanvas.height = 256;
  const sCtx = shadowCanvas.getContext('2d');
  const gradient = sCtx.createRadialGradient(128, 128, 20, 128, 128, 110);
  gradient.addColorStop(0, 'rgba(20, 45, 98, 0.35)');
  gradient.addColorStop(0.5, 'rgba(216, 10, 104, 0.1)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  sCtx.fillStyle = gradient;
  sCtx.fillRect(0, 0, 256, 256);

  const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
  const shadowMesh = new THREE.Mesh(shadowGeo, new THREE.MeshBasicMaterial({
    map: shadowTexture,
    transparent: true,
    opacity: 0.8
  }));
  shadowMesh.rotation.x = -Math.PI / 2;
  shadowMesh.position.y = -1.02;
  scene.add(shadowMesh);

  // --- Interaction & Scroll Sync ---
  let isDragging = false;
  let prevMouseX = 0;
  let targetRotationY = 0;

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    prevMouseX = e.clientX;
  });

  window.addEventListener('mouseup', () => { isDragging = false; });

  container.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - prevMouseX;
    prevMouseX = e.clientX;
    targetRotationY += deltaX * 0.01;
  });

  // Touch Support
  container.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      prevMouseX = e.touches[0].clientX;
    }
  }, { passive: true });

  window.addEventListener('touchend', () => { isDragging = false; });

  container.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - prevMouseX;
    prevMouseX = e.touches[0].clientX;
    targetRotationY += deltaX * 0.015;
  }, { passive: true });

  // Scroll Sync
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const offset = scrollY * 0.0018;
    bottleGroup.rotation.y = targetRotationY + offset;
    bottleGroup.position.y = Math.sin(scrollY * 0.003) * 0.06;
  }, { passive: true });

  // Resize handler
  window.addEventListener('resize', () => {
    const newW = container.clientWidth;
    const newH = container.clientHeight;
    if (newW && newH) {
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    }
  });

  // Render Loop
  function animate() {
    requestAnimationFrame(animate);

    // Subtle gentle auto float when idle
    if (!isDragging) {
      bottleGroup.rotation.y += (targetRotationY - bottleGroup.rotation.y) * 0.05;
      targetRotationY += 0.002;
    }

    renderer.render(scene, camera);
  }
  animate();

})();
