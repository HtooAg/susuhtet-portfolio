"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { ManualTranslatedText } from "@/components/manual-translated-text";

const education = [
	{
		degree: "Diploma in Marketing Management",
		institution: "ICM UK Higher Diploma",
		year: "2024",
		status: "Completed",
		type: "Higher Diploma",
	},
	{
		degree: "Diploma in Accounting",
		institution: "UK Pearson",
		year: "2018",
		status: "Completed",
		type: "Diploma",
	},
	{
		degree: "Association of Chartered Certified Accountants (ACCA)",
		institution: "Diploma in Accounting & Business",
		year: "2018",
		status: "Completed",
		type: "Professional Qualification",
	},
	{
		degree: "Bachelors of Arts (French)",
		institution: "University of Foreign Languages Yangon",
		year: "2017",
		status: "Completed",
		type: "Bachelor's Degree",
	},
];

export function EducationSection() {
	return (
		<section id="education" className="py-20 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
						<ManualTranslatedText>Education</ManualTranslatedText>
					</h2>
					<div className="h-1 w-24 gradient-gold rounded-full mx-auto mb-8" />
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						<ManualTranslatedText>
							Continuous learning and professional development in
							finance and business
						</ManualTranslatedText>
					</p>
				</motion.div>

				<div className="max-w-4xl mx-auto">
					<div className="relative">
						{/* Timeline line */}
						<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>

						<div className="space-y-8">
							{education.map((edu, index) => (
								<motion.div
									key={edu.degree}
									initial={{ opacity: 0, x: -50 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{
										duration: 0.6,
										delay: index * 0.1,
									}}
									viewport={{ once: true }}
									className="relative flex items-start gap-6"
								>
									{/* Timeline dot */}
									<div className="relative z-10 flex-shrink-0">
										<motion.div
											whileHover={{ scale: 1.2 }}
											className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-lg"
										>
											<GraduationCap className="h-8 w-8 text-white" />
										</motion.div>
									</div>

									{/* Content */}
									<div className="flex-1 bg-background rounded-lg border border-border/50 p-6 shadow-sm hover:shadow-md transition-all duration-150">
										<div className="flex items-center justify-between mb-3">
											<div className="flex items-center gap-3">
												<span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
													<ManualTranslatedText>
														{edu.year}
													</ManualTranslatedText>
												</span>
												<span
													className={`text-xs px-2 py-1 rounded-full font-medium ${
														edu.status ===
														"Completed"
															? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
															: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
													}`}
												>
													<ManualTranslatedText>
														{edu.status}
													</ManualTranslatedText>
												</span>
											</div>
											<span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
												<ManualTranslatedText>
													{edu.type}
												</ManualTranslatedText>
											</span>
										</div>

										<h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
											<ManualTranslatedText>
												{edu.degree}
											</ManualTranslatedText>
										</h3>

										<p className="text-muted-foreground flex items-center gap-2">
											<GraduationCap className="h-4 w-4" />
											<ManualTranslatedText>
												{edu.institution}
											</ManualTranslatedText>
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
