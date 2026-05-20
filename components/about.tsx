import Image from "next/image";

export function About() {
	return (
		<section id="about" className="section about">
			<span className="section-aura tl lg" />
			<span className="section-aura cr pale" />
			<span className="section-aura bl sm deep" />
			<span className="section-aura midR warm" />

			<div className="section-deco" aria-hidden="true">
				<div className="deco-grid" style={{ top: "120px", bottom: "120px", left: 0, right: 0 }} />
				<div className="deco-watermark" style={{ top: "140px", right: "-2vw", fontSize: "clamp(260px,32vw,500px)" }}>01</div>
				<div className="deco-edge" style={{ top: "200px", left: "18px" }}>À&nbsp;PROPOS · HETIC</div>
				<div className="deco-cross" style={{ top: "180px", left: "48px" }} />
				<div className="deco-cross" style={{ top: "180px", right: "48px" }} />
				<div className="deco-cross" style={{ bottom: "180px", left: "48px" }} />
				<div className="deco-cross" style={{ bottom: "180px", right: "48px" }} />
				<div className="deco-rule" style={{ top: "182px", left: "78px", width: "80px" }} />
				<div className="deco-rule" style={{ top: "182px", right: "78px", width: "80px" }} />
				<div className="deco-rule-label" style={{ top: "170px", left: "78px" }}>A&nbsp;·&nbsp;01</div>
				<div className="deco-rule-label" style={{ top: "170px", right: "78px" }}>49.2°&nbsp;N</div>
				<div className="deco-arc dashed" style={{ bottom: "-200px", left: "50%", width: "520px", height: "520px", transform: "translateX(-50%)" }} />
			</div>

			<div className="wrap">
				<header className="section-head">
					<span className="index reveal">01 — À propos</span>
					<h2 className="reveal d1">à <span className="em">propos</span></h2>
				</header>

				<div className="about-grid">
					<div className="about-text">
						<p className="reveal d1">
							Je m&apos;appelle Jules, j&apos;ai 22 ans et je suis étudiant à <span className="accent-word">HETIC</span> Paris. C&apos;est au lycée, grâce à des profs passionnés, que j&apos;ai découvert la domotique et l&apos;automatisation — l&apos;idée de faire communiquer des objets du quotidien, de rendre un espace intelligent.
						</p>
						<p className="reveal d2">
							J&apos;ai fait un détour par le développement web, et aujourd&apos;hui je reviens à ce qui m&apos;a toujours attiré. En ce moment je construis ma chambre connectée — éclairage automatique, caméra, tout piloté à distance.
						</p>
						<p className="reveal d3">
							On fait, on apprend, on perfectionne. Vous pouvez suivre l&apos;aventure sur Instagram{" "}
							<a href="https://instagram.com/bourin.iot" className="accent-word" target="_blank" rel="noopener noreferrer">@bourin.iot</a>
						</p>
						<div className="signature reveal d4">— Jules</div>
					</div>

					<aside className="about-photo reveal d2">
						<div className="photo-frame">
							<Image
								src="/About.jpeg"
								alt="Jules Bourin"
								fill
								className="object-cover object-top"
								sizes="(max-width: 768px) 100vw, 40vw"
								priority
							/>
						</div>
						<div className="photo-caption">
							<span>F.01 — Reims, 2026</span>
							<span>Portrait</span>
						</div>
					</aside>
				</div>

				<div className="about-stats">
					<div className="stat reveal d1"><div className="v"><span className="num">2+</span></div><div className="k">Années de code</div></div>
					<div className="stat reveal d2"><div className="v"><span className="num">1</span></div><div className="k">Projet IoT en cours</div></div>
					<div className="stat reveal d3"><div className="v"><span className="ss">∞</span></div><div className="k">Curiosité</div></div>
				</div>
			</div>
		</section>
	);
}
