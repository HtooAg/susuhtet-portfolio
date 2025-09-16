"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { ManualTranslatedText } from "@/components/manual-translated-text";

const posts = [
	{
		id: 1,
		title: 'AIA Premier Club Membership Unboxing "The Wing of Victory"',
		excerpt:
			'AIA ရဲ့ Rank အမြင့်ဆုံး၊ Premier Club Membership Unboxing "The Wing of Victory" တစ်နှစ်လုံး consistency ရှိရှိနဲ့ တစ်လမပြတ်အလုပ်လုပ်ပြီးရတဲ့ Premier Member တစ်ယောက်ရဲ့ client ဆိုရင် ဦးစားပေးခြင်းခံရတာမျိုးရှိပါတယ်။',
		fullContent: `AIA ရဲ့ Rank အမြင့်ဆုံး၊ Premier Club Membership Unboxing "The Wing of Victory" တစ်နှစ်လုံး consistency ရှိရှိနဲ့ တစ်လမပြတ်အလုပ်လုပ်ပြီးရတဲ့ Premier Member တစ်ယောက်ရဲ့ client ဆိုရင် ဦးစားပေးခြင်းခံရတာမျိုးရှိပါတယ်။ Priority lane ထဲမှာပါနေတဲ့သူတွေပေါ့။ 

ကျွန်မရဲ့ Client တွေ Life protection သိန်း ၅၀၀၀ ထိ အပြင် case တွေမြန်ဆန်ပြီး ဆေးစစ်စရာမလိုတာ ဒီလို Status ရှိနေလို့ပါ။ 

ကျွန်မရဲ့အောင်မြင်မှုနဲ့ client တွေယုံကြည်ပေးမှုဟာ "ကိုင်းကျွန်းမီ ကျွန်းကိုင်းမီ"ပါပဲနော်။ ဆက်လက်ကြိုးစားပါဦးမယ်ရှင်။ 

Su Htet 
MDRT Qualified Advisor 
AIA Premier Club Member 
Infinity Wealth`,
		image: "/images/postAIA.png",
		link: "https://www.facebook.com/permalink.php?story_fbid=pfbid0fBychPf134MBawmSERM52BpYM6QjwKdm321emgfeVdVtoJP34WcsixKuBBG7cJK9l&id=61553978257502",
		date: "August 9, 2025",
	},
	{
		id: 2,
		title: '"အသက်ငယ်တဲ့သူက Insurance က လိုလို့လား"',
		excerpt:
			"တကယ်က Live too Long ကိုကြောက်လို့ပါ။ Retirement plan အတွက်စဉ်းစားတဲ့အခါ Insurance မှာ အသက် ၈၀ အထိ ကာကွယ်ပေးမယ့် longterm plan ရှိပါတယ်။",
		fullContent: `"အသက်ငယ်တဲ့သူက Insurance က လိုလို့လား"

တကယ်က Live too Long ကိုကြောက်လို့ပါ။   

Retirement plan အတွက်စဉ်းစားတဲ့အခါ Insurance မှာ အသက် ၈၀ အထိ ကာကွယ်ပေးမယ့် longterm plan ရှိပါတယ်။

စည်းစိမ်ပြုတ်ကုရတဲ့ ကင်ဆာအတွက် ကုသစရိတ် ကာကွယ်ပေးထားပါတယ်။

ရင်းနှီးမြုပ်နှံလိုက်တဲ့ ငွေကြေးအတွက် တိုးရင်းပေါင်း ပြန်ပေးပါတယ်။

အသုံးစရိတ်လိုအပ်လာတဲ့အခါ နောက်ပိုင်းပြန်ထုတ်နိုင်တဲ့ အခွင့်အရေးရှိတဲ့ အတွက် အရမ်း အဆင်ပြေပါတယ်။ 

ငွေမှန်မှန် saving  လုပ်တဲ့အတွက် နှစ်ပြည့် Bonus ထည့်ပေးပါတယ်။ 

နှစ်ကြာလာလို့ ဝင်ငွေမရှိချိန် premium holiday ယူလို့ရပါတယ်။ 

အခုချိန် ကိုယ်ထည့်လိုက်ရတဲ့ premium ပမာဏထက် အဆ ၅၀/၇၀ လောက်က သေချာတဲ့ အကာအကွယ်ပါ။ 

တစ်နှစ်စာ အနည်းဆုံး ငွေပမာဏ ၄ သိန်းမှစတင်ထားလို့ရတဲ့ အတွက် လူတိုင်း ထားနိုင်ပါတယ်။

စုဆောင်းငွေထားခြင်းဟာ မသေချာတဲ့ မနက်ဖြန် အတွက် သေချာတာရင်းနှီး မြုပ်နှံခြင်းပါ။

ဇူလိုင်လ၊ ၂၀၂၂

Su Htet
MDRT 2025
AIA Premier Member 
InfinityWealth`,
		image: "/images/postAIA1.jpg",
		link: "https://www.facebook.com/permalink.php?story_fbid=pfbid0T2UkLvRovtMhcAjW8ayr4qGwdfiCXc44PXd7CPSNuz5sf8CDuXC6EydhPENTDeHAl&id=61553978257502",
		date: "July 25, 2025",
	},
];

