"use client";
import Link from "next/link";
import styles from "./introduction.module.css";
import { useEffect, useRef } from "react";

function github() {
	return (
		<svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
			<path d="M9 18c-4.51 2-5-2-7-2"></path>
		</svg>
	);
}

function linkedin() {
	return (
		<svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
			<rect width="4" height="12" x="2" y="9"></rect>
			<circle cx="4" cy="4" r="2"></circle>
		</svg>
	);
}

function Introduction() {
	const welcoming = useRef<HTMLDivElement>(null);
	const myself = useRef<HTMLDivElement>(null);
	const description = useRef<HTMLDivElement>(null);
	const btn = useRef<HTMLDivElement>(null);
	const icons = useRef<HTMLDivElement>(null);

	useEffect(() => {
		welcoming.current?.classList.add("active");
		myself.current?.classList.add("active");
		description.current?.classList.add("active");
		btn.current?.classList.add("active");
		icons.current?.classList.add("active");
	}, []);

	return (
		<div id="home" className={styles.container}>
			<div ref={welcoming} id="welcoming" className={styles.welcoming}>
				Hello, I&apos;m
			</div>

			<div ref={myself} id="myself" className={styles.myself}>
				<h1 className={styles.name}>Aymen Braikia</h1>
				<h1 className={styles.position}>Software Engineer</h1>
			</div>

			<p ref={description} id="description" className={styles.description}>
				(MERN Stack)
			</p>

			<p ref={description} id="description" className={styles.description}>
				As an enthusiastic web developer, I&apos;m on a quest to produce significant digital experiences. With my proficiency in Express.js, React.js, Node.js, and MongoDB, I turn concepts into sophisticated, useful apps.{" "}
			</p>

			<div ref={btn} id="btn" className={styles.btn}>
				<Link className={styles.myWork} href={"#projects"}>
					View My Work
				</Link>

				<Link className={styles.touch} href={"#contact"}>
					Get In Touch
				</Link>
			</div>

			<div ref={icons} id="icons" className={styles.icons}>
				<Link href={"https://github.com/AymenBraikia"} className={styles.github}>
					{github()}
				</Link>

				<Link href={"https://www.linkedin.com/in/aymenbraikia/"} className={styles.linkedin}>
					{linkedin()}
				</Link>
			</div>
		</div>
	);
}

export default Introduction;
