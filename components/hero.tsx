"use client";

import { useEffect, useRef } from "react";

export function Hero() {
	const auraARef = useRef<HTMLDivElement>(null);
	const auraBRef = useRef<HTMLDivElement>(null);
	const stageRef = useRef<HTMLDivElement>(null);
	const heroRef = useRef<HTMLElement>(null);
	const cornersRef = useRef<HTMLDivElement[]>([]);
	const grainRef = useRef<HTMLDivElement>(null);
	const cueRef = useRef<HTMLDivElement>(null);
	const wordRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		// Stagger hero word chars
		const el = wordRef.current;
		if (el) {
			const text = el.textContent ?? "";
			el.innerHTML = "";
			[...text].forEach((c, i) => {
				const s = document.createElement("span");
				s.className = "char";
				s.style.transitionDelay = 0.10 + i * 0.06 + "s";
				s.textContent = c === " " ? " " : c;
				el.appendChild(s);
			});
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					el.querySelectorAll(".char").forEach((c) => c.classList.add("in"));
				});
			});
		}

		// Scroll parallax + fade
		function onScrollFx() {
			const y = window.scrollY;
			const vh = window.innerHeight;
			const progress = Math.min(1, y / (vh * 0.45));
			const eased = progress * progress * (3 - 2 * progress);
			const fade = 1 - eased;

			if (auraARef.current)
				auraARef.current.style.transform = `translate(-50%, calc(-50% + ${y * 0.18}px)) scale(${1 + eased * 0.2})`;
			if (auraBRef.current)
				auraBRef.current.style.transform = `translate(0, ${y * -0.10}px) scale(${1 - eased * 0.15})`;
			if (stageRef.current) {
				stageRef.current.style.opacity = String(Math.max(0, fade * 1.05));
				stageRef.current.style.transform = `translateY(${eased * -60}px) scale(${1 - eased * 0.06})`;
			}
			if (heroRef.current)
				heroRef.current.style.filter = `blur(${eased * 6}px)`;
			cornersRef.current.forEach((c) => {
				if (c) c.style.opacity = String(fade);
			});
			if (grainRef.current)
				grainRef.current.style.opacity = String(0.55 * fade);
			if (cueRef.current)
				cueRef.current.style.opacity = String(fade);
		}

		window.addEventListener("scroll", onScrollFx, { passive: true });
		onScrollFx();
		return () => window.removeEventListener("scroll", onScrollFx);
	}, []);

	const addCornerRef = (el: HTMLDivElement | null, i: number) => {
		if (el) cornersRef.current[i] = el;
	};

	return (
		<div className="hero-wrap">
			<section id="hero" className="hero" ref={heroRef}>
				<div className="hero-aura" ref={auraARef} />
				<div className="hero-aura secondary" ref={auraBRef} />
				<div className="hero-grain" ref={grainRef} />

				<div className="hero-corner tl" ref={(el) => addCornerRef(el, 0)}>
					<span className="dash" />
					<span>Portfolio &middot; MMXXVI</span>
				</div>
				<div className="hero-corner tr" ref={(el) => addCornerRef(el, 1)}>
					<span>Reims, France &middot; 49.2° N</span>
					<span className="dash" />
				</div>

				<div className="hero-stage" ref={stageRef}>
					<h1 className="hero-word" ref={wordRef}>Jules Bourin</h1>
					<div className="hero-pills">
						<a href="#about" className="hero-pill">2026 &middot; Portfolio</a>
						<a href="#contact" className="hero-pill accent">Développeur Web → IoT</a>
					</div>
				</div>

				<div className="hero-corner bl" ref={(el) => addCornerRef(el, 2)}>
					<span className="led" />
					<span>Disponible — alternance 2026</span>
				</div>
				<div className="hero-corner br" ref={(el) => addCornerRef(el, 3)}>
					<span>N° 001 / Page unique</span>
				</div>

				<div className="hero-scroll-cue" ref={cueRef}>
					<span>Faites défiler</span>
					<span className="line" />
				</div>
			</section>
		</div>
	);
}
