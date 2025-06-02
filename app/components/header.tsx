import Link from "next/link";
import styles from "./header.module.css";


function Header() {
	return (
		<header className={styles.header}>
			<h2 className={styles.title}>Portfolio</h2>
			<nav className={styles.links}>
				<Link data-section={"home"} className={styles.headerLink} href={"#home"}>
					Home
				</Link>
				<Link data-section={"projects"} className={styles.headerLink} href={"#projects"}>
					Projects
				</Link>
				<Link data-section={"about"} className={styles.headerLink} href={"#about"}>
					About
				</Link>
				<Link data-section={"contact"} className={styles.headerLink} href={"#contact"}>
					Contact
				</Link>
			</nav>
		</header>
	);
}

export default Header;
