import KV from "@/app/components/main/kv";
import styles from "@/app/styles/page.module.scss";

export default function Home() {
    return (
        <main className={styles["main"]}>
            <section className={"section section--kv"}>
                <KV />
            </section>
            <section className={"section section--contents"}></section>
        </main>
    );
}
