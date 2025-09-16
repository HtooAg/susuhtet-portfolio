import type React from "react";
import type { Metadata } from "next";
import {
	Playfair_Display,
	Source_Sans_3 as Source_Sans_Pro,
} from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TranslationProvider } from "@/contexts/translation-context";
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
	title: "Su Htet - Financial Advisor & MDRT Qualifier",
	description:
		"Professional financial advisor specializing in life insurance and investment solutions. MDRT qualified with proven track record.",
	generator: "Htoo Aung Wai - John (Software Developer)",
	icons: {
		icon: "/images/logo.jpg",
		apple: "/images/logo.jpg",
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
			<body className="font-sans antialiased" suppressHydrationWarning>
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
