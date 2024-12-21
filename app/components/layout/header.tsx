import Link from "next/link";
import styles from "@/app/styles/layout/header.module.scss";

export default function Header() {
    return (
        <header className={styles["header"]}>
            <div className={styles["header__inner"]}>
                <h1 className={styles["header__logo"]}>
                    <Link href="/">
                        <strong className={styles["header__name"]}>
                            김 주 형
                        </strong>
                    </Link>
                </h1>
                <nav className={styles["gnb"]}>
                    <div className={styles["gnb__inner"]}>
                        <ul>
                            <li>
                                <Link href="/"></Link>
                            </li>
                            <li>
                                <Link href="/about"></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className={styles["link"]}>
                    <ul>
                        <li>
                            <Link href="/">Github</Link>
                        </li>
                        <li>
                            <Link href="/">Publishing</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
