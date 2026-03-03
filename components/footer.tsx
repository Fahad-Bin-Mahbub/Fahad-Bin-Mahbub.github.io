import Link from "next/link";
import { person } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
		<footer className="relative z-10 mt-24 border-t border-border/50 bg-background/50 backdrop-blur-sm">
			<div className="container py-12">
				<div className="flex flex-col items-center justify-center gap-6 text-center">
					<div>
						<div className="font-semibold text-foreground">
							© {year} {person.name}
						</div>
						<div className="mt-1 text-sm text-muted-foreground">
							All rights reserved.
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
