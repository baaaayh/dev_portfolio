"use client";
import { useState, useEffect, useRef } from "react";
import styles from "@/app/styles/layout/background.module.scss";

export default function Background() {
    const [gradientStyle, setGradientStyle] = useState({});
    const targetPosition = useRef({ x: 0, y: 0 }); // 마우스 위치
    const currentPosition = useRef({ x: 0, y: 0 }); // 부드럽게 이동하는 위치
    const animationFrame = useRef<number | null>(null);

    const updateGradient = () => {
        // 현재 위치를 목표 위치로 점진적으로 이동
        currentPosition.current.x +=
            (targetPosition.current.x - currentPosition.current.x) * 0.1;
        currentPosition.current.y +=
            (targetPosition.current.y - currentPosition.current.y) * 0.1;

        // 스타일 업데이트
        setGradientStyle({
            maskImage: `radial-gradient(
                600px at ${currentPosition.current.x}px ${currentPosition.current.y}px,
                rgb(0, 0, 0) 20%,
                rgba(0, 0, 0, 0) 100%
            )`,
            WebkitMaskImage: `radial-gradient(
                600px at ${currentPosition.current.x}px ${currentPosition.current.y}px,
                rgb(0, 0, 0) 20%,
                rgba(0, 0, 0, 0) 100%
            )`,
        });

        // 애니메이션 프레임 요청
        animationFrame.current = requestAnimationFrame(updateGradient);
    };

    const handleMouseMove = (e: MouseEvent) => {
        // 목표 위치 업데이트
        targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    useEffect(() => {
        // 마우스 이동 이벤트 리스너 추가
        window.addEventListener("mousemove", handleMouseMove);

        // 애니메이션 시작
        animationFrame.current = requestAnimationFrame(updateGradient);

        return () => {
            // 리스너와 애니메이션 정리
            window.removeEventListener("mousemove", handleMouseMove);
            if (animationFrame.current !== null) {
                cancelAnimationFrame(animationFrame.current);
            }
        };
    }, []);

    return (
        <>
            <div
                className={styles["bg-light"]}
                style={{ ...gradientStyle }}
            ></div>
            <div
                className={styles["bg-dot"]}
                style={{ ...gradientStyle }}
            ></div>
        </>
    );
}
