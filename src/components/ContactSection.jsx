import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          access_key: "2389d288-8737-46b7-94a1-a2bcadb00942",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message, I'll get back to you soon.",
        });
        e.target.reset();
      } else {
        toast({
          title: "Error!",
          description: "Something went wrong, please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error!",
        description: "Something went wrong, please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="text-3xl md:text-4xl font-bold py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2>
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="mt-6 text-center text-sm font-normal mb-12 max-w-2xl mx-auto">
          Have an idea or project in mind? Let’s collaborate and bring it to life — feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="sm:text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="mt-10 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-full bg-primary-2 card-hover-3">
                  <Mail className="h-5 w-5 " />
                </div>
                <div>
                  <h4 className="text-lg">Email</h4>
                  <a href="mailto:ayushvishhhhh@gmail.com" className="font-normal text-sm hover:text-primary">
                    ayushvishhhhh@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 ">
                <div className="p-2 rounded-full bg-primary-2 card-hover-3">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg">Phone</h4>
                  <a href="tel:+919918177584" className="font-normal text-sm hover:text-primary">
                    +91 9918177584
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-full bg-primary-2 card-hover-3">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg">Location</h4>
                  <p className="font-normal text-sm hover:text-primary">India, UP</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-2xl font-medium mb-4">Connect With Me</h4>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/ayushvishwakarma17/" target="_blank">
                  <Linkedin className="card-hover-4" />
                </a>
                <a href="https://www.instagram.com/kind_ayush_/" target="_blank">
                  <Instagram className="card-hover-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 shadow-xs rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Send A Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-normal text-left">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-5 text-sm font-normal w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-hidden focus:ring-2 focus:ring-primary-2 card-hover"
                  placeholder="Astroyed Distroyer..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-normal text-left">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-5 text-sm font-normal w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-hidden focus:ring-2 focus:ring-primary-2 card-hover"
                  placeholder="cosmos-cat@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-normal text-left">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="mt-5 text-sm font-normal w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-hidden focus:ring-2 focus:ring-primary-2 card-hover resize-none"
                  placeholder="Hi, I am open to talk about anything ..."
                ></textarea>
              </div>

              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full/2 h-10 text-sm font-normal card-hover-2 gap-2 flex"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <Send className="h-4 w-4 mt-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
