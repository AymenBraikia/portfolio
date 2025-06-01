import styles from "./projects.module.css";
function Projects() {
	return (
		<div id="projects" className={styles.container}>
			<h1 className={styles.title}>Projects</h1>
			<div className={styles.description}>
				Here are some of my recent projects that demonstrate my skills and expertise in the MERN stack. <br /> Each project was an opportunity to learn and grow as a developer.
			</div>
			<div className={styles.projects}>
				<div className={styles.project}>
					<div className={styles.projectImg}></div>
					<div className={styles.projectSkills}>
						<div className={styles.skill}>React</div>
						<div className={styles.skill}>Next</div>
						<div className={styles.skill}>TypeScript</div>
						<div className={styles.skill}>Express</div>
						<div className={styles.skill}>Mongodb</div>
						<div className={styles.skill}>Node.js</div>
					</div>
					<div className={styles.projectName}>Example</div>
					<p className={styles.projectDescription}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti corrupti veniam fuga quam aspernatur officia deserunt optio, omnis harum ab vero veritatis quaerat voluptatibus inventore sed molestiae maiores ducimus. Esse?
					</p>
					<div className={styles.projectDetails}>
						<div className={styles.projectCode}>Github: https://github.com/repo/example</div>
						<div className={styles.projectDemo}>Live Demo: https://example-lake.vercel.app/</div>
					</div>
				</div>

				<div className={styles.project}>
					<div className={styles.projectImg}></div>
					<div className={styles.projectSkills}>
						<div className={styles.skill}>React</div>
						<div className={styles.skill}>Next</div>
						<div className={styles.skill}>TypeScript</div>
						<div className={styles.skill}>Express</div>
						<div className={styles.skill}>Mongodb</div>
						<div className={styles.skill}>Node.js</div>
					</div>
					<div className={styles.projectName}>Example</div>
					<p className={styles.projectDescription}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti corrupti veniam fuga quam aspernatur officia deserunt optio, omnis harum ab vero veritatis quaerat voluptatibus inventore sed molestiae maiores ducimus. Esse?
					</p>
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
