export function Disclaimer() {
	return (
		<section className="disclaimer">
			<div className="wrap">
				<div className="disclaimer-card reveal">
					<div className="disclaimer-accent" />
					<div className="disclaimer-content">
						<div className="disclaimer-badge">
							<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
								<path d="M12 9v4" /><circle cx="12" cy="16" r="0.5" fill="currentColor" stroke="none" /><path d="M12 3L2 20h20L12 3z" />
							</svg>
							<span>Note de l&apos;auteur</span>
						</div>
						<p className="disclaimer-text">
							Ce portfolio ne reflète pas le travail que j&apos;entreprends au quotidien. Je l&apos;ai réalisé par <em>curiosité</em>, pour essayer quelque chose de nouveau et me challenger. Prenez-le comme une <em>expérience créative</em> plutôt qu&apos;un reflet fidèle de mes compétences professionnelles.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
