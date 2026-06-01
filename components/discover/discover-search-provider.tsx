"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface DiscoverSearchContextType {
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
}

const DiscoverSearchContext = createContext<DiscoverSearchContextType | undefined>(undefined);

import { usePathname } from "next/navigation";

export function DiscoverSearchProvider({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				if (!pathname.startsWith("/discover")) return;
				e.preventDefault();
				setIsOpen((open) => !open);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	return (
		<DiscoverSearchContext.Provider value={{ isOpen, setIsOpen }}>
			{children}
		</DiscoverSearchContext.Provider>
	);
}

export function useDiscoverSearch() {
	const context = useContext(DiscoverSearchContext);
	if (!context) {
		throw new Error("useDiscoverSearch must be used within a DiscoverSearchProvider");
	}
	return context;
}
