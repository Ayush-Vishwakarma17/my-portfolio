
const Projects = [
    {
        id: 1,
        title: "Adobe-UI-LandingPage",
        description: "A Landing page built with pure Html Css with maintaining the responsivenss of the screen",
        image: "./projects/adobe.png",
        tags: ["Html", "Css"],
        demoUrl: "#https://adobecopy2.netlify.app/",
        githubUrl: "#https://github.com/Ayush-Vishwakarma17/Adobe-copy",
    },
    {
        id: 2,
        title: "Zerodha-LandingPage",
        description: "A Landing page built with pure Html Css with maintaining the responsivenss of the screen, Which i created in my foundational days.",
        image: "./projects/zerodha.png",
        tags: ["Html", "Css"],
        demoUrl: "#https://ayush-vishwakarma17.github.io/Zerodha-landing-page/",
        githubUrl: "#https://github.com/Ayush-Vishwakarma17/Zerodha-landing-page",
    },
    {
        id: 3,
        title: "VS-LandingPage",
        description: "A Landing page built with pure Html Css with maintaining the responsivenss of the screen, Which i created in my foundational days.",
        image: "./projects/vs-code.png",
        tags: ["Html", "Css"],
        demoUrl: "#https://ayush-vishwakarma17.github.io/VS-code-Landing-page/",
        githubUrl: "#https://github.com/Ayush-Vishwakarma17/VS-code-Landing-page",
    },
]

export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl ">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured
                <span className="text-primary"> Projects</span>
            </h2>

            <p className="text-center text-xs text-primary-1 mb-12 max-w-2xl mx-auto">
                A few simple projects I built to practice and showcase my skills in web development and coding. Each one reflects my learning journey and growing expertise.
            </p>
            <div className="overflow-hidden hoverflow mt-40 grid grid-cols-1 md:grid-cols-3 gap-22 sm:gap-18">

                {Projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg shadow-xs card-hover">

                        <div className="h-48 border-white rounded-lg overflow-hidden bg-red-500">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transiton-transform duration-500 group-hover:scale-11.5"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}