"use client";

import { useEffect, useRef } from "react";
import type { ReactElement } from "react";

interface ProjectData {
	index: string;
	corner: string;
	eye: string;
	vcEye: string;
	vcTitle: string;
	vcMeta: string;
	title: ReactElement;
	summary: string;
	meta: { k: string; v: string }[];
	body: string[];
}

const PROJECTS: ProjectData[] = [
	{
		index: "01 / 03",
		corner: "br",
		eye: "Édition imprimée & site",
		vcEye: "N°05 · Édition",
		vcTitle: "saisons",
		vcMeta: "douze voix · risographie",
		title: <>re<span className="em">liure.</span></>,
		summary: "Revue annuelle, douze contributeurs, mise en page entièrement en lettres variables. Imprimée en risographie à 800 exemplaires.",
		meta: [
			{ k: "Année", v: "2025 — 2026" },
			{ k: "Client", v: "Studio Lemon" },
			{ k: "Rôle", v: "Direction artistique" },
			{ k: "Format", v: "21 × 28 cm · 64 p." },
		],
		body: [
			"Une revue annuelle conçue comme un objet : grille modulaire à dix colonnes, typographie variable qui s'adapte au ton de chaque article, et un papier qui s'épaissit doucement de la couverture à la dernière page.",
			"Le site reprend la même grille mais s'autorise plus de liberté : chaque contributeur reçoit une page-portrait paramétrable, à composer comme une planche-contact.",
		],
	},
	{
		index: "02 / 03",
		corner: "tl",
		eye: "Application mobile",
		vcEye: "04:12 · paisible",
		vcTitle: "respire",
		vcMeta: "inspire 4s · expire 6s",
		title: <>onde <span className="em">lente.</span></>,
		summary: "Application de relaxation guidée par le son. Champs concentriques, repères biométriques discrets, aucune notification.",
		meta: [
			{ k: "Année", v: "2025" },
			{ k: "Cadre", v: "Recherche personnelle" },
			{ k: "Rôle", v: "Design & développement" },
			{ k: "Plateforme", v: "iOS — SwiftUI" },
		],
		body: [
			"Une seule action est possible à l'écran d'accueil : poser le téléphone. L'onde sonore s'adapte au rythme cardiaque relevé via l'Apple Watch — quatre secondes d'inspiration, six d'expiration, modulées d'un demi-ton à chaque cycle.",
			"Aucune session n'est enregistrée, aucune notification envoyée. L'application disparaît dès qu'on la quitte.",
		],
	},
	{
		index: "03 / 03",
		corner: "tr",
		eye: "Identité visuelle",
		vcEye: "A · Monogramme",
		vcTitle: "A · L",
		vcMeta: "identité · 2024",
		title: <>atelier <span className="em">lyon.</span></>,
		summary: "Identité, signalétique et papeterie pour un atelier de menuiserie. Un monogramme typographique, deux couleurs, un système qui tient sur une feuille A4.",
		meta: [
			{ k: "Année", v: "2024 — 2025" },
			{ k: "Client", v: "Atelier Lyon" },
			{ k: "Rôle", v: "Direction de marque" },
			{ k: "Livrables", v: "Identité · Signalétique" },
		],
		body: [
			"Un monogramme dessiné à partir d'un caractère grotesque revu à la plume — un trait épaissi à l'horizontale pour évoquer le banc d'établi. Deux teintes : un noir d'encre, un vert sapin.",
			"La signalétique est gravée au laser dans des tasseaux de chêne ; les cartes sont imprimées en typographie sur les chutes de papier de l'imprimeur partenaire.",
		],
	},
];

