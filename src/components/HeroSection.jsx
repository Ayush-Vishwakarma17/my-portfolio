


export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-4">

        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="uppercase text-2xl md:text-4xl tracking-tighter font-bold">
                    <span className="text-foreground opacity-0 animate-fade-in-delay-1">Hi! I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-2"> Ayush</span>
                    <span className = "text-foreground ml-2 opacity-0 animate-fade-in-delay-3"> Vishwakarma</span>
                </h1>
            </div>
        </div>
    </section>
}