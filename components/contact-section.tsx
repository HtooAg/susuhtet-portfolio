"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, Linkedin, Heart } from "lucide-react";
import Image from "next/image";
import { ManualTranslatedText } from "@/components/manual-translated-text";

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

const contactInfo = [
	{
		icon: Phone,
		label: "Phone",
		value: "+971 555238077",
		href: "tel:+971555238077",
	},
	{
		icon: Mail,
		label: "Email",
		value: "susuhtet24@gmail.com",
		href: "mailto:susuhtet24@gmail.com",
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		value: "Su Htet",
		href: "http://linkedin.com/in/su-su-htet-0837b0169",
	},
	{
		icon: FacebookIcon,
		label: "Facebook",
		value: "Su Htet",
		href: "https://www.facebook.com/profile.php?id=61553978257502",
	},
	{
		icon: TikTokIcon,
		label: "TikTok",
		value: "@s.shtet",
		href: "https://www.tiktok.com/@s.shtet?_t=ZS-908zKMda5Wn&_r=1",
	},
	{
		icon: MessageCircle,
		label: "WhatsApp",
		value: "+971 555238077",
		href: "https://wa.me/971555238077",
	},
];

const quickLinks = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Experience", href: "#experience" },
	{ name: "Education", href: "#education" },
	{ name: "Skills", href: "#skills" },
	{ name: "Activities", href: "#activities" },
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
		icon: FacebookIcon,
		href: "https://www.facebook.com/profile.php?id=61553978257502",
		label: "Facebook",
	},
	{
		icon: TikTokIcon,
		href: "https://www.tiktok.com/@s.shtet?_t=ZS-908zKMda5Wn&_r=1",
		label: "TikTok",
	},
	{
		icon: MessageCircle,
		href: "https://wa.me/971555238077",
		label: "WhatsApp",
	},
];

