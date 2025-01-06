import KV from "@/app/components/main/kv";
import Project from "@/app/components/main/project";
import styles from "@/app/styles/page.module.scss";
import StarCanvas from "@/app/components/layout/star-canvas";

export default function Home() {
    return (
        <>
            <StarCanvas />
            <main className={styles["main"]}>
                <section className={"section section--kv"}>
                    <div className={"section__inner"}>
                        <KV />
                    </div>
                </section>
                <section className={"section section--contents"}>
                    <div className={"section__inner"}>
                        <Project />
                    </div>
                </section>
            </main>
        </>
    );
}
