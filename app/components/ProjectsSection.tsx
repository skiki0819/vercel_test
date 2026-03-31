import SectionWrapper from "./SectionWrapper";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "neural-chat",
    description:
      "Real-time AI-powered chat application with natural language processing and sentiment analysis.",
    tech: ["React", "Node.js", "WebSocket", "OpenAI"],
    github: "#",
    live: "#",
  },
  {
    title: "crypto-sentinel",
    description:
      "Cryptocurrency portfolio tracker with real-time alerts, predictive analytics, and automated trading signals.",
    tech: ["Next.js", "Python", "PostgreSQL", "Redis"],
    github: "#",
    live: "#",
  },
  {
    title: "dev-forge",
    description:
      "CLI toolkit for rapid project scaffolding with customizable templates and plugin ecosystem.",
    tech: ["TypeScript", "Node.js", "CLI"],
    github: "#",
  },
  {
    title: "pixel-engine",
    description:
      "Lightweight 2D game engine built from scratch with an entity-component system and physics simulation.",
    tech: ["Rust", "WebAssembly", "Canvas API"],
    github: "#",
    live: "#",
  },
  {
    title: "cloud-sync",
    description:
      "Distributed file synchronization system with end-to-end encryption and conflict resolution.",
    tech: ["Go", "gRPC", "Docker", "AWS S3"],
    github: "#",
  },
  {
    title: "matrix-portfolio",
    description:
      "This very website. A Matrix-themed developer portfolio built with modern web technologies.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "#",
    live: "#",
  },
];

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-glow">
        <span className="text-matrix-green/40">//</span> PROJECTS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="terminal-card group hover:scale-[1.02] hover:border-glow transition-all duration-300"
          >
            {/* Top bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-matrix-green/10 bg-matrix-card">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-4 text-xs text-matrix-green/40">
                ~/{project.title}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-4 min-h-[200px]">
              <h3 className="text-matrix-green font-bold text-lg">
                {project.title}
              </h3>
              <p className="text-matrix-green/60 text-sm flex-1">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs border border-matrix-green/15 px-2 py-0.5 rounded text-matrix-green/50"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-2 border-t border-matrix-green/10">
                {project.github && (
                  <a
                    href={project.github}
                    className="text-xs text-matrix-green/50 hover:text-matrix-green hover:text-glow transition-all uppercase tracking-wider"
                  >
                    [source]
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    className="text-xs text-matrix-green/50 hover:text-matrix-green hover:text-glow transition-all uppercase tracking-wider"
                  >
                    [demo]
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
