import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Portfolio() {
	return (
		<SidebarInset>
			<div className="min-h-screen bg-background relative overflow-hidden">
				{/* Texture d'arrière-plan */}
				<div className="fixed inset-0 pointer-events-none select-none overflow-hidden">
					<div className="absolute top-32 left-80 text-[8rem] font-black text-muted-foreground/5 leading-none">
						<div className="flex flex-col">
							<div>WORK</div>
							<div>IN</div>
							<div>PROGRESS</div>
						</div>
					</div>
				</div>

				{/* Trigger pour mobile */}
				<div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-2 border-b bg-background/80 backdrop-blur-md px-4 md:hidden">
					<SidebarTrigger className="-ml-1" />
					<div className="text-lg font-semibold">Alex Johnson</div>
				</div>

				{/* Contenu principal */}
				<div className="relative z-10">
					<Hero />
					<About />
					<Skills />
					<Projects />
					<Contact />
				</div>
			</div>
		</SidebarInset>
	);
}
