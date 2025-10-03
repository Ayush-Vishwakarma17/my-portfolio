import { ArrowDown } from "lucide-react"



export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-4">

        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="uppercase text-2xl md:text-4xl tracking-tighter font-bold">
                    <span className="text-foreground opacity-0 animate-fade-in-delay-1">Hi! I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-2"> Ayush</span>
                    <span className = "text-foreground ml-2 opacity-0 animate-fade-in-delay-3"> Vishwakarma</span>
                </h1>
                <p className="text-[13px] md:text-xs max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4"> A developer exploring DSA, Three.js, and Blender to build creative digital experiences.
                Currently sharpening my skills in algorithms, 3D graphics, and web development to create unique projects.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-5 card-hover-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute  left-1/2 transfrom -translate-1/2 flex flex-col items-center bottom-2">
            <span className = " text-sm text-muted-foreground mb-20 sm:mb-2 animate-bounce">Scroll-Down</span>
            <ArrowDown className="mb-2 sm:mb-0 w-5 h-5 text-primary animate-bounce"/>
        </div>
    </section>
}