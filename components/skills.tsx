function Dots({ on }: { on: number }) {
	return (
		<span className="lvl">
			{Array.from({ length: 5 }, (_, i) => (
				<span key={i} className={`b${i < on ? " on" : ""}`} />
			))}
		</span>
	);
}

export function Skills() {
	return (
		<section id="skills" className="section skills">
			<span className="section-aura br lg" />
			<span className="section-aura tl sm deep" />
			<span className="section-aura cl pale" />
			<span className="section-aura ct cool" />

			<div className="section-deco" aria-hidden="true">
				<div className="deco-grid dots" style={{ top: "160px", bottom: "160px", left: 0, right: 0 }} />
				<div className="deco-watermark" style={{ top: "120px", right: "-1vw", fontSize: "clamp(260px,32vw,500px)" }}>savoir</div>
				<div className="deco-edge" style={{ top: "220px", left: "18px" }}>Boîte&nbsp;à&nbsp;outils · 03</div>
				<div className="deco-cross" style={{ top: "160px", left: "48px" }} />
				<div className="deco-cross" style={{ top: "160px", right: "48px" }} />
				<div className="deco-cross" style={{ bottom: "160px", left: "48px" }} />
				<div className="deco-cross" style={{ bottom: "160px", right: "48px" }} />
				<div className="deco-arc" style={{ top: "60%", left: "-280px", width: "560px", height: "560px" }} />
				<div className="deco-arc dashed" style={{ top: "60%", left: "-360px", width: "720px", height: "720px" }} />
				<div className="deco-rule-label" style={{ top: "170px", right: "78px" }}>III · MMXXVI</div>
				<div className="deco-rule" style={{ top: "182px", right: "200px", width: "80px" }} />
			</div>

			<div className="wrap">
				<header className="section-head">
					<span className="index reveal">04 — Boîte à outils</span>
					<h2 className="reveal d1">savoir <span className="em">faire</span></h2>
				</header>

				<div className="skills-grid">
					<div className="skill-col reveal">
						<h3>Web</h3>
						<ul className="skill-list">
							<li>TypeScript <Dots on={5} /></li>
							<li>React <Dots on={4} /></li>
							<li>Tailwind CSS <Dots on={5} /></li>
							<li>Next.js <Dots on={4} /></li>
							<li>Laravel / PHP <Dots on={4} /></li>
							<li>Git &amp; Docker <Dots on={4} /></li>
						</ul>
					</div>
					<div className="skill-col reveal d1">
						<h3>IoT &amp; Infra</h3>
						<ul className="skill-list">
							<li>ESP32 / Tasmota <Dots on={3} /></li>
							<li>MQTT / Mosquitto <Dots on={3} /></li>
							<li>WLED <Dots on={3} /></li>
							<li>Frigate <Dots on={2} /></li>
							<li>Grafana / Traefik <Dots on={2} /></li>
							<li>Linux / Self-hosting <Dots on={3} /></li>
						</ul>
					</div>
					<div className="skill-col reveal d2">
						<h3>atelier</h3>
						<ul className="skill-list">
							<li>Fusion 360 <Dots on={4} /></li>
							<li>Impression 3D <Dots on={4} /></li>
							<li>Électronique &amp; Arduino <Dots on={3} /></li>
						</ul>
					</div>
				</div>

				<div className="skills-tail">
					<div className="langs reveal">
						<h4>Langues</h4>
						<div className="row"><span className="name">Français</span><span className="lev">Maternelle</span></div>
						<div className="row"><span className="name">Anglais</span><span className="lev">C1 · Professionnel</span></div>
						</div>
					<div className="skills-quote reveal d1">
						<div className="scr">Du web à <span className="em">l&apos;IoT</span></div>
						<p>— On fait, on apprend, on perfectionne.</p>
					</div>
				</div>
			</div>
		</section>
	);
}
