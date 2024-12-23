"use client";
import { useEffect, useRef } from "react";
import styles from "@/app/styles/main/planet.module.scss";

export default function Planet() {
    const planetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updatePosition = () => {
            if (planetRef.current) {
                const scrollY = window.scrollY;
                const translateY = scrollY * 0.3;
                planetRef.current.style.transform = `translateY(${translateY}px)`;
            }
        };

        updatePosition();

        window.addEventListener("scroll", updatePosition);

        return () => {
            window.removeEventListener("scroll", updatePosition);
        };
    }, []);

    return (
        <div className={styles.planet} ref={planetRef}>
            <div className={styles["planet__circle"]}></div>
        </div>
    );
}
