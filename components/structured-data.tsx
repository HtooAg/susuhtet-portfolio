"use client";

import { useEffect } from "react";

interface StructuredDataProps {
	type: "posts" | "activities" | "homepage";
}

export function StructuredData({ type }: StructuredDataProps) {
	useEffect(() => {
		// Remove any existing structured data scripts
		const existingScripts = document.querySelectorAll(
			'script[type="application/ld+json"][data-structured-data]'
		);
		existingScripts.forEach((script) => script.remove());

		let structuredData: any = {};

		if (type === "posts") {
			// Posts Carousel Structured Data
			structuredData = {
				"@context": "https://schema.org",
				"@type": "ItemList",
				name: "Su Htet Professional Posts - Financial Services & Insurance Insights",
				description:
					"Professional insights, achievements, and expertise in financial services and insurance from Su Htet, MDRT Financial Advisor",
				url: "https://www.suhtet.info/posts",
				numberOfItems: 6,
				itemListElement: [
					{
						"@type": "Article",
						position: 1,
						name: "Insurance isn't \"I'll do it later\"",
						description:
							"Professional insights on life insurance planning and the importance of early coverage for financial protection",
						url: "https://www.suhtet.info/posts#post-1",
						image: {
							"@type": "ImageObject",
							url: "https://www.suhtet.info/images/PostAIA.jpg",
							width: 1200,
							height: 630,
							caption:
								"Su Htet - Life Insurance Planning Insights",
						},
						author: {
							"@type": "Person",
							name: "Su Htet",
							jobTitle: "MDRT Financial Advisor",
							worksFor: {
								"@type": "Organization",
								name: "AIA Myanmar",
							},
						},
						publisher: {
							"@type": "Organization",
							name: "Su Htet Financial Services",
							logo: {
								"@type": "ImageObject",
								url: "https://www.suhtet.info/images/logo.jpg",
								width: 400,
								height: 400,
							},
						},
						datePublished: "2024-05-26",
						dateModified: "2024-05-26",
						mainEntityOfPage: "https://www.suhtet.info/posts",
						keywords: [
							"Life Insurance",
							"Financial Planning",
							"AIA Myanmar",
							"Insurance Protection",
						],
					},
					{
						"@type": "Article",
						position: 2,
						name: "IW Agency Open Day at AIA Myanmar",
						description:
							"Career opportunities and professional development in financial services at AIA Myanmar",
						url: "https://www.suhtet.info/posts#post-2",
						image: {
							"@type": "ImageObject",
							url: "https://www.suhtet.info/images/postAIA1.jpg",
							width: 1200,
							height: 630,
							caption: "AIA Myanmar Career Opportunities",
						},
						author: {
							"@type": "Person",
							name: "Su Htet",
							jobTitle: "MDRT Financial Advisor",
						},
						publisher: {
							"@type": "Organization",
							name: "Su Htet Financial Services",
							logo: {
								"@type": "ImageObject",
								url: "https://www.suhtet.info/images/logo.jpg",
								width: 400,
								height: 400,
							},
						},
						datePublished: "2024-05-13",
						dateModified: "2024-05-13",
						mainEntityOfPage: "https://www.suhtet.info/posts",
						keywords: [
							"Career Opportunity",
							"AIA Myanmar",
							"Professional Development",
						],
					},
					{
						"@type": "Article",
						position: 3,
						name: "Art Exhibition - Dancers In Life",
						description:
							"Community engagement and cultural events supporting Myanmar women empowerment",
						url: "https://www.suhtet.info/posts#post-3",
						image: {
							"@type": "ImageObject",
							url: "https://www.suhtet.info/images/postAIA2.jpg",
							width: 1200,
							height: 630,
							caption: "Art Exhibition Community Event",
						},
						author: {
							"@type": "Person",
							name: "Su Htet",
							jobTitle: "MDRT Financial Advisor",
						},
						publisher: {
							"@type": "Organization",
							name: "Su Htet Financial Services",
							logo: {
								"@type": "ImageObject",
								url: "https://www.suhtet.info/images/logo.jpg",
								width: 400,
								height: 400,
							},
						},
						datePublished: "2024-03-16",
						dateModified: "2024-03-16",
						mainEntityOfPage: "https://www.suhtet.info/posts",
						keywords: [
							"Art Exhibition",
							"Cultural Event",
							"Community Engagement",
						],
					},
					{
						"@type": "Article",
						position: 4,
						name: "AIA One Health Solution - Comprehensive Health Insurance",
						description:
							"Complete guide to health insurance coverage with 10% discount benefits and comprehensive protection",
						url: "https://www.suhtet.info/posts#post-4",
						image: {
							"@type": "ImageObject",
							url: "https://www.suhtet.info/images/postAIA3.jpg",
							width: 1200,
							height: 630,
							caption: "Health Insurance Solutions",
						},
						author: {
							"@type": "Person",
							name: "Su Htet",
							jobTitle: "MDRT Financial Advisor",
						},
						publisher: {
							"@type": "Organization",
							name: "Su Htet Financial Services",
							logo: {
								"@type": "ImageObject",
								url: "https://www.suhtet.info/images/logo.jpg",
								width: 400,
								height: 400,
							},
						},
						datePublished: "2024-03-14",
						dateModified: "2024-03-14",
						mainEntityOfPage: "https://www.suhtet.info/posts",
						keywords: [
							"Health Insurance",
							"One Health Solution",
							"AIA Myanmar",
						],
					},
					{
						"@type": "Article",
						position: 5,
						name: "March Insurance Premium Discount",
						description:
							"Special 10% premium discount opportunity for life insurance coverage and family protection",
						url: "https://www.suhtet.info/posts#post-5",
						image: {
							"@type": "ImageObject",
							url: "https://www.suhtet.info/images/postAIA4.jpg",
							width: 1200,
							height: 630,
							caption: "Insurance Premium Discount",
						},
						author: {
							"@type": "Person",
							name: "Su Htet",
							jobTitle: "MDRT Financial Advisor",
						},
						publisher: {
							"@type": "Organization",
							name: "Su Htet Financial Services",
							logo: {
								"@type": "ImageObject",
								url: "https://www.suhtet.info/images/logo.jpg",
								width: 400,
								height: 400,
							},
						},
						datePublished: "2024-03-11",
						dateModified: "2024-03-11",
						mainEntityOfPage: "https://www.suhtet.info/posts",
						keywords: [
							"Universal Life",
							"Premium Discount",
							"Family Protection",
						],
					},
					{
						"@type": "Article",
						position: 6,
						name: "Life Insurance Concept and Financial Planning",
						description:
							"Comprehensive explanation of life insurance principles, financial protection, and long-term planning strategies",
						url: "https://www.suhtet.info/posts#post-6",
						image: {
							"@type": "ImageObject",
							url: "https://www.suhtet.info/images/postAIA5.jpg",
							width: 1200,
							height: 630,
							caption: "Life Insurance Financial Planning",
						},
						author: {
							"@type": "Person",
							name: "Su Htet",
							jobTitle: "MDRT Financial Advisor",
						},
						publisher: {
							"@type": "Organization",
							name: "Su Htet Financial Services",
							logo: {
								"@type": "ImageObject",
								url: "https://www.suhtet.info/images/logo.jpg",
								width: 400,
								height: 400,
							},
						},
						datePublished: "2023-12-20",
						dateModified: "2023-12-20",
						mainEntityOfPage: "https://www.suhtet.info/posts",
						keywords: [
							"Life Insurance Concept",
							"Financial Planning",
							"Universal Life",
						],
					},
				],
			};
		} else if (type === "activities") {
			// Activities Carousel Structured Data
			structuredData = {
				"@context": "https://schema.org",
				"@type": "ItemList",
				name: "Su Htet Professional Activities - MDRT Achievements & Events",
				description:
					"Professional activities, achievements, and events from Su Htet, MDRT Financial Advisor and AIA Premier Member",
				url: "https://www.suhtet.info/activities",
				numberOfItems: 4,
				itemListElement: [
					{
						"@type": "Event",
						position: 1,
						name: "MDRT Professional Achievement Recognition",
						description:
							"Recognition and achievement in Million Dollar Round Table (MDRT) for outstanding performance in financial services",
						url: "https://www.suhtet.info/activities#activity-1",
						image: {
							"@type": "ImageObject",
							url: "https://www.suhtet.info/images/act1.png",
							width: 1200,
							height: 630,
							caption: "MDRT Achievement Recognition",
						},
						organizer: {
							"@type": "Organization",
							name: "Million Dollar Round Table (MDRT)",
						},
						performer: {
							"@type": "Person",
							name: "Su Htet",
							jobTitle: "MDRT Financial Advisor",
						},
						location: {
							"@type": "Place",
							name: "Myanmar",
						},
					},
					{
						"@type": "Event",
						position: 2,
						name: "AIA Premier Club Membership Achievement",
						description:
							"Achievement of Premier Club status at AIA Myanmar for exceptional performance in financial services",
						url: "https://www.suhtet.info/activities#activity-2",
						image: {
							"@type": "ImageObject",
							url: "https://www.suhtet.info/images/act2.png",
							width: 1200,
							height: 630,
							caption: "AIA Premier Club Achievement",
						},
						organizer: {
							"@type": "Organization",
							name: "AIA Myanmar",
						},
						performer: {
							"@type": "Person",
							name: "Su Htet",
							jobTitle: "Financial Services Consultant",
						},
						location: {
							"@type": "Place",
							name: "Myanmar",
						},
					},
					{
						"@type": "Event",
						position: 3,
						name: "Professional Development Training",
						description:
							"Continuous professional development and training in financial services and insurance expertise",
						url: "https://www.suhtet.info/activities#activity-3",
						image: {
							"@type": "ImageObject",
							url: "https://www.suhtet.info/images/act3.png",
							width: 1200,
							height: 630,
							caption: "Professional Development Training",
						},
						organizer: {
							"@type": "Organization",
							name: "AIA Myanmar",
						},
						performer: {
							"@type": "Person",
							name: "Su Htet",
							jobTitle: "Financial Services Consultant",
						},
					},
					{
						"@type": "Event",
						position: 4,
						name: "Financial Services Excellence Award",
						description:
							"Recognition for excellence in financial services and client satisfaction achievements",
						url: "https://www.suhtet.info/activities#activity-4",
						image: {
							"@type": "ImageObject",
							url: "https://www.suhtet.info/images/act4.png",
							width: 1200,
							height: 630,
							caption: "Financial Services Excellence",
						},
						organizer: {
							"@type": "Organization",
							name: "AIA Myanmar",
						},
						performer: {
							"@type": "Person",
							name: "Su Htet",
							jobTitle: "MDRT Financial Advisor",
						},
					},
				],
			};
		} else if (type === "homepage") {
			// Homepage with Logo and Professional Info
			structuredData = {
				"@context": "https://schema.org",
				"@type": "Person",
				name: "Su Htet",
				jobTitle: "MDRT Financial Advisor",
				description:
					"Financial Services Consultant professional with 5+ years of international experience in Insurance, Finance and Media Branding.",
				image: {
					"@type": "ImageObject",
					url: "https://www.suhtet.info/images/susuhtet.jpeg",
					width: 1200,
					height: 630,
					caption: "Su Htet - MDRT Financial Advisor",
				},
				logo: {
					"@type": "ImageObject",
					url: "https://www.suhtet.info/images/logo.jpg",
					width: 400,
					height: 400,
					caption: "Su Htet Professional Logo",
				},
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
					name: "AIA Myanmar",
					url: "https://www.aia.com",
					logo: {
						"@type": "ImageObject",
						url: "https://www.suhtet.info/images/AIA.png",
					},
				},
				memberOf: {
					"@type": "Organization",
					name: "Million Dollar Round Table (MDRT)",
					url: "https://www.mdrt.org",
				},
				knowsAbout: [
					"Financial Planning",
					"Life Insurance",
					"Health Insurance",
					"Investment Advisory",
					"Media Branding",
					"Financial Services",
				],
				address: {
					"@type": "PostalAddress",
					addressCountry: "Myanmar",
				},
				telephone: "+971555238077",
				email: "susuhtet24@gmail.com",
				hasCredential: [
					{
						"@type": "EducationalOccupationalCredential",
						name: "MDRT Qualification",
						credentialCategory: "Professional Certification",
						recognizedBy: {
							"@type": "Organization",
							name: "Million Dollar Round Table",
						},
					},
					{
						"@type": "EducationalOccupationalCredential",
						name: "AIA Premier Club Member",
						credentialCategory: "Professional Achievement",
						recognizedBy: {
							"@type": "Organization",
							name: "AIA Myanmar",
						},
					},
				],
			};
		}

		// Create and inject the structured data script
		const script = document.createElement("script");
		script.type = "application/ld+json";
		script.setAttribute("data-structured-data", type);
		script.textContent = JSON.stringify(structuredData);
		document.head.appendChild(script);

		// Cleanup function
		return () => {
			const scriptToRemove = document.querySelector(
				`script[data-structured-data="${type}"]`
			);
			if (scriptToRemove) {
				scriptToRemove.remove();
			}
		};
	}, [type]);

	return null; // This component doesn't render anything visible
}
