"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ManualTranslatedText } from "@/components/manual-translated-text";

const posts = [
	{
		id: 1,
		title: "Insurance isn't  \"I'll do it later\"...........‼️",
		excerpt:
			"အသက် 39 မပြည့်ခင်လုပ်ရမှာ life insurance ထားတာပါ။ သိန်း ၁၀၀၀ ကို တစ်နှစ် သိန်း ၂၀ သာသွင်းရပါတယ်။ 39 နှစ်ပြည့်ပြီး 40 ရောက်ရင်တော့ 28 သိန်း ကျော်သွားပါပြီ။ တစ်ဖန် အသက် ၄၅ ကျော်ရင် ပိုစျေးကြီးပါပြီ။ သိန်း ၁၀၀၀ အတွက် တစ်နှစ် သိန်း ၂၀ စုရင် နှစ် ၅၀ ကြာပါမယ်။ နှစ် ၅၀ ရှေ့ပြေးပြီး သိန်း ၁၀၀၀ ကို ကိုယ်ချစ်ရသူတွေအတွက် protection ကြိုယူထားနိုင်တာ insurance ပါ။",
		fullContent: `Insurance isn't "I'll do it later".အသက် 39 မပြည့်ခင်လုပ်ရမှာ life insurance ထားတာပါ။ သိန်း ၁၀၀၀ ကို တစ်နှစ် သိန်း ၂၀ သာသွင်းရပါတယ်။  39 နှစ်ပြည့်ပြီး 40 ရောက်ရင်တော့ 28 သိန်း ကျော်သွားပါပြီ။ တစ်ဖန် အသက် ၄၅ ကျော်ရင် ပိုစျေးကြီးပါပြီ။ သိန်း ၁၀၀၀ အတွက် တစ်နှစ် သိန်း ၂၀ စုရင် နှစ် ၅၀ ကြာပါမယ်။ နှစ် ၅၀ ရှေ့ပြေးပြီး သိန်း ၁၀၀၀ ကို ကိုယ်ချစ်ရသူတွေအတွက် protection ကြိုယူထားနိုင်တာ insurance ပါ။ နှစ်စဉ်သွင်းထားသောငွေသည်လည်း တစ်ချိန် ကိုယ့်ရဲ့ retirement fund အတွက်ပါ ဖယ်ပြီးသားဖြစ်နေပါမယ်။ အသက်အာမခံထားတာ ပိုက်ဆံအိတ်သေးလေးထဲငွေကို နောက်ထက်အိတ်ထဲ ခဏရွှေ့ထားသလိုပါပဲ။ သိန်း ၁၀၀၀ တန် စာချုပ်လေးတွေ ခပ်များများ ပြောင်းထားတဲ့သဘောပါ။ ကင်ဆာကုသစရိတ်ကြိုထုတ်ပေးဦးမှာသိန်း ၁၀၀၀ မလိုဘူးဆိုရင်လည်း သိန်း ၂၀၀ တန်ရှိပါတယ်။ သိန်း ၁၀၀၀ နည်းတယ်ဆိုရင်လည်း သိန်း ၁၀,၀၀၀ ထိ ထားပါ။ Value of money မြင့်လာလေ life value လေး မြှင့်ထားဖို့ လိုအပ်လေသိန်း ၁၀၀၀ တန် စာချုပ်ကို သိန်း ၂၀ ပေးရတဲ့အခါ ၂ သိန်းလျှော့သွင်းချင်ရင် လမကုန်ခင် အမြန်ဆုံးဆက်သွယ် မေးမြန်းပါရှင်။ Su Su HtetAIA InfinityWealth #AIAMyanmar #universallifeinsurance#financialplanning #insurance #SuHtetဘာကြောင့် ငယ်ရွယ်စဉ်မှာ အာမခံထားသင့်တာလဲ။`,
		image: "/images/PostAIA.jpg",
		link: "https://www.facebook.com/photo/?fbid=122145948818132608&set=a.122102687576132608",
		date: "May 26, 2024",
	},
	{
		id: 2,
		title: "IW Agency Open Day at AIA Myanmar",
		excerpt:
			"AIA Myanmar ရုံးချုပ်မှာ ပြုလုပ်ခဲ့ကြတဲဲ့ အလုပ်အကိုင် အခွင့်အလမ်း ဆွေးနွေးပွဲဖြစ်ပါတယ်။Professional ဆန်တဲ့ Career တစ်ခုနဲ့အတူ ​ဂုဏ်ယူစရာအသက်​မွေး၀မ်း​ကြောင်းတစ်ခုကိုစတင်ဖို့ စိတ်အားထက်သန်ကြသူများပါဝင် တက်ရောက်ကြပါတယ်။",
		fullContent: `IW Agency Open Day at AIA MyanmarAIA Myanmar ရုံးချုပ်မှာ ပြုလုပ်ခဲ့ကြတဲဲ့ အလုပ်အကိုင် အခွင့်အလမ်း ဆွေးနွေးပွဲဖြစ်ပါတယ်။Professional ဆန်တဲ့ Career တစ်ခုနဲ့အတူ ​ဂုဏ်ယူစရာအသက်​မွေး၀မ်း​ကြောင်းတစ်ခုကိုစတင်ဖို့ စိတ်အားထက်သန်ကြသူများပါဝင် တက်ရောက်ကြပါတယ်။ကမ္ဘာ့အကြီးဆုံး အသက်အာမခံ company ဖြစ်တဲ့ AIA အဖွဲ့အစည်းမှာ သင့်အတွက်အခွင့်​ရေး​တွေရှိ​နေပါပြီ။နိုင်ငံတကာ incentive trip တွေနဲ့ working environment ကောင်းကောင်းတစ်ခုမှာ လုပ်ဖို့စိတ်ကူးရှိနေပါပြီဆိုရင်​2024 မှာ Professional ကျကျ၊ work-life balance ဖြစ်တဲ့ ခိုင်မာသော အသက်မွေးဝမ်းကြောင်းတစ်ခုကနေ massive income တစ်ခုရသည်အထိ ကျွန်မနှင့်အတူဖန်တီးနိုင်မှာပါ။Career Opportunity Talk များ စိတ်ဝင်စားလို့တက်ရောက်လိုပါက စာရင်းကြိုတင်ပေးထားနိုင်ပါတယ်။Su Su HtetAIA InfinityWealth#HealthierLongerBetterLives #AIAMyanmar #vacancy #FinancialServicesConsultant #AIAInfinityWealth`,
		image: "/images/postAIA1.jpg",
		link: "https://www.facebook.com/photo?fbid=122143600526132608&set=pcb.122143600748132608",
		date: "May 13, 2024",
	},
	{
		id: 3,
		title: "17 March 2024 (Sunday) Art Exhibition",
		excerpt:
			'ဝန်ကြီးများရုံးရှိ AIA KHIT မှာ Nawaday Tharlar Galleryနဲ့ အတူ ပူးပေါင်းကျင်းပပြုလုပ်မယ့် "Dancers In Life" ပန်းချီပြပွဲကတစ်ဆင့် မြန်မာအမျိုးသမီးများရဲ့ဘဝရသအစုံစုံကို ခံစားဂုဏ်ပြုဖို့ ဖိတ်ခေါ်လိုက်ပါတယ်။',
		fullContent: `17 March 2024 (Sunday) Art Exhibition ဝန်ကြီးများရုံးရှိ AIA KHIT မှာ Nawaday Tharlar Galleryနဲ့ အတူ ပူးပေါင်းကျင်းပပြုလုပ်မယ့် "Dancers In Life" ပန်းချီပြပွဲကတစ်ဆင့် မြန်မာအမျိုးသမီးများရဲ့ဘဝရသအစုံစုံကို ခံစားဂုဏ်ပြုဖို့ ဖိတ်ခေါ်လိုက်ပါတယ်။ပန်းချီပြပွဲတက်ရောက်သူတွေအတွက်ပန်းချီကားတစ်ချပ် လက်ဆောင်ရနိုင်တဲ့အခွင့်အရေးရှိပါမယ်နော်။ မနက်ဖြန် နောက်ဆုံးနေ့ဖြစ်ပါတယ်။ လာရောက်မယ်ဆို ကျွန်မရှိပါမယ်ရှင်။`,
		image: "/images/postAIA2.jpg",
		link: "https://www.facebook.com/story.php?story_fbid=3722805457931515&id=100006062910575&mibextid=wwXIfr&rdid=apNbT3dR7jP0ZexK#",
		date: "March 16, 2024",
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

				<div className="grid lg:grid-cols-3 gap-8 mb-12">
					{posts.map((post, index) => (
						<motion.div
							key={post.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true }}
						>
							<Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-primary/50 overflow-hidden group">
								<div className="relative h-64 overflow-hidden">
									<Image
										src={post.image || "/placeholder.svg"}
										alt={post.title}
										fill
										className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									<div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
										<ManualTranslatedText>
											{post.date}
										</ManualTranslatedText>
									</div>
								</div>

								<CardContent className="p-6">
									<h3 className="font-playfair text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
										<ManualTranslatedText>
											{post.title}
										</ManualTranslatedText>
									</h3>

									<div className="text-muted-foreground leading-relaxed mb-4">
										{expandedPost === post.id ? (
											<div className="whitespace-pre-line text-sm max-h-60 overflow-y-auto">
												<ManualTranslatedText>
													{post.fullContent}
												</ManualTranslatedText>
											</div>
										) : (
											<div className="line-clamp-3 text-sm">
												<ManualTranslatedText>
													{post.excerpt}
												</ManualTranslatedText>
											</div>
										)}
									</div>

									<div className="flex flex-col gap-3">
										<Button
											variant="outline"
											onClick={() =>
												toggleExpand(post.id)
											}
											className="w-full border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
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
														Read More
													</ManualTranslatedText>
												</>
											)}
										</Button>

										{post.link !== "#" && (
											<motion.div
												whileHover={{ scale: 1.02 }}
												whileTap={{ scale: 0.98 }}
											>
												<Button
													onClick={() =>
														handleGoLive(post.link)
													}
													className="w-full gradient-gold hover:gradient-gold-hover text-white transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
												>
													<ExternalLink className="mr-2 h-4 w-4" />
													<ManualTranslatedText>
														View Posts
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

				{/* See More Posts Button */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					viewport={{ once: true }}
					className="text-center"
				>
					<Link href="/posts">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							viewport={{ once: true }}
							className="text-center"
						>
							<Button
								size="lg"
								className="bg-gradient-to-r from-[#b8842a] to-[#c59952] hover:from-[#c59952] hover:to-[#d4af37] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer"
							>
								<ManualTranslatedText>
									See More Posts
								</ManualTranslatedText>
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
						</motion.div>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
