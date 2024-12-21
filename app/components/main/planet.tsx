import styles from "@/app/styles/main/planet.module.scss";
export default function Planet() {
    return (
        <div className={styles.planet}>
            <div className={styles["planet__circle"]}></div>
        </div>
    );
}
