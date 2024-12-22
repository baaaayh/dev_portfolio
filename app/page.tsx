import KV from "@/app/components/main/kv";
import styles from "@/app/styles/page.module.scss";

export default function Home() {
    return (
        <main className={styles["main"]}>
            <section className={"section section--kv"}>
                <div className={"section__inner"}>
                    <KV />
                </div>
            </section>
            <section className={"section section--contents"}>
                <div className={"section__inner"}>
                    <div className={"section-title"}>
                        <h2>Project</h2>
                        <small>
                            도전과 학습을 통해 얻은 경험을 바탕으로
                            만들어졌습니다.
                        </small>
                    </div>
                </div>
            </section>
        </main>
    );
}
