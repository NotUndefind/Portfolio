"use client";

import {
	Home,
	User,
	Code,
	Briefcase,
	Mail,
	Github,
	Linkedin,
	X,
} from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

import { ThemeToggle } from "@/components/theme-toggle";

const menuItems = [
	{
		title: "Accueil",
		icon: Home,
		id: "home",
	},
	{
		title: "À propos",
		icon: User,
		id: "about",
	},
	{
		title: "Compétences",
		icon: Code,
		id: "skills",
	},
	{
		title: "Projets",
		icon: Briefcase,
		id: "projects",
	},
	{
		title: "Contact",
		icon: Mail,
		id: "contact",
	},
];

const socialLinks = [
	{ icon: Github, href: "https://github.com/notundefind", label: "GitHub" },
	{
		icon: Linkedin,
		href: "https://www.linkedin.com/in/julesbourin/",
		label: "LinkedIn",
	},
	{ icon: X, href: "https://x.com/JulesBrndev", label: "X" },
];

export function AppSidebar() {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<Sidebar collapsible="icon">
			<SidebarHeader className="border-b border-sidebar-border">
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-semibold">Menu</h2>
					<ThemeToggle />
				</div>
			</SidebarHeader>

			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{menuItems.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton
										onClick={() => scrollToSection(item.id)}
										tooltip={item.title}
										className="w-full"
									>
										<item.icon className="h-4 w-4" />
										<span>{item.title}</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter className="border-t border-sidebar-border">
				<div className="p-3">
					<div className="flex gap-2 group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:items-center">
						{socialLinks.map((social) => (
							<Button
								key={social.label}
								variant="ghost"
								size="icon"
								className="h-8 w-8"
								asChild
							>
								<a
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.label}
								>
									<social.icon className="h-4 w-4" />
								</a>
							</Button>
						))}
					</div>
					<div className="mt-3 text-xs text-sidebar-foreground/70 group-data-[collapsible=icon]:hidden">
						© 2024 Jules Bourin
					</div>
				</div>
			</SidebarFooter>

			<SidebarRail />
		</Sidebar>
	);
}
