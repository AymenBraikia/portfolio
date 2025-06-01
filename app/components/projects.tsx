import Image from "next/image";
import neuro from "../../public/neuro.png";
import easyMart from "../../public/easyMart.png";

import styles from "./projects.module.css";
import Link from "next/link";

function demo() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M15 3h6v6"></path>
			<path d="M10 14 21 3"></path>
			<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
		</svg>
	);
}

function github() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
			<path d="M9 18c-4.51 2-5-2-7-2"></path>
		</svg>
	);
}

function Projects() {
	return (
		<div id="projects" className={styles.container}>
			<h1 className={styles.title}>Projects</h1>
			<div className={styles.description}>
				Here are some of my recent projects that demonstrate my skills and expertise in the MERN stack. <br /> Each project was an opportunity to learn and grow as a developer.
			</div>
			<div className={styles.projects}>
				<div className={styles.project}>
					<Image src={neuro} alt="Project 1" className={styles.projectImg}></Image>
					<div className={styles.projectSkills}>
						<div className={styles.skill}>React</div>
						<div className={styles.skill}>Next</div>
						<div className={styles.skill}>TypeScript</div>
						<div className={styles.skill}>Express</div>
						<div className={styles.skill}>Mongodb</div>
						<div className={styles.skill}>Node.js</div>
					</div>
					<div className={styles.projectName}>Neuro AI</div>
					<p className={styles.projectDescription}>
						Neuro is a sleek, responsive AI chatbot powered by Llama 3 APIs. It delivers real-time, human-like conversations through a clean, minimal UI. Designed for customer support, productivity, and general Q&A, Neuro offers a smooth and
						lightweight experience across all devices.
					</p>
					<div className={styles.projectDetails}>
						<Link className={styles.link} href={"https://github.com/AymenBraikia/Neuro"}>
							{github()}
							{" Code"}
						</Link>

						<Link className={styles.link} href={"https://neuro-aymens-projects-a9014767.vercel.app/"}>
							{demo()}
							{" Demo"}
						</Link>
					</div>
				</div>

				<div className={styles.project}>
					<Image src={easyMart} alt="Project 2 Easy Mart" className={styles.projectImg}></Image>
					<div className={styles.projectSkills}>
						<div className={styles.skill}>React</div>
						<div className={styles.skill}>Next</div>
						<div className={styles.skill}>TypeScript</div>
						<div className={styles.skill}>Express</div>
						<div className={styles.skill}>Mongodb</div>
						<div className={styles.skill}>Node.js</div>
					</div>
					<div className={styles.projectName}>Easy Mart</div>
					<p className={styles.projectDescription}>
						EasyMart is a modern, fully responsive e-commerce platform built with Next.js and TypeScript. It offers dynamic product listings, category filtering, and a clean UI for a smooth shopping experience. Optimized for performance and
						scalability, it’s ideal for online retail.{" "}
					</p>
					<div className={styles.projectDetails}>
						<Link className={styles.link} href={"https://github.com/AymenBraikia/Easy-Mart"}>
							{github()}
							{" Code"}
						</Link>

						<Link className={styles.link} href={"https://easy-mart-five.vercel.app/"}>
							{demo()}
							{" Demo"}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
