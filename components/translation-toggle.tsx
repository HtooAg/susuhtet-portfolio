"use client";

import { Button } from "@/components/ui/button";
import { Languages, Loader2 } from "lucide-react";
import { useTranslation } from "@/contexts/translation-context";

export function TranslationToggle() {
	const { currentLanguage, isTranslating, toggleLanguage } = useTranslation();

	return (
		<div className="flex items-center">
			<Button
				variant="ghost"
				size="sm"
				onClick={toggleLanguage}
				className="p-2 hover:bg-primary/10 rounded-lg cursor-pointer flex items-center space-x-1"
				disabled={isTranslating}
				title={`Switch to ${
					currentLanguage === "en" ? "Burmese" : "English"
				}`}
			>
				{isTranslating ? (
					<Loader2 size={16} className="animate-spin" />
				) : (
					<Languages size={16} />
				)}
				<span className="text-xs font-medium">
					{currentLanguage === "en" ? "မြန်မာ" : "EN"}
				</span>
			</Button>
		</div>
	);
}
