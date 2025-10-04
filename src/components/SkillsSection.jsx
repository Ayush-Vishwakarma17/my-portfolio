import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 78, category: "Frontend" },
  { name: "React", level: 80, category: "Frontend" },
  { name: "TypeScript", level: 75, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Next.js", level: 82, category: "Frontend" },
  { name: "Three.js", level: 80, category: "Frontend" },

  // Backend
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "Express", level: 75, category: "Backend" },
  { name: "MongoDB", level: 79, category: "Backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "Tools" },
  { name: "Docker", level: 85, category: "Tools" },
  { name: "Figma", level: 79, category: "Tools" },
  { name: "VS Code", level: 95, category: "Tools" },
  { name: "Blender", level: 75, category: "Tools" },
  { name: "After Effects", level: 83, category: "Tools" },

  // Languages
  { name: "C++", level: 85, category: "Languages" },
  { name: "Java", level: 82, category: "Languages" },
  { name: "Python", level: 75, category: "Languages" },
];

const categories = ["Frontend", "Backend", "Tools", "Languages"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const filterSkills = skills.filter(
    (skill) =>  skill.category === activeCategory
  );

  return (
    <section id="skills" className="relative py-30 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h1 className="font-bold text-3xl md:text-4xl mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h1>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center  sm:justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                " px-5 py-3 uppercase rounded-full transition-color card-hover duration-300",
                activeCategory === category
                  ? "bg-green-400 text-white"
                  : "bg-primary/10 hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="w-full mt-25 gap-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 justify-items-center">
          {filterSkills.map((skill, key) => (
            <div
              key={key}
              className=" w-36 h-30 sm:w-full sm:h-25 bg-card card-hover p-3 shadow-xs rounded-lg"
            >
              <div className=" text-center mb-4">
                <h3 className="font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full overflow-hidden h-2 bg-green-400 rounded-full ">
                <div
                  className=" h-2 rounded-full bg-primary origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className=" mt-4 text-center">
                <span className="text-sm text-muted-foreground">
                  {skill.level + "%"}
                </span>
              </div>
            </div>
          ))}

          
        </div>
      </div>
    </section>
  );
};
