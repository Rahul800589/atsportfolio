import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  { title: "AWS Solutions Architect Professional", issuer: "Amazon Web Services", year: "2024", },
  { title: "Google Cloud Professional Data Engineer", issuer: "Google Cloud", year: "2023",  },
  { title: "Certified Kubernetes Administrator", issuer: "CNCF", year: "2023",  },
  { title: "TensorFlow Developer Certificate", issuer: "Google", year: "2023",  },
  { title: "Azure Solutions Architect Expert", issuer: "Microsoft", year: "2022", },
  { title: "CISSP", issuer: "ISC²", year: "2022", },
  { title: "AWS DevOps Engineer Professional", issuer: "Amazon Web Services", year: "2021", },
  { title: "Databricks Certified Data Engineer", issuer: "Databricks", year: "2021", },
];

const Certifications = () => (
  <Layout>
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50/50 to-background">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading badge="Credentials" title="Professional Certifications" description="Industry-recognized credentials validating expertise" />
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <AnimatedSection key={cert.title} delay={i * 50}>
              <div className="glass-card p-6 flex gap-4 card-hover">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer} • {cert.year}</p>
                  
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Certifications;
