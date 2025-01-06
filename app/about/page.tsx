import Image from "next/image";
import styles from "@/app/styles/about/about-page.module.scss";

export default function AboutPage() {
    return (
        <div className={styles["about"]}>
            <div className={styles["about__inner"]}>
                <div className={styles["about__intro"]}>
                    <div className={styles["about__figure"]}>
                        <div className={styles["about__inner"]}>
                            <Image
                                src={"/images/about/profile.jpg"}
                                width={600}
                                height={800}
                                alt="Kim Joo Hyung / 프론트엔드 개발자 김주형"
                                priority
                            />
                        </div>
                    </div>
                    <div className={styles["about__text"]}>
                        <h2>
                            책임감, 끈기, 발전하고 있는
                            <br />
                            프론트엔드 개발자 김주형.
                        </h2>
                        <p>
                            안녕하세요, 프론트엔드 개발자 김주형입니다. 구조나
                            흐름에 대해 분석하는 것, 문제 해결하는 것을 좋아해
                            어려운 문제라도 끈기 있게 해결해 왔습니다.
                            지금까지의 경험을 바탕으로 완성형 프론트엔드 개발자,
                            더 나아가서는 풀스택 개발자가 되는 것이 저의
                            목표입니다.
                        </p>
                    </div>
                </div>
                <div className={styles["about__exp"]}>
                    <div className={styles["about__row"]}>
                        <h2>Work Experience</h2>
                        <div className={styles["about__list"]}>
                            <ul>
                                <li>
                                    <strong>비닷크리에이티브</strong>
                                    <span>
                                        웹 퍼블리셔 · 2023. 08 ~ 2024. 11
                                    </span>
                                    <p>
                                        웹 구축 / 운영 업무를 수행했습니다. 특히
                                        웹 인터랙션에 대한 업무와 사이트 리뉴얼
                                        작업을 주로 진행했습니다.
                                    </p>
                                </li>
                                <li>
                                    <strong>가피아</strong>
                                    <span>
                                        웹 퍼블리셔 · 2022. 03 ~ 2023. 01
                                    </span>
                                    <p>
                                        웹 접근성 획득 프로젝트를 진행했고,
                                        더불어 CMS, LMS 등 공공 기관 등의
                                        구축/유지·보수 프로젝트를 수행했습니다.
                                    </p>
                                </li>
                                <li>
                                    <strong>윈코커뮤니케이션</strong>
                                    <span>
                                        웹 퍼블리셔 · 2020. 02 ~ 2021. 02
                                    </span>
                                    <p>
                                        다양한 디자인과 플러그인등을 사용한
                                        기업들의 웹 페이지 구축/유지·보수
                                        프로젝트를 수행했습니다.
                                    </p>
                                </li>
                                <li>
                                    <strong>오픈필드</strong>
                                    <span>
                                        웹 퍼블리셔 · 2019. 05 ~ 2019. 07
                                    </span>
                                    <p>
                                        일반 기업들의 웹 페이지 구축 프로젝트를
                                        수행했습니다.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles["about__row"]}>
                        <h2>Other Experience</h2>
                        <div className={styles["about__list"]}>
                            <ul>
                                <li>
                                    <strong>디자인쏘울</strong>
                                    <span>
                                        SNS 홍보 &middot; 2017. 09 ~ 2018. 03
                                    </span>
                                    <p>
                                        이미지 편집, SNS 홍보 등의 업무를
                                        수행했습니다.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
