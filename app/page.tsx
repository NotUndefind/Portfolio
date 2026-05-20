import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Disclaimer } from "@/components/disclaimer";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { ProjectCase } from "@/components/project-case";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Cursor } from "@/components/cursor";

export default function Portfolio() {
	return (
		<>
			<Cursor />
			<Nav />
			<main className="page">
				<Hero />
				<Disclaimer />
				<About />
				{/* <Projects /> */}
				{/* <ProjectCase /> */}
				<Skills />
				<Contact />
			</main>
		</>
	);
}
