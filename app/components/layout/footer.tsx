import styles from "@/app/styles/layout/footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer__inner"]}>
                <div className={styles["footer__top"]}>
                    <h2>Baaaayh</h2>
                    <p>
                        Driven by Passion,
                        <br />
                        Powered by Javascript.
                    </p>
                </div>
                <div className={styles["footer__bottom"]}>
                    <div className={styles["footer__left"]}>
                        © 2024 Baaaayh All Rights Reserved.
                    </div>
                    <div className={styles["footer__right"]}>
                        <ul>
                            <li>
                                <a href="" target="_blank">
                                    Github
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    Publishing
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
