"use client";

import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
		>
			<div className="max-w-4xl mx-auto text-center relative">
				<div className="mb-8">
					<h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
						Salut, je suis{" "}
						<span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
							Jules Bourin
						</span>
					</h1>
					<p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
						Développeur Full Stack Junior passionné, en constante
						évolution et déterminé à créer des expériences
						numériques modernes et impactantes.
					</p>
				</div>

				<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
					<Button
						size="lg"
						onClick={() => scrollToSection("projects")}
						className="group cursor-pointer"
					>
						Voir mes projets
						<ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
					</Button>
					<Button
						variant="outline"
						size="lg"
						className="group"
						asChild
					>
						<a
							href="/CVJulesBourin.pdf"
							download="CVJulesBourin.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
							Télécharger CV
						</a>
					</Button>
				</div>

				<div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
					<div className="text-center">
						<div className="text-2xl font-bold text-primary">
							1+
						</div>
						<div className="text-sm text-muted-foreground">
							Années
						</div>
					</div>
					<div className="text-center">
						<div className="text-2xl font-bold text-primary">
							7+
						</div>
						<div className="text-sm text-muted-foreground">
							Projets
						</div>
					</div>
					<div className="text-center">
						<div className="text-2xl font-bold text-primary">
							100%
						</div>
						<div className="text-sm text-muted-foreground">
							Passion
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
