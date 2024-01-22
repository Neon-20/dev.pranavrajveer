import { Canvas } from "../components/canvas";
import { ExternalLink, Github, Linkedin, PawPrint, Twitter } from 'lucide-react';
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1 className="fixed opacity-90 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-6xl md:text-8xl text-center">
      <Link href = "https://pranavrajveer.com" target="_blank">
        <div id="t1wrap" className="relative pb-2">
          <span
            id="t1"
            className="duration-300 opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#0088FF]"
          >
            <a href="https://pranavrajveer.com" target="_blank">❤️</a>
          </span>
        </div>
        <div id="t2wrap" className="relative">
          <span
            id="t2"
            className="duration-300 opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-[#4444FF] to-[#0088FF]"
          >
          👨🏻‍💻
          </span>
        </div>
        <div id="t3wrap" className="relative tracking-normal">
          <span
            id="t3"
            className="duration-300 opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-[#4444FF] to-[#FF00FF]"
          >
            Pranav
          </span>
        </div>
        {/* T4 Stack */}
        <div id="t4wrap" className="relative tracking-normal">
          <span
            id="t4"
            className="duration-300 opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-[#FFCC00] to-[#FF2222]"
          >
            Rajveer 
          </span>
        </div>
        </Link>
        <div
          id="subtitle"
          className="font-normal mx-auto mt-8 text-sm border-dotted border-4 md:text-xl md:flex"
        >
          <Link href="https://calendly.com/pranavrajveer/developer-recruiter-connect" target="_blank">
          <div className="px-3 py-2  bg-black bg-opacity-60 duration-300 cursor-pointer hover:bg-black text-white">
            Schedule a Call 🍻
          </div>
          </Link>
          <Link href="https://pranavrajveer.com" target="_blank">
          <div className="px-3 py-2 bg-black bg-opacity-60 duration-300 cursor-pointer hover:bg-black text-white">
            Personal Site 💼
          </div>
          </Link>
        </div>
      </h1>
      <Canvas />
      <span className="fixed mr-4 right-2/4 -translate-x-1/2 bottom-20 text-neutral-600 text-sm duration-300 hover:text-white">
        <a target="_blank" href="https://twitter.com/pranav12yoyo">
        <Twitter/>
        </a>
      </span>
      <span className="fixed left-1/2 -ml-20 -translate-x-1/2 bottom-20 text-neutral-600 text-sm duration-300 hover:text-white">
        <a target="_blank" href="https://bento.me/Neon20">
        <PawPrint/>
        </a>
      </span>
      <span className="fixed left-1/2 -translate-x-1/2 bottom-20 text-neutral-600 text-sm duration-300 hover:text-white">
        <a target="_blank" href="https://github.com/Neon-20">
        <Github/>
        </a>
      </span>
      <span className="fixed left-1/2 -translate-x-1/2 bottom-20 text-neutral-600 text-sm duration-300 hover:text-white ml-10">
        <a target="_blank" href="https://www.linkedin.com/in/pranav-rajveer/">
        <Linkedin/>
        </a>
      </span>
      <span className="fixed left-1/2 ml-20 -translate-x-1/2 bottom-20 text-neutral-600 text-sm duration-300 hover:text-white">
        <a target="_blank" href="https://pranavrajveer.com">
        <ExternalLink/>
        </a>
      </span>
      <span className="fixed bottom-8 left-1/2 -translate-x-1/2 text-neutral-600 text-sm">
        Made with  <span className="-mr-[3px] p-1 text-2xl"> ❤️ </span><span className="p-0">from </span><span className="font-semibold text-blue-500">Pranav</span>
      </span>
 </div>
  );
}
{/* "https://bento.me/Neon20" */}
