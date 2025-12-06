import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Cloud, Server, GitBranch, Shield, Container, Monitor } from "lucide-react";

const skills = [
  {
    icon: Cloud,
    title: "AWS Architecture",
    description: "Expert in designing scalable, cost-effective cloud solutions using AWS services including EC2, Lambda, S3, RDS, and more.",
    services: ["EC2", "Lambda", "S3", "RDS", "CloudFormation", "EKS"],
  },
  {
    icon: Container,
    title: "Container Orchestration",
    description: "Proficient in Docker containerization and Kubernetes orchestration for microservices deployments at scale.",
    services: ["Docker", "Kubernetes", "ECS", "Helm", "Istio", "ArgoCD"],
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description: "Building robust continuous integration and deployment pipelines for seamless software delivery.",
    services: ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI", "AWS CodePipeline"],
  },
  {
    icon: Monitor,
    title: "Monitoring & Observability",
    description: "Implementing comprehensive monitoring solutions for real-time insights and proactive incident response.",
    services: ["Prometheus", "Grafana", "DataDog", "CloudWatch", "ELK Stack"],
  },
  {
    icon: Server,
    title: "Infrastructure as Code",
    description: "Managing infrastructure through code for reproducible, version-controlled deployments.",
    services: ["Terraform", "Pulumi", "CloudFormation", "Ansible", "Chef"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Ensuring cloud security best practices and compliance with industry standards.",
    services: ["IAM", "VPC", "WAF", "KMS", "SOC2", "HIPAA"],
  },
];

export function CloudDevOpsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            badge="Cloud & DevOps"
            title="Enterprise Cloud Solutions"
            description="Building resilient, scalable infrastructure that powers mission-critical applications"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <AnimatedSection key={skill.title} delay={index * 100}>
              <div className="glass-card p-8 h-full card-hover group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <skill.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 text-xs font-medium bg-primary/5 text-primary rounded-full"
                    >
                      {service}
                    </span>
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
