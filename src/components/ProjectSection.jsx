import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";

const Projects = [
  {
    id: 1,
    title: "Adobe-UI-LandingPage",
    description: "I was in love with the official Adobe webpage.",
    image: "./projects/adobe.png",
    tags: ["Html", "Css"],
    demoUrl: "https://adobecopy2.netlify.app/",
    githubUrl: "https://github.com/Ayush-Vishwakarma17/Adobe-copy",
  },
  {
    id: 2,
    title: "Personal-portfolio",
    description: "The portfolio you are experiencing right now.",
    image: "./projects/portfolio.png",
    tags: ["Tailwind", "React", "JavaScript"],
    demoUrl: "https://aayushdev-portfolio.vercel.app/",
    githubUrl: "https://github.com/Ayush-Vishwakarma17/my-portfolio",
  },
  {
    id: 3,
    title: "Zerodha-LandingPage",
    description: "Landing page of Zerodha to learn my css and html knowledge.",
    image: "./projects/zerodha.png",
    tags: ["Html", "Css"],
    demoUrl: "https://aayushdev-portfolio.vercel.app/",
    githubUrl: "https://github.com/Ayush-Vishwakarma17/Zerodha-landing-page",
  },
  {
    id: 4,
    title: "VS-LandingPage",
    description: "I created this in my early days of development.",
    image: "./projects/vs-code.png",
    tags: ["Html", "Css"],
    demoUrl: "https://aayushdev-portfolio.vercel.app/",
    githubUrl: "https://github.com/Ayush-Vishwakarma17/VS-code-Landing-page",
  },
  
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-xs text-primary-1 mb-12 max-w-2xl mx-auto">
          A few simple projects I built to practice and showcase my skills in
          web development and coding. Each one reflects my learning journey and
          growing expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr ">
          {Projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card border-3 rounded-lg shadow-xs card-hover-2 flex flex-col h-full"
            >
              <div className="h-48 mb-2 rounded-lg overflow-hidden ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap mb-2 gap-1">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 flex justify-center items-center text-xs bg-primary/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="mb-1 text-left font-semibold">{project.title}</h3>
                  <p className="text-xs text-left">{project.description}</p>
                </div>

                <div className="flex gap-4 mt-4">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="card-hover-4" />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="card-hover-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-15 flex justify-center ">
            <a href="https://github.com/Ayush-Vishwakarma17/" target="_blank" className="card-hover-3 cosmic-button w-fit flex items-center mt-auto gap-2">
                Check My Github <ArrowRight size = {16} className=" " />
            </a>
        </div>
      </div>
    </section>
  );
};
