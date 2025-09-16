"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface TranslationContextType {
	currentLanguage: "en" | "my";
	isTranslating: boolean;
	translateText: (text: string) => Promise<string>;
	toggleLanguage: () => void;
	translatedTexts: Map<string, string>;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
	undefined
);

export function TranslationProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [currentLanguage, setCurrentLanguage] = useState<"en" | "my">("en");
	const [isTranslating, setIsTranslating] = useState(false);
	const [translatedTexts, setTranslatedTexts] = useState(
		new Map<string, string>()
	);

	const translateText = async (text: string): Promise<string> => {
		// Always return original text since we're using manual translations now
		return text;
	};

	const toggleLanguage = () => {
		const newLanguage = currentLanguage === "en" ? "my" : "en";
		setCurrentLanguage(newLanguage);
	};

	return (
		<TranslationContext.Provider
			value={{
				currentLanguage,
				isTranslating,
				translateText,
				toggleLanguage,
				translatedTexts,
			}}
		>
			{children}
		</TranslationContext.Provider>
	);
}

export function useTranslation() {
	const context = useContext(TranslationContext);
	if (context === undefined) {
		throw new Error(
			"useTranslation must be used within a TranslationProvider"
		);
	}
	return context;
}
