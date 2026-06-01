"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { DiscoverSearchProvider } from "@/components/discover/discover-search-provider";
import { DiscoverSearchDialog } from "@/components/discover/discover-search-dialog";

export function Providers({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			enableSystem={true}
			disableTransitionOnChange
		>
			<DiscoverSearchProvider>
				{children}
				<DiscoverSearchDialog />
			</DiscoverSearchProvider>
			<Toaster />
		</ThemeProvider>
	);
}
