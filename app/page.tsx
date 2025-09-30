import Hero from "@/components/Hero";
import Grid from "@/components/Grid"
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative pb-20 pt-35 bg-black overflow-hidden flex flex-col justify-center items-center mx-auto sm:px-5 px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav
        navItems = {[
          {name: 'Home', link: '/', icon: <FaHome/>}
        ]}
        />
        {/* hero section is done */}
        <Hero/>

        {/* now the grid section */}
        <Grid/>
      </div>
    </main>
  );
}
