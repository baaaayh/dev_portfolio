"use client";
import MobileMenu from "@/app/components/layout/mobile-menu";
import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@/app/styles/layout/header.module.scss";

export default function Header() {
    const pathname = usePathname();
    const navButtons = useRef<(HTMLAnchorElement | null)[]>([]);
    const navInner = useRef<HTMLDivElement>(null);
    const glowEl = useRef<HTMLSpanElement>(null);
    const bgEl = useRef<HTMLSpanElement>(null);
    const bottomEl = useRef<HTMLSpanElement>(null);
    const mobileMenuButton = useRef<HTMLButtonElement>(null);
    const [mobileMenuState, setMobileMenuState] = useState<boolean>(false);

    const activeNav = useCallback(() => {
        const parent = navInner.current;
        const lightEl = glowEl.current;
        const pillEl = bgEl.current;
        const backEl = bottomEl.current;

        // 활성화된 링크 찾기
        const targetIndex = navButtons.current.findIndex(
            (btn) =>
                btn?.getAttribute("href") === pathname || pathname !== "/about"
        );

        // 활성화된 링크와 관련 DOM 조작
        if (targetIndex !== -1) {
            const target = navButtons.current[targetIndex];
            if (target && parent && lightEl && pillEl && backEl) {
                const targetRect = target.getBoundingClientRect();
                const parentRect = parent.getBoundingClientRect();
                const xPos = targetRect.left - parentRect.left;
                const width = targetRect.width;

                // 위치와 크기 업데이트
                lightEl.style.left = `${xPos}px`;
                backEl.style.backgroundPositionX = `${
                    100 - ((xPos + width / 2) / parentRect.width) * 100
                }%`;
                lightEl.style.width = `${width}px`;
                pillEl.style.left = `${xPos}px`;
                pillEl.style.width = `${width}px`;

                // 활성 클래스 업데이트
                navButtons.current.forEach((btn, index) => {
                    const listItem = btn?.closest("li");
                    if (listItem) {
                        if (index === targetIndex) {
                            listItem.classList.add(styles["gnb__item--active"]);
                        } else {
                            listItem.classList.remove(
                                styles["gnb__item--active"]
                            );
                        }
                    }
                });
            }
        }
    }, [pathname]);

    useEffect(() => {
        activeNav();
    }, [activeNav]);

    useEffect(() => {
        if (mobileMenuButton.current) {
            mobileMenuButton.current.addEventListener("click", function () {
                this.classList.toggle("active");
                if (this.classList.contains("active")) {
                    setMobileMenuState(true);
                } else {
                    setMobileMenuState(false);
                }
            });
        }
    }, []);

    useEffect(() => {
        document.addEventListener("click", function (e) {
            const $t = e.target as HTMLElement;
            if (!$t.closest(`.${styles["header"]}`)) {
                setMobileMenuState(false);
                if (mobileMenuButton.current)
                    mobileMenuButton.current.classList.remove("active");
            }
        });
    }, [setMobileMenuState]);

    useEffect(() => {
        setMobileMenuState(false);
        if (mobileMenuButton.current)
            mobileMenuButton.current.classList.remove("active");
    }, [pathname, setMobileMenuState]);

    return (
        <header className={styles["header"]}>
            <div className={styles["header__inner"]}>
                <h1 className={styles["header__logo"]}>
                    <Link href="/">
                        <strong className={styles["header__name"]}>
                            Baaaayh
                        </strong>
                    </Link>
                </h1>
                <nav className={styles["gnb"]}>
                    <span
                        className={`${styles["gnb__back"]}`}
                        ref={bottomEl}
                    ></span>
                    <div className={styles["gnb__container"]}>
                        <span
                            className={`${styles["gnb__glare"]} ${styles["gnb__glare--top"]}`}
                        ></span>
                        <div className={styles["gnb__inner"]} ref={navInner}>
                            <ul>
                                <li className={styles["gnb__item"]}>
                                    <Link
                                        href="/"
                                        ref={(el) => {
                                            if (el) navButtons.current[0] = el;
                                        }}
                                    >
                                        Work
                                    </Link>
                                </li>
                                <li className={styles["gnb__item"]}>
                                    <Link
                                        href="/about"
                                        ref={(el) => {
                                            if (el) navButtons.current[1] = el;
                                        }}
                                    >
                                        About
                                    </Link>
                                </li>
                            </ul>
                            <span
                                className={styles["gnb__pill"]}
                                ref={bgEl}
                            ></span>
                            <span
                                className={styles["gnb__light"]}
                                ref={glowEl}
                            ></span>
                        </div>
                    </div>
                </nav>
                <div className={styles["link"]}>
                    <ul>
                        <li>
                            <a
                                href="https://github.com/baaaayh"
                                target="_blank"
                            >
                                Github
                                <Image
                                    src="/images/icons/icon_link.svg"
                                    width={18}
                                    height={18}
                                    alt="Github"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://portfolio-9590f.web.app/"
                                target="_blank"
                            >
                                Prev Portfolio
                                <Image
                                    src="/images/icons/icon_link.svg"
                                    width={18}
                                    height={18}
                                    alt="Publising"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <MobileMenu mobileMenuState={mobileMenuState} />
                <div className="mob-menu mov">
                    <button type="button" ref={mobileMenuButton}>
                        <span>MOBILE MENU</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
