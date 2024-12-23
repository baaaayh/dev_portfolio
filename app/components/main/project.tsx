import ProjectList from "@/app/components/main/projectList";
import styles from "@/app/styles/main/project.module.scss";

export default function Project() {
    return (
        <div className={styles.proejct}>
            <div className={"section-title"}>
                <h2>Project</h2>
                <small>
                    도전과 학습을 통해 얻은 경험을 바탕으로 만들어졌습니다.
                </small>
            </div>
            <ProjectList />
        </div>
    );
}
