import Image from "next/image";
import Planet from "@/app/components/main/planet";
import styles from "@/app/styles/main/kv.module.scss";

export default function KV() {
    return (
        <>
            <div className={styles["kv"]}>
                <div className={styles["kv__text"]}>
                    <div className={styles["kv__slogan"]}>
                        <h2>
                            <div
                                className={`${styles["kv__title"]} ${styles["kv__title--01"]}`}
                            >
                                Driven by Passion,
                            </div>
                            <div
                                className={`${styles["kv__title"]} ${styles["kv__title--02"]}`}
                            >
                                Powered by Javascript.
                            </div>
                        </h2>
                    </div>
                    <div className={styles["kv__desc"]}>
                        <h3>
                            책임감과 끈기가 장점인 프론트엔드 개발자{" "}
                            <strong>김 주 형</strong> 입니다.
                            <br />
                            문제와 직면하더라도 <strong>열정</strong>과{" "}
                            <strong>끈기</strong>로 해결해 나갑니다.
                        </h3>
                    </div>
                    <div className={styles["kv__skills"]}>
                        <Image
                            src="/images/icons/icon_skills.svg"
                            alt="Skills"
                            width={1000}
                            height={48}
                        />
                    </div>
                    <div className={styles["kv__shortcut"]}>
                        <ul>
                            <li>
                                <a
                                    className="btn btn-round"
                                    href="https://github.com/baaaayh/dev_portfolio"
                                    target="_blank"
                                >
                                    Source Code
                                </a>
                            </li>
                            <li>
                                <a
                                    className="btn btn-round btn-round--dark"
                                    href="https://portfolio-9590f.web.app/"
                                    target="_blank"
                                >
                                    Prev Portfolio
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Planet />
        </>
    );
}
