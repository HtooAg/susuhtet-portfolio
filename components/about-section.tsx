"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, TrendingUp, Shield } from "lucide-react";
import { ManualTranslatedText } from "@/components/manual-translated-text";

const achievements = [
	{
		icon: Award,
		title: "MDRT Qualified",
		description: "Successfully achieved MDRT qualification for 2025",
	},
	{
		icon: Users,
		title: "Client Satisfaction",
		description:
			"80% high persistency rates with strong client relationships",
	},
	{
		icon: TrendingUp,
		title: "Sales Excellence",
		description: "Highest new product sales during launch month",
	},
	{
		icon: Shield,
		title: "AIA Premier Club",
		description: "Premier Club Member with priority client services",
	},
];

export function AboutSection() {
	return (
		<section id="about" className="py-20 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
						<ManualTranslatedText>About Me</ManualTranslatedText>
					</h2>
					<div className="h-1 w-24 gradient-gold rounded-full mx-auto mb-8" />
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						<ManualTranslatedText>
							Results-driven financial advisor with a proven track
							record of building strong client relationships and
							consistently meeting sales targets. Skilled in
							assessing client needs and providing tailored
							financial protection solutions.
						</ManualTranslatedText>
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{achievements.map((achievement, index) => (
						<motion.div
							key={achievement.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							<Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-primary/50">
								<CardContent className="p-6 text-center">
									<motion.div
										whileHover={{ scale: 1.1, rotate: 5 }}
										transition={{ duration: 0.3 }}
										className="inline-flex items-center justify-center w-16 h-16 gradient-gold rounded-full mb-4"
									>
										<achievement.icon className="h-8 w-8 text-white" />
									</motion.div>
									<h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
										<ManualTranslatedText>
											{achievement.title}
										</ManualTranslatedText>
									</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">
										<ManualTranslatedText>
											{achievement.description}
										</ManualTranslatedText>
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
