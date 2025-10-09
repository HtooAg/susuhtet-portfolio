"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	ArrowDown,
	Calendar,
	Users,
	Award,
	Target,
	TrendingUp,
	Globe,
	BookOpen,
	ExternalLink,
	Share2,
	Clock,
} from "lucide-react";
import Image from "next/image";
import { ManualTranslatedText } from "@/components/manual-translated-text";
import { Navbar } from "@/components/navbar";
import { ContactSection } from "@/components/contact-section";
import { StructuredData } from "@/components/structured-data";
import Head from "next/head";

const allActivities = [
	{
		id: 1,
		icon: Users,
		title: "Brand Awareness & Community Engagement",
		excerpt:
			"I organized and managed social and event activities designed to strengthen brand awareness and community engagement.",
		fullContent: `I organized and managed social and event activities designed to strengthen brand awareness and community engagement. By combining both online campaigns and in-person events, I created opportunities for direct interaction with the target audience, generating visibility and positive brand association. Through effective planning, creative promotion, and engaging activities, I was able to build stronger connections with participants, expand the brand's reach, and enhance its reputation in a competitive market.`,
		image: "/images/act1.png",
		date: "2023-2024",
		category: "Marketing & Events",
		tags: ["Brand Awareness", "Community Engagement", "Event Management"],
	},
	{
		id: 2,
		icon: Target,
		title: "Corporate Fair Participation",
		excerpt:
			"I organized and actively participated in a corporate fair to showcase our services and connect with potential clients.",
		fullContent: `I organized and actively participated in a corporate fair to showcase our services and connect with potential clients. I prepared engaging materials, interacted with attendees, and highlighted the value our brand could bring to their business needs. By creating a welcoming and professional presence at the event, I was able to spark meaningful conversations, generate leads, and build relationships that opened the door to future corporate partnerships.`,
		image: "/images/act2.png",
		date: "2024",
		category: "Business Development",
		tags: ["Corporate Fair", "Lead Generation", "Business Partnerships"],
	},
	{
		id: 3,
		icon: Award,
		title: "Insurance Awareness Knowledge Sharing",
		excerpt:
			"I successfully led a knowledge-sharing session on insurance awareness, combining marketing expertise with industry insights.",
		fullContent: `I successfully led a knowledge-sharing session on insurance awareness, where I combined my marketing expertise with industry insights to simplify complex concepts for a wider audience. By using engaging visuals, real-life examples, and clear communication techniques, I ensured participants understood the value of insurance and its role in financial security. The session not only increased awareness but also highlighted my ability to translate technical information into relatable messages that drive engagement and trust.`,
		image: "/images/act3.png",
		date: "2023-2024",
		category: "Education & Training",
		tags: [
			"Insurance Awareness",
			"Knowledge Sharing",
			"Financial Education",
		],
	},
	{
		id: 4,
		icon: TrendingUp,
		title: "Marketing & Branding Strategy Sessions",
		excerpt:
			"I led marketing and branding strategy sharing sessions with my team to help them connect better with clients and drive real sales.",
		fullContent: `I led marketing and branding strategy sharing sessions with my team to help them connect better with clients and drive real sales. In these sessions, I broke down practical approaches—like how to position the brand, use storytelling, and highlight key benefits—so the team could apply them directly in conversations with prospects. This not only boosted their confidence but also helped translate marketing ideas into real-life sales results.`,
		image: "/images/act4.png",
		date: "2022-2024",
		category: "Leadership & Training",
		tags: ["Marketing Strategy", "Team Training", "Sales Enhancement"],
	},
];

// Helper function to estimate reading time
const estimateReadingTime = (text: string) => {
	const wordsPerMinute = 200;
	const words = text.split(" ").length;
	return Math.ceil(words / wordsPerMinute);
};

// Helper function to format date
const formatDate = (dateString: string) => {
	return dateString;
};

