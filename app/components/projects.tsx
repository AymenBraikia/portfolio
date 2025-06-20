// import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import neuroImg from "../../public/neuro.png";
import easyMartImg from "../../public/easyMart.png";

import styles from "./projects.module.css";
import Link from "next/link";

function demo() {
	return (
		<svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M15 3h6v6"></path>
			<path d="M10 14 21 3"></path>
			<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
		</svg>
	);
}

function github() {
	return (
		<svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
			<path d="M9 18c-4.51 2-5-2-7-2"></path>
		</svg>
	);
}

interface project {
	imgSrc: StaticImageData;
	skills: string[];
	name: string;
	description: string;
	demoLink: string;
	githubLink: string;
}

class Project {
	imgSrc: StaticImageData;
	skills: string[];
	name: string;
	description: string;
	demoLink: string;
	githubLink: string;

	constructor(img: StaticImageData, skills: string[], name: string, description: string, demoLink: string, githubLink: string) {
		this.imgSrc = img;
		this.skills = skills;
		this.name = name;
		this.description = description;
		this.demoLink = demoLink;
		this.githubLink = githubLink;
	}
}

function Projects() {
	const projects = [
		new Project(
			neuroImg,
			["React", "Next", "TypeScript", "Express", "Mongodb", "Node.js"],
			"Neuro",
			`Neuro is an AI powered chatbot like chat-gpt that uses Llama 3 APIs. Took me a week to make using MERN stack + TypeScript. The main problems i faced while development was the cached CSS when i use Next router, in order to solve that i used moduled css instead of global css.`,
			"https://neuro-aymens-projects-a9014767.vercel.app/",
			"https://github.com/AymenBraikia/Neuro"
			// `Neuro is a sleek, responsive AI chatbot powered by Llama 3 APIs. It delivers real-time, human-like conversations through a clean, minimal UI. Designed for customer support, productivity, and general Q&A, Neuro offers a smooth and lightweight experience across all devices.`
		),
		new Project(
			easyMartImg,
			["React", "Next", "TypeScript", "Express", "Mongodb", "Node.js"],
			"Easy Mart",
			`Easy Mart is a e-commerce platform built with MERN stack and TypeScript. The biggest challenge was making filtering system and finding products data because most of the public fake data offered only one image and bad description and naming, so i had to make a small javascript script that copy product images and description from amazon and aliexpress`,
			"https://easy-mart-five.vercel.app/",
			"https://github.com/AymenBraikia/Easy-Mart"
		),
	];

	return (
		<div id="projects" className={styles.container}>
			<h1 className={styles.title} id="title">
				Projects
			</h1>
			<div className={styles.description}>
				Here are some of my recent projects that demonstrate my skills and expertise in the MERN stack. <br /> Each project was an opportunity to learn and grow as a developer.
			</div>
			<div className={styles.projects}>
				{...projects.map((proj: project, index: number) => {
					return (
						<div key={index} className={styles.project}>
							<div className={styles.imgWrapper}>
								<Image fill src={proj.imgSrc} alt={`Project ${index}`} className={styles.projectImg} />
							</div>

							<div className={styles.projectSkills}>
								{...proj.skills.map((skill: string, skillIndex: number) => {
									return (
										<div className={styles.skill} key={skillIndex}>
											{skill}
										</div>
									);
								})}
							</div>

							<div className={styles.projectName}>{proj.name}</div>

							<p className={styles.projectDescription}>{proj.description}</p>

							<div className={styles.projectDetails}>
								<Link className={styles.link} href={proj.githubLink}>
									{github()}
									{" Code"}
								</Link>

								<Link className={styles.link} href={proj.demoLink}>
									{demo()}
									{" Demo"}
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Projects;
