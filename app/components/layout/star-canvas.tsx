"use client";
import React, { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    brightness: number;
    color: string;
    twinkleSpeed: number;
}

const StarCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const offsetRef = useRef({ x: 0, y: 0 });
    const targetOffsetRef = useRef({ x: 0, y: 0 });
    const particlesRef = useRef<Particle[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const calculateParticleCount = () => {
            const area = window.innerWidth * window.innerHeight;
            return Math.floor(area / 8000);
        };

        const initializeParticles = () => {
            const particleCount = calculateParticleCount();
            particlesRef.current = Array.from(
                { length: particleCount },
                () => ({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.2,
                    speedX: Math.random() * 0.8 - 0.4,
                    speedY: Math.random() * 0.8 - 0.4,
                    brightness: Math.random() * 0.5 + 0.5,
                    color: `hsl(${Math.random() * 60 + 200}, 100%, 90%)`,
                    twinkleSpeed: Math.random() * 0.02 + 0.01,
                })
            );
        };

        const resizeCanvas = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                initializeParticles();
            }
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        let mouseX = canvas.width / 2;
        let mouseY = canvas.height / 2;

        const handleMouseMove = (event: MouseEvent) => {
            const dx = event.clientX - mouseX;
            const dy = event.clientY - mouseY;

            targetOffsetRef.current.x -= dx * 0.2;
            targetOffsetRef.current.y -= dy * 0.2;

            mouseX = event.clientX;
            mouseY = event.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

        const lerp = (start: number, end: number, t: number) => {
            return start + (end - start) * t;
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const boundaryX = canvas.width / 2;
            const boundaryY = canvas.height / 2;

            offsetRef.current.x = lerp(
                offsetRef.current.x,
                targetOffsetRef.current.x,
                0.1
            );
            offsetRef.current.y = lerp(
                offsetRef.current.y,
                targetOffsetRef.current.y,
                0.1
            );

            particlesRef.current.forEach((particle, index) => {
                const depth = index / particlesRef.current.length;
                const parallaxX = offsetRef.current.x * depth;
                const parallaxY = offsetRef.current.y * depth;

                particle.x += particle.speedX;
                particle.y += particle.speedY;
                particle.brightness =
                    Math.sin(Date.now() * particle.twinkleSpeed) * 0.3 + 0.7;

                const adjustedX =
                    (particle.x + parallaxX + boundaryX) % canvas.width;
                const adjustedY =
                    (particle.y + parallaxY + boundaryY) % canvas.height;

                ctx.beginPath();
                ctx.shadowBlur = particle.size * 2;
                ctx.shadowColor = particle.color;
                ctx.arc(adjustedX, adjustedY, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.globalAlpha = particle.brightness;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default StarCanvas;
