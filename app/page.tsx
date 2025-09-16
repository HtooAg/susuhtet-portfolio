import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";
import { SkillsSection } from "@/components/skills-section";
import { PostsSection } from "@/components/posts-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
	return (
		<main className="min-h-screen">
			<Navbar />
			<HeroSection />
			<AboutSection />
			<ExperienceSection />
			<EducationSection />
			<SkillsSection />
			<PostsSection />
			<ContactSection />
			<Footer />
		</main>
	);
}
