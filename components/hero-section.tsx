"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ManualTranslatedText } from "@/components/manual-translated-text";
import { ArrowDown, Mail, MessageCircle, Phone, Linkedin } from "lucide-react";
import Image from "next/image";

// Facebook Icon Component
const FacebookIcon = ({ className }: { className?: string }) => (
	<svg className={className} viewBox="0 0 24 24" fill="currentColor">
		<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
	</svg>
);

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
	<svg className={className} viewBox="0 0 24 24" fill="currentColor">
		<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
	</svg>
);

export function HeroSection() {
	const scrollToAbout = () => {
		document
			.querySelector("#about")
			?.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToContact = () => {
		document
			.querySelector("#contact")
			?.scrollIntoView({ behavior: "smooth" });
	};

	const handleGetStarted = () => {
		console.log("Get Started clicked");
		const message = encodeURIComponent(
			"Hello Su Htet, I'm interested in learning more about your financial services and would like to get started."
		);
		window.open(`https://wa.me/971555238077?text=${message}`, "_blank");
	};

	const handleLinkedIn = () => {
		console.log("LinkedIn clicked");
		window.open("http://linkedin.com/in/su-su-htet-0837b0169", "_blank");
	};

	const handlePhone = () => {
		console.log("Phone clicked");
		window.open("tel:+971555238077", "_blank");
	};

	const handleEmail = () => {
		console.log("Email clicked");
		window.open("mailto:susuhtet24@gmail.com", "_blank");
	};

	const handleFacebook = () => {
		console.log("Facebook clicked");
		window.open(
			"https://www.facebook.com/profile.php?id=61553978257502",
			"_blank"
		);
	};

	const handleTikTok = () => {
		console.log("TikTok clicked");
		window.open(
			"https://www.tiktok.com/@s.shtet?_t=ZS-908zKMda5Wn&_r=1",
			"_blank"
		);
	};

	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center relative overflow-hidden"
		>
			{/* Background Pattern */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="space-y-8"
					>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.6 }}
						>
							<h1 className="font-playfair text-5xl lg:text-7xl font-bold text-foreground leading-tight">
								<ManualTranslatedText>
									Su Htet
								</ManualTranslatedText>
							</h1>
							<div className="h-1 w-24 gradient-gold rounded-full mt-4" />
						</motion.div>

						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.6 }}
							className="text-2xl lg:text-3xl text-muted-foreground font-light"
						>
							<ManualTranslatedText>
								Financial Services Consultant
							</ManualTranslatedText>
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6, duration: 0.6 }}
							className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
						>
							<ManualTranslatedText>
								Financial Services Consultant professional with
								5+ years of international experience in
								Insurance, Finance & Media Branding. Skilled in
								data analysis, cross-cultural communication,
								campaign management.
							</ManualTranslatedText>
						</motion.p>
						{/* Contact & Social Media Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1.0, duration: 0.6 }}
							className="flex gap-3 z-10 relative flex-wrap items-center"
						>
							{/* Primary Contact Buttons - Gold */}
							<motion.button
								type="button"
								onClick={handlePhone}
								whileHover={{ scale: 1.02, y: -1 }}
								whileTap={{ scale: 0.98 }}
								transition={{ duration: 0.2 }}
								className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#b8842a] to-[#c59952] hover:from-[#c59952] hover:to-[#d4af37] flex items-center justify-center text-white transition-all duration-200 shadow-lg cursor-pointer z-10 relative pointer-events-auto"
								title="Phone"
							>
								<Phone className="h-4 w-4 pointer-events-none" />
							</motion.button>
							<motion.button
								type="button"
								onClick={handleEmail}
								whileHover={{ scale: 1.02, y: -1 }}
								whileTap={{ scale: 0.98 }}
								transition={{ duration: 0.2 }}
								className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#b8842a] to-[#c59952] hover:from-[#c59952] hover:to-[#d4af37] flex items-center justify-center text-white transition-all duration-200 shadow-lg cursor-pointer z-10 relative pointer-events-auto"
								title="Email"
							>
								<Mail className="h-4 w-4 pointer-events-none" />
							</motion.button>
							<motion.button
								type="button"
								onClick={handleGetStarted}
								whileHover={{ scale: 1.02, y: -1 }}
								whileTap={{ scale: 0.98 }}
								transition={{ duration: 0.2 }}
								className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#b8842a] to-[#c59952] hover:from-[#c59952] hover:to-[#d4af37] flex items-center justify-center text-white transition-all duration-200 shadow-lg cursor-pointer z-10 relative pointer-events-auto"
								title="WhatsApp"
							>
								<MessageCircle className="h-4 w-4 pointer-events-none" />
							</motion.button>

							{/* Divider */}
							<div className="w-px h-8 bg-muted-foreground/20 mx-2" />

							{/* Social Media Buttons - Gold Border & Icons */}
							<motion.button
								type="button"
								onClick={handleLinkedIn}
								whileHover={{ scale: 1.02, y: -1 }}
								whileTap={{ scale: 0.98 }}
								transition={{ duration: 0.2 }}
								className="w-10 h-10 rounded-full border-2 border-[#b8842a] hover:border-[#c59952] flex items-center justify-center text-[#b8842a] hover:text-[#c59952] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer z-10 relative pointer-events-auto bg-transparent"
								title="LinkedIn"
							>
								<Linkedin className="h-4 w-4 pointer-events-none" />
							</motion.button>
							<motion.button
								type="button"
								onClick={handleFacebook}
								whileHover={{ scale: 1.02, y: -1 }}
								whileTap={{ scale: 0.98 }}
								transition={{ duration: 0.2 }}
								className="w-10 h-10 rounded-full border-2 border-[#b8842a] hover:border-[#c59952] flex items-center justify-center text-[#b8842a] hover:text-[#c59952] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer z-10 relative pointer-events-auto bg-transparent"
								title="Facebook"
							>
								<FacebookIcon className="h-4 w-4 pointer-events-none" />
							</motion.button>
							<motion.button
								type="button"
								onClick={handleTikTok}
								whileHover={{ scale: 1.02, y: -1 }}
								whileTap={{ scale: 0.98 }}
								transition={{ duration: 0.2 }}
								className="w-10 h-10 rounded-full border-2 border-[#b8842a] hover:border-[#c59952] flex items-center justify-center text-[#b8842a] hover:text-[#c59952] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer z-10 relative pointer-events-auto bg-transparent"
								title="TikTok"
							>
								<TikTokIcon className="h-4 w-4 pointer-events-none" />
							</motion.button>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8, duration: 0.6 }}
							className="flex flex-col sm:flex-row gap-4 z-20 relative"
						>
							<button
								onClick={scrollToAbout}
								className="bg-gradient-to-r from-[#b8842a] to-[#c59952] hover:from-[#c59952] hover:to-[#d4af37] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-lg border-0 cursor-pointer z-20 relative flex items-center justify-center"
								type="button"
							>
								<ArrowDown className="mr-2 h-4 w-4" />
								<ManualTranslatedText>
									Get Started
								</ManualTranslatedText>
							</button>
							<button
								onClick={scrollToContact}
								className="border-2 border-[#b8842a] text-[#b8842a] px-8 py-3 rounded-lg transition-all duration-200 hover:scale-[1.02] bg-transparent cursor-pointer z-20 relative flex items-center justify-center"
								type="button"
							>
								<Mail className="mr-2 h-4 w-4" />
								<ManualTranslatedText>
									Get In Touch
								</ManualTranslatedText>
							</button>
						</motion.div>
					</motion.div>

					{/* Profile Image */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="relative"
					>
						<div className="relative w-80 h-100 lg:w-80 lg:h-100 mx-auto">
							{/* Outer rotating ring */}
							<motion.div
								animate={{ rotate: 360 }}
								transition={{
									duration: 25,
									repeat: Number.POSITIVE_INFINITY,
									ease: "linear",
								}}
								className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20"
							/>

							{/* Middle pulsing ring */}
							<motion.div
								animate={{
									scale: [1, 1.1, 1],
									opacity: [0.3, 0.6, 0.3],
								}}
								transition={{
									duration: 4,
									repeat: Number.POSITIVE_INFINITY,
									ease: "easeInOut",
								}}
								className="absolute inset-2 rounded-full bg-gradient-to-r from-[#b8842a] to-[#c59952] opacity-30"
							/>

							{/* Inner floating animation */}
							<motion.div
								animate={{
									y: [0, -10, 0],
									rotate: [0, 5, -5, 0],
								}}
								transition={{
									duration: 6,
									repeat: Number.POSITIVE_INFINITY,
									ease: "easeInOut",
								}}
								whileHover={{ scale: 1.05 }}
								className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary shadow-2xl"
							>
								{/* Shimmer effect */}
								<motion.div
									animate={{
										x: ["-100%", "100%"],
									}}
									transition={{
										duration: 3,
										repeat: Number.POSITIVE_INFINITY,
										ease: "linear",
									}}
									className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
								/>

								{/* Main image with subtle animations */}
								<motion.div
									animate={{
										scale: [1.1, 1.15, 1.1],
									}}
									transition={{
										duration: 8,
										repeat: Number.POSITIVE_INFINITY,
										ease: "easeInOut",
									}}
									className="w-full h-full"
								>
									<Image
										src="/images/susuhtet.jpeg"
										alt="Su Htet"
										fill
										className="object-cover object-top"
										priority
									/>
								</motion.div>
							</motion.div>

							{/* Floating particles */}
							{[...Array(6)].map((_, i) => (
								<motion.div
									key={i}
									animate={{
										y: [0, -20, 0],
										x: [0, Math.sin(i) * 10, 0],
										opacity: [0, 1, 0],
									}}
									transition={{
										duration: 3 + i * 0.5,
										repeat: Number.POSITIVE_INFINITY,
										delay: i * 0.5,
										ease: "easeInOut",
									}}
									className="absolute w-2 h-2 bg-gradient-to-r from-[#b8842a] to-[#c59952] rounded-full"
									style={{
										top: `${20 + i * 10}%`,
										left: `${10 + i * 15}%`,
									}}
								/>
							))}
						</div>
					</motion.div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.1, duration: 0.2 }}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
			>
				<Button
					variant="ghost"
					onClick={scrollToAbout}
					className="p-2 rounded-full hover:bg-primary/10"
				>
					<motion.div
						animate={{ y: [0, 5, 0] }}
						transition={{
							duration: 5,
							repeat: Number.POSITIVE_INFINITY,
						}}
					>
						<ArrowDown className="h-6 w-6 text-primary" />
					</motion.div>
				</Button>
			</motion.div>
		</section>
	);
}
