import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

const clients = [
  "Fortune 500 Bank",
  "Global Retail Corp",
  "Healthcare Giant",
  "Tech Unicorn",
  "Insurance Leader",
  "Media Conglomerate",
  "Energy Company",
  "Automotive OEM",
];

const toolLogos = [
  { name: "Python", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "Orchestration" },
  { name: "PostgreSQL", category: "Database" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "TypeScript", category: "Language" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Cache" },
  { name: "GraphQL", category: "API" },
];

export function ClientsToolsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Global Clients */}
        <AnimatedSection>
          <SectionHeading
            badge="Global Reach"
            title="Trusted by Industry Leaders"
            description="Delivering excellence for Fortune 500 companies and innovative startups worldwide"
          />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {clients.map((client) => (
              <div
                key={client}
                className="glass-card p-6 flex items-center justify-center h-24 group hover:border-primary/30 transition-colors"
              >
                <span className="text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Tools & Technologies */}
        <AnimatedSection>
          <SectionHeading
            badge="Tech Stack"
            title="Tools & Technologies"
            description="Leveraging the best tools to build exceptional solutions"
          />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {toolLogos.map((tool) => (
              <div
                key={tool.name}
                className="glass-card p-6 flex flex-col items-center justify-center gap-2 group hover:border-primary/30 transition-all card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center mb-2">
                  <span className="text-lg font-bold text-primary">
                    {tool.name.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-foreground text-sm text-center">
                  {tool.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {tool.category}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
