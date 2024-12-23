"use client";
import { useState, useEffect, useRef } from "react";
import styles from "@/app/styles/layout/banner.module.scss";

export default function Banner() {
    const circleRef = useRef<SVGCircleElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 800, y: -500 }); // 초기 위치를 SVG 위쪽으로 설정
    const [isMouseInSvg, setIsMouseInSvg] = useState(false);

    useEffect(() => {
        const svgElement = circleRef.current?.closest("svg");
        let animationFrameId: number;

        // 마우스 움직임 이벤트 핸들러
        const handleMouseMove = (e: MouseEvent) => {
            if (svgElement) {
                const svgRect = svgElement.getBoundingClientRect();
                const x = e.clientX - svgRect.left;
                const y = e.clientY - svgRect.top;
                setMousePosition({ x, y });
                setIsMouseInSvg(
                    x >= 0 &&
                        x <= svgRect.width &&
                        y >= 0 &&
                        y <= svgRect.height
                );
            }
        };

        const updateCirclePosition = () => {
            if (circleRef.current) {
                const currentX = parseFloat(
                    circleRef.current.getAttribute("cx") || "800"
                );
                const currentY = parseFloat(
                    circleRef.current.getAttribute("cy") || "900"
                );

                // 목표 위치 설정
                const targetX = isMouseInSvg ? mousePosition.x : 800;
                const targetY = isMouseInSvg ? mousePosition.y : 900;

                const easingFactor = 0.01;
                const newX = currentX + (targetX - currentX) * easingFactor;
                const newY = currentY + (targetY - currentY) * easingFactor;

                circleRef.current.setAttribute("cx", newX.toFixed(2));
                circleRef.current.setAttribute("cy", newY.toFixed(2));
            }

            animationFrameId = requestAnimationFrame(updateCirclePosition);
        };

        window.addEventListener("mousemove", handleMouseMove);
        updateCirclePosition();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [mousePosition, isMouseInSvg]);

    return (
        <div className={styles["banner"]}>
            <div className={styles["banner__inner"]}>
                <svg
                    width="1600"
                    height="400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1600 400"
                >
                    <defs>
                        <linearGradient
                            id="stroke-gradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="white" />
                            <stop offset="60%" stopColor="black" />
                        </linearGradient>
                        <filter id="blur">
                            <feGaussianBlur
                                in="SourceGraphic"
                                stdDeviation="50"
                            />
                        </filter>
                        <clipPath id="text-clip">
                            <text
                                x="800"
                                y="200"
                                fontFamily="geistSans"
                                fontSize="300"
                                fontWeight="700"
                                textAnchor="middle"
                                dominantBaseline="middle"
                            >
                                Baaaayh
                            </text>
                        </clipPath>
                    </defs>

                    <text
                        x="800"
                        y="200"
                        fontFamily="geistSans"
                        fontSize="300"
                        fontWeight="700"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        stroke="url(#stroke-gradient)"
                        strokeWidth="1"
                        fill="transparent"
                    >
                        Baaaayh
                    </text>
                    <g clipPath="url(#text-clip)">
                        <circle
                            ref={circleRef}
                            id="light"
                            r="450"
                            fill="#fff"
                            filter="url(#blur)"
                            cx="800"
                            cy="900"
                        ></circle>
                    </g>
                </svg>
            </div>
        </div>
    );
}
