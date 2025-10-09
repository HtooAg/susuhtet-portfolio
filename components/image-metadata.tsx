"use client";

import { useEffect } from "react";

export function ImageMetadata() {
	useEffect(() => {
		// Add image metadata for copyright protection
		const images = document.querySelectorAll("img");

		images.forEach((img) => {
			// Add copyright attributes to all images
			img.setAttribute(
				"data-copyright",
				"© 2024 Su Htet. All rights reserved."
			);
			img.setAttribute("data-owner", "Su Htet");
			img.setAttribute("data-license", "Personal/Professional Use");
			img.setAttribute("data-contact", "susuhtet24@gmail.com");

			// Add specific metadata based on image source
			if (img.src.includes("susuhtet.jpeg")) {
				img.setAttribute(
					"data-description",
					"Su Htet - MDRT Financial Advisor Professional Photo"
				);
				img.setAttribute(
					"data-keywords",
					"Su Htet, MDRT, Financial Advisor, Professional Photo"
				);
			} else if (img.src.includes("logo.jpg")) {
				img.setAttribute(
					"data-description",
					"Su Htet Professional Logo and Branding"
				);
				img.setAttribute(
					"data-keywords",
					"Su Htet Logo, Financial Services, Professional Branding"
				);
			} else if (
				img.src.includes("PostAIA") ||
				img.src.includes("postAIA")
			) {
				img.setAttribute(
					"data-description",
					"Su Htet Professional Posts and Insights"
				);
				img.setAttribute(
					"data-keywords",
					"Financial Services, Insurance, Professional Content"
				);
			} else if (img.src.includes("act")) {
				img.setAttribute(
					"data-description",
					"Su Htet Professional Activities and Achievements"
				);
				img.setAttribute(
					"data-keywords",
					"MDRT Achievement, Professional Activities, AIA Myanmar"
				);
			}
		});

		// Add structured data for images
		const imageStructuredData = {
			"@context": "https://schema.org",
			"@type": "ImageGallery",
			name: "Su Htet Professional Image Gallery",
			description:
				"Professional photos, logos, and content from Su Htet, MDRT Financial Advisor",
			url: "https://www.suhtet.info",
			copyrightHolder: {
				"@type": "Person",
				name: "Su Htet",
				email: "susuhtet24@gmail.com",
				telephone: "+971555238077",
			},
			license: "https://www.suhtet.info/copyright-notice.txt",
			acquireLicensePage: "https://www.suhtet.info/#contact",
			creditText: "© 2024 Su Htet. All rights reserved.",
			image: [
				{
					"@type": "ImageObject",
					url: "https://www.suhtet.info/images/susuhtet.jpeg",
					name: "Su Htet Professional Photo",
					description:
						"Professional headshot of Su Htet, MDRT Financial Advisor",
					copyrightHolder: {
						"@type": "Person",
						name: "Su Htet",
					},
					license: "https://www.suhtet.info/copyright-notice.txt",
					acquireLicensePage: "https://www.suhtet.info/#contact",
				},
				{
					"@type": "ImageObject",
					url: "https://www.suhtet.info/images/logo.jpg",
					name: "Su Htet Professional Logo",
					description:
						"Official logo and branding for Su Htet Financial Services",
					copyrightHolder: {
						"@type": "Person",
						name: "Su Htet",
					},
					license: "https://www.suhtet.info/copyright-notice.txt",
					acquireLicensePage: "https://www.suhtet.info/#contact",
				},
			],
		};

		// Remove existing image metadata script
		const existingScript = document.querySelector(
			"script[data-image-metadata]"
		);
		if (existingScript) {
			existingScript.remove();
		}

		// Add new image metadata script
		const script = document.createElement("script");
		script.type = "application/ld+json";
		script.setAttribute("data-image-metadata", "true");
		script.textContent = JSON.stringify(imageStructuredData);
		document.head.appendChild(script);

		return () => {
			const scriptToRemove = document.querySelector(
				"script[data-image-metadata]"
			);
			if (scriptToRemove) {
				scriptToRemove.remove();
			}
		};
	}, []);

	return null;
}
