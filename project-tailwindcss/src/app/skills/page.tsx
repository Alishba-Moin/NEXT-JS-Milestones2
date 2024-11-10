import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

// Data for the Skills section
const skills = {
  title: "My Skills",
  skillList: [
    {
      category: "Programming Languages",
      items: [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3 />, name: "CSS3" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { icon: <FaReact />, name: "React.js" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      ],
    },
    {
      category: "Tools & Technologies",
      items: [
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <VscVscode />, name: "Visual Studio Code" },
        { icon: <TbApi />, name: "RESTful API" },
      ],
    },
  ],
};

export default function Skills() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col gap-10 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <h3 className="text-4xl font-bold text-center">{skills.title}</h3>

        {skills.skillList.map((category, index) => (
          <div key={index}>
            <h4 className="font-bold text-xl text-purple-500 mb-4">{category.category}</h4>

            {/* Skill Items */}
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {category.items.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex justify-center items-center">
                  <div className="w-full h-[90px] bg-[#232329] rounded-xl flex justify-center items-center group p-4 gap-2 hover:bg-[#333] transition-all duration-300">
                    {/* Skill Icon */}
                    <div className="text-4xl group-hover:text-pink-500 transition-all duration-300">
                      {skill.icon}
                    </div>
                    <p className="capitalize text-white text-center mt-2">{skill.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
