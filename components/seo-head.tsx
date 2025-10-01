import Head from "next/head";

interface SEOHeadProps {
	title?: string;
	description?: string;
	image?: string;
	url?: string;
	type?: string;
}

export function SEOHead({
	title = "Su Htet - MDRT Financial Advisor",
	description = "Financial Services Consultant professional with 5+ years of international experience in Insurance, Finance and Media Branding.",
	image = "/images/susuhtet.jpeg",
	url = "https://www.suhtet.info",
	type = "website",
}: SEOHeadProps) {
	const fullTitle = title.includes("Su Htet")
		? title
		: `${title} | Su Htet - MDRT Financial Advisor`;
	const fullImageUrl = image.startsWith("http")
		? image
		: `https://www.suhtet.info${image}`;

	return (
		<Head>
			{/* Primary Meta Tags */}
			<title>{fullTitle}</title>
			<meta name="title" content={fullTitle} />
			<meta name="description" content={description} />
			<meta
				name="keywords"
				content="Su Htet, MDRT, Financial Advisor, Insurance, Finance, Media Branding, Financial Services, Myanmar, AIA Insurance"
			/>
			<meta name="author" content="Su Htet" />
			<meta name="robots" content="index, follow" />
			<meta name="language" content="English" />
			<meta name="revisit-after" content="7 days" />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content={type} />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={fullImageUrl} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta
				property="og:image:alt"
				content="Su Htet - MDRT Financial Advisor"
			/>
			<meta property="og:site_name" content="Su Htet Portfolio" />
			<meta property="og:locale" content="en_US" />

			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={url} />
			<meta property="twitter:title" content={fullTitle} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={fullImageUrl} />
			<meta property="twitter:creator" content="@suhtet" />
			<meta property="twitter:site" content="@suhtet" />

			{/* Additional Meta Tags */}
			<meta name="theme-color" content="#1f2937" />
			<meta name="msapplication-TileColor" content="#1f2937" />
			<meta name="msapplication-config" content="/browserconfig.xml" />

			{/* Canonical URL */}
			<link rel="canonical" href={url} />

			{/* Preconnect to external domains */}
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin="anonymous"
			/>

			{/* DNS Prefetch */}
			<link rel="dns-prefetch" href="//www.google-analytics.com" />
			<link rel="dns-prefetch" href="//fonts.googleapis.com" />

			{/* Structured Data for specific pages */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "WebPage",
						name: fullTitle,
						description: description,
						url: url,
						image: fullImageUrl,
						author: {
							"@type": "Person",
							name: "Su Htet",
							jobTitle: "MDRT Financial Advisor",
							url: "https://www.suhtet.info",
						},
						publisher: {
							"@type": "Person",
							name: "Su Htet",
						},
						mainEntity: {
							"@type": "Person",
							name: "Su Htet",
							jobTitle: "MDRT Financial Advisor",
							description: description,
							image: fullImageUrl,
							url: "https://www.suhtet.info",
						},
					}),
				}}
			/>
		</Head>
	);
}
