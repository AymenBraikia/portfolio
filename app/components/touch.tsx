import Link from "next/link";
import styles from "./touch.module.css";

function email() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.ico}>
			<rect width="20" height="16" x="2" y="4" rx="2"></rect>
			<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
		</svg>
	);
}

function location() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.ico}>
			<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
			<circle cx="12" cy="10" r="3"></circle>
		</svg>
	);
}

function download() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.resumeIco}>
			<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
			<polyline points="7 10 12 15 17 10"></polyline>
			<line x1="12" x2="12" y1="15" y2="3"></line>
		</svg>
	);
}

function Touch() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Get In Touch</h1>
			<div className={styles.info}>
				<div className={styles.myInfo}>
					<h2 className={styles.subTitle}>Let&apos;s Connect</h2>

					<div className={styles.description}>I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out using the form or through my social links.</div>

					<div className={styles.myEmail}>{email()} aymenbraikia1@gmail.com</div>

					<div className={styles.location}>{location()} Tenes, Algeria</div>

					<Link href="" download={} className={styles.resume}>
						{download()} Download Resume
					</Link>
				</div>

				<form className={styles.form}>
					<div className={styles.input}>
						<label className={styles.lable} htmlFor="name">
							Your Name
						</label>
						<input id="name" type="text" className={styles.nameInput} />
					</div>

					<div className={styles.input}>
						<label className={styles.lable} htmlFor="email">
							Your Email
						</label>
						<input id="email" type="email" className={styles.emailInput} />
					</div>

					<div className={styles.input}>
						<label className={styles.lable} htmlFor="message">
							Your Message
						</label>
						<textarea id="message" className={styles.messageInput} />
					</div>

					<div className={styles.input}>
						<button id="submit" className={styles.submit}>
							Send Message
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Touch;
