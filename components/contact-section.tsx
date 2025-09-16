"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";

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
		icon: ExternalLink,
		label: "LinkedIn",
		value: "Su Su Htet",
		href: "http://linkedin.com/in/su-su-htet-0837b0169",
	},
	{
		icon: MessageCircle,
		label: "WhatsApp",
		value: "+971 555238077",
		href: "https://wa.me/971555238077",
	},
];

export function ContactSection() {
	const handleWhatsAppContact = () => {
		const message = encodeURIComponent(
			"Hello Su Su Htet, I'm interested in learning more about your financial services."
		);
		window.open(`https://wa.me/971555238077?text=${message}`, "_blank");
	};

	return (
		<section id="contact" className="py-20 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
						Get In Touch
					</h2>
					<div className="h-1 w-24 gradient-gold rounded-full mx-auto mb-8" />
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						Ready to secure your financial future? Let's discuss how
						I can help you achieve your financial goals with
						tailored insurance and investment solutions.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12">
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
								Contact Information
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
												{info.label}
											</p>
											<p className="text-muted-foreground">
												{info.value}
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
											WhatsApp Contact
										</h4>
									</div>

									<div className="bg-muted/50 rounded-lg p-6 text-center">
										<p className="text-muted-foreground leading-relaxed mb-6">
											Results-driven financial advisor
											with strong client relationship
											skills and a proven record of
											meeting sales targets. Experienced
											in providing tailored financial
											protection solutions, achieving 80%
											persistency rates, and reaching 75%
											of MDRT target in 2024. Recognized
											for driving new product sales,
											generating leads, and ensuring
											long-term client satisfaction and
											loyalty.
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
												WhatsApp Message
											</Button>
										</motion.div>
										{/* Quick Response Alert */}
										<div className="bg-gradient-to-r from-[#b8842a]/10 to-[#c59952]/10 border border-[#b8842a]/20 rounded-lg p-4 mt-6 text-center d-flex items-center">
											<div className="flex items-center gap-3 mb-2 text-center ">
												<div className="w-3 h-3 bg-gradient-to-r from-[#b8842a] to-[#c59952] rounded-full animate-pulse"></div>
												<span className="font-semibold text-[#b8842a]">
													Quick Response
												</span>
											</div>
											<p className="text-sm text-muted-foreground text-center">
												I typically respond within 2-4
												hours during business hours (9
												AM - 6 PM GST)
											</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
