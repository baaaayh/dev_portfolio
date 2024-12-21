"use client";
import React, { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
}

const StarCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const offsetRef = useRef({ x: 0, y: 0 });
    const targetOffsetRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const resizeCanvas = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        const particles: Particle[] = [];
        const particleCount = 130;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 0.5 + 0.2, // 별의 크기를 약간 증가
                speedX: Math.random() * 1 - 0.5, // 속도를 줄임
                speedY: Math.random() * 1 - 0.5, // 속도를 줄임
            });
        }

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

            particles.forEach((particle) => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                const adjustedX =
                    (particle.x + offsetRef.current.x + boundaryX) %
                    canvas.width;
                const adjustedY =
                    (particle.y + offsetRef.current.y + boundaryY) %
                    canvas.height;

                ctx.beginPath();
                ctx.arc(adjustedX, adjustedY, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(255, 255, 255, 0.8)"; // 밝기를 높임
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
