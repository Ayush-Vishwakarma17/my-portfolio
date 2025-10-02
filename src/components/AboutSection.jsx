import { Briefcase, Code, User } from "lucide-react"
import { section } from "motion/react-client"


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className = "text-3xl md:text-4xl font-bold mb-12  text-center">
                About <span className = "text-primary"> Me</span>
            </h2>

            <div className="pt-40 grid grid-cols-1 md:grid-cols-2 gap-18 items-center">

                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Developer & Programmer, Crafting Code and Creativity.</h3>

                    <p className="text-muted-foreground text-sm">I’m a passionate developer with a good UI/UX knowledge and lifelong learner, building websites since 2024. I started with college projects, moved into freelancing, and am always eager to explore new and exciting tech revolutions.</p>

                    <p className="text-muted-foreground text-sm">I love DSA and enjoy participating in competitive programming contests.</p>

                    <div className="flex flex-col sm:flex-row justify-center pt-5 gap-5 items-center ">
                        <a href="#contact" className=" h-12 w-50 bg-green-500 font-semibold rounded-full flex items-center justify-center hover:bg-primary-2 transition-color duration-300">Get In Touch</a>
                        <a href="#contact" className=" h-12 w-50 border-2 border-white bg-primary/10 rounded-2xl flex items-center justify-center hover:bg-primary-2 transition-color duration-300">Download CV</a>
                    </div>
                </div>
                

                <div className="grid grid-cols-1 gap-10">
                    <div className="gradient-border p-5 card-hover ">
                        <div className="flex items-start gap-4">
                            <div className="p-1 rounded-full bg-primary-2">
                                <Code className="h-4 w-4 text-primary-1"/>
                            </div>
                            <div className="text-left">
                                <div>
                                    <h1 className="font-semibold">Full-Stack, DSA and Blender</h1>
                                    <p className="text-xs mt-1">I’m a passionate developer and programmer, skilled in competitive programming, full-stack development, and DSA. I also love creating in Blender and editing AMVs, always exploring new ways to bring creativity to life.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="gradient-border p-4 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-1 rounded-full bg-primary-2">
                                <User className="h-4 w-4 text-primary-1"/>
                            </div>
                            <div className="text-left">
                                <div>
                                    <h1 className="font-semibold">UI/UX using Figma</h1>
                                    <p className="text-xs mt-1">I use Figma to design intuitive and visually appealing UI/UX for my projects. From wireframes to interactive prototypes, I focus on creating seamless user experiences that are both functional and beautiful.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-5 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-1 rounded-full bg-primary-2">
                                <Briefcase className="h-4 w-4 text-primary-1"/>
                            </div>
                            <div className="text-left">
                                <div>
                                    <h1 className="font-semibold">Web-Developer, 3D-Artist</h1>
                                    <p className="text-xs mt-1">With over a year of web development experience via freelancing, I also worked as a 3D artist and graphic designer for the men’s perfume brand Victor Mavin. I aim to use my skills to deliver even more creative and impactful digital experiences.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}