function ArrowIcon() {
	return (
		<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
			<path d="M2 10 L10 2 M4 2 H10 V8" />
		</svg>
	);
}

export function Contact() {
	return (
		<section id="contact" className="section contact">
			<span className="section-aura cr lg pale" />
			<span className="section-aura cl lg warm" />
			<span className="section-aura ct xl deep" />
			<span className="section-aura cb sm cool" />
			<span className="section-aura mid pale" />

			<div className="section-deco" aria-hidden="true">
				<div className="deco-grid" style={{ top: "140px", bottom: "140px", left: 0, right: 0 }} />
				<div className="deco-watermark solid" style={{ top: "50%", left: "50%", transform: "translate(-50%,-58%)", fontSize: "clamp(360px,46vw,720px)" }}>&amp;</div>
				<div className="deco-arc" style={{ top: "50%", left: "50%", width: "640px", height: "640px", transform: "translate(-50%,-50%)" }} />
				<div className="deco-arc dashed" style={{ top: "50%", left: "50%", width: "880px", height: "880px", transform: "translate(-50%,-50%)" }} />
				<div className="deco-edge" style={{ top: "240px", left: "18px" }}>Coordonnées · 04</div>
				<div className="deco-edge" style={{ bottom: "240px", right: "18px", transform: "rotate(0deg)" }}>Reims&nbsp;·&nbsp;FR&nbsp;·&nbsp;CET</div>
				<div className="deco-cross" style={{ top: "160px", left: "48px" }} />
				<div className="deco-cross" style={{ top: "160px", right: "48px" }} />
				<div className="deco-cross" style={{ bottom: "160px", left: "48px" }} />
				<div className="deco-cross" style={{ bottom: "160px", right: "48px" }} />
				<div className="deco-rule-label" style={{ top: "170px", left: "50%", transform: "translateX(-50%)" }}>— fin de page —</div>
				<div className="deco-rule" style={{ top: "182px", left: "calc(50% - 130px)", width: "60px" }} />
				<div className="deco-rule" style={{ top: "182px", left: "calc(50% + 70px)", width: "60px" }} />
			</div>

			<div className="wrap">
				<header className="section-head">
					<span className="index reveal">05 — Prenons contact</span>
					<h2 className="reveal d1">on en <span className="em">parle ?</span></h2>
					<p className="sub reveal d2">Disponible pour une alternance dans l&apos;IoT et la domotique à partir de 2026. Mission, projet, ou juste un café — j&apos;écris en général dans la journée.</p>
				</header>

				<div className="contact-actions">
					<a className="contact-btn reveal d1" href="mailto:julesbourin@gmail.com">
						<span className="label"><small>écrire</small><span className="what">julesbourin@gmail.com</span></span>
						<span className="arrow"><ArrowIcon /></span>
					</a>
					<a className="contact-btn reveal d2" href="https://github.com/NotUndefind" target="_blank" rel="noopener noreferrer">
						<span className="label"><small>code</small><span className="what">GitHub / NotUndefind</span></span>
						<span className="arrow"><ArrowIcon /></span>
					</a>
					<a className="contact-btn reveal d3" href="https://instagram.com/bourin.iot" target="_blank" rel="noopener noreferrer">
						<span className="label"><small>suivre</small><span className="what">Instagram / @bourin.iot</span></span>
						<span className="arrow"><ArrowIcon /></span>
					</a>
					<a className="contact-btn reveal d4" href="/JulesBourinCV.pdf" target="_blank" rel="noopener noreferrer">
						<span className="label"><small>télécharger</small><span className="what">Mon CV</span></span>
						<span className="arrow"><ArrowIcon /></span>
					</a>
				</div>

				<footer className="footer">
					<div className="available"><span className="led" /> Disponible — alternance 2026</div>
					<div>© Jules Bourin · Reims</div>
					<div>v.001 — MMXXVI</div>
				</footer>
			</div>
		</section>
	);
}
