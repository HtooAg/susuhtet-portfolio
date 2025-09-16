"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/contexts/translation-context";

export function useTranslate(originalText: string) {
	const { translateText, currentLang } = useTranslation();
	const [translatedText, setTranslatedText] = useState(originalText);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const performTranslation = async () => {
			if (currentLang === "en") {
				setTranslatedText(originalText);
				return;
			}

			setIsLoading(true);
			try {
				const result = await translateText(originalText);
				setTranslatedText(result);
			} catch (error) {
				console.error("Translation error:", error);
				setTranslatedText(originalText);
			} finally {
				setIsLoading(false);
			}
		};

		performTranslation();
	}, [originalText, currentLang, translateText]);

	return { text: translatedText, isLoading };
}
