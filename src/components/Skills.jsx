import { skills } from "../data";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiFramer,
  SiC,
  SiCplusplus,
} from "react-icons/si";

export default function Skills() {
    const technologies = [
  { icon: FaHtml5, name: "HTML" },
  { icon: FaCss3Alt, name: "CSS" },
  { icon: FaJs, name: "JavaScript" },
  { icon: FaReact, name: "React" },
  { icon: SiExpress, name: "Express" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiFramer, name: "Framer" },
  { icon: FaFigma, name: "Figma" },
  { icon: FaGithub, name: "GitHub" },
  { icon: SiC, name: "C" },
  { icon: SiCplusplus, name: "C++" },
  { icon: FaPython, name: "Python" },
];
  return (
    <section id="skills" className="border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-16">

        <div>

          <p className="text-purple-500 text-sm mb-8">
            MY SKILLS
          </p>

          {skills.map(skill => (
            <div
              key={skill.name}
              className="mb-5"
            >
              <div className="flex justify-between text-sm mb-2">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>

              <div className="h-2 bg-zinc-900 rounded-full">
                <div
                  style={{ width: `${skill.value}%` }}
                  className="h-2 rounded-full bg-purple-500"
                />
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="text-purple-500 text-sm mb-8">
            TECHNOLOGIES I USE
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
  {technologies.map((tech, index) => {
    const Icon = tech.icon;

    return (
      <div
        key={index}
        className="flex flex-col items-center justify-center gap-3
                   p-5 rounded-xl border border-zinc-800
                   bg-[#0b0b0f]
                   hover:border-purple-500
                   hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]
                   hover:-translate-y-1
                   transition-all duration-300"
      >
        <Icon className="text-4xl text-purple-500" />

        <span className="text-sm text-zinc-300">
          {tech.name}
        </span>
      </div>
    );
  })}
</div>
        </div>

      </div>
    </section>
  );
}