export default function ActivitiesPage() {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(
		null
	);
	const [expandedActivity, setExpandedActivity] = useState<number | null>(
		null
	);

	const handleShare = (activity: any) => {
		if (navigator.share) {
			navigator.share({
				title: activity.title,
				text: activity.excerpt,
				url: window.location.href,
			});
		} else {
			// Fallback to copying URL
			navigator.clipboard.writeText(window.location.href);
		}
	};

	const toggleReadMore = (activityId: number) => {
		setExpandedActivity(
			expandedActivity === activityId ? null : activityId
		);
	};

	// Get all unique categories
	const allCategories = Array.from(
		new Set(allActivities.map((activity) => activity.category))
	);

	// Filter activities by selected category
	const filteredActivities = selectedCategory
		? allActivities.filter(
				(activity) => activity.category === selectedCategory
		  )
		: allActivities;

	return (
		<>
			<StructuredData type="activities" />
			<Head>
				<title>
					All Activities - Su Su Htet | Professional Activities &
					Achievements
				</title>
				<meta
					name="description"
					content="Explore professional activities, achievements, and community involvement from Su Su Htet, showcasing dedication to excellence in financial services and client relationships."
				/>
				<meta
					name="keywords"
					content="professional activities, achievements, community involvement, financial services, insurance, marketing, brand awareness, Su Su Htet"
				/>
				<meta
					property="og:title"
					content="All Activities - Su Su Htet | Professional Activities & Achievements"
				/>
				<meta
					property="og:description"
					content="Explore professional activities, achievements, and community involvement from Su Su Htet."
				/>
				<meta property="og:type" content="website" />
				<link rel="canonical" href="/activities" />
			</Head>

			<main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
				<Navbar />

				{/* Hero Section - Similar to hero-section.tsx */}
				<section
					id="activities-hero"
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
											All Activities
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
										Professional Excellence & Community
										Impact
									</ManualTranslatedText>
								</motion.h2>

								<motion.p
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.6, duration: 0.6 }}
									className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
								>
									<ManualTranslatedText>
										Discover my professional activities,
										achievements, and community involvement
										that showcase dedication to excellence
										in financial services, marketing, and
										client relationships.
									</ManualTranslatedText>
								</motion.p>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.8, duration: 0.6 }}
									className="flex flex-col sm:flex-row gap-4 z-20 relative"
								>
									<button
										onClick={() => {
											document
												.querySelector(
													"#activities-content"
												)
												?.scrollIntoView({
													behavior: "smooth",
												});
										}}
										className="bg-gradient-to-r from-[#b8842a] to-[#c59952] hover:from-[#c59952] hover:to-[#d4af37] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-lg border-0 cursor-pointer z-20 relative flex items-center justify-center"
										type="button"
									>
										<ArrowDown className="mr-2 h-4 w-4" />
										<ManualTranslatedText>
											Explore Activities
										</ManualTranslatedText>
									</button>
									<button
										onClick={() => {
											document
												.querySelector("#contact")
												?.scrollIntoView({
													behavior: "smooth",
												});
										}}
										className="border-2 border-[#b8842a] text-[#b8842a] px-8 py-3 rounded-lg transition-all duration-200 hover:scale-[1.02] bg-transparent cursor-pointer z-20 relative flex items-center justify-center"
										type="button"
									>
										<BookOpen className="mr-2 h-4 w-4" />
										<ManualTranslatedText>
											Get In Touch
										</ManualTranslatedText>
									</button>
								</motion.div>

								{/* Stats & Info Buttons */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 1.0, duration: 0.6 }}
									className="flex gap-3 z-10 relative flex-wrap items-center"
								>
									{/* Stats Buttons - Gold */}
									<motion.div
										whileHover={{ scale: 1.05, y: -2 }}
										transition={{ duration: 0.2 }}
										className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-[#b8842a] to-[#c59952] text-white shadow-lg"
									>
										<Target className="h-5 w-5" />
										<span className="font-medium">
											{allActivities.length} Activities
										</span>
									</motion.div>

									<motion.div
										whileHover={{ scale: 1.05, y: -2 }}
										transition={{ duration: 0.2 }}
										className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-[#b8842a] to-[#c59952] text-white shadow-lg"
									>
										<Award className="h-5 w-5" />
										<span className="font-medium">
											{allCategories.length} Categories
										</span>
									</motion.div>
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
												alt="Su Su Htet"
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
							onClick={() => {
								document
									.querySelector("#activities-content")
									?.scrollIntoView({ behavior: "smooth" });
							}}
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

				{/* Activities Introduction Section */}
				<section className="py-16 bg-background/50">
					<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="space-y-6"
						>
							<h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
								<ManualTranslatedText>
									Activities
								</ManualTranslatedText>
							</h2>

							<div className="h-1 w-20 gradient-gold rounded-full mx-auto" />

							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
								<ManualTranslatedText>
									Explore my comprehensive collection of
									professional activities covering marketing
									campaigns, business development, educational
									initiatives, and leadership training. Filter
									by category to find specific areas of
									expertise.
								</ManualTranslatedText>
							</p>
						</motion.div>
					</div>
				</section>

				{/* Category Filter */}
				<section className="bg-background/95 backdrop-blur-sm border-b border-border/50">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<div className="flex flex-wrap gap-3 justify-center">
								<Button
									variant={
										selectedCategory === null
											? "default"
											: "outline"
									}
									onClick={() => setSelectedCategory(null)}
									className={`${
										selectedCategory === null
											? "gradient-gold text-white shadow-lg cursor-pointer"
											: "hover:bg-gradient-to-r hover:from-[#b8842a] hover:to-[#c59952] hover:text-white border-2 hover:border-[#b8842a] cursor-pointer"
									} transition-all duration-300`}
								>
									<Target className="mr-2 h-4 w-4" />
									<ManualTranslatedText>
										All Activities
									</ManualTranslatedText>
									<Badge variant="secondary" className="ml-2">
										{allActivities.length}
									</Badge>
								</Button>
								{allCategories.map((category) => (
									<Button
										key={category}
										variant={
											selectedCategory === category
												? "default"
												: "outline"
										}
										onClick={() =>
											setSelectedCategory(category)
										}
										className={`${
											selectedCategory === category
												? "gradient-gold text-white shadow-lg cursor-pointer"
												: "hover:bg-gradient-to-r hover:from-[#b8842a] hover:to-[#c59952] hover:text-white border-2 hover:border-[#b8842a] cursor-pointer"
										} transition-all duration-300`}
									>
										<ManualTranslatedText>
											{category}
										</ManualTranslatedText>
									</Button>
								))}
							</div>
						</motion.div>
					</div>
				</section>

				{/* Activities Section */}
				<section id="activities-content" className="py-16 min-h-screen">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						{filteredActivities.length === 0 ? (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className="text-center py-20"
							>
								<div className="max-w-md mx-auto">
									<Target className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
									<h3 className="text-xl font-semibold text-foreground mb-2">
										No activities found
									</h3>
									<p className="text-muted-foreground">
										<ManualTranslatedText>
											No activities found for the selected
											category. Try selecting a different
											category.
										</ManualTranslatedText>
									</p>
								</div>
							</motion.div>
						) : (
							<div className="grid md:grid-cols-2 gap-8">
								{filteredActivities.map((activity, index) => (
									<motion.article
										key={activity.id}
										initial={{ opacity: 0, y: 50 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											duration: 0.6,
											delay: index * 0.1,
										}}
										className="group h-full"
									>
										<div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
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
													<Badge
														variant="secondary"
														className="bg-gradient-to-r from-[#b8842a] to-[#c59952] text-white border-0 text-xs"
													>
														<ManualTranslatedText>
															{activity.category}
														</ManualTranslatedText>
													</Badge>
												</div>

												{/* Share Button */}
												<Button
													variant="ghost"
													size="sm"
													onClick={() =>
														handleShare(activity)
													}
													className="gradient-gold hover:gradient-gold-hover hover:text-white cursor-pointer absolute bottom-4 right-4 gradient-gold text-white hover:gradient-gold-hover transition-all duration-300 p-3 h-auto shadow-lg hover:shadow-xl"
												>
													<Share2 className="h-5 w-5" />
												</Button>
											</div>

											{/* Activity Content */}
											<div className="p-6 flex-1 flex flex-col">
												{/* Meta Info */}
												<div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
													<div className="flex items-center gap-1">
														<Calendar className="h-4 w-4" />
														<span>
															{formatDate(
																activity.date
															)}
														</span>
													</div>
													<div className="flex items-center gap-1">
														<Clock className="h-4 w-4" />
														<span>
															{estimateReadingTime(
																activity.fullContent
															)}{" "}
															min read
														</span>
													</div>
												</div>

												{/* Title */}
												<h3 className="font-playfair text-xl font-bold text-foreground mb-3 leading-tight flex-shrink-0">
													<ManualTranslatedText>
														{activity.title}
													</ManualTranslatedText>
												</h3>

												{/* Content */}
												<div className="flex-1 mb-6">
													<p className="text-muted-foreground text-sm leading-relaxed">
														<ManualTranslatedText>
															{expandedActivity ===
															activity.id
																? activity.fullContent
																: activity.excerpt}
														</ManualTranslatedText>
													</p>
												</div>

												{/* Tags */}
												<div className="flex flex-wrap gap-2 mb-4">
													{activity.tags.map(
														(tag) => (
															<Badge
																key={tag}
																variant="outline"
																className="text-xs"
															>
																<ManualTranslatedText>
																	{tag}
																</ManualTranslatedText>
															</Badge>
														)
													)}
												</div>

												{/* Action Buttons */}
												<div className="mt-auto">
													<Button
														variant="outline"
														className="w-full gradient-gold hover:gradient-gold-hover text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:text-white cursor-pointer"
														onClick={() =>
															toggleReadMore(
																activity.id
															)
														}
													>
														<span className="mr-2">
															{expandedActivity ===
															activity.id
																? "Read Less"
																: "Read More"}
														</span>
														<BookOpen className="h-4 w-4" />
													</Button>
												</div>
											</div>
										</div>
									</motion.article>
								))}
							</div>
						)}
					</div>
				</section>

				<ContactSection />
			</main>
		</>
	);
}
