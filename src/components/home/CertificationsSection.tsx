import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    year: "2024",
  },
  {
    title: "Google Cloud  Data Engineer",
    issuer: "Google Cloud",
    year: "2023",
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    year: "2023",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2023",
  },
  {
    title: "Azure Solutions Architect Expert",
    issuer: "Microsoft",
    year: "2022",
  },
  {
    title: "Certified Information Systems Security ",
    issuer: "ISC²",
    year: "2022",
  },
];

export function CertificationsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            badge="Credentials"
            title="Certifications"
            description="Industry-recognized certifications validating expertise across cloud, security, and AI"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <AnimatedSection key={cert.title} delay={index * 100}>
              <div className="glass-card p-6 flex items-start gap-4 card-hover group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {cert.issuer} • {cert.year}
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
