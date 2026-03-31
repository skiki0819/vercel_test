import SectionWrapper from "./SectionWrapper";

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-glow">
        <span className="text-matrix-green/40">//</span> ABOUT
      </h2>

      <div className="terminal-card">
        {/* Terminal top bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-matrix-green/10 bg-matrix-card">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-4 text-xs text-matrix-green/40">
            ~/about/developer.sh
          </span>
        </div>

        {/* Terminal body */}
        <div className="p-6 md:p-8 space-y-6 text-sm md:text-base">
          <div>
            <p className="text-matrix-green font-bold">$ whoami</p>
            <p className="text-matrix-green/70 mt-1 pl-4">
              {">"} Passionate full-stack developer with a love for clean code,
              scalable architecture, and open-source contribution. I build
              digital experiences that live at the intersection of performance
              and elegant design.
            </p>
          </div>

          <div>
            <p className="text-matrix-green font-bold">$ cat experience.log</p>
            <p className="text-matrix-green/70 mt-1 pl-4">
              {">"} 5+ years crafting web applications, from pixel-perfect UIs
              to robust backend systems. Experienced in agile environments,
              mentoring junior developers, and turning complex requirements into
              elegant solutions.
            </p>
          </div>

          <div>
            <p className="text-matrix-green font-bold">
              $ ls ./interests --all
            </p>
            <div className="text-matrix-green/70 mt-1 pl-4 flex flex-wrap gap-x-4 gap-y-1">
              <span>open-source/</span>
              <span>system-design/</span>
              <span>ai-ml/</span>
              <span>cybersecurity/</span>
              <span>game-dev/</span>
              <span>linux/</span>
            </div>
          </div>

          <div>
            <p className="text-matrix-green font-bold">$ uptime</p>
            <p className="text-matrix-green/70 mt-1 pl-4">
              {">"} Always learning, always building. Currently exploring AI
              integration and edge computing.
            </p>
          </div>

          <p className="text-matrix-green/30 animate-[blink-caret_1s_step-end_infinite]">
            █
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
