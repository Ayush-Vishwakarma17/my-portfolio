import { div } from "motion/react-client";



const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Blender", level: 95, category: "tools" },
  { name: "After Effects", level: 95, category: "tools" },
];

export const SkillSection = () => {
    return <section id="skills" className="relative py-30 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h1 className="font-bold text-3xl md:text-4xl mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h1>

            <div className="mt-25 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, key) => (
                    <div
                    key = {key} 
                    className="bg-card card-hover p-8 shadow-xs rounded-lg">
                        <div className="text-left flex items-center">
                            <h3 className="font-semibold">{skill.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}