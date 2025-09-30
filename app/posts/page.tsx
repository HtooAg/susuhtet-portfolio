"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	ExternalLink,
	Calendar,
	Tag,
	Clock,
	Share2,
	ChevronLeft,
	ChevronRight,
	ArrowDown,
	BookOpen,
	FileText,
	TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { ManualTranslatedText } from "@/components/manual-translated-text";
import { Navbar } from "@/components/navbar";
import { ContactSection } from "@/components/contact-section";
import Head from "next/head";

const allPosts = [
	{
		id: 1,
		title: "Insurance isn't \"I'll do it later\"",
		excerpt:
			"အသက် 39 မပြည့်ခင်လုပ်ရမှာ life insurance ထားတာပါ။ သိန်း ၁၀၀၀ ကို တစ်နှစ် သိန်း ၂၀ သာသွင်းရပါတယ်။",
		fullContent: `Insurance isn't "I'll do it later".အသက် 39 မပြည့်ခင်လုပ်ရမှာ life insurance ထားတာပါ။ သိန်း ၁၀၀၀ ကို တစ်နှစ် သိန်း ၂၀ သာသွင်းရပါတယ်။  39 နှစ်ပြည့်ပြီး 40 ရောက်ရင်တော့ 28 သိန်း ကျော်သွားပါပြီ။ တစ်ဖန် အသက် ၄၅ ကျော်ရင် ပိုစျေးကြီးပါပြီ။ သိန်း ၁၀၀၀ အတွက် တစ်နှစ် သိန်း ၂၀ စုရင် နှစ် ၅၀ ကြာပါမယ်။ နှစ် ၅၀ ရှေ့ပြေးပြီး သိန်း ၁၀၀၀ ကို ကိုယ်ချစ်ရသူတွေအတွက် protection ကြိုယူထားနိုင်တာ insurance ပါ။ နှစ်စဉ်သွင်းထားသောငွေသည်လည်း တစ်ချိန် ကိုယ့်ရဲ့ retirement fund အတွက်ပါ ဖယ်ပြီးသားဖြစ်နေပါမယ်။ အသက်အာမခံထားတာ ပိုက်ဆံအိတ်သေးလေးထဲငွေကို နောက်ထက်အိတ်ထဲ ခဏရွှေ့ထားသလိုပါပဲ။ သိန်း ၁၀၀၀ တန် စာချုပ်လေးတွေ ခပ်များများ ပြောင်းထားတဲ့သဘောပါ။ ကင်ဆာကုသစရိတ်ကြိုထုတ်ပေးဦးမှာသိန်း ၁၀၀၀ မလိုဘူးဆိုရင်လည်း သိန်း ၂၀၀ တန်ရှိပါတယ်။ သိန်း ၁၀၀၀ နည်းတယ်ဆိုရင်လည်း သိန်း ၁၀,၀၀၀ ထိ ထားပါ။ Value of money မြင့်လာလေ life value လေး မြှင့်ထားဖို့ လိုအပ်လေသိန်း ၁၀၀၀ တန် စာချုပ်ကို သိန်း ၂၀ ပေးရတဲ့အခါ ၂ သိန်းလျှော့သွင်းချင်ရင် လမကုန်ခင် အမြန်ဆုံးဆက်သွယ် မေးမြန်းပါရှင်။ Su Su HtetAIA InfinityWealth #AIAMyanmar #universallifeinsurance#financialplanning #insurance #SuHtetဘာကြောင့် ငယ်ရွယ်စဉ်မှာ အာမခံထားသင့်တာလဲ။`,
		image: "/images/PostAIA.jpg",
		link: "https://www.facebook.com/photo/?fbid=122145948818132608&set=a.122102687576132608",
		date: "May 26, 2024",
		tags: ["Life Insurance", "Financial Planning", "AIA Myanmar"],
	},
	{
		id: 2,
		title: "IW Agency Open Day at AIA Myanmar",
		excerpt:
			"AIA Myanmar ရုံးချုပ်မှာ ပြုလုပ်ခဲ့ကြတဲဲ့ အလုပ်အကိုင် အခွင့်အလမ်း ဆွေးနွေးပွဲဖြစ်ပါတယ်။",
		fullContent: `IW Agency Open Day at AIA MyanmarAIA Myanmar ရုံးချုပ်မှာ ပြုလုပ်ခဲ့ကြတဲဲ့ အလုပ်အကိုင် အခွင့်အလမ်း ဆွေးနွေးပွဲဖြစ်ပါတယ်။Professional ဆန်တဲ့ Career တစ်ခုနဲ့အတူ ​ဂုဏ်ယူစရာအသက်​မွေး၀မ်း​ကြောင်းတစ်ခုကိုစတင်ဖို့ စိတ်အားထက်သန်ကြသူများပါဝင် တက်ရောက်ကြပါတယ်။ကမ္ဘာ့အကြီးဆုံး အသက်အာမခံ company ဖြစ်တဲ့ AIA အဖွဲ့အစည်းမှာ သင့်အတွက်အခွင့်​ရေး​တွေရှိ​နေပါပြီ။နိုင်ငံတကာ incentive trip တွေနဲ့ working environment ကောင်းကောင်းတစ်ခုမှာ လုပ်ဖို့စိတ်ကူးရှိနေပါပြီဆိုရင်​2024 မှာ Professional ကျကျ၊ work-life balance ဖြစ်တဲ့ ခိုင်မာသော အသက်မွေးဝမ်းကြောင်းတစ်ခုကနေ massive income တစ်ခုရသည်အထိ ကျွန်မနှင့်အတူဖန်တီးနိုင်မှာပါ။Career Opportunity Talk များ စိတ်ဝင်စားလို့တက်ရောက်လိုပါက စာရင်းကြိုတင်ပေးထားနိုင်ပါတယ်။Su Su HtetAIA InfinityWealth#HealthierLongerBetterLives #AIAMyanmar #vacancy #FinancialServicesConsultant #AIAInfinityWealth`,
		image: "/images/postAIA1.jpg",
		link: "https://www.facebook.com/photo?fbid=122143600526132608&set=pcb.122143600748132608",
		date: "May 13, 2024",
		tags: ["Career Opportunity", "AIA Myanmar", "Professional Development"],
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
		tags: ["Art Exhibition", "Cultural Event", "Community Engagement"],
	},
	{
		id: 4,
		title: "10% သက်သာခွင့်ရတဲ့ အလုံးစုံကျန်းမာရေးအာမခံ - AIA One Health Solution",
		excerpt:
			"10% သက်သာခွင့်ရတဲ့ အလုံးစုံကျန်းမာရေးအာမခံထားရာတွင် မေးရမည့်အချက်များ။ အာမခံထားရှိနိုင်တဲ့အသက်အရွယ်မေးပါ။ One Health Solution သည် မွေးကင်းစ ရက် ၃၀ သားကလေးမှစပြီး အသက် ၆၀ ထိ ထားရှိနိုင်ပါတယ်။",
		fullContent: `10% သက်သာခွင့်ရတဲ့ အလုံးစုံကျန်းမာရေးအာမခံထားရာတွင် မေးရမည့်အချက်များအာမခံထားရှိနိုင်တဲ့အသက်အရွယ်မေးပါ။ One Health Solution သည် မွေးကင်းစ ရက် ၃၀ သားကလေးမှစပြီး အသက် ၆၀ ထိ ထားရှိနိုင်ပါတယ်။ ၆၀ မတိုင်ခင်ဝယ်ယူထားသူများ အသက် ၈၀ထိ ဆက်လက်ထားရှိနိုင်ပါတယ်။ မိမိထားရှိမည့် ကျန်းမာရေးအာမခံမှာ ရရှိနိုင်တဲ့ အကာအကွယ်တွေမေးပါ။ In-Hospital Care (အတွင်းလူနာအဖြစ်ကုသမှုအတွက် အကာအကွယ်)သတ်မှတ်ထားသောအခန်းခနှင့် ဆေးရုံကုသစရိတ်ကို ဝယ်ယူထားတဲ့ Plan အလိုက် အလုံးစုံအကာအကွယ်ရပါတယ်။ Out Patient Care (ပြင်ပလူနာအဖြစ်ကုသမှုအတွက် အကာအကွယ်)အရေးပေါ် မတော်တဆမှုကြောင့် emergency အဖြစ်သွားရောက်ကုသမှုခံယူရခြင်းအပြင် ဆေးရုံမတက်ရသော အသေးစားခွဲစိတ်မှုတွေပါ အကာအကွယ်ရနိုင်ပါတယ်။ ထို့အပြင် ပြင်ပလူနာအဖြစ် ကျောက်ကပ်ဆေးခြင်း၊ ကင်ဆာကုထုံးခံယူခြင်းတို့ အကာအကွယ်ရနိုင်ပါသေးတယ်။ Accidental Death Benefit မတော်တဆမှုကြောင့် သေဆုံးမှုအတွက် လျော်ကြေးငွေရရှိနိုင်ခြင်းရနိုင်တဲ့အကာအကွယ်တွေက ပြည်တွင်း၊ ပြည်ပလားမေးပါ။ AIA ရဲ့ One Health Solution ကျန်းမာရေးအာခံကတော့ ပြည်တွင်းအပြင် နိုင်ငံရပ်ခြားမှာသွားရောက်ကုသမှုခံယူနိုင်ပါတယ်။ လျော်ကြေးငွေ ဘယ်လိုရရှိနိုင်လဲမေးပါ။ ဆေးရုံတက်ကုသပြီးမှ ကျသင့်ငွေတောင်ခံတာမျိုးရပါတယ်။ ဒါ့အပြင်Cashless claim လို့ခေါ်တဲ့ မိမိကဆေးရုံ deposit ပါပေးစရာမလိုဘဲ AIA က တိုက်ရိုက်ငွေချေပေးတဲ့စနစ်ရှိပါတယ်။ သတ်မှတ်ထားတဲ့ ပြည်တွင်းဆေးရုံ ၂၀ ကျော်အပြင် ပြည်ပနိုင်ငံပေါင်း ၁၆ နိုင်ငံ ဆေးရုံပေါင်း ၆၈၀၀ မှာ ထိုကဲ့သို့ ငွေသားမလို သွားရောက်ကုသမှုခံယူနိုင်ပါတယ်။ တစ်နှစ်လုံးကျန်းမာခဲ့ရင်ရော ငွေပြန်ရမှာလား။ ကျန်းမာရေးအာမခံတွေသည် ဖြစ်ရင် သတ်မှတ်တန်းဖိုးရောက်သည်အထိလျော်ပါတယ်။ ဘာမှမဖြစ်ခဲ့ရင်တော့ တစ်နှစ်စာပေးခဲ့တဲ့ငွေပြန်မရရှိနိုင်ပါ။ သို့သော် Health Reward ကျန်းမာရေးဆုကြေးရှိပါတယ်။ နောက်တစ်နှစ်အာမခံပြန်ထားတဲ့အခါ 5% ဆုကြေးအနေဖြင့် သက်သာမှာဖြစ်ပါတယ်။ စိတ်ဝင်စားပြီ ထားမယ်ဆိုရင် Plan ရွေးရပါမယ်။ Plan ၇ ခုရှိပါတယ်။ အနည်းဆုံး Plan 1 သည် ၃၇ သိန်း ၅သောင်း ပြန်လျော်ပါတယ်။ Plan အမြင့်ဆုံးသည် သိန်း ၁၂၀၀ အထိလျော်ပါတယ်။ Plan ဘယ်လိုရွေးရမလဲ။ အကာအကွယ် အရံသင့်လောက်ဆို Plan 2 Plan 3ပြည်တွင်းကုသမှုလောက်ဆို Plan 3 Plan 4 အကြံပြုပါတယ်။ ငွေကြေးပိုတတ်နိုင်ပြီး နိုင်ငံရပ်ခြားမှ သဘောကျသူတွေကတော့ Plan 6 Plan 7 ထားစေချင်ပါတယ်။ Plan 2 အထက်က စပြီး နိုင်ငံခြား ဆရာဝန်ပေါင်း ၅၀၀၀ ကျော်ပါဝင်တဲ့ Teladoc ကနေ ဆေးပညာအကြံပေးတာမျိုး ဆွေးနွေးခွင့် အခမဲ့ပါရှိပါမယ်။ Premium ကြေးအသက် ၅ နှစ်မှ ၄၀ အောက်ဆို ၁ သိန်းကျော်ကစပါတယ်။ အသက် ၄၀ မှ ၆၀ ဆို ၂ သိန်း~၃ သိန်း ဝန်းကျင်စပါတယ်။ ဆေးကုသမှု ကုန်ကျစရိတ်များတဲ့ခေတ်ကြီးမှာ အနည်းဆုံး ကျန်းမာရေးလျော်ကြေးရနိုင်ဖို့ စျေးနှုန်းအတိအကျသိချင်ရင် ယူချင်တဲ့ plan နဲ့ လက်ရှိအသက်ပြောထားခဲ့ပေးပါဦး။ ပိုမိုကျန်းမာ အသက်ရှည် ကောင်းမွန်သောဘဝတွေ ပိုင်ဆိုင်နိုင်ကြပါစေရှင်။ Su Su HtetAIA InfinityWealth 09 9590 500 40susu-ss.htet@aia.com.mm #BetterFinancialFuture #AIAMyanmar #OHS #HealthInsurance #claim #cashless #teladoc`,
		image: "/images/postAIA3.jpg",
		link: "https://www.facebook.com/story.php?story_fbid=122132946560132608&id=61553978257502&mibextid=wwXIfr&rdid=8Aon3fkJxHfOqL6N#",
		date: "March 14, 2024",
		tags: ["Health Insurance", "One Health Solution", "AIA Myanmar"],
	},
	{
		id: 5,
		title: "March လထဲ insurance ထားရင် 10% သက်သာ",
		excerpt:
			"Client က သူဘယ်လောက်အကာအကွယ်ထားရမလဲ စဉ်းစားမရဖြစ်နေလို့ အကြံပေးကြည့်ပါပြောတယ်။",
		fullContent: `March လထဲ insurance ထားရင် 10% (တစ်လစာကျော်လောက်) သက်သာတာမလို့ Client က သူဘယ်လောက်အကာအကွယ်ထားရမလဲ စဉ်းစားမရဖြစ်နေလို့ အကြံပေးကြည့်ပါပြောတယ်။ အချိန်ခဏလောက် စဉ်းစားကြည့်ပြီး နောက်နေ့ကိုယ်နိုးမထလာတော့ရင် ဘယ်လိုဖြစ်နိုင်လဲ တွေးကြည့်ခိုင်းမိတယ်။ သူမရှိတော့ရင် ဘဏ်ချေးငွေတစ်ချို့ရယ်၊ သူ့ကလေးရယ်၊ မိဘတွေရယ်ကျန်မယ်တဲ့။ ပိုင်ဆိုင်မှုတွေရှိတယ် သူတို့ဖြေရှင်းတတ်မလားတော့ မသေချာဘူး။ ခဏတော့အဆင်ပြေပေမယ့် နောင် ၅ နှစ် ၁၀ နှစ် ဝင်ငွေမရှိတော့ဘဲ ရှိတာရောင်းချပြီးနေရမှာတော့ တွေးမိတယ်ပြောပါတယ်။ Insurance ဆိုတာ protection ပါပဲ။ အဲ့နောက်မှာပါတဲ့ investment တွေ saving တွေဆိုတာက topping တွေပါ။ အဓိက အနှစ်သာရ ပိုင်ဆိုင်မှုအပြင်ရနိုင်တဲ့ သိန်းထောင်ချီ သောင်းချီအကာအကွယ်အကြီးကြီးတစ်ခု ကိုယ့်မိသားစုအတွက်လုံလောက်နေဖို့ အရေးကြီးပါတယ်။ အခု client အသက်က ၃၅ နှစ်ဖြစ်လို့ သိန်း ၁၀၀၀ အကာအကွယ်အတွက် တစ်နှစ် သိန်း ၂၀ ဝန်းကျင် တစ်လ ၁ သိန်းခွဲလောက် ဖယ်သွားရုံပါပဲ။ AIA က UL မှာ သိန်း ဆယ်ဂဏန်း သွင်းရုံနဲ့ သိန်း ထောင်ဂဏန်း အကာအကွယ်ဖြစ်တဲ့အတွက် သူတော်တော်လေး ကျေနပ်တာတွေ့ရပါတယ်။ နှစ်တိုအာမခံတွေမှာ ၁၀ နှစ်တာ သိန်း ၂၀၀ plan အတွက် တစ်နှစ်သိန်း ၂၀ ခန့် သွင်းရပါတယ်။ ၅ နှစ်လောက်သွင်းပြီးတဲ့အခါ ရတဲ့အကာအကွယ်နဲ့ယှဉ်ပြီး ဆက်သွင်းဖို့တွေဝေတတ်ကြလေ့ရှိပါတယ်။ အာမခံတိုင်းကတော့ သူ့အားသာချက်သူရှိကြပါတယ်။ ပေးသွင်းရတာထက် အဆပေါင်းများစွာ အကာအကွယ်ရနိုင်တဲ့ UL Plan က AIA ရဲ့ ကိုယ်ပိုင် policy ဖြစ်တဲ့အပြင်ငယ်ရွယ်ပြီး ငွေရှာနိုင်တဲ့သူတွေ အရွေးချယ်သင့်ဆုံးဖြစ်နေရတဲ့အချက်တွေရှိပါတယ်။ တကယ်အကျိုးရှိရှိကိုင်တွယ်မယ်ဆို အတော်လေးသက်တောင့်သက်သာဖြစ်တဲ့ policy ဖြစ်ပါတယ်။ အချိန်ပေးပြီး တိုင်ပင်ဆွေးနွေးတာမျိုးလုပ်ထားဖို့ တိုက်တွန်းပါရစေ။ March လတစ်လထဲသာရနိုင်မယ့် အခွင့်အရေးကတော့ သွင်းရမယ့် premium ကြေး ၁၀% သက်သာနိုင်ပါတယ်။ တစ်နှစ်လုံးစာရဲ့ အသက်အာမခံ Premium ကြေး ၄ သိန်းကျပ်ကစရှိပါတယ်။  တစ်လစာ ၃ သောင်း ၃ထောင် ဝန်းကျင်သာရှိပါတယ်။ အသေးစိတ် ဆက်သွယ်မေးမြန်းနိုင်ပါတယ်ရှင်။Su Su HtetAIA Infinity Wealth 09 9590 500 40#universallifeinsurance #AIAMyanmar #AIA`,
		image: "/images/postAIA4.jpg",
		link: "https://www.facebook.com/story.php?story_fbid=122132523938132608&id=61553978257502&mibextid=wwXIfr&rdid=c3abJo3fVYOVYhOX#",
		date: "March 11, 2024",
		tags: ["Universal Life", "Premium Discount", "Family Protection"],
	},
	{
		id: 6,
		title: "အသက်အာမခံဆိုတဲ့ သဘောတရားကို ပြောပြချင်လို့ပါ",
		excerpt:
			"Insurance = Protection ဆိုသည့်အတိုင်း အာမခံဆိုတာ ကြိုတင်မှန်းဆလို့မရတဲ့အရာတွေအတွက် ကြိုတင်စီမံထားခြင်းတစ်ခုပါပဲ။",
		fullContent: `အသက်အာမခံဆိုတဲ့ သဘောတရားကို ပြောပြချင်လို့ပါ။ Insurance = Protection ဆိုသည့်အတိုင်း အာမခံဆိုတာ ကြိုတင်မှန်းဆလို့မရတဲ့အရာတွေအတွက် ကြိုတင်စီမံထားခြင်းတစ်ခုပါပဲ။ ဘယ်လိုကာကွယ်မှုမျိုးလဲဆို Financial Protection ငွေကြေးအရ ကာကွယ်ထားမှုမျိုးဖြစ်ပါတယ်။အသက်အာမခံဆိုတာ ဘယ်လိုမျိုးလဲ။ အသက်အာမခံသည် ကိုယ်လိုချင်တဲ့အကာအကွယ်ပေါ်မူတည်ပြီး ၁၀ နှစ် အနှစ် ၂၀ ရေရှည်ထားရတဲ့ အမျိုးအစားပါ။ ထို့ကြောင့် နှစ်စဉ်သွင်းသွားရသော ငွေများသည် တစ်ဖက်မှာ saving အဖြစ်ကျန်ရှိနိုင်အောင် တွက်ချက်ပေးထားသော အာမခံမျိုးပါ။ ကိုယ်ရဲ့ အသက်ပေါ်မှာ အကာအကွယ်တစ်ခုကြိုတင်စီမံထားပြီး….မိမိက အလုပ်ဆက်မလုပ်နိုင်တော့သောအခြေအနေ၊ မပြန်လမ်းရောက်သွားသော အခြေအနေတွေမှာ…ဝင်ငွေရပ်တန့်မှုအတွက် ကြီးမားတဲ့ ငွေကြေးအထောက်အပံ့ရမှာဖြစ်ပါတယ်။ ဘယ်သူတွေထားကြလဲဆို…မိသားစုကို ဦးဆောင်နေရသောသူများရဲ့ ဝင်ငွေစီးဆင်းမှုရပ်တန့်ချိန် မိသားစုရဲ့ ငွေကြေးအပူကို လျှော့ချပေးနိုင်ဖို့ ထားကြပါတယ်။ တစ်ကိုယ်တည်းသမားဆိုရင်ရော????ကိုယ်တိုင်မှငွေမရှာနိုင်ရင် ပြန်ကြည့်ပေးမယ့်သူမရှိတဲ့သူတွေအတွက် အလုပ်ဆက်လုပ်နိုင်ခြင်းမရှိ Total Permanent Disability ဖြစ်သွားချိန်မှာ မားမားမတ်မတ်ရှိနေမယ့် ငွေကြေးအကာအကွယ်မျိုးပါ။ ဘဏ်နဲ့တူလား?????အသက်အာမခံသည် ဘဏ်နဲ့အလုပ်လုပ်ပုံခြင်း လုံးဝ (လုံးဝ) မတူညီပါဘူး။ AIA ရဲ့ Universal Life အသက်အာမခံကိုအခြေခံပြောပြပါမယ်။ ဥပမာ- အသက် ၃၅ နှစ်အရွယ်အတွက် ဘဏ်မှာ တစ်လ ၈ သောင်းခန့် တစ်နှစ် ငွေ ၁၀ သိန်းထည့်ရင် ဘယ်လိုအခြေအနေဖြစ်ဖြစ် ကိုယ်ထည့်သလောက်သာပြန်ရပါမယ်။အာမခံမှာ နှစ်စဉ် ၁၀ သိန်းသွင်းလိုက်တဲ့ငွေကတော့ ကိုယ်တစ်ခုခုဖြစ်ခဲ့ရင် သိန်း ၅၀၀ လျော်ကြေးအပြင် ကိုယ့်အကောင့်ထဲရှိတဲ့ပိုက်ဆံ ပြန်ရနိုင်ပါတယ်။ ဘာမှမဖြစ်ရင်တော့ မိမိထားခဲ့သော policy အမျိုးအစားအရ အချိန်ကာလတစ်ခုရောက်ရင် Saving စုဆောင်းငွေ အဖြစ်စတင်တွက်ချက်ပါတယ်။ ((ကိုယ်က အာမခံသာမထားဘဲ အပြင်မှာမိသားစုအတွက် သိန်း ၅၀၀ ထားပေးခဲ့ချင်ရင် တစ်နှစ် ၁၀ သိန်း အနှစ် ၅၀ စုပေးမှရပါမယ်။ သို့သော် အာမခံထားလိုက်ခြင်းဖြင့် သိန်း ၅၀၀ ချက်ချင်း အကာအကွယ်ရသွားမှာပါ။ ထို့အတွက် နှစ် ၅၀ စုစရာမလိုပါ။ နှစ်စဉ်ကြေးသွင်းရင်ရပါပြီ။))မိမိအား အကာအကွယ်ပေးနေသည့်အတွက် နှစ်စဉ်ငွေသွင်းရပါတယ်။ policy charges တွေရှိပါတယ်။ နှစ်စဉ်သွင်းနေသောငွေများက policy သက်တမ်းအလိုက် စုငွေအဖြစ်ပြောင်းလဲသွားတာပါ။ Policy သက်တမ်းဘယ်လောက်ကြာရင် ငွေဘယ်လောက်ဖြစ်မလဲဆိုတာ ကိုယ်သွင်းတဲ့ နှစ်စဉ်ကြေးနဲ့ ရနိုင်တဲ့ အကာအကွယ်ပေါ် ကွဲပြားတာဖြစ်လို့ သေချာလေ့လာထားဖို့ တိုက်တွန်းပါတယ်ရှင်။ အနှစ်ချုပ်ဆိုသော AIA ရဲ့ Universal Life အသက်အာမခံမှာ⁃ သေဆုံးမှုဖြစ်ရင် လျော်ပါတယ်။ ⁃ ထာဝစဉ် မသန်စွမ်းဖြစ်ရင်လျော်ပါတယ်။ ⁃ ကင်ဆာဖြစ်ရင်လျော်ပါတယ်။ ထို ၃ ချက်မဖြစ်ခဲ့ရင် သွင်းနေသောငွေများ saving အဖြစ်တွက်ချက်မှုထဲပါပါမယ်။ အတိုးပေးတဲ့အတွက် တိုးရင်းပေါင်းဖြစ်ပါတယ်။ ⁃ ငွေဆက်မသွင်းဘဲ ရပ်ထားချင်တာ⁃ သွင်းထားတဲ့ငွေ ထုတ်သုံးတာ⁃ သွင်းရတဲ့ငွေ အတိုးအလျှော့လုပ်တာ စတဲ့ flexible features တွေထပ်ပါပါသေးတယ်။ အာမခံ ပက်သက်၍ အချိန်မရွေး ရှင်းပြပေးဖို့ အသင့်ရှိပါတယ်ရှင်။ ဒါ အာမခံနယ်ပယ်ကသူတစ်ယောက်အနေနဲ့ ကျွန်မ ကူညီနိုင်တာပါ။ နောက်ဆုံးကျွန်မ client တွေကိုပြောနေကြလေးအတိုင်းပြောပါရစေ။ လက်ထဲသိန်း ၁၀၀ ရှိတိုင်း ၁၀၀ လုံး အာမခံထားစရာမလိုပါ။ တစ်စိတ်တစ်ပိုင်းကိုသာ အာမခံထဲပြောင်းပြီး နောက်ထပ် အကာအကွယ်တစ်ခုယူတာမျိုးသာလုပ်ပါ။  ကိုယ့်မှာအကာအကွယ်တစ်ခုရှိပြီးမှ ကျန်တဲ့ပိုက်ဆံတွေကို စီးပွါးရေးရင်းနှီးမြုပ်နှံပါ။ အာမခံသည် ရင်းနှီးမြုပ်နှံမှုမဟုတ်သည့်အတွက် massive profit မဖြစ်ပါဘူးရှင်။Financial Planning လုပ်တဲ့အခါ ဝင်ငွေရပ်တန်ချိန်အဆင်ပြေအောင်ရယ် မလိုတဲ့ကျန်းမာရေးကုန်ကျစရိတ်တွေ အကုန်ခံစရာမလိုဖို့ရယ်အတွက် အာမခံထားရှိခြင်းမျိုးပါ။ အာမခံတစ်ခုဟာ ကိုယ်နိုင်တဲ့ပမာဏနဲ့ လုံလောက်တဲ့အကာအကွယ်ရတဲ့အခါ သိပ်ကို စိတ်ချမ်းသာရပါတယ်။ လူတိုင်းလုံခြုံတဲ့အကာအကွယ်တစ်ခုကိုယူပြီး စိတ်အေးချမ်းနိုင်ဖို့ ဆန္ဒပြုပါတယ်ရှင်။ Su Su HtetAIA Infinity WealthDecember 2023#AIA #suhtetinsurance #lifeinsurance #အာမခံ #savingmoney #universallife #BetterFinancialFuturebySuHtet #cashflow #protection`,
		image: "/images/postAIA5.jpg",
		link: "https://www.facebook.com/story.php?story_fbid=122114150222132608&id=61553978257502&mibextid=wwXIfr&rdid=qaKWp0gqfN4IlmFQ#",
		date: "December 20, 2023",
		tags: [
			"Life Insurance Concept",
			"Financial Planning",
			"Universal Life",
		],
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
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
};

export default function PostsPage() {
	const [selectedTag, setSelectedTag] = useState<string | null>(null);
	const [currentPostIndex, setCurrentPostIndex] = useState(0);

	const handleShare = (post: any) => {
		if (navigator.share) {
			navigator.share({
				title: post.title,
				text: post.excerpt,
				url: window.location.href,
			});
		} else {
			// Fallback to copying URL
			navigator.clipboard.writeText(window.location.href);
		}
	};

	const handleGoLive = (link: string) => {
		if (link !== "#") {
			window.open(link, "_blank");
		}
	};

	// Get all unique tags
	const allTags = Array.from(new Set(allPosts.flatMap((post) => post.tags)));

	// Filter posts by selected tag
	const filteredPosts = selectedTag
		? allPosts.filter((post) => post.tags.includes(selectedTag))
		: allPosts;

	// Responsive carousel navigation
	const getCardsPerView = () => {
		if (typeof window !== "undefined") {
			if (window.innerWidth >= 1024) return 3; // Desktop: 3 cards
			if (window.innerWidth >= 768) return 2; // Tablet: 2 cards
			return 1; // Mobile: 1 card
		}
		return 3; // Default fallback
	};

	const [cardsPerView, setCardsPerView] = useState(getCardsPerView);

	useEffect(() => {
		const handleResize = () => {
			setCardsPerView(getCardsPerView());
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const nextPost = () => {
		setCurrentPostIndex((prev) => {
			const next = prev + cardsPerView;
			return next >= filteredPosts.length ? 0 : next;
		});
	};

	const prevPost = () => {
		setCurrentPostIndex((prev) => {
			const previous = prev - cardsPerView;
			return previous < 0
				? Math.max(
						0,
						Math.floor((filteredPosts.length - 1) / cardsPerView) *
							cardsPerView
				  )
				: previous;
		});
	};

	// Removed auto-advance carousel as requested

	// Reset carousel when filter changes
	useEffect(() => {
		setCurrentPostIndex(0);
	}, [selectedTag]);

	return (
		<>
			<Head>
				<title>
					All Posts - Su Su Htet | Financial Services & Insurance
					Expert
				</title>
				<meta
					name="description"
					content="Explore insights, achievements, and expertise in financial services and insurance from Su Su Htet, AIA Myanmar Premier Member and MDRT Qualified Advisor."
				/>
				<meta
					name="keywords"
					content="financial services, insurance, AIA Myanmar, life insurance, health insurance, financial planning, Su Su Htet"
				/>
				<meta
					property="og:title"
					content="All Posts - Su Su Htet | Financial Services & Insurance Expert"
				/>
				<meta
					property="og:description"
					content="Explore insights, achievements, and expertise in financial services and insurance from Su Su Htet."
				/>
				<meta property="og:type" content="website" />
				<link rel="canonical" href="/posts" />
			</Head>

			<main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
				<Navbar />

				{/* Hero Section - Similar to hero-section.tsx */}
				<section
					id="posts-hero"
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
											All Posts
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
										Insights & Expertise
									</ManualTranslatedText>
								</motion.h2>
								<motion.p
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.6, duration: 0.6 }}
									className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
								>
									<ManualTranslatedText>
										Discover valuable insights, professional
										achievements, and expert knowledge in
										financial services, insurance, and
										wealth management. Stay updated with the
										latest trends and strategies.
									</ManualTranslatedText>
								</motion.p>{" "}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.8, duration: 0.6 }}
									className="flex flex-col sm:flex-row gap-4 z-20 relative"
								>
									<button
										onClick={() => {
											document
												.querySelector("#posts-content")
												?.scrollIntoView({
													behavior: "smooth",
												});
										}}
										className="bg-gradient-to-r from-[#b8842a] to-[#c59952] hover:from-[#c59952] hover:to-[#d4af37] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-lg border-0 cursor-pointer z-20 relative flex items-center justify-center"
										type="button"
									>
										<ArrowDown className="mr-2 h-4 w-4" />
										<ManualTranslatedText>
											Explore Posts
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
										<FileText className="h-5 w-5" />
										<span className="font-medium">
											{allPosts.length} Posts
										</span>
									</motion.div>

									<motion.div
										whileHover={{ scale: 1.05, y: -2 }}
										transition={{ duration: 0.2 }}
										className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-[#b8842a] to-[#c59952] text-white shadow-lg"
									>
										<Tag className="h-5 w-5" />
										<span className="font-medium">
											{allTags.length} Categories
										</span>
									</motion.div>

									{/* <motion.div
										whileHover={{ scale: 1.05, y: -2 }}
										transition={{ duration: 0.2 }}
										className="flex items-center gap-2 px-4 py-3 rounded-lg border-2 border-[#b8842a] text-[#b8842a] bg-transparent shadow-sm"
									>
										<TrendingUp className="h-5 w-5" />
										<span className="font-medium">
											Latest Updates
										</span>
									</motion.div> */}
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
									.querySelector("#posts-content")
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

				{/* Posts Introduction Section */}
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
									Recent Posts
								</ManualTranslatedText>
							</h2>

							<div className="h-1 w-20 gradient-gold rounded-full mx-auto" />

							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
								<ManualTranslatedText>
									Explore our comprehensive collection of
									articles covering financial planning,
									insurance solutions, career opportunities,
									and professional insights. Filter by
									category to find exactly what you're looking
									for.
								</ManualTranslatedText>
							</p>
						</motion.div>
					</div>
				</section>

				{/* Category Filter */}
				<section className="bg-background/95 backdrop-blur-sm border-border/50">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<div className="flex flex-wrap gap-3 justify-center">
								<Button
									variant={
										selectedTag === null
											? "default"
											: "outline"
									}
									onClick={() => setSelectedTag(null)}
									className={`${
										selectedTag === null
											? "gradient-gold text-white shadow-lg cursor-pointer"
											: "hover:bg-gradient-to-r hover:from-[#b8842a] hover:to-[#c59952] hover:text-white border-2 hover:border-[#b8842a] cursor-pointer"
									} transition-all duration-300`}
								>
									<Tag className="mr-2 h-4 w-4" />
									<ManualTranslatedText>
										All Posts
									</ManualTranslatedText>
									<Badge variant="secondary" className="ml-2">
										{allPosts.length}
									</Badge>
								</Button>
								{allTags.map((tag) => (
									<Button
										key={tag}
										variant={
											selectedTag === tag
												? "default"
												: "outline"
										}
										onClick={() => setSelectedTag(tag)}
										className={`${
											selectedTag === tag
												? "gradient-gold text-white shadow-lg cursor-pointer"
												: "hover:bg-gradient-to-r hover:from-[#b8842a] hover:to-[#c59952] hover:text-white border-2 hover:border-[#b8842a] cursor-pointer"
										} transition-all duration-300`}
									>
										<ManualTranslatedText>
											{tag}
										</ManualTranslatedText>
									</Button>
								))}
							</div>
						</motion.div>
					</div>
				</section>

				{/* Posts Section */}
				<section
					id="posts-content"
					className="py-16 min-h-screen flex items-center"
				>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
						{filteredPosts.length === 0 ? (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className="text-center py-20"
							>
								<div className="max-w-md mx-auto">
									<Tag className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
									<h3 className="text-xl font-semibold text-foreground mb-2">
										No posts found
									</h3>
									<p className="text-muted-foreground">
										<ManualTranslatedText>
											No posts found for the selected
											category. Try selecting a different
											category.
										</ManualTranslatedText>
									</p>
								</div>
							</motion.div>
						) : (
							/* Three Card Layout */
							<div className="relative">
								{/* Navigation Arrows */}
								{filteredPosts.length > cardsPerView && (
									<>
										<button
											onClick={prevPost}
											className="absolute left-0 md:left-2 lg:left-0 top-1/2 -translate-y-1/2 z-10 bg-primary/90 backdrop-blur-sm text-white p-2 md:p-3 lg:p-4 rounded-full hover:bg-gradient-to-r hover:from-[#b8842a] hover:to-[#c59952] transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
										>
											<ChevronLeft className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 group-hover:-translate-x-0.5 transition-transform" />
										</button>
										<button
											onClick={nextPost}
											className="absolute right-0 md:right-2 lg:right-0 top-1/2 -translate-y-1/2 z-10 bg-primary/90 backdrop-blur-sm text-white p-2 md:p-3 lg:p-4 rounded-full hover:bg-gradient-to-r hover:from-[#b8842a] hover:to-[#c59952] transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
										>
											<ChevronRight className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 group-hover:translate-x-0.5 transition-transform" />
										</button>
									</>
								)}

								{/* Cards Container */}
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-8 lg:px-12">
									{filteredPosts
										.slice(
											currentPostIndex,
											currentPostIndex + cardsPerView
										)
										.map((post, index) => (
											<motion.article
												key={post.id}
												initial={{ opacity: 0, y: 50 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{
													duration: 0.6,
													delay: index * 0.1,
												}}
												className="group h-full"
											>
												<div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
													{/* Card Image */}
													<div className="relative h-64 overflow-hidden">
														<Image
															src={
																post.image ||
																"/placeholder.svg"
															}
															alt={post.title}
															fill
															className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
														/>
														<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

														{/* Tags Overlay */}
														<div className="absolute top-4 left-4 right-4">
															<div className="flex flex-wrap gap-2">
																{post.tags
																	.slice(0, 2)
																	.map(
																		(
																			tag
																		) => (
																			<Badge
																				key={
																					tag
																				}
																				variant="secondary"
																				className="bg-primary/90 text-white border-0 text-xs"
																			>
																				<ManualTranslatedText>
																					{
																						tag
																					}
																				</ManualTranslatedText>
																			</Badge>
																		)
																	)}
															</div>
														</div>

														{/* Share Button */}
														<Button
															variant="ghost"
															size="sm"
															onClick={() =>
																handleShare(
																	post
																)
															}
															className="absolute top-4 right-4 gradient-gold text-white hover:gradient-gold-hover transition-all duration-300 p-3 h-auto shadow-lg hover:shadow-xl"
														>
															<Share2 className="h-5 w-5" />
														</Button>
													</div>

													{/* Card Content */}
													<div className="p-6 flex-1 flex flex-col">
														{/* Meta Info */}
														<div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
															<div className="flex items-center gap-1">
																<Calendar className="h-4 w-4" />
																<span>
																	{formatDate(
																		post.date
																	)}
																</span>
															</div>
															<div className="flex items-center gap-1">
																<Clock className="h-4 w-4" />
																<span>
																	{estimateReadingTime(
																		post.fullContent
																	)}{" "}
																	min read
																</span>
															</div>
														</div>

														{/* Title */}
														<h3
															className="font-playfair text-xl font-bold text-foreground mb-3 leading-tight flex-shrink-0"
															style={{
																display:
																	"-webkit-box",
																WebkitLineClamp: 2,
																WebkitBoxOrient:
																	"vertical",
																overflow:
																	"hidden",
															}}
														>
															<ManualTranslatedText>
																{post.title}
															</ManualTranslatedText>
														</h3>

														{/* Excerpt */}
														<p
															className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1"
															style={{
																display:
																	"-webkit-box",
																WebkitLineClamp: 3,
																WebkitBoxOrient:
																	"vertical",
																overflow:
																	"hidden",
															}}
														>
															<ManualTranslatedText>
																{post.excerpt}
															</ManualTranslatedText>
														</p>

														{/* Action Buttons */}
														<div className="mt-auto space-y-3">
															{/* Read More Button */}
															{/* <Button
																variant="outline"
																className="w-full hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
																onClick={() => {
																	// Create a modal or expand functionality here
																	alert(
																		`Reading: ${
																			post.title
																		}\n\n${post.fullContent.substring(
																			0,
																			200
																		)}...`
																	);
																}}
															>
																<span className="mr-2">
																	Read More
																</span>
																<Clock className="h-4 w-4" />
															</Button> */}

															{/* View Original Post Button */}
															{post.link !==
																"#" && (
																<Button
																	onClick={() =>
																		handleGoLive(
																			post.link
																		)
																	}
																	className="w-full gradient-gold hover:gradient-gold-hover text-white shadow-md hover:shadow-lg transition-all duration-300"
																>
																	<span className="mr-2">
																		View
																		Post
																	</span>
																	<ExternalLink className="h-4 w-4" />
																</Button>
															)}
														</div>
													</div>
												</div>
											</motion.article>
										))}
								</div>

								{/* Pagination Dots */}
								{filteredPosts.length > cardsPerView && (
									<div className="flex justify-center items-center gap-2 mt-8 md:mt-12">
										{Array.from({
											length: Math.ceil(
												filteredPosts.length /
													cardsPerView
											),
										}).map((_, index) => (
											<button
												key={index}
												onClick={() =>
													setCurrentPostIndex(
														index * cardsPerView
													)
												}
												className={`h-2 md:h-3 rounded-full transition-all duration-300 cursor-pointer ${
													Math.floor(
														currentPostIndex /
															cardsPerView
													) === index
														? "w-6 md:w-8 bg-primary"
														: "w-2 md:w-3 bg-muted-foreground/30 hover:bg-primary/50"
												}`}
											/>
										))}
									</div>
								)}

								{/* Page Navigation */}
								{filteredPosts.length > cardsPerView && (
									<div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
										<Button
											variant="outline"
											onClick={prevPost}
											disabled={currentPostIndex === 0}
											className="flex items-center gap-2 hover:bg-gradient-to-r hover:from-[#b8842a] hover:to-[#c59952] hover:text-white hover:border-[#b8842a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto cursor-pointer"
										>
											<ChevronLeft className="h-4 w-4" />
											<ManualTranslatedText>
												Previous
											</ManualTranslatedText>
										</Button>

										<div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-card/50 rounded-full border border-border/30">
											<span className="text-xs md:text-sm text-muted-foreground">
												{Math.floor(
													currentPostIndex /
														cardsPerView
												) + 1}{" "}
												of{" "}
												{Math.ceil(
													filteredPosts.length /
														cardsPerView
												)}
											</span>
										</div>

										<Button
											variant="outline"
											onClick={nextPost}
											disabled={
												currentPostIndex +
													cardsPerView >=
												filteredPosts.length
											}
											className="flex items-center gap-2 hover:bg-gradient-to-r hover:from-[#b8842a] hover:to-[#c59952] hover:text-white hover:border-[#b8842a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto cursor-pointer"
										>
											<ManualTranslatedText>
												Next
											</ManualTranslatedText>
											<ChevronRight className="h-4 w-4" />
										</Button>
									</div>
								)}
							</div>
						)}
					</div>
				</section>

				<ContactSection />
			</main>
		</>
	);
}
