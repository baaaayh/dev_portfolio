"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/styles/layout/mobile-menu.module.scss";

export default function MobileMenu({
    mobileMenuState,
}: {
    mobileMenuState: boolean;
}) {
    const mobileMenu = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mobileMenu.current) {
            if (mobileMenuState) {
                const height = mobileMenu.current.scrollHeight;
                mobileMenu.current.style.height = height + "px";
            } else {
                mobileMenu.current.style.height = 0 + "px";
            }
        }
    }, [mobileMenuState]);

    return (
        <div className={`${styles["mobile-menu"]}`} ref={mobileMenu}>
            <div className={styles["mobile-menu__inner"]}>
                <nav className={styles["mobile-menu__nav"]}>
                    <ul>
                        <li>
                            <Link href="/">Work</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles["mobile-menu__link"]}>
                    <ul>
                        <li>
                            <a
                                href="https://github.com/baaaayh"
                                target="_blank"
                                className="btn btn-round btn-round--dark"
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
                                className="btn btn-round btn-round--dark"
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
            </div>
        </div>
    );
}