export function ContactSection() {
	const handleWhatsAppContact = () => {
		const message = encodeURIComponent(
			"Hello Su Htet, I'm interested in learning more about your financial services."
		);
		window.open(`https://wa.me/971555238077?text=${message}`, "_blank");
	};

	const scrollToSection = (href: string) => {
		// Handle Posts navigation - redirect to posts page if not on home page
		if (href === "#posts") {
			if (window.location.pathname !== "/") {
				window.location.href = "/posts";
				return;
			}
		}

		// Handle other navigation - redirect to home page if not on home page
		if (href !== "#posts" && window.location.pathname !== "/") {
			window.location.href = "/" + href;
			return;
		}

		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section id="contact" className="pt-20 pb-8 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Contact Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
						<ManualTranslatedText>
							Get In Touch
						</ManualTranslatedText>
					</h2>
					<div className="h-1 w-24 gradient-gold rounded-full mx-auto mb-8" />
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						<ManualTranslatedText>
							Ready to secure your financial future? Let's discuss
							how I can help you achieve your financial goals with
							tailored insurance and investment solutions.
						</ManualTranslatedText>
					</p>
				</motion.div>

				{/* Contact Content */}
				<div className="grid lg:grid-cols-2 gap-12 mb-12">
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="space-y-8"
					>
						<div>
							<h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">
								<ManualTranslatedText>
									Contact Information
								</ManualTranslatedText>
							</h3>
							<div className="space-y-4">
								{contactInfo.map((info, index) => (
									<motion.a
										key={info.label}
										href={info.href}
										target={
											info.label === "LinkedIn" ||
											info.label === "WhatsApp" ||
											info.label === "Facebook" ||
											info.label === "TikTok"
												? "_blank"
												: undefined
										}
										rel={
											info.label === "LinkedIn" ||
											info.label === "WhatsApp" ||
											info.label === "Facebook" ||
											info.label === "TikTok"
												? "noopener noreferrer"
												: undefined
										}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
										viewport={{ once: true }}
										className="flex items-center gap-4 p-4 rounded-lg shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200 transform hover:scale-102 group bg-card/50"
									>
										<div className="w-12 h-12 gradient-gold rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-150 shadow-sm">
											<info.icon className="h-6 w-6 text-white" />
										</div>
										<div>
											<p className="font-medium text-foreground">
												<ManualTranslatedText>
													{info.label}
												</ManualTranslatedText>
											</p>
											<p className="text-muted-foreground">
												<ManualTranslatedText>
													{info.value}
												</ManualTranslatedText>
											</p>
										</div>
									</motion.a>
								))}
							</div>
						</div>
					</motion.div>

					{/* Contact via WhatsApp */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<Card className="border-border/50 hover:border-primary/50 transition-all duration-150">
							<CardContent className="p-4">
								<div className="space-y-6">
									<div className="text-center">
										<motion.div
											whileHover={{ scale: 1.1 }}
											className="inline-flex items-center justify-center w-20 h-20 gradient-gold rounded-full mb-4"
										>
											<MessageCircle className="h-10 w-10 text-white" />
										</motion.div>
										<h4 className="font-playfair text-xl font-semibold text-foreground mb-2">
											<ManualTranslatedText>
												WhatsApp Contact
											</ManualTranslatedText>
										</h4>
									</div>

									<div className="bg-muted/50 rounded-lg p-6 text-center">
										<p className="text-muted-foreground leading-relaxed mb-6">
											<ManualTranslatedText>
												Results-driven financial advisor
												with strong client relationship
												skills and a proven record of
												meeting sales targets.
												Experienced in providing
												tailored financial protection
												solutions, achieving 80%
												persistency rates, and
												successfully achieved MDRT
												qualification in 2024.
												Recognized for driving new
												product sales, generating leads,
												and ensuring long-term client
												satisfaction and loyalty.
											</ManualTranslatedText>
										</p>

										<motion.div
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
										>
											<Button
												onClick={handleWhatsAppContact}
												className="w-full bg-gradient-to-r from-[#b8842a] to-[#c59952] hover:from-[#c59952] hover:to-[#d4af37] text-white font-semibold py-4 rounded-lg transition-all duration-150 text-lg shadow-lg"
												size="lg"
											>
												<MessageCircle className="mr-2 h-6 w-6" />
												<ManualTranslatedText>
													WhatsApp Message
												</ManualTranslatedText>
											</Button>
										</motion.div>

										{/* Quick Response Alert */}
										<div className="bg-gradient-to-r from-[#b8842a]/10 to-[#c59952]/10 border border-[#b8842a]/20 rounded-lg p-4 mt-6 text-center">
											<div className="flex items-center justify-center gap-3 mb-2">
												<div className="w-3 h-3 bg-gradient-to-r from-[#b8842a] to-[#c59952] rounded-full animate-pulse"></div>
												<span className="font-semibold text-[#b8842a]">
													<ManualTranslatedText>
														Quick Response
													</ManualTranslatedText>
												</span>
											</div>
											<p className="text-sm text-muted-foreground text-center">
												<ManualTranslatedText>
													I typically respond within
													2-4 hours during business
													hours (9 AM - 6 PM GST)
												</ManualTranslatedText>
											</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>

				{/* Footer Section */}
				<div className="border-t border-border pt-12">
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
									alt="Su Htet"
									width={40}
									height={40}
									className="rounded-full object-cover object-top"
								/>
								<span className="font-playfair font-bold text-2xl text-primary">
									<ManualTranslatedText>
										Su Htet
									</ManualTranslatedText>
								</span>
							</div>
							<p className="text-muted-foreground leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
								<ManualTranslatedText>
									MDRT Qualified Financial Advisor & AIA
									Premier Club Member dedicated to helping
									clients achieve their financial goals
									through tailored insurance and investment
									solutions.
								</ManualTranslatedText>
							</p>
							<div className="flex justify-center md:justify-start gap-3 items-center flex-wrap">
								{/* Primary Contact Buttons - Gold Background */}
								<motion.a
									href="tel:+971555238077"
									whileHover={{ scale: 1.05, y: -1 }}
									whileTap={{ scale: 0.98 }}
									className="w-9 h-9 gradient-gold rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-200 cursor-pointer"
									title="Phone"
								>
									<Phone className="h-3.5 w-3.5 text-white" />
								</motion.a>
								<motion.a
									href="mailto:susuhtet24@gmail.com"
									whileHover={{ scale: 1.05, y: -1 }}
									whileTap={{ scale: 0.98 }}
									className="w-9 h-9 gradient-gold rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-200 cursor-pointer"
									title="Email"
								>
									<Mail className="h-3.5 w-3.5 text-white" />
								</motion.a>
								<motion.a
									href="https://wa.me/971555238077"
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ scale: 1.05, y: -1 }}
									whileTap={{ scale: 0.98 }}
									className="w-9 h-9 gradient-gold rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-200 cursor-pointer"
									title="WhatsApp"
								>
									<MessageCircle className="h-3.5 w-3.5 text-white" />
								</motion.a>

								{/* Divider */}
								<div className="w-px h-6 bg-muted-foreground/20 mx-2" />

								{/* Social Media Buttons - Gold Border */}
								<motion.a
									href="http://linkedin.com/in/su-su-htet-0837b0169"
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ scale: 1.05, y: -1 }}
									whileTap={{ scale: 0.98 }}
									className="w-9 h-9 border-2 border-[#b8842a] hover:border-[#c59952] bg-transparent rounded-full flex items-center justify-center text-[#b8842a] hover:text-[#c59952] hover:shadow-lg transition-all duration-200 cursor-pointer"
									title="LinkedIn"
								>
									<Linkedin className="h-3.5 w-3.5" />
								</motion.a>
								<motion.a
									href="https://www.facebook.com/profile.php?id=61553978257502"
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ scale: 1.05, y: -1 }}
									whileTap={{ scale: 0.98 }}
									className="w-9 h-9 border-2 border-[#b8842a] hover:border-[#c59952] bg-transparent rounded-full flex items-center justify-center text-[#b8842a] hover:text-[#c59952] hover:shadow-lg transition-all duration-200 cursor-pointer"
									title="Facebook"
								>
									<FacebookIcon className="h-3.5 w-3.5" />
								</motion.a>
								<motion.a
									href="https://www.tiktok.com/@s.shtet?_t=ZS-908zKMda5Wn&_r=1"
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ scale: 1.05, y: -1 }}
									whileTap={{ scale: 0.98 }}
									className="w-9 h-9 border-2 border-[#b8842a] hover:border-[#c59952] bg-transparent rounded-full flex items-center justify-center text-[#b8842a] hover:text-[#c59952] hover:shadow-lg transition-all duration-200 cursor-pointer"
									title="TikTok"
								>
									<TikTokIcon className="h-3.5 w-3.5" />
								</motion.a>
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
								<ManualTranslatedText>
									Quick Links
								</ManualTranslatedText>
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
											<ManualTranslatedText>
												{link.name}
											</ManualTranslatedText>
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
								<ManualTranslatedText>
									Contact Info
								</ManualTranslatedText>
							</h3>
							<div className="space-y-3">
								<p className="text-muted-foreground">
									<span className="font-medium">
										<ManualTranslatedText>
											Phone:
										</ManualTranslatedText>
									</span>
									<br />
									+971 555238077
								</p>
								<p className="text-muted-foreground">
									<span className="font-medium">
										<ManualTranslatedText>
											Email:
										</ManualTranslatedText>
									</span>
									<br />
									susuhtet24@gmail.com
								</p>
								<p className="text-muted-foreground">
									<span className="font-medium">
										<ManualTranslatedText>
											Specialization:
										</ManualTranslatedText>
									</span>
									<br />
									<ManualTranslatedText>
										Financial Services & Insurance
									</ManualTranslatedText>
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
						<p className="text-muted-foreground text-sm mb-3">
							<ManualTranslatedText>
								© 2025 Su Htet. All rights reserved. MDRT
								Qualified Advisor.
							</ManualTranslatedText>
						</p>
						<div className="flex items-center justify-center space-x-2 text-muted-foreground">
							<span>
								<ManualTranslatedText>
									Made with
								</ManualTranslatedText>
							</span>
							<Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
							<span>
								<ManualTranslatedText>
									by John (Software Developer)
								</ManualTranslatedText>
							</span>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
