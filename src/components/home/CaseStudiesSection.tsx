import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "Digital Transformation for Fortune 500 Bank",
    industry: "Financial Services",
    challenge: "Legacy systems causing 40% slower transaction processing and compliance risks.",
    solution: "Migrated to cloud-native microservices architecture with real-time fraud detection.",
    results: ["60% faster transaction processing", "99.99% uptime achieved", "$5M annual cost savings"],
    technologies: ["AWS", "Kubernetes", "Python", "React"],
  },
  {
    title: "AI-Powered Healthcare Analytics Platform",
    industry: "Healthcare",
    challenge: "Fragmented patient data across 500+ providers limiting care coordination.",
    solution: "Built unified data platform with ML-powered predictive analytics and HIPAA compliance.",
    results: ["30% reduction in readmissions", "50% faster diagnosis", "100% HIPAA compliant"],
    technologies: ["TensorFlow", "AWS", "PostgreSQL", "React"],
  },
];

export function CaseStudiesSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            badge="Case Studies"
            title="Success Stories"
            description="Deep dives into complex challenges and the solutions that drove results"
          />
        </AnimatedSection>

        <div className="space-y-8 mb-12">
          {caseStudies.map((study, index) => (
            <AnimatedSection key={study.title} delay={index * 150}>
              <div className="glass-card overflow-hidden">
                <div className="grid lg:grid-cols-3">
                  {/* Left - Gradient */}
                  <div className="bg-gradient-to-br from-primary to-blue-600 p-8 lg:p-10 text-primary-foreground">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 rounded-full mb-4">
                      {study.industry}
                    </span>
                    <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className="lg:col-span-2 p-8 lg:p-10">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                          Challenge
                        </h4>
                        <p className="text-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                          Solution
                        </h4>
                        <p className="text-foreground leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-border">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                        Key Results
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {study.results.map((result) => (
                          <span
                            key={result}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium"
                          >
                            <span className="w-2 h-2 bg-green-500 rounded-full" />
                            {result}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center">
            <Link to="/case-studies">
              <Button variant="hero-outline" size="lg">
                View All Case Studies
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
