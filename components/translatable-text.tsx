"use client";

import { useTranslate } from "@/hooks/use-translate";

interface TranslatableTextProps {
	children: string;
	className?: string;
	as?: keyof JSX.IntrinsicElements;
}

export function TranslatableText({
	children,
	className = "",
	as: Component = "span",
}: TranslatableTextProps) {
	const { text, isLoading } = useTranslate(children);

	if (isLoading) {
		return (
			<Component className={`${className} opacity-70`}>
				{children}
			</Component>
		);
	}

	return <Component className={className}>{text}</Component>;
}
