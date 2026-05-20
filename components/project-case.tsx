export function ProjectCase() {
	return (
		<section id="project" className="section project">
			<span className="section-aura cr lg deep" />
			<span className="section-aura tl pale" />
			<span className="section-aura cb xl warm" />
			<span className="section-aura midL sm" />

			<div className="section-deco" aria-hidden="true">
				<div className="deco-grid fine" style={{ top: 0, bottom: 0, left: 0, right: 0 }} />
				<div className="deco-numeral" style={{ top: "90px", left: "-3vw" }}>02</div>
				<div className="deco-watermark solid" style={{ bottom: "120px", right: "-4vw", fontSize: "clamp(240px,28vw,420px)" }}>étude</div>
				<div className="deco-edge" style={{ top: "240px", right: "18px" }}>Étude&nbsp;de&nbsp;cas · F.02</div>
				<div className="deco-cross" style={{ top: "160px", left: "48px" }} />
				<div className="deco-cross" style={{ top: "160px", right: "48px" }} />
				<div className="deco-cross" style={{ bottom: "160px", left: "48px" }} />
				<div className="deco-cross" style={{ bottom: "160px", right: "48px" }} />
				<div className="deco-rule" style={{ top: "50%", left: 0, width: "64px" }} />
				<div className="deco-rule" style={{ top: "50%", right: 0, width: "64px" }} />
				<div className="deco-rule-label" style={{ top: "calc(50% - 22px)", left: "18px" }}>+&nbsp;01</div>
				<div className="deco-rule-label" style={{ top: "calc(50% - 22px)", right: "18px" }}>+&nbsp;02</div>
				<div className="deco-stripes" style={{ top: "130px", left: 0, right: "55%" }} />
				<div className="deco-stripes" style={{ bottom: "130px", right: 0, left: "55%" }} />
			</div>

			<div className="wrap">
				<header className="section-head">
					<span className="index reveal">03 — Projet en vedette</span>
					<h2 className="reveal d1">étude <span className="em">de cas</span></h2>
				</header>

				<div className="project-intro">
					<span className="project-tag reveal">Projet personnel · 2025–2026</span>
					<h3 className="reveal d1"><span className="scr">La </span>chambre <br />connectée<span style={{ color: "var(--accent-deep)" }}>.</span></h3>
					<p className="reveal d2">
						Un projet personnel pour transformer ma chambre en espace intelligent. Lampes automatisées, ruban LED ambiant, caméra avec détection, tout piloté depuis mon téléphone ou automatiquement.
					</p>
					<p className="reveal d3">
						Je gère tout moi-même — du câblage des relais à la configuration du serveur cloud. Un projet vivant, en constante évolution.
					</p>
				</div>

				<div className="project-meta">
					<div className="cell reveal"><div className="k">Année</div><div className="v"><span className="num">2025 — 2026</span></div></div>
					<div className="cell reveal d1"><div className="k">Rôle</div><div className="v">Conception · Installation · Dev</div></div>
					<div className="cell reveal d2"><div className="k">Stack</div><div className="v"><span className="pill">ESP32</span><span className="pill">Tasmota</span><span className="pill">MQTT</span><span className="pill">WLED</span><span className="pill">Frigate</span></div></div>
					<div className="cell reveal d3"><div className="k">Statut</div><div className="v">En cours · Phase 1 active</div></div>
				</div>

				<div className="project-visual reveal d2">
					<div className="placeholder">
						<div className="icon">
							<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4">
								<rect x="3" y="5" width="18" height="13" rx="2" /><path d="M3 14h18M8 20h8" />
							</svg>
						</div>
						<code>chambre-connectee-hero.png</code>
						<span>Capteur · Application · Écran d&apos;ambiance</span>
					</div>
				</div>

				<div className="feature-row">
					<ul className="feature-list">
						<li className="reveal"><span className="n">01</span><div><h4>Lampes automatisées</h4><p>Deux lampes de bureau pilotées via une carte ESP32 + 4 relais avec le firmware Tasmota. Communication en MQTT via Mosquitto. S&apos;allument et s&apos;éteignent automatiquement.</p></div></li>
						<li className="reveal d1"><span className="n">02</span><div><h4>Ruban LED</h4><p>Ruban LED piloté avec WLED pour créer des ambiances lumineuses personnalisables depuis l&apos;application.</p></div></li>
						<li className="reveal d2"><span className="n">03</span><div><h4>Caméra intelligente</h4><p>Caméra connectée avec Frigate pour la détection d&apos;objets par IA, tournant sur mon homelab.</p></div></li>
						<li className="reveal d3"><span className="n">04</span><div><h4>Homelab &amp; monitoring</h4><p>Infrastructure cloud sur Oracle Cloud Free Tier avec Grafana (monitoring), Traefik (reverse proxy), Uptime Kuma (disponibilité) et OpenClaw (IA locale).</p></div></li>
					</ul>

					<div className="pullquote reveal d2">
						<div className="mark">«</div>
						<p>On fait, on apprend, on perfectionne.</p>
						<div className="who">— Jules Bourin</div>
					</div>
				</div>
			</div>
		</section>
	);
}
