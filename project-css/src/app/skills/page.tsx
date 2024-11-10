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
    <div className="skills-section">
      <div className="skills-container">
        <h3 className="skills-title">{skills.title}</h3>

        {skills.skillList.map((category, index) => (
          <div key={index}>
            <h4 className="skill-category-title">{category.category}</h4>

            {/* Skill Items */}
            <ul className="skills-grid">
              {category.items.map((skill, skillIndex) => (
                <li key={skillIndex} className="skill-item">
                  {/* Skill Icon */}
                  <div className="skill-icon">{skill.icon}</div>
                  <p className="skill-name">{skill.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
