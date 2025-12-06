import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

const experiences = [
  {
    year: "2022 - Present",
    title: "Principal Solutions Architect",
    company: "Fortune 500 Tech Company",
    description: "Leading cloud architecture initiatives for enterprise clients. Designed and implemented AI-powered solutions serving 50M+ users. Managing teams of 20+ engineers across multiple time zones.",
    technologies: ["AWS", "Python", "React", "Kubernetes", "TensorFlow"],
  },
  {
    year: "2018 - 2022",
    title: "Senior Full-Stack Developer & Tech Lead",
    company: "Global Financial Services Firm",
    description: "Architected microservices infrastructure handling $10B+ in daily transactions. Led DevOps transformation reducing deployment time by 80%. Implemented ML-based fraud detection system.",
    technologies: ["Python", "Node.js", "React", "Docker", "PostgreSQL"],
  },
  {
    year: "2015 - 2018",
    title: "Lead Software Engineer",
    company: "Healthcare Technology Startup",
    description: "Built HIPAA-compliant data platform from ground up. Developed real-time analytics dashboard for 500+ healthcare providers. Scaled infrastructure to handle 1M+ daily API calls.",
    technologies: ["Python", "Django", "React", "AWS", "MongoDB"],
  },
  {
    year: "2012 - 2015",
    title: "Full-Stack Developer",
    company: "E-commerce Platform",
    description: "Developed core e-commerce features serving 2M+ customers. Implemented payment processing integration with 99.99% uptime. Built recommendation engine increasing sales by 25%.",
    technologies: ["Python", "JavaScript", "MySQL", "Redis", "Elasticsearch"],
  },
  {
    year: "2009 - 2012",
    title: "Software Developer",
    company: "Enterprise Software Company",
    description: "Contributed to enterprise resource planning solutions. Developed data migration tools for Fortune 1000 clients. Collaborated on agile development practices implementation.",
    technologies: ["Java", "Python", "Oracle", "Spring", "jQuery"],
  },
];

export function ExperienceSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            badge="Career Journey"
            title="15+ Years of Professional Excellence"
            description="A proven track record of delivering enterprise-grade solutions across diverse industries"
          />
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <AnimatedSection key={exp.year} delay={index * 100}>
                <div
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-lg" />

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"} pl-8 md:pl-0`}>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">
                      {exp.year}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                      {exp.technologies.map((tech) => (
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
        </div>
      </div>
    </section>
  );
}
