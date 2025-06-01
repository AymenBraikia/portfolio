import Header from "./components/header";
import Introduction from "./components/introduction";
import Projects from "./components/projects";

export default function Home() {
	return (
		<>
			<Header />
			<div style={{ position: "absolute", top: "60px", left: "0", height: "fit-content", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", rowGap: 50, padding: "0 100px" }}>
				<Introduction />
				<Projects />
			</div>
		</>
	);
}
