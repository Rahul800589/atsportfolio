import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Shield, Lock, FileCheck, Eye, Key, AlertTriangle } from "lucide-react";

const securitySkills = [
  {
    icon: Shield,
    title: "Security Architecture",
    description: "Designing defense-in-depth security architectures that protect against evolving threats while enabling business agility.",
  },
  {
    icon: Lock,
    title: "Data Encryption",
    description: "Implementing end-to-end encryption for data at rest and in transit using industry-standard protocols.",
  },
  {
    icon: FileCheck,
    title: "Compliance",
    description: "Ensuring adherence to regulatory requirements including GDPR, HIPAA, SOC2, and PCI-DSS.",
  },
  {
    icon: Eye,
    title: "Threat Detection",
    description: "Building real-time monitoring and alerting systems to detect and respond to security incidents.",
  },
  {
    icon: Key,
    title: "Identity Management",
    description: "Implementing robust IAM solutions with MFA, SSO, and fine-grained access controls.",
  },
  {
    icon: AlertTriangle,
    title: "Vulnerability Assessment",
    description: "Conducting security audits and penetration testing to identify and remediate vulnerabilities.",
  },
];

export function SecuritySection() {
  return (
    <section className="section-padding bg-gradient-to-b from-background via-foreground/[0.02] to-background">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            badge="Security & Compliance"
            title="Enterprise-Grade Security"
            description="Protecting critical assets with comprehensive security strategies and compliance frameworks"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securitySkills.map((skill, index) => (
            <AnimatedSection key={skill.title} delay={index * 100}>
              <div className="group relative p-8 rounded-2xl border border-border/50 bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center mb-6 shadow-lg">
                    <skill.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
