import { NavBar } from "../components/NavBar"
import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillSection } from "../components/SkillsSection"
import { ProjectSection } from "../components/ProjectSection"
import { ContactSection } from "../components/ContactSection"
import { Contact } from "lucide-react"

export const Home = () => {
    return <div className=" min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background  */}
        <StarBackground />
        {/* Nav-Bar */}

        <NavBar/>

        {/* Main-Content */}
        
        <HeroSection/>
        <AboutSection/>
        <SkillSection/>
        <ProjectSection/>
        <ContactSection/>

        {/* Footer */}
    </div>
} 