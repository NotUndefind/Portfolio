import { Card, CardContent } from "@/components/ui/card";
import { Code, Coffee, Lightbulb, Users, Zap, Heart } from "lucide-react";

export function About() {
	const values = [
		{
			icon: Code,
			title: "Code Propre",
			description: "Écriture de code maintenable et évolutif",
		},
		{
			icon: Lightbulb,
			title: "Innovation",
			description: "Toujours à l'affût des nouvelles technologies",
		},
		{
			icon: Users,
			title: "Collaboration",
			description: "Travail efficace en équipe",
		},
		{
			icon: Coffee,
			title: "Persévérance",
			description: "Déterminé à surmonter les défis",
		},
		{
			icon: Zap,
			title: "Performance",
			description: "Optimisation et rapidité",
		},
		{
			icon: Heart,
			title: "Passion",
			description: "Amoureux du code et du développement",
		},
	];

	return (
		<section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
					À Propos de Moi
				</h2>

				<div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
					<div className="space-y-6">
						<p className="text-lg text-muted-foreground leading-relaxed">
							Développeur web junior passionné par la technologie
							et l&apos;innovation. Diplômé récemment, je me
							spécialise dans le développement frontend et backend
							avec un fort intérêt pour les technologies modernes.
						</p>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Quand je ne code pas, vous me trouverez en train
							d&apos;explorer de nouvelles technologies, de
							contribuer à des projets open-source, ou de savourer
							un bon café tout en réfléchissant à la prochaine
							grande idée.
						</p>
						<div className="grid grid-cols-2 gap-6 pt-4">
							<div className="text-center p-4 bg-muted/50 rounded-lg">
								<div className="text-3xl font-bold text-primary">
									7+
								</div>
								<div className="text-sm text-muted-foreground">
									Projets Réalisés
								</div>
							</div>
							<div className="text-center p-4 bg-muted/50 rounded-lg">
								<div className="text-3xl font-bold text-primary">
									1+
								</div>
								<div className="text-sm text-muted-foreground">
									Années d&apos;Expérience
								</div>
							</div>
						</div>
					</div>

					<div className="relative">
						<div className="grid grid-cols-2 gap-4">
							{values.map((value, index) => (
								<Card
									key={index}
									className="hover:shadow-lg transition-shadow duration-300"
								>
									<CardContent className="p-6 text-center">
										<value.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
										<h3 className="font-semibold mb-2">
											{value.title}
										</h3>
										<p className="text-sm text-muted-foreground">
											{value.description}
										</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
