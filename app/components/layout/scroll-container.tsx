"use client";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function ScrollContainer({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const scroll = new LocomotiveScroll({
            el: scrollRef.current!,
            smooth: true,
            multiplier: 1,
        });

        return () => {
            scroll.destroy();
        };
    }, []);

    return (
        <div
            className="locomotive-scroll"
            ref={scrollRef}
            data-scroll-container
        >
            <div className="scroll-contents" data-scroll>
                {children}
            </div>
        </div>
    );
}
