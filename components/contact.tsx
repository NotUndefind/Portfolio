"use client";

import type React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			await emailjs.send(
				"service_l9d9uzb", // Remplacez par votre Service ID
				"template_47ikpaq", // Remplacez par votre Template ID
				{
					name: formData.name,
					email: formData.email,
					title: formData.subject,
				},
				"Mt7fnUzLnrJ2ByHDy" // Remplacez par votre Public Key
			);

			toast.success("Message envoyé avec succès !");
			setFormData({ name: "", email: "", subject: "", message: "" });
		} catch (error) {
			console.error("Erreur lors de l'envoi:", error);
			toast.error("Une erreur est survenue lors de l'envoi du message.");
		} finally {
			setIsLoading(false);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<section
			id="contact"
			className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
		>
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
					Restons en Contact
				</h2>
				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Vous avez un projet en tête ? Une question ? Ou simplement
					envie de discuter ? N&apos;hésitez pas à me contacter !
				</p>

				<div className="grid lg:grid-cols-2 gap-12">
					<div className="space-y-8">
						<div>
							<h3 className="text-2xl font-semibold mb-6">
								Travaillons ensemble
							</h3>
							<p className="text-muted-foreground mb-8 leading-relaxed">
								Je suis toujours intéressé par de nouvelles
								opportunités et des projets passionnants. Que
								vous ayez une question ou que vous souhaitiez
								simplement dire bonjour, n&apos;hésitez pas à me
								contacter !
							</p>
						</div>

						<div className="space-y-6">
							<div className="flex items-center space-x-4 p-4 bg-background rounded-lg border">
								<div className="flex-shrink-0">
									<Mail className="h-6 w-6 text-primary" />
								</div>
								<div>
									<div className="font-medium">Email</div>
									<div className="text-muted-foreground">
										<a href="mailto:julesbourin@gmail.com">
											julesbourin@gmail.com
										</a>
									</div>
								</div>
							</div>

							<div className="flex items-center space-x-4 p-4 bg-background rounded-lg border">
								<div className="flex-shrink-0">
									<Phone className="h-6 w-6 text-primary" />
								</div>
								<div>
									<div className="font-medium">Téléphone</div>
									<div className="text-muted-foreground">
										<a href="tel:+33784712761">
											+33 7 84 71 27 61
										</a>
									</div>
								</div>
							</div>

							<div className="flex items-center space-x-4 p-4 bg-background rounded-lg border">
								<div className="flex-shrink-0">
									<MapPin className="h-6 w-6 text-primary" />
								</div>
								<div>
									<div className="font-medium">
										Localisation
									</div>
									<div className="text-muted-foreground">
										Reims, France
									</div>
								</div>
							</div>
						</div>
					</div>

					<Card className="shadow-lg">
						<CardHeader>
							<CardTitle>Envoyez-moi un message</CardTitle>
							<CardDescription>
								Remplissez le formulaire ci-dessous et je vous
								répondrai dans les plus brefs délais.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className="space-y-4">
								<div className="grid grid-cols-2 gap-4">
									<div>
										<Input
											name="name"
											placeholder="Votre nom"
											value={formData.name}
											onChange={handleChange}
											required
											disabled={isLoading}
										/>
									</div>
									<div>
										<Input
											name="email"
											type="email"
											placeholder="Votre email"
											value={formData.email}
											onChange={handleChange}
											required
											disabled={isLoading}
										/>
									</div>
								</div>
								<div>
									<Input
										name="subject"
										placeholder="Sujet"
										value={formData.subject}
										onChange={handleChange}
										required
										disabled={isLoading}
									/>
								</div>
								<div>
									<Textarea
										name="message"
										placeholder="Votre message"
										rows={5}
										value={formData.message}
										onChange={handleChange}
										required
										disabled={isLoading}
									/>
								</div>
								<Button
									type="submit"
									className="w-full group"
									disabled={isLoading}
								>
									<Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
									{isLoading
										? "Envoi en cours..."
										: "Envoyer le message"}
								</Button>
							</form>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
