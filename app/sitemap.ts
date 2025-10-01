import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://www.suhtet.info";
	const currentDate = new Date().toISOString();

	return [
		{
			url: baseUrl,
			lastModified: currentDate,
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${baseUrl}/posts`,
			lastModified: currentDate,
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/activities`,
			lastModified: currentDate,
			changeFrequency: "weekly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/#about`,
			lastModified: currentDate,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/#experience`,
			lastModified: currentDate,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/#skills`,
			lastModified: currentDate,
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/#education`,
			lastModified: currentDate,
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/#contact`,
			lastModified: currentDate,
			changeFrequency: "monthly",
			priority: 0.9,
		},
	];
}
