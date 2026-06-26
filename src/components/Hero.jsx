import {
 FaGithub,
 FaLinkedin,
 FaTwitter,
 FaEnvelope,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

// import harshImg from "../images/harsh.png";
import heroImg from "../images/hero.png";


export default function Hero() {
  return (
    <section id="hero" className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid lg:grid-cols-2 gap-10 items-center">

        <div>

          <p className="text-zinc-400 mb-4">
            Hello, I'm
          </p>

          <h1 className="text-6xl lg:text-7xl font-extrabold leading-none">
            Harsh{" "}
            <span className="text-purple-500">
              Gakare
            </span>
          </h1>

          <h2 className="text-3xl font-bold mt-4">
            {/* Frontend Developer */}
          </h2>

          <p className="text-zinc-400 mt-6 max-w-lg">
            I build fast, responsive and user-friendly
            web applications that solve real-world
            problems.
          </p>

          <div className="flex gap-4 mt-8">
            

          
             <a
  href="/cv.pdf"
  download
  className="border border-zinc-700 px-8 py-4 rounded-lg hover:border-purple-500 transition"
>
  Download CV
</a>
       
          </div>

          <div className="flex gap-4 mt-8">
             <a
    href="https://github.com/HarshGakare"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 border border-zinc-800 rounded-lg flex items-center justify-center hover:border-purple-500 hover:text-purple-500 transition"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/harshgakare/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 border border-zinc-800 rounded-lg flex items-center justify-center hover:border-purple-500 hover:text-purple-500 transition"
  >
    <FaLinkedin />
  </a>

 <a
    href="https://twitter.com/HGakare"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 border border-zinc-800 rounded-lg flex items-center justify-center hover:border-purple-500 hover:text-purple-500 transition"
  >
    <FaTwitter />
  </a>


  <a
    href="https://leetcode.com/u/HarshGakare/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 border border-zinc-800 rounded-lg flex items-center justify-center hover:border-purple-500 hover:text-purple-500 transition"
  >
    <SiLeetcode />
  </a>


          </div>

        </div>

        <div className="relative flex justify-center">

          <div className="absolute w-[400px] h-[400px] rounded-full bg-purple-700 blur-[120px] opacity-30" />

          <div className="absolute border border-purple-600 rounded-full w-[380px] h-[380px]" />

          <img
            src={heroImg}
            className="relative z-10 w-[480px]"
          />

        </div>

      </div>
    </section>
  );
}