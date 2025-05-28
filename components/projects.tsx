import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";

export function Projects() {
	const projects = [
		{
			title: "MkBikes - Site vitrine",
			description:
				"Site vitrine pour un réparateur de vélos, avec un formulaire de contact et un système de gestion de contenus.",
			image: "/webSiteMkbikes.png?height=200&width=400",
			technologies: [
				"Laravel",
				"React",
				"TypeScript",
				"Tailwind CSS",
				"SASS",
			],
			liveUrl: "https://mkbikes.fr",
			githubUrl: "https://github.com/NotUndefind/laravelMkbikes",
			featured: true,
			stars: 0,
		},
		{
			title: "Bénédicte Manin - Site vitrine",
			description:
				"Site vitrine pour une naturopathe. Réalisé en autonomie avec Figma, React, Tailwind CSS.",
			image: "/webSiteNaturo.png?height=200&width=400",
			technologies: ["React", "Static Site Generator", "Tailwind CSS"],
			liveUrl: "https://benedictemanin-naturopathe.fr",
			githubUrl: "https://github.com/NotUndefind/Naturopathe",
			featured: true,
			stars: 0,
		},
		{
			title: "Markdown Preview",
			description:
				"Un projet de prévisualisation de Markdown. Réalisé avec Next.js dans le but de découvrir le framework, dans un projet simple.",
			image: "/webSiteMarkdownPreview.png?height=200&width=400",
			technologies: ["Next.js", "Tailwind CSS"],
			liveUrl: "https://markdown-preview-red.vercel.app/",
			githubUrl: "https://github.com/NotUndefind/markdownPreview",
			featured: false,
			stars: 0,
		},
		{
			title: "Calculatrice",
			description:
				"Une calculatrice simple et responsive construit avec les dernières technologies web comme React, Tailwind CSS, TypeScript et Vite.",
			image: "/webSiteCalculatrice.png?height=200&width=400",
			technologies: ["React", "Tailwind CSS", "TypeScript", "Vite"],
			liveUrl: "https://calculator-zeta-nine-19.vercel.app/",
			githubUrl: "https://github.com/NotUndefind/calculator",
			featured: false,
			stars: 0,
		},
	];

	return (
		<section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
					Projets Sélectionnés
				</h2>
				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Découvrez quelques-uns de mes projets récents qui démontrent
					mes compétences et ma passion pour le développement web.
				</p>

				<div className="grid md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<Card
							key={index}
							className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
						>
							<div className="relative h-48 overflow-hidden">
								<Image
									src={project.image || "/placeholder.svg"}
									alt={project.title}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-300 object-top"
								/>
								{project.featured && (
									<Badge className="absolute top-3 left-3 bg-primary">
										Projet Phare
									</Badge>
								)}
							</div>
							<CardHeader>
								<div className="flex justify-between items-start">
									<CardTitle className="group-hover:text-primary transition-colors">
										{project.title}
									</CardTitle>
									<div className="flex items-center gap-1 text-sm text-muted-foreground">
										<Star className="h-4 w-4" />
										{project.stars}
									</div>
								</div>
								<CardDescription>
									{project.description}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.map(
										(tech, techIndex) => (
											<Badge
												key={techIndex}
												variant="outline"
												className="text-xs"
											>
												{tech}
											</Badge>
										)
									)}
								</div>
								<div className="flex gap-2">
									<Button
										size="sm"
										asChild
										className="flex-1"
									>
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											<ExternalLink className="h-4 w-4 mr-2" />
											Demo Live
										</a>
									</Button>
									<Button
										variant="outline"
										size="sm"
										asChild
										className="flex-1"
									>
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Github className="h-4 w-4 mr-2" />
											Code
										</a>
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
