import Link from "next/link";
import styles from "./header.module.css";

function Header() {
	return (
		<header className={styles.header}>
			<h2 className={styles.title}>Portfolio</h2>
			<nav className={styles.links}>
				<Link className={styles.headerLink} href={"#home"}>
					Home
				</Link>
				<Link className={styles.headerLink} href={"#projects"}>
					Projects
				</Link>
				<Link className={styles.headerLink} href={"#about"}>
					About
				</Link>
				<Link className={styles.headerLink} href={"#contact"}>
					Contact
				</Link>
			</nav>
		</header>
	);
}

export default Header;
