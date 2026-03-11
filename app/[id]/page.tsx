"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import projectsData from "@/public/json/projects.json";
import Image from "next/image";
import styles from "@/app/styles/project/detail-page.module.scss";

export default function DetailPage() {
  const params = useParams();
  const { id } = params;

  const { ...data } = projectsData.filter((p) => p.id === id);
  const project = data[0];

  return (
    <div className={styles["detail"]}>
      <h2 className={styles["detail__title"]}>{project.title}</h2>
      <div className={styles["detail__figure"]}>
        <div className={styles["detail__inner"]}>
          <Image
            src={project.imageUrl}
            width={1728}
            height={1074}
            priority
            alt=""
          />
        </div>
      </div>
      <div className={styles["detail__info"]}>
        <div className={styles["detail__left"]}>
          <div className={styles["detail__float"]}>
            <h3>{project.title}</h3>
            <div className={styles["detail__tag"]}>
              {project.type.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className={styles["detail__right"]}>
          <ul>
            <li>
              <h4>Description</h4>
              <div className={styles["detail__content"]}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: project.description,
                  }}
                ></p>
              </div>
            </li>
            <li>
              <h4>Summary</h4>
              <div className={styles["detail__content"]}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: project.summary,
                  }}
                ></p>
              </div>
            </li>
            {project?.troubleShooting && (
              <li>
                <h4>Trouble shooting</h4>
                <div className={styles["detail__content"]}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: project.troubleShooting,
                    }}
                  ></p>
                </div>
              </li>
            )}
            <li>
              <h4>URL</h4>
              <div className={styles["detail__content"]}>
                <a href={project.url} target="_blank">
                  {project.url}
                  <Image
                    src="/images/icons/icon_link.svg"
                    width={18}
                    height={18}
                    alt="Github"
                  />
                </a>
              </div>
            </li>
            <li>
              <h4>Code</h4>
              <div className={styles["detail__content"]}>
                <a href={project.github} target="_blank">
                  {project.github}
                  <Image
                    src="/images/icons/icon_link.svg"
                    width={18}
                    height={18}
                    alt="Github"
                  />
                </a>
              </div>
            </li>
            <li>
              <h4>Period &amp; Contribution</h4>
              <div className={styles["detail__content"]}>
                <p>
                  {project.period} / {project.contribution}
                </p>
              </div>
            </li>
            <li>
              <h4>Skills</h4>
              <div className={styles["detail__content"]}>
                <p>
                  {project.skills.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="btn-wrap tac">
        <Link href="/" className="btn btn-round btn-round--dark">
          Work Page
          <Image
            src={"/images/icons/icon_arrow_white.svg"}
            width={18}
            height={18}
            alt="Work Page"
          />
        </Link>
      </div>
    </div>
  );
}
