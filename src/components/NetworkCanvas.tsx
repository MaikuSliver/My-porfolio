import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  pulsePhase: number;
}

interface Packet {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
}

export const NetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    const nodes: Node[] = [];
    const packets: Packet[] = [];
    const ripples: Ripple[] = [];

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
      isActive: false,
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      initNodes(rect.width, rect.height);
    };

    const initNodes = (width: number, height: number) => {
      nodes.length = 0;
      packets.length = 0;
      // Adjust density based on screen width
      const count = width < 640 ? 28 : width < 1024 ? 44 : 60;
      for (let i = 0; i < count; i++) {
        const radius = Math.random() * 2 + 1.5;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius,
          baseRadius: radius,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.isActive = false;
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ripples.push({
        x,
        y,
        radius: 4,
        maxRadius: 100,
        opacity: 0.6,
      });
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);

    resize();

    let lastPacketTime = 0;

    const render = (time: number) => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      const nodeColor = isDark ? 'rgba(244, 114, 182, 0.55)' : 'rgba(219, 39, 119, 0.45)';
      const nodeActiveColor = isDark ? 'rgba(244, 114, 182, 0.95)' : 'rgba(219, 39, 119, 0.9)';
      const lineColor = isDark ? 'rgba(244, 114, 182, ' : 'rgba(219, 39, 119, ';
      const maxDistance = width < 640 ? 85 : 120;

      // Update and draw ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 2.2;
        r.opacity *= 0.94;
        if (r.opacity < 0.02 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = isDark
          ? `rgba(244, 114, 182, ${r.opacity})`
          : `rgba(219, 39, 119, ${r.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Bounce at boundaries
        if (node.x < 0) { node.x = 0; node.vx *= -1; }
        if (node.x > width) { node.x = width; node.vx *= -1; }
        if (node.y < 0) { node.y = 0; node.vy *= -1; }
        if (node.y > height) { node.y = height; node.vy *= -1; }

        // Mouse attraction & gentle deflection
        if (mouse.isActive) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 0.025;
            node.vx += dx * force;
            node.vy += dy * force;
          }
        }

        // Slight speed damping
        node.vx *= 0.99;
        node.vy *= 0.99;

        // Gentle pulsing
        node.pulsePhase += 0.02;
        node.radius = node.baseRadius + Math.sin(node.pulsePhase) * 0.5;
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (isDark ? 0.22 : 0.15);
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `${lineColor}${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Connect to mouse if close
            if (mouse.isActive && Math.random() < 0.0008 && time - lastPacketTime > 250) {
              packets.push({
                fromNode: i,
                toNode: j,
                progress: 0,
                speed: 0.015 + Math.random() * 0.02,
                color: isDark ? '#ec4899' : '#db2777',
              });
              lastPacketTime = time;
            }
          }
        }

        // Connect node to mouse cursor
        if (mouse.isActive) {
          const dx = mouse.x - nodes[i].x;
          const dy = mouse.y - nodes[i].y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `${lineColor}${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      // Spawn ambient network packets periodically
      if (packets.length < 8 && Math.random() < 0.06 && nodes.length > 2) {
        const fromIdx = Math.floor(Math.random() * nodes.length);
        // Find a nearby node
        let nearestIdx = -1;
        let minDist = maxDistance;
        for (let k = 0; k < nodes.length; k++) {
          if (k === fromIdx) continue;
          const d = Math.hypot(nodes[k].x - nodes[fromIdx].x, nodes[k].y - nodes[fromIdx].y);
          if (d < minDist) {
            minDist = d;
            nearestIdx = k;
          }
        }
        if (nearestIdx !== -1) {
          packets.push({
            fromNode: fromIdx,
            toNode: nearestIdx,
            progress: 0,
            speed: 0.015 + Math.random() * 0.02,
            color: Math.random() > 0.4 ? (isDark ? '#f472b6' : '#db2777') : '#38bdf8',
          });
        }
      }

      // Draw and update packets
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;
        if (pkt.progress >= 1 || !nodes[pkt.fromNode] || !nodes[pkt.toNode]) {
          packets.splice(p, 1);
          continue;
        }

        const n1 = nodes[pkt.fromNode];
        const n2 = nodes[pkt.toNode];
        const px = n1.x + (n2.x - n1.x) * pkt.progress;
        const py = n1.y + (n2.y - n1.y) * pkt.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = pkt.color;
        ctx.shadowColor = pkt.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const isNearMouse = mouse.isActive && Math.hypot(mouse.x - node.x, mouse.y - node.y) < mouse.radius;

        ctx.beginPath();
        ctx.arc(node.x, node.y, isNearMouse ? node.radius * 1.5 : node.radius, 0, Math.PI * 2);
        ctx.fillStyle = isNearMouse ? nodeActiveColor : nodeColor;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto opacity-70 dark:opacity-80 transition-opacity"
      aria-hidden="true"
    />
  );
};
