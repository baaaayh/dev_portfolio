import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/main/project-list.module.scss";

export default function ProjectList() {
    return (
        <div className={styles["project-list"]}>
            <ul>
                <li className={styles["item"]}>
                    <Link href="/">
                        <Image
                            src="/images/projects/dano_shop.png"
                            width={1728}
                            height={1074}
                            alt=""
                        />
                        <div className={styles["item__inner"]}>
                            <div className={styles["item__figure"]}>
                                <div className={styles["item__wrap"]}>
                                    <Image
                                        src="/images/projects/dano_shop.png"
                                        width={1728}
                                        height={1074}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={styles["item__info"]}>
                                <h3 className={styles["item__title"]}>
                                    DANO SHOP
                                </h3>
                                <p className={styles["item__tools"]}>
                                    React, MongoDB, Node.js
                                </p>
                            </div>
                        </div>
                    </Link>
                </li>
                <li className={styles["item"]}>
                    <Link href="/">
                        <Image
                            src="/images/projects/simple_board.png"
                            width={1728}
                            height={1074}
                            alt=""
                        />
                        <div className={styles["item__inner"]}>
                            <div className={styles["item__figure"]}>
                                <div className={styles["item__wrap"]}>
                                    <Image
                                        src="/images/projects/simple_board.png"
                                        width={1728}
                                        height={1074}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={styles["item__info"]}>
                                <h3 className={styles["item__title"]}>
                                    Simple Board
                                </h3>
                                <p className={styles["item__tools"]}>
                                    Next.js, TypesScript, PostgreSQL
                                </p>
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
