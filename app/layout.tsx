import type React from "react";
import type { Metadata } from "next";
import {
	Playfair_Display,
	Source_Sans_3 as Source_Sans_Pro,
} from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TranslationProvider } from "@/contexts/translation-context";
import { StructuredData } from "@/components/structured-data";
import { ImageMetadata } from "@/components/image-metadata";
import "./globals.css";

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
	display: "swap",
});

const sourceSans = Source_Sans_Pro({
	subsets: ["latin"],
	weight: ["300", "400", "600", "700"],
	variable: "--font-source-sans",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Su Htet - MDRT Financial Advisor",
	description:
		"Financial Services Consultant professional with 5+ years of international experience in Insurance, Finance and Media Branding.",
	keywords:
		"Su Htet, MDRT, Financial Advisor, Insurance, Finance, Media Branding, Financial Services, Myanmar, International Experience",
	authors: [{ name: "Su Htet" }],
	creator: "Su Htet",
	publisher: "Su Htet",
	generator: "Htoo Aung Wai - John (Software Developer)",
	applicationName: "Su Htet Portfolio",
	referrer: "origin-when-cross-origin",
	colorScheme: "light dark",
	viewport: "width=device-width, initial-scale=1",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: "/images/logo.jpg",
		apple: "/images/logo.jpg",
		shortcut: "/images/logo.jpg",
	},
	manifest: "/manifest.json",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://www.suhtet.info",
		siteName: "Su Htet - MDRT Financial Advisor",
		title: "Su Htet - MDRT Financial Advisor",
		description:
			"Financial Services Consultant professional with 5+ years of international experience in Insurance, Finance and Media Branding.",
		images: [
			{
				url: "/images/susuhtet.jpeg",
				width: 1200,
				height: 630,
				alt: "Su Htet - MDRT Financial Advisor",
				type: "image/jpeg",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Su Htet - MDRT Financial Advisor",
		description:
			"Financial Services Consultant professional with 5+ years of international experience in Insurance, Finance and Media Branding.",
		images: ["/images/susuhtet.jpeg"],
		creator: "@suhtet",
		site: "@suhtet",
	},
	alternates: {
		canonical: "https://www.suhtet.info",
		languages: {
			"en-US": "https://www.suhtet.info",
		},
	},
	category: "Finance",
	classification: "Financial Services",
	other: {
		copyright: "© 2024 Su Htet. All rights reserved.",
		author: "Su Htet",
		owner: "Su Htet",
		"image-license": "Personal/Professional Use - Owned by Su Htet",
		"content-license":
			"All content owned by Su Htet - susuhtet24@gmail.com",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${playfair.variable} ${sourceSans.variable}`}
			suppressHydrationWarning
		>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							name: "Su Htet",
							jobTitle: "MDRT Financial Advisor",
							description:
								"Financial Services Consultant professional with 5+ years of international experience in Insurance, Finance and Media Branding.",
							image: "https://www.suhtet.info/images/susuhtet.jpeg",
							url: "https://www.suhtet.info",
							sameAs: [
								"http://linkedin.com/in/su-su-htet-0837b0169",
								"https://www.facebook.com/profile.php?id=61553978257502",
								"https://www.tiktok.com/@s.shtet?_t=ZS-908zKMda5Wn&_r=1",
								"mailto:susuhtet24@gmail.com",
								"tel:+971555238077",
								"https://wa.me/971555238077",
							],
							worksFor: {
								"@type": "Organization",
								name: "AIA Insurance",
								url: "https://www.aia.com",
							},
							alumniOf: {
								"@type": "Organization",
								name: "MDRT (Million Dollar Round Table)",
							},
							knowsAbout: [
								"Financial Planning",
								"Insurance",
								"Investment Advisory",
								"Media Branding",
								"Financial Services",
							],
							address: {
								"@type": "PostalAddress",
								addressCountry: "Myanmar",
							},
						}),
					}}
				/>
			</head>
			<body className="font-sans antialiased" suppressHydrationWarning>
				<StructuredData type="homepage" />
				<ImageMetadata />
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange={false}
				>
					<TranslationProvider>{children}</TranslationProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
