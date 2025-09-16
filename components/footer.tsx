"use client";

import { motion } from "framer-motion";
import { Phone, Mail, ExternalLink, MessageCircle, Heart, Linkedin } from "lucide-react";
import Image from "next/image";

const quickLinks = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Experience", href: "#experience" },
	{ name: "Skills", href: "#skills" },
	{ name: "Posts", href: "#posts" },
	{ name: "Contact", href: "#contact" },
];

const socialLinks = [
	{
		icon: Phone,
		href: "tel:+971555238077",
		label: "Phone",
	},
	{
		icon: Mail,
		href: "mailto:susuhtet24@gmail.com",
		label: "Email",
	},
	{
		icon: Linkedin,
		href: "http://linkedin.com/in/su-su-htet-0837b0169",
		label: "LinkedIn",
	},
	{
		icon: MessageCircle,
		href: "https://wa.me/971555238077",
		label: "WhatsApp",
	},
];

export function Footer() {
	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<footer className="bg-card border-t border-border">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Brand Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="lg:col-span-2 text-center md:text-left"
					>
						<div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
							<Image
								src="/images/logo.jpg"
								alt="Su Su Htet"
								width={40}
								height={40}
								className="rounded-full object-cover object-top"
							/>
							<span className="font-playfair font-bold text-2xl text-primary">
								Su Su Htet
							</span>
						</div>
						<p className="text-muted-foreground leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
							MDRT Qualified Financial Advisor & AIA Premier Club
							Member dedicated to helping clients achieve their
							financial goals through tailored insurance and
							investment solutions.
						</p>
						<div className="flex justify-center md:justify-start space-x-4">
							{socialLinks.map((social) => (
								<motion.a
									key={social.label}
									href={social.href}
									target={
										social.label === "LinkedIn" ||
										social.label === "WhatsApp"
											? "_blank"
											: undefined
									}
									rel={
										social.label === "LinkedIn" ||
										social.label === "WhatsApp"
											? "noopener noreferrer"
											: undefined
									}
									whileHover={{ scale: 1.1, y: -2 }}
									whileTap={{ scale: 0.95 }}
									className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-200 cursor-pointer"
								>
									<social.icon className="h-5 w-5 text-white" />
								</motion.a>
							))}
						</div>
					</motion.div>

					{/* Quick Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
						className="text-center md:text-left"
					>
						<h3 className="font-playfair font-semibold text-lg text-foreground mb-4">
							Quick Links
						</h3>
						<ul className="space-y-2">
							{quickLinks.map((link) => (
								<li key={link.name}>
									<button
										onClick={() =>
											scrollToSection(link.href)
										}
										className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105 cursor-pointer"
									>
										{link.name}
									</button>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="text-center md:text-left"
					>
						<h3 className="font-playfair font-semibold text-lg text-foreground mb-4">
							Contact Info
						</h3>
						<div className="space-y-3">
							<p className="text-muted-foreground">
								<span className="font-medium">Phone:</span>
								<br />
								+971 555238077
							</p>
							<p className="text-muted-foreground">
								<span className="font-medium">Email:</span>
								<br />
								susuhtet24@gmail.com
							</p>
							<p className="text-muted-foreground">
								<span className="font-medium">
									Specialization:
								</span>
								<br />
								Financial Services & Insurance
							</p>
						</div>
					</motion.div>
				</div>

				{/* Bottom Section */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					viewport={{ once: true }}
					className="border-t border-border mt-8 pt-8 text-center"
				>
					<p className="text-muted-foreground text-sm mb-3 md:mb-3 text-center ">
						© 2025 Su Su Htet. All rights reserved. MDRT Qualified
						Advisor.
					</p>
					<div className="flex items-center justify-center space-x-2 text-muted-foreground">
						<span>Made with</span>
						<Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
						<span>by John (Software Developer)</span>
					</div>
				</motion.div>
			</div>
		</footer>
	);
}
