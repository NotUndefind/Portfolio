import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function Skills() {
	const skillCategories = [
		{
			title: "Frontend",
			skills: [
				{ name: "TypeScript", level: 88 },
				{ name: "React", level: 76 },
				{ name: "Tailwind CSS", level: 85 },
				{ name: "Next.js", level: 67 },
				{ name: "Shadcn/UI", level: 82 },
				{ name: "Chakra", level: 58 },
			],
		},
		{
			title: "Backend",
			skills: [
				{ name: "PHP", level: 74 },
				{ name: "Laravel", level: 77 },
				{ name: "Symfony", level: 61 },
				{ name: "Node.js", level: 49 },
				{ name: "Python", level: 30 },
			],
		},
		{
			title: "Outils & Autres",
			skills: [
				{ name: "Git", level: 85 },
				{ name: "Docker", level: 75 },
				{ name: "Vercel", level: 87 },
				{ name: "Figma", level: 85 },
				{ name: "Cursor", level: 82 },
			],
		},
	];

	return (
		<section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
					Compétences & Technologies
				</h2>
				<div className="grid lg:grid-cols-3 gap-8">
					{skillCategories.map((category, index) => (
						<Card
							key={index}
							className="hover:shadow-lg transition-shadow duration-300"
						>
							<CardHeader>
								<CardTitle className="text-center text-xl">
									{category.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								{category.skills.map((skill, skillIndex) => (
									<div key={skillIndex} className="space-y-2">
										<div className="flex justify-between items-center">
											<span className="text-sm font-medium">
												{skill.name}
											</span>
											<span className="text-xs text-muted-foreground">
												{skill.level}%
											</span>
										</div>
										<Progress
											value={skill.level}
											className="h-2"
										/>
									</div>
								))}
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
