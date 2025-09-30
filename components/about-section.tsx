"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
	Award,
	Users,
	TrendingUp,
	Shield,
	Eye,
	Heart,
	MessageCircle,
	Share2,
	DollarSign,
	Calendar,
} from "lucide-react";
import { ManualTranslatedText } from "@/components/manual-translated-text";
import { useState, useEffect } from "react";

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

// Analytics Dashboard Data - Different datasets for each time period
const analyticsDataSets = {
	"7 days": {
		overview: {
			postViews: {
				value: "2.1K",
				change: "+450 (+27.3%)",
				trend: "up",
				numValue: 2100,
			},
			profileViews: {
				value: "89",
				change: "+23 (+34.8%)",
				trend: "up",
				numValue: 89,
			},
			likes: {
				value: "156",
				change: "+45 (+40.5%)",
				trend: "up",
				numValue: 156,
			},
			comments: {
				value: "12",
				change: "+8 (+200%)",
				trend: "up",
				numValue: 12,
			},
			shares: {
				value: "8",
				change: "+3 (+60%)",
				trend: "up",
				numValue: 8,
			},
			rewards: {
				value: "$0.15",
				change: "+$0.12 (+400%)",
				trend: "up",
				numValue: 0.15,
			},
		},
		chartData: [
			{ date: "Sep 20", value: 180 },
			{ date: "Sep 21", value: 220 },
			{ date: "Sep 22", value: 280 },
			{ date: "Sep 23", value: 350 },
			{ date: "Sep 24", value: 420 },
			{ date: "Sep 25", value: 380 },
			{ date: "Sep 26", value: 450 },
		],
		dateRange: "Sep 20 - Sep 26",
	},
	"28 days": {
		overview: {
			postViews: {
				value: "12K",
				change: "-3.7M (-99.7%)",
				trend: "down",
				numValue: 12000,
			},
			profileViews: {
				value: "157",
				change: "-119K (-99.9%)",
				trend: "down",
				numValue: 157,
			},
			likes: {
				value: "523",
				change: "-323K (-99.8%)",
				trend: "down",
				numValue: 523,
			},
			comments: {
				value: "19",
				change: "-2,474 (-100.8%)",
				trend: "down",
				numValue: 19,
			},
			shares: {
				value: "14",
				change: "+10 (+250%)",
				trend: "up",
				numValue: 14,
			},
			rewards: {
				value: "$0.01",
				change: "+$0.01 (+100%)",
				trend: "up",
				numValue: 0.01,
			},
		},
		chartData: [
			{ date: "Aug 30", value: 200 },
			{ date: "Sep 2", value: 180 },
			{ date: "Sep 5", value: 220 },
			{ date: "Sep 8", value: 350 },
			{ date: "Sep 11", value: 420 },
			{ date: "Sep 14", value: 580 },
			{ date: "Sep 17", value: 720 },
			{ date: "Sep 20", value: 890 },
			{ date: "Sep 23", value: 650 },
			{ date: "Sep 26", value: 480 },
		],
		dateRange: "Aug 30 - Sep 26",
	},
	"60 days": {
		overview: {
			postViews: {
				value: "28.5K",
				change: "+8.2K (+40.3%)",
				trend: "up",
				numValue: 28500,
			},
			profileViews: {
				value: "892",
				change: "+234 (+35.6%)",
				trend: "up",
				numValue: 892,
			},
			likes: {
				value: "1.8K",
				change: "+567 (+46.1%)",
				trend: "up",
				numValue: 1800,
			},
			comments: {
				value: "145",
				change: "+89 (+159%)",
				trend: "up",
				numValue: 145,
			},
			shares: {
				value: "67",
				change: "+34 (+103%)",
				trend: "up",
				numValue: 67,
			},
			rewards: {
				value: "$2.45",
				change: "+$1.89 (+337%)",
				trend: "up",
				numValue: 2.45,
			},
		},
		chartData: [
			{ date: "Jul 28", value: 320 },
			{ date: "Aug 4", value: 450 },
			{ date: "Aug 11", value: 580 },
			{ date: "Aug 18", value: 720 },
			{ date: "Aug 25", value: 890 },
			{ date: "Sep 1", value: 1050 },
			{ date: "Sep 8", value: 1200 },
			{ date: "Sep 15", value: 980 },
			{ date: "Sep 22", value: 1150 },
			{ date: "Sep 26", value: 1300 },
		],
		dateRange: "Jul 28 - Sep 26",
	},
	"365 days": {
		overview: {
			postViews: {
				value: "156K",
				change: "+89K (+133%)",
				trend: "up",
				numValue: 156000,
			},
			profileViews: {
				value: "12.3K",
				change: "+5.7K (+86.4%)",
				trend: "up",
				numValue: 12300,
			},
			likes: {
				value: "8.9K",
				change: "+4.2K (+89.3%)",
				trend: "up",
				numValue: 8900,
			},
			comments: {
				value: "567",
				change: "+289 (+104%)",
				trend: "up",
				numValue: 567,
			},
			shares: {
				value: "234",
				change: "+156 (+200%)",
				trend: "up",
				numValue: 234,
			},
			rewards: {
				value: "$45.67",
				change: "+$32.45 (+246%)",
				trend: "up",
				numValue: 45.67,
			},
		},
		chartData: [
			{ date: "Oct 2023", value: 800 },
			{ date: "Dec 2023", value: 1200 },
			{ date: "Feb 2024", value: 1800 },
			{ date: "Apr 2024", value: 2400 },
			{ date: "Jun 2024", value: 2100 },
			{ date: "Jul 2024", value: 2800 },
			{ date: "Aug 2024", value: 3200 },
			{ date: "Sep 2024", value: 2900 },
		],
		dateRange: "Oct 2023 - Sep 2024",
	},
};

