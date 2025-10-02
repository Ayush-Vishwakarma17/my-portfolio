import { a, div } from "motion/react-client";
import { cn } from "../../lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // ✅ import X

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }, // ✅ fixed typo
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ start closed

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // ✅ screenY → scrollY
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="  container relative flex items-center justify-between top-2.5">
        <a className=" text-xl font-bold text-primary flex items-center" href="#hero">
          <span className="relative z-10">
            <span className="text-glow text-foreground">Ayush Cosmos</span> Portfolio!
          </span>
        </a>

        {/* Desktop Menu */}
        <div className=" hidden md:flex space-x-8 text-sm">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className=" text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="  md:hidden p-2 text-foreground z-50"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
<div
  className={cn(
    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden transition-all duration-300 h-screen", // ✅ added h-screen
    isMenuOpen
      ? "opacity-100 pointer-events-auto"
      : "opacity-0 pointer-events-none"
  )}
>
  <div className="flex flex-col space-y-8 text-xl items-center">
    {navItems.map((item, key) => (
      <a
        key={key}
        href={item.href}
        className="text-foreground/80 hover:text-primary transition-colors duration-300"
        onClick={() => setIsMenuOpen(false)}
      >
        {item.name}
      </a>
    ))}
  </div>
</div>

      </div>
    </nav>
  );
};
