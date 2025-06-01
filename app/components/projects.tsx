import styles from "./projects.module.css";
function Projects() {
	return (
		<div id="projects" className={styles.container}>
			<h2 className={styles.title}>Projects</h2>
			<div className={styles.description}>
				Here are some of my recent projects that demonstrate my skills and expertise in the MERN stack. <br /> Each project was an opportunity to learn and grow as a developer.
			</div>
			<div className={styles.projects}>
				<div className={styles.project}>
					<div className={styles.projectImg}></div>
					<div className={styles.projectSkills}>react next typescript express js mongodb</div>
					<div className={styles.projectName}>Example</div>
					<div className={styles.projectDetails}>
						<div className={styles.projectCode}>Github: https://github.com/repo/example</div>
						<div className={styles.projectDemo}>Live Demo: https://example-lake.vercel.app/</div>
					</div>
				</div>

				<div className={styles.project}>
					<div className={styles.projectImg}></div>
					<div className={styles.projectSkills}>react next typescript express js mongodb</div>
					<div className={styles.projectName}>Example</div>
					<div className={styles.projectDetails}>
						<div className={styles.projectCode}>Github: https://github.com/repo/example</div>
						<div className={styles.projectDemo}>Live Demo: https://example-lake.vercel.app/</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
