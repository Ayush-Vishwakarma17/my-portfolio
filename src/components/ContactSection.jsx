import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"


export const ContactSection = () => {
    return <section id="contact" className="text-3xl md:text-4xl font-bold py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2>Get In <span className="text-primary">Touch</span></h2>

            <p className="mt-6 text-center text-sm font-normal  mb-12 max-w-2xl mx-auto">
                Have an idea or project in mind? Let’s collaborate and bring it to life — feel free to reach out!  
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="sm:text-2xl font-semibold mb-6">Contact Information</h3>

                    <div className="mt-10 space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className=" p-2 rounded-full bg-primary-2">
                                <Mail className="1-5 w-5"/>
                            </div>
                            <div className="">
                                <h4 className="text-lg">Email</h4>
                                <a href="mailto:ayushvishhhhh@gmail.com" className="font-normal text-sm">
                                    ayushvishhhhh@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* for phone */}
                        <div className="flex items-start space-x-4">
                            <div className=" p-2 rounded-full bg-primary-2">
                                <Phone className="1-5 w-5"/>
                            </div>
                            <div className="">
                                <h4 className="text-lg">Phone</h4>
                                <a href="tel: +91 9918177584" className="font-normal text-sm">
                                    +91 9918177584
                                </a>
                            </div>
                        </div> 

                            {/* for  */}
                        <div className="flex items-start space-x-4">
                            <div className=" p-2 rounded-full bg-primary-2">
                                <MapPin className="1-5 w-5"/>
                            </div>
                            <div className="">
                                <h4 className="text-lg">Location</h4>
                                <a className="font-normal text-sm">
                                    India, UP
                                </a>
                            </div>
                        </div> 
                    </div>
                    <div className="pt-8">
                        <h4 className="text-2xl font-medium mb-4">Connect With Me</h4>
                        <div className="flex justify-center space-x-4">
                            <a href="https://www.linkedin.com/in/ayushvishwakarma17/" target="blank">
                                <Linkedin/>
                            </a>
                            <a href="https://www.instagram.com/kind_ayush_/" target="blank">
                                <Instagram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}