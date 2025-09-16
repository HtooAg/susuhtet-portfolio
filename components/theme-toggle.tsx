"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<Button
				variant="ghost"
				size="sm"
				className="w-10 h-10 p-0 rounded-lg hover:bg-primary/10 transition-all duration-150"
			>
				<Sun className="h-5 w-5" />
				<span className="sr-only">Toggle theme</span>
			</Button>
		);
	}

	return (
		<Button
			variant="ghost"
			size="sm"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			className="w-10 h-10 p-0 rounded-lg hover:bg-primary/10 transition-all duration-150 relative overflow-hidden"
		>
			<AnimatePresence mode="wait" initial={false}>
				{theme === "light" ? (
					<motion.div
						key="sun"
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 20, opacity: 0 }}
						transition={{ duration: 0.2 }}
					>
						<Sun className="h-5 w-5 text-foreground" />
					</motion.div>
				) : (
					<motion.div
						key="moon"
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 20, opacity: 0 }}
						transition={{ duration: 0.2 }}
					>
						<Moon className="h-5 w-5 text-foreground" />
					</motion.div>
				)}
			</AnimatePresence>
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
