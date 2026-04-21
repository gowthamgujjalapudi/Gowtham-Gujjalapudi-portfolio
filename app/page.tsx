import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="w-full bg-[#121212]">
      {/* 
        The ScrollyCanvas and Overlay are contained together so the 
        sticky Overlay aligns perfectly with the 500vh ScrollyCanvas.
      */}
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      
      <About />
      <Projects />
    </main>
  );
}
