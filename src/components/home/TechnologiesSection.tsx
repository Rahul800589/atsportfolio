import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

const technologies = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "Vue.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Python", level: 98 },
      { name: "Node.js", level: 90 },
      { name: "Django", level: 92 },
      { name: "FastAPI", level: 95 },
      { name: "GraphQL", level: 88 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", level: 95 },
      { name: "MongoDB", level: 90 },
      { name: "Redis", level: 88 },
      { name: "Elasticsearch", level: 85 },
      { name: "DynamoDB", level: 82 },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", level: 95 },
      { name: "Kubernetes", level: 90 },
      { name: "Terraform", level: 88 },
      { name: "CI/CD", level: 92 },
      { name: "Linux", level: 90 },
    ],
  },
];

export function TechnologiesSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            badge="Technical Expertise"
            title="Technologies & Frameworks"
            description="Mastery across the full technology stack with hands-on experience in enterprise environments"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((category, categoryIndex) => (
            <AnimatedSection key={category.category} delay={categoryIndex * 100}>
              <div className="glass-card p-6 h-full">
                <h3 className="text-lg font-bold text-foreground mb-6">
                  {category.category}
                </h3>
                <div className="space-y-5">
                  {category.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium text-foreground">
                          {item.name}
                        </span>
                        <span className="text-muted-foreground">{item.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full transition-all duration-1000"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
