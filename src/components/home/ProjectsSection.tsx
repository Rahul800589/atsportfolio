import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Enterprise AI Platform",
    category: "AI/ML",
    description: "Built an enterprise-wide AI platform serving 50M+ users with real-time predictions and personalized recommendations.",
    impact: "40% increase in user engagement",
    technologies: ["Python", "TensorFlow", "AWS", "Kubernetes"],
  },
  {
    title: "Financial Trading System",
    category: "FinTech",
    description: "Architected high-frequency trading platform processing $10B+ daily transactions with sub-millisecond latency.",
    impact: "99.999% uptime achieved",
    technologies: ["Python", "React", "PostgreSQL", "Redis"],
  },
  {
    title: "Healthcare Data Platform",
    category: "Healthcare",
    description: "Developed HIPAA-compliant data analytics platform for 500+ healthcare providers with real-time patient insights.",
    impact: "30% reduction in diagnosis time",
    technologies: ["Django", "React", "AWS", "MongoDB"],
  },
  {
    title: "IoT Analytics Engine",
    category: "IoT",
    description: "Created real-time IoT analytics platform processing 10M+ sensor events per second for smart city infrastructure.",
    impact: "50% energy cost reduction",
    technologies: ["Kafka", "Spark", "Python", "InfluxDB"],
  },
];

export function ProjectsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            badge="Featured Work"
            title="Enterprise Projects"
            description="Delivering transformative solutions for Fortune 500 companies and innovative startups"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 100}>
              <div className="glass-card overflow-hidden group card-hover h-full">
                <div className="p-8">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-green-600 mb-6">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    {project.impact}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center">
            <Link to="/projects">
              <Button variant="hero-outline" size="lg">
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