function ProjectCard({ p }: { p: ProjectData }) {
	const cardRef = useRef<HTMLElement>(null);
	const tiltRef = useRef<HTMLDivElement>(null);
	const shineRef = useRef<HTMLDivElement>(null);
	const toggleRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const visual = cardRef.current?.querySelector<HTMLDivElement>(".card-visual");
		const tilt = tiltRef.current;
		const shine = shineRef.current;
		if (!visual || !tilt) return;

		let hovering = false;

		const onEnter = () => { hovering = true; };
		const onLeave = () => {
			hovering = false;
			tilt.style.transition = "transform 0.6s cubic-bezier(.2,.7,.2,1)";
			tilt.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
			if (shine) shine.style.cssText = "";
		};
		const onMove = (e: MouseEvent) => {
			if (!hovering) return;
			const rect = visual.getBoundingClientRect();
			const x = (e.clientX - rect.left) / rect.width;
			const y = (e.clientY - rect.top) / rect.height;
			const cx = x - 0.5, cy = y - 0.5;
			const maxTilt = 14;
			const ry = cx * maxTilt;
			const rx = -cy * maxTilt;
			tilt.style.transition = "transform 0.12s ease-out";
			tilt.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(1.02)`;
			if (shine) {
				shine.style.setProperty("--shine-x", (x * 100 - 50) + "%");
				shine.style.setProperty("--shine-y", (y * 100 - 50) + "%");
			}
		};

		visual.addEventListener("mouseenter", onEnter);
		visual.addEventListener("mouseleave", onLeave);
		visual.addEventListener("mousemove", onMove);

		const btn = toggleRef.current;
		const toggleCard = () => {
			const open = cardRef.current!.classList.toggle("open");
			btn!.setAttribute("aria-expanded", open ? "true" : "false");
			const label = btn!.querySelector<HTMLSpanElement>(".toggle-label");
			if (label) label.textContent = open ? "Refermer" : "Lire l'étude";
		};

		btn?.addEventListener("click", toggleCard);
		visual.addEventListener("click", toggleCard);

		return () => {
			visual.removeEventListener("mouseenter", onEnter);
			visual.removeEventListener("mouseleave", onLeave);
			visual.removeEventListener("mousemove", onMove);
			btn?.removeEventListener("click", toggleCard);
			visual.removeEventListener("click", toggleCard);
		};
	}, []);

	return (
		<article className="project-card reveal" ref={cardRef} data-corner={p.corner}>
			<div className="card-row">
				<div className="card-visual">
					<div className="visual-tilt" ref={tiltRef}>
						<div className="visual-frame">
							<div className="visual-content">
								<span className="vc-eye">{p.vcEye}</span>
								<span className="vc-title">{p.vcTitle}</span>
								<span className="vc-meta">{p.vcMeta}</span>
							</div>
						</div>
						<div className="card-shine" ref={shineRef} />
					</div>
				</div>
				<div className="card-text">
					<span className="card-index">{p.index}</span>
					<span className="card-eye">{p.eye}</span>
					<h3 className="card-title">{p.title}</h3>
					<p className="card-summary">{p.summary}</p>
					<button className="card-toggle" type="button" aria-expanded="false" ref={toggleRef}>
						<span className="toggle-label">Lire l&apos;étude</span>
						<span className="toggle-icon" />
					</button>
				</div>
			</div>
			<div className="card-detail">
				<div className="detail-wrap">
					<div className="detail-inner">
						<div className="detail-grid">
							{p.meta.map((m) => (
								<div key={m.k} className="cell">
									<span className="detail-k">{m.k}</span>
									<span className="detail-v">{m.v}</span>
								</div>
							))}
						</div>
						{p.body.map((b, i) => (
							<p key={i} className="detail-body">{b}</p>
						))}
					</div>
				</div>
			</div>
		</article>
	);
}

export function Projects() {
	return (
		<section id="projects" className="projects">
			<span className="section-aura tl lg" />
			<span className="section-aura cr pale" />
			<span className="section-aura br sm deep" />

			<div className="section-deco" aria-hidden="true">
				<div className="deco-grid" style={{ top: "180px", bottom: "180px", left: 0, right: 0 }} />
				<div className="deco-watermark" style={{ top: "140px", left: "-2vw", fontSize: "clamp(260px,32vw,500px)" }}>02</div>
				<div className="deco-edge" style={{ top: "240px", right: "18px" }}>Travaux · Trois&nbsp;projets</div>
				<div className="deco-cross" style={{ top: "200px", left: "48px" }} />
				<div className="deco-cross" style={{ top: "200px", right: "48px" }} />
				<div className="deco-cross" style={{ bottom: "200px", left: "48px" }} />
				<div className="deco-cross" style={{ bottom: "200px", right: "48px" }} />
			</div>

			<div className="wrap">
				<header className="section-head">
					<span className="index reveal">02 — Travaux récents</span>
					<h2 className="reveal d1">trois <span className="em">projets</span></h2>
					<p className="sub reveal d2">Trois disciplines, une même méthode. Cliquez sur celui qui vous intrigue pour en lire l&apos;étude.</p>
				</header>

				<div className="project-list">
					{PROJECTS.map((p) => <ProjectCard key={p.index} p={p} />)}
				</div>
			</div>
		</section>
	);
}
