import styles from "./about.module.css";

function FrontEndIco() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(96 165 250)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code text-blue-600 dark:text-blue-400">
			<polyline points="16 18 22 12 16 6"></polyline>
			<polyline points="8 6 2 12 8 18"></polyline>
		</svg>
	);
}
function Backend() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="rgb(147 51 234)"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="lucide lucide-server text-purple-600 dark:text-purple-400\"
		>
			<rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
			<rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
			<line x1="6" x2="6.01" y1="6" y2="6"></line>
			<line x1="6" x2="6.01" y1="18" y2="18"></line>
		</svg>
	);
}
function Database() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="rgb(74 222 128)"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="lucide lucide-database text-green-600 dark:text-green-400"
		>
			<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
			<path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
			<path d="M3 12A9 3 0 0 0 21 12"></path>
		</svg>
	);
}
function Soft() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="rgb(219 39 119)"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="lucide lucide-pen-tool text-pink-600 dark:text-pink-400\"
		>
			<path d="m12 19 7-7 3 3-7 7-3-3z"></path>
			<path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
			<path d="m2 2 7.586 7.586"></path>
			<circle cx="11" cy="11" r="2"></circle>
		</svg>
	);
}
function Learning() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="rgb(251 191 36)"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="lucide lucide-book text-amber-600 dark:text-amber-400"
		>
			<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
		</svg>
	);
}
function Design() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="rgb(13 148 136)"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="lucide lucide-users text-teal-600 dark:text-teal-400\"
		>
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
			<circle cx="9" cy="7" r="4"></circle>
			<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
			<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
		</svg>
	);
}

function About() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>About Me</h1>

			<div className={styles.description}>
				I&apos;m an aspiring full-stack developer with a focus on the MERN stack. My journey into web development began with a curiosity about how websites work and quickly grew into a passion for building interactive, user-friendly applications.{" "}
				<br /> <br />
				With a background in building responsive web apps, I bring a unique perspective to my development work. I approach each project as an opportunity to learn something new while creating solutions that are both technically sound and
				aesthetically pleasing. <br /> <br /> I&apos;m constantly expanding my knowledge through online courses, documentation, and building projects. I believe in writing clean, maintainable code and creating intuitive user experiences.
			</div>

			<h2 className={styles.subTitle}>My Skills</h2>

			<div className={styles.skills}>
				<div className={styles.skillSection}>
					<h3 className={styles.skillTitle}>{FrontEndIco()} Frontend</h3>

					<ul className={styles.skillsList}>
						<li className={styles.skill}>React.js</li>
						<li className={styles.skill}>Next.js</li>
						<li className={styles.skill}>TypeScript</li>
						<li className={styles.skill}>JavaScript (ES6+)</li>
						<li className={styles.skill}>HTML5/CSS3</li>
					</ul>
				</div>

				<div className={styles.skillSection}>
					<h3 className={styles.skillTitle}>{Backend()} Backend</h3>

					<ul className={styles.skillsList}>
						<li className={styles.skill}>Node.js</li>
						<li className={styles.skill}>Express.js</li>
						<li className={styles.skill}>RESTful APIs</li>
						<li className={styles.skill}>Authentication/Authorization</li>
						<li className={styles.skill}>WebSockets</li>
					</ul>
				</div>

				<div className={styles.skillSection}>
					<h3 className={styles.skillTitle}>{Database()} Database</h3>

					<ul className={styles.skillsList}>
						<li className={styles.skill}>MongoDB</li>
						<li className={styles.skill}>Mongoose ODM</li>
						<li className={styles.skill}>Data Modeling</li>
					</ul>
				</div>

				<div className={styles.skillSection}>
					<h3 className={styles.skillTitle}>{Soft()} Design & Tools</h3>

					<ul className={styles.skillsList}>
						<li className={styles.skill}>Responsive Design</li>
						<li className={styles.skill}>UI/UX Fundamentals</li>
						<li className={styles.skill}>Git/GitHub</li>
						<li className={styles.skill}>VS Code</li>
						<li className={styles.skill}>Figma Basics</li>
					</ul>
				</div>

				<div className={styles.skillSection}>
					<h3 className={styles.skillTitle}>{Learning()} Learning</h3>

					<ul className={styles.skillsList}>
						<li className={styles.skill}>Self-directed Learning</li>
						<li className={styles.skill}>Problem Solving</li>
						<li className={styles.skill}>Documentation Reading</li>
						<li className={styles.skill}>Code Reviews</li>
					</ul>
				</div>

				<div className={styles.skillSection}>
					<h3 className={styles.skillTitle}>{Design()} Soft Skills</h3>

					<ul className={styles.skillsList}>
						<li className={styles.skill}>Communication</li>
						<li className={styles.skill}>Time Management</li>
						<li className={styles.skill}>Adaptability</li>
						<li className={styles.skill}>Attention to Detail</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default About;
