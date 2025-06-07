import Header from "./components/header";
import Introduction from "./components/introduction";
import Projects from "./components/projects";
import About from "./components/about";
import Touch from "./components/touch";
import Footer from "./components/footer";

export default function Home() {
	return (
		<>
			<Header />
			<div className="mainContainer" style={{ position: "absolute", top: "60px", left: "0", height: "fit-content", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", rowGap: 100, padding: "0 100px" }}>
				<Introduction />
				<Projects />
				<About />
				<Touch />
				<Footer />
			</div>
		</>
	);
}
