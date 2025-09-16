"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
	ArrowDown,
	Mail,
	MessageCircle,
	Phone,
	ExternalLink,
	Linkedin,
} from "lucide-react";
import Image from "next/image";

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
			"Hello Su Su Htet, I'm interested in learning more about your financial services and would like to get started."
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
								Su Su Htet
							</h1>
							<div className="h-1 w-24 gradient-gold rounded-full mt-4" />
						</motion.div>

						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.6 }}
							className="text-2xl lg:text-3xl text-muted-foreground font-light"
						>
							Financial Services Consultant
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6, duration: 0.6 }}
							className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
						>
							MDRT Qualified Advisor & AIA Premier Club Member
							with a proven track record of building strong client
							relationships and providing tailored financial
							protection solutions.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8, duration: 0.6 }}
							className="flex flex-col sm:flex-row gap-4 z-20 relative"
						>
							<button
								onClick={handleGetStarted}
								className="bg-gradient-to-r from-[#b8842a] to-[#c59952] hover:from-[#c59952] hover:to-[#d4af37] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-lg border-0 cursor-pointer z-20 relative flex items-center justify-center"
								type="button"
							>
								<MessageCircle className="mr-2 h-4 w-4" />
								Get Started
							</button>
							<button
								onClick={scrollToContact}
								className="border-2 border-[#b8842a] text-[#b8842a] px-8 py-3 rounded-lg transition-all duration-200 hover:scale-[1.02] bg-transparent cursor-pointer z-20 relative flex items-center justify-center"
								type="button"
							>
								<Mail className="mr-2 h-4 w-4" />
								Get In Touch
							</button>
						</motion.div>

						{/* Social Media Buttons */}
						{/* <motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1.0, duration: 0.6 }}
							className="flex gap-3 z-10 relative"
						>
							<motion.button
								type="button"
								onClick={handlePhone}
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.95 }}
								transition={{ duration: 0.2 }}
								className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#b8842a] to-[#c59952] hover:from-[#c59952] hover:to-[#d4af37] flex items-center justify-center text-white transition-all duration-200 shadow-lg cursor-pointer z-10 relative pointer-events-auto"
								title="Phone"
							>
								<Phone className="h-5 w-5 pointer-events-none" />
							</motion.button>
							<motion.button
								type="button"
								onClick={handleEmail}
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.95 }}
								transition={{ duration: 0.2 }}
								className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#b8842a] to-[#c59952] hover:from-[#c59952] hover:to-[#d4af37] flex items-center justify-center text-white transition-all duration-200 shadow-lg cursor-pointer z-10 relative pointer-events-auto"
								title="Email"
							>
								<Mail className="h-5 w-5 pointer-events-none" />
							</motion.button>
							<motion.button
								type="button"
								onClick={handleLinkedIn}
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.95 }}
								transition={{ duration: 0.2 }}
								className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#b8842a] to-[#c59952] hover:from-[#c59952] hover:to-[#d4af37] flex items-center justify-center text-white transition-all duration-200 shadow-lg cursor-pointer z-10 relative pointer-events-auto"
								title="LinkedIn"
							>
								<Linkedin className="h-5 w-5 pointer-events-none" />
							</motion.button>
							<motion.button
								type="button"
								onClick={handleGetStarted}
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.95 }}
								transition={{ duration: 0.2 }}
								className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#b8842a] to-[#c59952] hover:from-[#c59952] hover:to-[#d4af37] flex items-center justify-center text-white transition-all duration-200 shadow-lg cursor-pointer z-10 relative pointer-events-auto"
								title="WhatsApp"
							>
								<MessageCircle className="h-5 w-5 pointer-events-none" />
							</motion.button>
						</motion.div> */}
					</motion.div>

					{/* Profile Image */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="relative"
					>
						<div className="relative w-80 h-100 lg:w-80 lg:h-100 mx-auto">
							<motion.div
								animate={{ rotate: 360 }}
								transition={{
									duration: 20,
									repeat: Number.POSITIVE_INFINITY,
									ease: "linear",
								}}
								className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20"
							/>
							<motion.div
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.3 }}
								className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary shadow-2xl"
							>
								<Image
									src="/images/susuhtet.jpeg"
									alt="Su Su Htet"
									fill
									className="object-cover object-top scale-110"
									priority
								/>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.2, duration: 0.6 }}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
			>
				<Button
					variant="ghost"
					onClick={scrollToAbout}
					className="p-2 rounded-full hover:bg-primary/10"
				>
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{
							duration: 2,
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
