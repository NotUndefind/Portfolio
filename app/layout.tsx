import type React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Jules Bourin - Développeur Full Stack",
	description:
		"Portfolio de Jules Bourin, développeur Full Stack Junior passionné par la création d'expériences numériques modernes.",
	keywords: ["développeur", "full stack", "react", "next.js", "portfolio"],
	authors: [{ name: "Jules Bourin" }],
	creator: "Jules Bourin",
	openGraph: {
		type: "website",
		locale: "fr_FR",
		url: "https://julesbourin.com",
		title: "Jules Bourin - Développeur Full Stack",
		description:
			"Portfolio de Jules Bourin, développeur Full Stack Junior passionné par la création d'expériences numériques modernes.",
		siteName: "Portfolio de Jules Bourin",
	},
	twitter: {
		card: "summary_large_image",
		title: "Jules Bourin - Développeur Full Stack",
		description:
			"Portfolio de Jules Bourin, développeur Full Stack Junior passionné par la création d'expériences numériques modernes.",
		creator: "@julesbourin",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr" suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<SidebarProvider>
						<AppSidebar />
						<main className="flex-1">{children}</main>
						<Toaster richColors position="top-center" />
					</SidebarProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
