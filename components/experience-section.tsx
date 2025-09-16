"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const experiences = [
	{
		title: "Financial Services Consultant (MDRT Qualifier)",
		company: "AIA Life Insurance Co. Ltd",
		period: "Aug 2021 – Dec 2024",
		logo: "/images/AIA.png",
		achievements: [
			"Based on client's needs, planning for financial protection",
			"Build a strong base of prospects maintaining productive relationship with clients",
			"Achieve assigned targets monthly and promote",
			"Maintain 24 consecutive months of persistency and 80% Renewal sale",
			"Handle customer complaints, claims, inquiries to maximize customer satisfaction",
			"Have an excellent experience with follow up and strong communication with customer to get referrals",
			"Manage Business Meetings and schedule appointments",
			"75% achieves to MDRT target sale for 2025",
			"Recent record of Highest sale for new Product in the month of launching",
		],
	},
	{
		title: "Treasurer / General Accountant",
		company: "Canal+",
		period: "Sept 2022 – Aug 2024",
		logo: "/images/canal__logo.jpeg",
		achievements: [
			"Mainly work with corporate team, sale and commercial teams. Responsible for budget controlling of Sales staff and Regional Sale Mangers",
			"Manage Cash inflow, outflow for two entities: Holding company and Myanmar Production Company of Canal +",
			"Managing the Commercial payments and Production payments",
			"Report Fund situation and Budget trend monthly",
			"Monitor bank transfers, bank transactions, preparing invoices and receipts",
			"Manage petty cash payments and the replenishments",
			"Reconcile Ledger posting for Receivables and Payables",
			"Familiar with accounting software, spreadsheet and ERP systems",
			"Prepare MIC quarterly report and audit",
			"Maintain WT Records and strong communication with government tax officers",
			"Facilitate CFO with local banks and meeting arrangements",
			"Analyze financial data to provide insights for decision-making",
			"Processing invoices and expense claims",
			"Staying updated on relevant financial regulations and best practices",
			"Monthly bank reconciliation Cash flows",
			"Manage multi-currency transactions and reconciliations in SAP, particularly for international banking",
		],
	},
];

export function ExperienceSection() {
	return (
		<section id="experience" className="py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
						Experience
					</h2>
					<div className="h-1 w-24 gradient-gold rounded-full mx-auto mb-8" />
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						A journey of professional growth and achievement in
						financial services
					</p>
				</motion.div>

				<div className="space-y-8">
					{experiences.map((experience, index) => (
						<motion.div
							key={experience.title}
							initial={{
								opacity: 0,
								x: index % 2 === 0 ? -50 : 50,
							}}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true }}
						>
							<Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-border/50 hover:border-primary/50">
								<CardContent className="p-8">
									<div className="flex flex-col lg:flex-row gap-6">
										<motion.div
											whileHover={{ scale: 1.05 }}
											className="flex-shrink-0"
										>
											<div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center p-2 overflow-hidden">
												<Image
													src={
														experience.logo ||
														"/placeholder.svg"
													}
													alt={experience.company}
													width={60}
													height={60}
													className="object-contain w-full h-full"
												/>
											</div>
										</motion.div>

										<div className="flex-1">
											<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
												<div>
													<h3 className="font-playfair text-2xl font-semibold text-foreground mb-1">
														{experience.title}
													</h3>
													<p className="text-primary font-semibold text-lg">
														{experience.company}
													</p>
												</div>
												<span className="text-muted-foreground font-medium bg-muted px-3 py-1 rounded-full text-sm mt-2 lg:mt-0 w-fit">
													{experience.period}
												</span>
											</div>

											<ul className="space-y-2">
												{experience.achievements.map(
													(
														achievement,
														achievementIndex
													) => (
														<motion.li
															key={
																achievementIndex
															}
															initial={{
																opacity: 0,
																x: 20,
															}}
															whileInView={{
																opacity: 1,
																x: 0,
															}}
															transition={{
																delay:
																	index *
																		0.2 +
																	achievementIndex *
																		0.1,
															}}
															viewport={{
																once: true,
															}}
															className="flex items-start gap-3 text-muted-foreground"
														>
															<div className="w-2 h-2 gradient-gold rounded-full mt-2 flex-shrink-0" />
															<span className="leading-relaxed">
																{achievement}
															</span>
														</motion.li>
													)
												)}
											</ul>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
