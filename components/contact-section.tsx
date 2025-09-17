"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, Linkedin, Heart } from "lucide-react";
import Image from "next/image";
import { ManualTranslatedText } from "@/components/manual-translated-text";

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

export function ContactSection() {
	const handleWhatsAppContact = () => {
		const message = encodeURIComponent(
			"Hello Su Htet, I'm interested in learning more about your financial services."
		);
		window.open(`https://wa.me/971555238077?text=${message}`, "_blank");
	};

	const scrollToSection = (href: string) => {
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
											info.label === "WhatsApp"
												? "_blank"
												: undefined
										}
										rel={
											info.label === "LinkedIn" ||
											info.label === "WhatsApp"
												? "noopener noreferrer"
												: undefined
										}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
										viewport={{ once: true }}
										className="flex items-center gap-4 p-4 rounded-lg hover:bg-card transition-all duration-150 transform hover:scale-105 group"
									>
										<div className="w-12 h-12 gradient-gold rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-150">
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
