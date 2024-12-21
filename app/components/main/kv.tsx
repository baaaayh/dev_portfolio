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
                                className={`${styles["kv__title"]} ${styles["kv__title--01"]}}`}
                            >
                                Driven by passion,
                            </div>
                            <div
                                className={`${styles["kv__title"]} ${styles["kv__title--02"]}}`}
                            >
                                Powered by javascript.
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
                </div>
            </div>
            <Planet />
        </>
    );
}
