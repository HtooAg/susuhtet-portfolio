"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { TranslationToggle } from "@/components/translation-toggle";
import { ManualTranslatedText } from "@/components/manual-translated-text";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const navItems = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Experience", href: "#experience" },
	{ name: "Education", href: "#education" },
	{ name: "Skills", href: "#skills" },
	{ name: "Activities", href: "#activities" },
	{ name: "Posts", href: "#posts" },
	{ name: "Contact", href: "#contact" },
];

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
	const [scrollProgress, setScrollProgress] = useState(0);
	const [mounted, setMounted] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		setMounted(true);

		const handleScroll = () => {
			const scrollPosition = window.scrollY + 100;
			const scrollHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const progress =
				scrollHeight > 0
					? Math.min(window.scrollY / scrollHeight, 1)
					: 0;

			setScrolled(window.scrollY > 50);
			setScrollProgress(progress);

			// Check if we're on specific pages
			if (pathname === "/posts") {
				setActiveSection("posts");
				return;
			}

			if (pathname === "/activities") {
				setActiveSection("activities");
				return;
			}

			// Update active section based on scroll position
			const sections = navItems.map((item) => item.href.substring(1));
			let foundSection = "home"; // default to home

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					const elementTop = rect.top + window.scrollY;
					const elementHeight = rect.height;

					if (
						scrollPosition >= elementTop - 200 &&
						scrollPosition < elementTop + elementHeight - 200
					) {
						foundSection = section;
					}
				}
			}
			setActiveSection(foundSection);
		};

		// Initial call to set correct active section on mount
		handleScroll();

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Prevent body scroll when menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		// Cleanup on unmount
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	// Close drawer when clicking anywhere outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (isOpen) {
				const target = event.target as Element;
				const drawer = document.querySelector("[data-drawer]");
				const menuButton = document.querySelector("[data-menu-button]");

				if (
					drawer &&
					!drawer.contains(target) &&
					menuButton &&
					!menuButton.contains(target)
				) {
					setIsOpen(false);
				}
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	if (!mounted) {
		return null; // Prevent hydration mismatch
	}

	const scrollToSection = (href: string) => {
		// Handle Posts navigation - redirect to posts page if not on home page
		if (href === "#posts") {
			if (pathname !== "/") {
				router.push("/posts");
				return;
			}
		}

		// Handle Activities navigation - redirect to activities page if not on home page
		if (href === "#activities") {
			if (pathname !== "/") {
				router.push("/activities");
				return;
			}
		}

		// Handle other navigation - redirect to home page and scroll to section
		if (href !== "#posts" && href !== "#activities" && pathname !== "/") {
			// Navigate to home page first
			router.push("/");

			// Wait for navigation to complete, then scroll to section
			setTimeout(() => {
				const element = document.querySelector(href);
				if (element) {
					element.scrollIntoView({ behavior: "smooth" });
				}
			}, 100);

			setIsOpen(false);
			return;
		}

		// If already on home page, just scroll to section
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsOpen(false);
	};

	return (
		<>
			{/* Progress Bar */}
			<div className="fixed top-0 left-0 right-0 h-1 bg-muted/20 z-[60]">
				<motion.div
					className="h-full bg-gradient-to-r from-[#b8842a] to-[#c59952] origin-left"
					style={{ scaleX: scrollProgress }}
					transition={{ duration: 0.1 }}
				/>
			</div>

			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
					scrolled
						? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border pt-1"
						: "bg-transparent"
				}`}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center h-16 relative">
						{/* Logo - Left */}
						<motion.div
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.1 }}
							className="flex items-center space-x-2 cursor-pointer"
							onClick={() => scrollToSection("#home")}
						>
							<Image
								src="/images/logo.jpg"
								alt="Su Htet"
								width={40}
								height={40}
								className="rounded-full object-cover object-top"
							/>
							<span className="font-playfair font-bold text-xl text-primary">
								<ManualTranslatedText>
									Su Htet
								</ManualTranslatedText>
							</span>
						</motion.div>

						{/* Desktop Navigation - Centered */}
						<div className="hidden md:flex items-center justify-center flex-1">
							<div className="flex items-center space-x-1">
								{navItems.map((item) => (
									<motion.button
										key={item.name}
										onClick={() =>
											scrollToSection(item.href)
										}
										className={`px-4 py-2 rounded-lg font-medium transition-all duration-100 relative cursor-pointer ${
											activeSection ===
											item.href.substring(1)
												? "text-primary bg-primary/10"
												: "text-foreground hover:text-primary hover:bg-primary/5"
										}`}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										transition={{ duration: 0.1 }}
									>
										<ManualTranslatedText>
											{item.name}
										</ManualTranslatedText>
										{activeSection ===
											item.href.substring(1) && (
											<motion.div
												layoutId="activeSection"
												className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
												initial={false}
												transition={{
													type: "spring",
													stiffness: 380,
													damping: 30,
												}}
											/>
										)}
									</motion.button>
								))}
							</div>
						</div>

						{/* Theme & Language Toggles - Right */}
						<div className="hidden md:flex items-center space-x-2">
							{/* <TranslationToggle /> */}
							<ThemeToggle />
						</div>

						{/* Mobile Menu Button */}
						<div className="md:hidden flex items-center space-x-2 ml-auto">
							{/* <TranslationToggle /> */}
							<ThemeToggle />
							<Button
								variant="ghost"
								size="sm"
								onClick={() => setIsOpen(!isOpen)}
								className="p-2 cursor-pointer"
								data-menu-button
							>
								<motion.div
									animate={{ rotate: isOpen ? 180 : 0 }}
									transition={{ duration: 0.3 }}
								>
									{isOpen ? (
										<X size={24} />
									) : (
										<Menu size={24} />
									)}
								</motion.div>
							</Button>
						</div>
					</div>
				</div>

				{/* Mobile Menu Drawer */}
				<AnimatePresence>
					{isOpen && (
						<>
							{/* Full Screen Backdrop */}
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="fixed inset-0 bg-black/60 md:hidden"
								style={{
									zIndex: 999,
									position: "fixed",
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									width: "100vw",
									height: "100vh",
								}}
								onClick={() => setIsOpen(false)}
							/>

							{/* Drawer */}
							<motion.div
								initial={{ x: "100%" }}
								animate={{ x: 0 }}
								exit={{ x: "100%" }}
								transition={{
									type: "spring",
									damping: 30,
									stiffness: 300,
								}}
								className="fixed top-0 right-0 h-screen w-80 bg-background border-l border-border md:hidden shadow-2xl"
								style={{ zIndex: 1000 }}
								data-drawer
							>
								{/* Header with Logo and Close Button */}
								<div className="p-6 border-b border-border/50 flex items-center justify-between">
									<div className="flex items-center space-x-3">
										<Image
											src="/images/logo.jpg"
											alt="Su Htet"
											width={50}
											height={50}
											className="rounded-full object-cover object-top"
										/>
										<div>
											<span className="font-playfair font-bold text-xl text-primary block">
												<ManualTranslatedText>
													Su Htet
												</ManualTranslatedText>
											</span>
											<span className="text-sm text-muted-foreground">
												<ManualTranslatedText>
													Financial Services
													Consultant
												</ManualTranslatedText>
											</span>
										</div>
									</div>

									{/* Close Button */}
									<Button
										variant="ghost"
										size="sm"
										onClick={() => setIsOpen(false)}
										className="p-2 hover:bg-primary/10 rounded-lg cursor-pointer"
									>
										<X
											size={20}
											className="text-muted-foreground hover:text-foreground"
										/>
									</Button>
								</div>

								{/* Navigation Menu */}
								<div className="p-6">
									<div className="space-y-2">
										{navItems.map((item, index) => (
											<motion.button
												key={item.name}
												onClick={() =>
													scrollToSection(item.href)
												}
												className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-100 cursor-pointer ${
													activeSection ===
													item.href.substring(1)
														? "text-primary bg-primary/10"
														: "text-foreground hover:text-primary hover:bg-primary/5"
												}`}
												initial={{ opacity: 0, x: 20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{
													delay: index * 0.05,
													duration: 0.1,
												}}
												whileHover={{ x: 8 }}
											>
												<ManualTranslatedText>
													{item.name}
												</ManualTranslatedText>
											</motion.button>
										))}
									</div>
								</div>
							</motion.div>
						</>
					)}
				</AnimatePresence>
			</motion.nav>
		</>
	);
}