const timeFilters = ["7 days", "28 days", "60 days", "365 days"];

// Analytics Dashboard Component
const AnalyticsDashboard = () => {
	const [selectedFilter, setSelectedFilter] = useState("28 days");
	const [animatedValues, setAnimatedValues] = useState<
		Record<string, number>
	>({});
	const [isAnimating, setIsAnimating] = useState(false);

	// Get current dataset based on selected filter
	const currentData =
		analyticsDataSets[selectedFilter as keyof typeof analyticsDataSets];

	// Animate numbers when filter changes
	useEffect(() => {
		setIsAnimating(true);

		const targets = {
			postViews: currentData.overview.postViews.numValue,
			profileViews: currentData.overview.profileViews.numValue,
			likes: currentData.overview.likes.numValue,
			comments: currentData.overview.comments.numValue,
			shares: currentData.overview.shares.numValue,
		};

		// Reset animated values
		setAnimatedValues({});

		Object.entries(targets).forEach(([key, target]) => {
			let current = 0;
			const increment = target / 40;
			const timer = setInterval(() => {
				current += increment;
				if (current >= target) {
					current = target;
					clearInterval(timer);
				}
				setAnimatedValues((prev) => ({
					...prev,
					[key]: Math.floor(current),
				}));
			}, 25);
		});

		// Set animation complete after delay
		setTimeout(() => setIsAnimating(false), 1000);
	}, [selectedFilter, currentData]);

	const maxValue = Math.max(...currentData.chartData.map((d) => d.value));

	// Handle filter change with smooth transition
	const handleFilterChange = (filter: string) => {
		if (filter !== selectedFilter) {
			setSelectedFilter(filter);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true }}
			className="mt-16"
		>
			<Card className="overflow-hidden border-border/50 shadow-xl">
				<CardContent className="p-0">
					{/* Dashboard Header */}
					<div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 border-b border-border/50">
						<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
							<div>
								<h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
									<ManualTranslatedText>
										Performance Analytics
									</ManualTranslatedText>
								</h3>
								<p className="text-muted-foreground">
									<ManualTranslatedText>
										Professional insights and engagement
										metrics
									</ManualTranslatedText>
								</p>
							</div>

							{/* Time Filter Tabs */}
							<div className="flex gap-2 bg-background/50 p-1 rounded-lg border border-border/30">
								{timeFilters.map((filter) => (
									<button
										key={filter}
										onClick={() =>
											handleFilterChange(filter)
										}
										className={`px-3 py-2 text-sm rounded-md transition-all duration-300 cursor-pointer ${
											selectedFilter === filter
												? "bg-gradient-to-r from-[#b8842a] to-[#c59952] text-white shadow-lg"
												: "text-muted-foreground hover:text-foreground hover:bg-gradient-to-r hover:from-[#b8842a]/20 hover:to-[#c59952]/20"
										}`}
									>
										{filter}
									</button>
								))}
							</div>
						</div>
					</div>

					{/* Key Metrics Grid */}
					<div className="p-6">
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
							{/* Post Views */}
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.1 }}
								viewport={{ once: true }}
								className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 p-4 rounded-xl border border-blue-200/50 dark:border-blue-800/50"
							>
								<div className="flex items-center gap-2 mb-2">
									<Eye className="h-4 w-4 text-blue-600 dark:text-blue-400" />
									<span className="text-xs text-muted-foreground">
										Post views
									</span>
								</div>
								<div
									className={`text-2xl font-bold text-foreground mb-1 transition-all duration-500 ${
										isAnimating ? "scale-110" : "scale-100"
									}`}
								>
									{animatedValues.postViews?.toLocaleString() ||
										currentData.overview.postViews.value}
								</div>
								<div
									className={`text-xs flex items-center gap-1 ${
										currentData.overview.postViews.trend ===
										"up"
											? "text-green-500"
											: "text-red-500"
									}`}
								>
									<TrendingUp
										className={`h-3 w-3 ${
											currentData.overview.postViews
												.trend === "down"
												? "rotate-180"
												: ""
										}`}
									/>
									<span>
										{currentData.overview.postViews.change}
									</span>
								</div>
							</motion.div>

							{/* Profile Views */}
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								viewport={{ once: true }}
								className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 p-4 rounded-xl border border-green-200/50 dark:border-green-800/50"
							>
								<div className="flex items-center gap-2 mb-2">
									<Users className="h-4 w-4 text-green-600 dark:text-green-400" />
									<span className="text-xs text-muted-foreground">
										Profile views
									</span>
								</div>
								<div
									className={`text-2xl font-bold text-foreground mb-1 transition-all duration-500 ${
										isAnimating ? "scale-110" : "scale-100"
									}`}
								>
									{animatedValues.profileViews?.toLocaleString() ||
										currentData.overview.profileViews.value}
								</div>
								<div
									className={`text-xs flex items-center gap-1 ${
										currentData.overview.profileViews
											.trend === "up"
											? "text-green-500"
											: "text-red-500"
									}`}
								>
									<TrendingUp
										className={`h-3 w-3 ${
											currentData.overview.profileViews
												.trend === "down"
												? "rotate-180"
												: ""
										}`}
									/>
									<span>
										{
											currentData.overview.profileViews
												.change
										}
									</span>
								</div>
							</motion.div>

							{/* Likes */}
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								viewport={{ once: true }}
								className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/30 dark:to-pink-900/30 p-4 rounded-xl border border-pink-200/50 dark:border-pink-800/50"
							>
								<div className="flex items-center gap-2 mb-2">
									<Heart className="h-4 w-4 text-pink-600 dark:text-pink-400" />
									<span className="text-xs text-muted-foreground">
										Likes
									</span>
								</div>
								<div
									className={`text-2xl font-bold text-foreground mb-1 transition-all duration-500 ${
										isAnimating ? "scale-110" : "scale-100"
									}`}
								>
									{animatedValues.likes?.toLocaleString() ||
										currentData.overview.likes.value}
								</div>
								<div
									className={`text-xs flex items-center gap-1 ${
										currentData.overview.likes.trend ===
										"up"
											? "text-green-500"
											: "text-red-500"
									}`}
								>
									<TrendingUp
										className={`h-3 w-3 ${
											currentData.overview.likes.trend ===
											"down"
												? "rotate-180"
												: ""
										}`}
									/>
									<span>
										{currentData.overview.likes.change}
									</span>
								</div>
							</motion.div>

							{/* Comments */}
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.4 }}
								viewport={{ once: true }}
								className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 p-4 rounded-xl border border-purple-200/50 dark:border-purple-800/50"
							>
								<div className="flex items-center gap-2 mb-2">
									<MessageCircle className="h-4 w-4 text-purple-600 dark:text-purple-400" />
									<span className="text-xs text-muted-foreground">
										Comments
									</span>
								</div>
								<div
									className={`text-2xl font-bold text-foreground mb-1 transition-all duration-500 ${
										isAnimating ? "scale-110" : "scale-100"
									}`}
								>
									{animatedValues.comments?.toLocaleString() ||
										currentData.overview.comments.value}
								</div>
								<div
									className={`text-xs flex items-center gap-1 ${
										currentData.overview.comments.trend ===
										"up"
											? "text-green-500"
											: "text-red-500"
									}`}
								>
									<TrendingUp
										className={`h-3 w-3 ${
											currentData.overview.comments
												.trend === "down"
												? "rotate-180"
												: ""
										}`}
									/>
									<span>
										{currentData.overview.comments.change}
									</span>
								</div>
							</motion.div>

							{/* Shares */}
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.5 }}
								viewport={{ once: true }}
								className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 p-4 rounded-xl border border-orange-200/50 dark:border-orange-800/50"
							>
								<div className="flex items-center gap-2 mb-2">
									<Share2 className="h-4 w-4 text-orange-600 dark:text-orange-400" />
									<span className="text-xs text-muted-foreground">
										Shares
									</span>
								</div>
								<div
									className={`text-2xl font-bold text-foreground mb-1 transition-all duration-500 ${
										isAnimating ? "scale-110" : "scale-100"
									}`}
								>
									{animatedValues.shares?.toLocaleString() ||
										currentData.overview.shares.value}
								</div>
								<div
									className={`text-xs flex items-center gap-1 ${
										currentData.overview.shares.trend ===
										"up"
											? "text-green-500"
											: "text-red-500"
									}`}
								>
									<TrendingUp
										className={`h-3 w-3 ${
											currentData.overview.shares
												.trend === "down"
												? "rotate-180"
												: ""
										}`}
									/>
									<span>
										{currentData.overview.shares.change}
									</span>
								</div>
							</motion.div>

							{/* Rewards */}
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.6 }}
								viewport={{ once: true }}
								className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950/30 dark:to-yellow-900/30 p-4 rounded-xl border border-yellow-200/50 dark:border-yellow-800/50"
							>
								<div className="flex items-center gap-2 mb-2">
									<DollarSign className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
									<span className="text-xs text-muted-foreground">
										Est. rewards
									</span>
								</div>
								<div
									className={`text-2xl font-bold text-foreground mb-1 transition-all duration-500 ${
										isAnimating ? "scale-110" : "scale-100"
									}`}
								>
									{currentData.overview.rewards.value}
								</div>
								<div
									className={`text-xs flex items-center gap-1 ${
										currentData.overview.rewards.trend ===
										"up"
											? "text-green-500"
											: "text-red-500"
									}`}
								>
									<TrendingUp
										className={`h-3 w-3 ${
											currentData.overview.rewards
												.trend === "down"
												? "rotate-180"
												: ""
										}`}
									/>
									<span>
										{currentData.overview.rewards.change}
									</span>
								</div>
							</motion.div>
						</div>

						{/* Chart Area */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							viewport={{ once: true }}
							className="bg-gradient-to-br from-background/50 to-muted/30 p-6 rounded-xl border border-border/30"
						>
							<div className="flex items-center justify-between mb-6">
								<h4 className="font-semibold text-foreground">
									<ManualTranslatedText>
										Engagement Trends
									</ManualTranslatedText>
								</h4>
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<Calendar className="h-4 w-4" />
									<span>{currentData.dateRange}</span>
								</div>
							</div>

							{/* Custom Chart */}
							<div className="relative h-48 mb-4">
								<svg
									className="w-full h-full"
									viewBox="0 0 400 200"
								>
									{/* Grid Lines */}
									{[0, 1, 2, 3, 4].map((i) => (
										<line
											key={i}
											x1="0"
											y1={i * 40}
											x2="400"
											y2={i * 40}
											stroke="currentColor"
											strokeOpacity="0.1"
											strokeWidth="1"
										/>
									))}

									{/* Chart Area */}
									<defs>
										<linearGradient
											id="chartGradient"
											x1="0%"
											y1="0%"
											x2="0%"
											y2="100%"
										>
											<stop
												offset="0%"
												stopColor="rgb(59, 130, 246)"
												stopOpacity="0.3"
											/>
											<stop
												offset="100%"
												stopColor="rgb(59, 130, 246)"
												stopOpacity="0.05"
											/>
										</linearGradient>
									</defs>

									{/* Chart Path */}
									<motion.path
										initial={{ pathLength: 0 }}
										whileInView={{ pathLength: 1 }}
										transition={{
											duration: 2,
											ease: "easeInOut",
										}}
										viewport={{ once: true }}
										d={`M 0 ${
											200 -
											(currentData.chartData[0].value /
												maxValue) *
												180
										} ${currentData.chartData
											.map(
												(point, index) =>
													`L ${
														(index * 400) /
														(currentData.chartData
															.length -
															1)
													} ${
														200 -
														(point.value /
															maxValue) *
															180
													}`
											)
											.join(" ")}`}
										fill="url(#chartGradient)"
										stroke="rgb(59, 130, 246)"
										strokeWidth="2"
									/>

									{/* Data Points */}
									{currentData.chartData.map(
										(point, index) => (
											<motion.circle
												key={index}
												initial={{ scale: 0 }}
												whileInView={{ scale: 1 }}
												transition={{
													duration: 0.3,
													delay: index * 0.1,
												}}
												viewport={{ once: true }}
												cx={
													(index * 400) /
													(currentData.chartData
														.length -
														1)
												}
												cy={
													200 -
													(point.value / maxValue) *
														180
												}
												r="4"
												fill="rgb(59, 130, 246)"
												className="hover:r-6 transition-all duration-200 cursor-pointer"
											/>
										)
									)}
								</svg>

								{/* Y-axis Labels */}
								<div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-muted-foreground -ml-8">
									<span>{maxValue.toLocaleString()}</span>
									<span>
										{(maxValue * 0.75).toLocaleString()}
									</span>
									<span>
										{(maxValue * 0.5).toLocaleString()}
									</span>
									<span>
										{(maxValue * 0.25).toLocaleString()}
									</span>
									<span>0</span>
								</div>
							</div>

							{/* X-axis Labels */}
							<div className="flex justify-between text-xs text-muted-foreground">
								<span>{currentData.chartData[0].date}</span>
								<span>
									{
										currentData.chartData[
											currentData.chartData.length - 1
										].date
									}
								</span>
							</div>
						</motion.div>
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);
};

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
							Financial Services Consultant professional with 5+
							years of international experience in Insurance,
							Finance and Media Branding. Skilled in data
							analysis, cross-cultural communication, campaign
							management. Achieved Million Dollar Round Table
							(MDRT) and managing 100+ clients across the world.
							Recognized as 32 months sale consistency advisor.
							Have an experience of running campaigns and social
							media branding and marketing sessions.
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

				{/* Analytics Dashboard */}
				<AnalyticsDashboard />
			</div>
		</section>
	);
}
