"use client";

import { useEffect, useRef } from "react";

export function Nav() {
	const navRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const nav = navRef.current;
		if (!nav) return;

		const sectionIds = ["about", "projects", "project", "skills", "contact"];
		const sections = sectionIds.map((id) => document.getElementById(id));
		const links = nav.querySelectorAll<HTMLAnchorElement>("ul a");

		function onScroll() {
			if (window.scrollY > 40) nav!.classList.add("scrolled");
			else nav!.classList.remove("scrolled");

			const y = window.scrollY + window.innerHeight * 0.35;
			let activeId: string | null = null;
			sections.forEach((s) => {
				if (s && s.offsetTop <= y) activeId = s.id;
			});
			links.forEach((a) =>
				a.classList.toggle("active", a.dataset.section === activeId)
			);
		}

		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<nav className="nav" ref={navRef}>
			<a href="#hero" className="mark">JB</a>
			<ul>
				<li><a href="#about" data-section="about"><span className="dot" />À propos</a></li>
				<li><a href="#projects" data-section="projects"><span className="dot" />Projets</a></li>
				<li><a href="#project" data-section="project"><span className="dot" />Projet</a></li>
				<li><a href="#skills" data-section="skills"><span className="dot" />Compétences</a></li>
				<li><a href="#contact" data-section="contact"><span className="dot" />Contact</a></li>
			</ul>
			<a href="#contact" className="cta">Disponible →</a>
		</nav>
	);
}
