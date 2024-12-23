"use client";
import { useEffect, useRef } from "react";
import styles from "@/app/styles/layout/banner.module.scss";

export default function Banner() {
    return (
        <div className={styles["banner"]}>
            <div className={styles["banner__inner"]}>
                <div className={styles["banner__text"]}>Baaaayh</div>
            </div>
        </div>
    );
}
