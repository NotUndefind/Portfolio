import type React from "react";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Jules Bourin — Développeur Web & IoT",
	description:
		"Portfolio de Jules Bourin, développeur web en transition vers l'IoT et la domotique. Disponible pour une alternance en 2026.",
	keywords: ["développeur web", "IoT", "domotique", "alternance", "Next.js", "ESP32", "Reims"],
	authors: [{ name: "Jules Bourin" }],
	creator: "Jules Bourin",
	icons: {
		icon: "/favicon.svg",
	},
	openGraph: {
		type: "website",
		locale: "fr_FR",
		url: "https://julesbourin.com",
		title: "Jules Bourin — Développeur Web & IoT",
		description:
			"Développeur web en transition vers l'IoT et la domotique. Disponible pour une alternance en 2026.",
		siteName: "Jules Bourin",
	},
	twitter: {
		card: "summary_large_image",
		title: "Jules Bourin — Développeur Web & IoT",
		description:
			"Développeur web en transition vers l'IoT et la domotique. Disponible pour une alternance en 2026.",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Imperial+Script&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
			</head>
			<body>{children}</body>
		</html>
	);
}
