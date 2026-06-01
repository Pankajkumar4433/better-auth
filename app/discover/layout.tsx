import type { ReactNode } from "react";
import { Suspense } from "react";
import { DiscoverSidebar } from "@/components/docs/discover-sidebar";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="flex min-h-screen">
			<Suspense>
				<DiscoverSidebar />
			</Suspense>
			<main className="flex-1 flex flex-col min-w-0 discover-layout">
				{children}
			</main>
		</div>
	);
}

