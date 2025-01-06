import projectsData from "@/public/json/projects.json";
import ProjectItem from "@/app/components/main/projectItem";
import styles from "@/app/styles/main/project-list.module.scss";

export default function ProjectList() {
    return (
        <div className={styles["project-list"]}>
            <ul>
                {[...projectsData].reverse().map((p) => {
                    return <ProjectItem key={p.id} projectInfo={p} />;
                })}
            </ul>
        </div>
    );
}
