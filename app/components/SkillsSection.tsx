import SectionWrapper from "./SectionWrapper";

interface SkillCategory {
  title: string;
  file: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    file: "frontend.ts",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vue.js",
      "HTML/CSS",
      "Redux",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    file: "backend.ts",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "REST APIs",
      "Redis",
    ],
  },
  {
    title: "DevOps & Tools",
    file: "devops.ts",
    skills: [
      "Docker",
      "AWS",
      "CI/CD",
      "Git",
      "Linux",
      "Nginx",
      "Terraform",
      "Kubernetes",
    ],
  },
];

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-glow">
        <span className="text-matrix-green/40">//</span> SKILLS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.title} className="terminal-card group hover:border-glow transition-all duration-300">
            {/* Top bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-matrix-green/10 bg-matrix-card">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-4 text-xs text-matrix-green/40">
                {cat.file}
              </span>
            </div>

            {/* Skills */}
            <div className="p-5">
              <p className="text-matrix-green/50 text-xs mb-4">
                {`// ${cat.title}`}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-matrix-green/20 px-3 py-1.5 rounded text-sm text-matrix-green/70 hover:text-matrix-green hover:border-matrix-green/50 hover:border-glow transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