export function PostsSection() {
	const [expandedPost, setExpandedPost] = useState<number | null>(null);

	const toggleExpand = (postId: number) => {
		setExpandedPost(expandedPost === postId ? null : postId);
	};

	const handleGoLive = (link: string) => {
		if (link !== "#") {
			window.open(link, "_blank");
		}
	};

	return (
		<section id="posts" className="py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
						<ManualTranslatedText>Posts</ManualTranslatedText>
					</h2>
					<div className="h-1 w-24 gradient-gold rounded-full mx-auto mb-8" />
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						<ManualTranslatedText>
							Insights and achievements in financial services and
							client success stories
						</ManualTranslatedText>
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-8">
					{posts.map((post, index) => (
						<motion.div
							key={post.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true }}
						>
							<Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-primary/50 overflow-hidden">
								<div className="relative h-64 overflow-hidden">
									<Image
										src={post.image || "/placeholder.svg"}
										alt={post.title}
										fill
										className="object-cover object-center transition-transform duration-300 hover:scale-105"
									/>
									<div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
										<ManualTranslatedText>
											{post.date}
										</ManualTranslatedText>
									</div>
								</div>

								<CardContent className="p-6">
									<h3 className="font-playfair text-xl font-semibold text-foreground mb-3 line-clamp-2">
										<ManualTranslatedText>
											{post.title}
										</ManualTranslatedText>
									</h3>

									<div className="text-muted-foreground leading-relaxed mb-4">
										{expandedPost === post.id ? (
											<div className="whitespace-pre-line">
												<ManualTranslatedText>
													{post.fullContent}
												</ManualTranslatedText>
											</div>
										) : (
											<div className="line-clamp-3">
												<ManualTranslatedText>
													{post.excerpt}
												</ManualTranslatedText>
											</div>
										)}
									</div>

									<div className="flex flex-col sm:flex-row gap-3">
										<Button
											variant="outline"
											onClick={() =>
												toggleExpand(post.id)
											}
											className="flex-1 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
										>
											{expandedPost === post.id ? (
												<>
													<ChevronUp className="mr-2 h-4 w-4" />
													<ManualTranslatedText>
														See Less
													</ManualTranslatedText>
												</>
											) : (
												<>
													<ChevronDown className="mr-2 h-4 w-4" />
													<ManualTranslatedText>
														See More
													</ManualTranslatedText>
												</>
											)}
										</Button>

										{post.link !== "#" && (
											<motion.div
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
											>
												<Button
													onClick={() =>
														handleGoLive(post.link)
													}
													className="flex-1 gradient-gold hover:gradient-gold-hover text-white transition-all duration-300"
												>
													<ExternalLink className="mr-2 h-4 w-4" />
													<ManualTranslatedText>
														Go Live
													</ManualTranslatedText>
												</Button>
											</motion.div>
										)}
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
