import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/main/project-item.module.scss";

interface Project {
    id: string;
    idx: number;
    imageUrl: string;
    title: string;
    type: Array<string>;
    description: string;
    url: string;
    github: string;
    workers: number;
    period: string;
    contribution: string;
    tools: Array<string>;
}

export default function ProjectItem({ projectInfo }: { projectInfo: Project }) {
    return (
        <li className={styles["item"]}>
            <Link href={`/${projectInfo.id}`}>
                <Image
                    src={projectInfo.imageUrl}
                    width={1728}
                    height={1074}
                    alt={projectInfo.title}
                    priority
                />
                <div className={styles["item__inner"]}>
                    <div className={styles["item__figure"]}>
                        <div className={styles["item__wrap"]}>
                            <Image
                                src={projectInfo.imageUrl}
                                width={1728}
                                height={1074}
                                alt={projectInfo.title}
                                priority
                            />
                        </div>
                    </div>
                    <div className={styles["item__info"]}>
                        <h3 className={styles["item__title"]}>
                            {projectInfo.title}
                        </h3>
                        <p className={styles["item__tools"]}>
                            {projectInfo.tools.map((t) => {
                                return <span key={t}>{t}</span>;
                            })}
                        </p>
                    </div>
                </div>
            </Link>
        </li>
    );
}
