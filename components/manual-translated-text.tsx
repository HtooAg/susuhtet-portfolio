"use client";

import { useTranslation } from "@/contexts/translation-context";
import { getTranslation } from "@/lib/translations";

interface ManualTranslatedTextProps {
	children: string;
	className?: string;
}

export function ManualTranslatedText({
	children,
	className,
}: ManualTranslatedTextProps) {
	const { currentLanguage } = useTranslation();

	const translatedText = getTranslation(children, currentLanguage);

	return <span className={className}>{translatedText}</span>;
}
