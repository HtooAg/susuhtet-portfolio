"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	Users,
	Target,
	ArrowRight,
	BookOpen,
	ChevronDown,
	ChevronUp,
} from "lucide-react";
import { ManualTranslatedText } from "@/components/manual-translated-text";
import Image from "next/image";
import Link from "next/link";

// Featured activities for homepage (showing only 2)
const featuredActivities = [
	{
		id: 1,
		icon: Users,
		title: "Brand Awareness & Community Engagement",
		excerpt:
			"I organized and managed social and event activities designed to strengthen brand awareness and community engagement. By combining both online campaigns and in-person events, I created opportunities for direct interaction with the target audience.",
		fullContent:
			"I organized and managed social and event activities designed to strengthen brand awareness and community engagement. By combining both online campaigns and in-person events, I created opportunities for direct interaction with the target audience, generating visibility and positive brand association. Through effective planning, creative promotion, and engaging activities, I was able to build stronger connections with participants, expand the brand's reach, and enhance its reputation in a competitive market. These initiatives not only increased brand recognition but also fostered lasting relationships with our community, creating a foundation for sustained growth and customer loyalty.",
		date: "2023-2024",
		category: "Marketing & Events",
		image: "/images/act1.png",
	},
	{
		id: 2,
		icon: Target,
		title: "Corporate Fair Participation",
		excerpt:
			"I organized and actively participated in a corporate fair to showcase our services and connect with potential clients. I prepared engaging materials, interacted with attendees, and highlighted the value our brand could bring to their business needs.",
		fullContent:
			"I organized and actively participated in a corporate fair to showcase our services and connect with potential clients. I prepared engaging materials, interacted with attendees, and highlighted the value our brand could bring to their business needs. By creating a welcoming and professional presence at the event, I was able to spark meaningful conversations, generate leads, and build relationships that opened the door to future corporate partnerships. The fair provided an excellent platform to demonstrate our expertise, share success stories, and establish credibility within the corporate community. This strategic approach resulted in several promising business opportunities and strengthened our position in the market.",
		date: "2024",
		category: "Business Development",
		image: "/images/act2.png",
	},
];

export function ActivitiesSection() {
	const [expandedActivity, setExpandedActivity] = useState<number | null>(
		null
	);

	const toggleReadMore = (activityId: number) => {
		setExpandedActivity(
			expandedActivity === activityId ? null : activityId
		);
	};

	return (
		<section id="activities" className="py-20 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
						<ManualTranslatedText>Activities</ManualTranslatedText>
					</h2>
					<div className="h-1 w-24 gradient-gold rounded-full mx-auto mb-8" />
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						<ManualTranslatedText>
							Professional activities, achievements, and community
							involvement that showcase dedication to excellence
							in financial services and client relationships.
						</ManualTranslatedText>
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8 mb-12">
					{featuredActivities.map((activity, index) => (
						<motion.div
							key={activity.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							viewport={{ once: true }}
						>
							<Card className="h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-border/50 hover:border-primary/50 overflow-hidden group">
								{/* Activity Image */}
								<div className="relative h-64 overflow-hidden">
									<Image
										src={activity.image}
										alt={activity.title}
										fill
										className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

									{/* Category Badge */}
									<div className="absolute top-4 left-4">
										<span className="text-xs font-medium text-white bg-gradient-to-r from-[#b8842a] to-[#c59952] px-3 py-1 rounded-full shadow-lg">
											<ManualTranslatedText>
												{activity.category}
											</ManualTranslatedText>
										</span>
									</div>

									{/* Date Badge */}
									<div className="absolute top-4 right-4">
										<span className="text-xs font-medium text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
											<ManualTranslatedText>
												{activity.date}
											</ManualTranslatedText>
										</span>
									</div>
								</div>

								<CardContent className="p-6">
									<div className="flex items-center gap-4 mb-4">
										<motion.div
											whileHover={{
												scale: 1.1,
												rotate: 5,
											}}
											transition={{ duration: 0.3 }}
											className="inline-flex items-center justify-center w-12 h-12 gradient-gold rounded-lg shadow-lg flex-shrink-0"
										>
											<activity.icon className="h-6 w-6 text-white" />
										</motion.div>
										<h3 className="font-playfair text-xl font-bold text-foreground leading-tight">
											<ManualTranslatedText>
												{activity.title}
											</ManualTranslatedText>
										</h3>
									</div>
									<div className="mb-6">
										<p className="text-muted-foreground leading-relaxed">
											<ManualTranslatedText>
												{expandedActivity ===
												activity.id
													? activity.fullContent
													: activity.excerpt}
											</ManualTranslatedText>
										</p>
									</div>

									{/* Read More Button */}
									<div className="mt-auto space-y-3">
										<Button
											variant="outline"
											className="w-full border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
											onClick={() =>
												toggleReadMore(activity.id)
											}
										>
											<BookOpen className="mr-2 h-4 w-4" />
											<span className="mr-2">
												{expandedActivity ===
												activity.id
													? "Read Less"
													: "Read More"}
											</span>
											{expandedActivity ===
											activity.id ? (
												<ChevronUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
											) : (
												<ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
											)}
										</Button>

										{/* View Activities Button */}
										<Link
											href="/activities"
											prefetch={true}
										>
											<Button className="w-full bg-gradient-to-r from-[#b8842a] to-[#c59952] hover:from-[#c59952] hover:to-[#d4af37] text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
												<ArrowRight className="mr-2 h-4 w-4" />
												<ManualTranslatedText>
													View Activities
												</ManualTranslatedText>
											</Button>
										</Link>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				{/* View All Activities Button */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
					className="text-center"
				>
					<Link href="/activities" prefetch={true}>
						<Button className="bg-gradient-to-r from-[#b8842a] to-[#c59952] hover:from-[#c59952] hover:to-[#d4af37] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer">
							<ManualTranslatedText>
								View All Activities
							</ManualTranslatedText>
							<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
						</Button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
