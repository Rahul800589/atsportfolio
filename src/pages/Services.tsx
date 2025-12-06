import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import {
  Code2,
  Brain,
  Cloud,
  Database,
  Cpu,
  GitBranch,
  Server,
  Shield,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "End-to-end web application development from concept to deployment, using modern frameworks and best practices.",
    features: [
      "React, Vue.js, Angular frontends",
      "Python, Node.js backends",
      "RESTful & GraphQL APIs",
      "Database design & optimization",
      "Responsive UI/UX implementation",
    ],
    price: "Starting at $150/hr",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Custom AI solutions including predictive models, recommendation engines, NLP systems, and computer vision.",
    features: [
      "Custom ML model development",
      "Deep learning solutions",
      "LLM integration & fine-tuning",
      "MLOps implementation",
      "Data pipeline development",
    ],
    price: "Starting at $200/hr",
  },
  {
    icon: Cloud,
    title: "AWS Cloud Consulting",
    description:
      "Strategic cloud architecture, migration planning, and optimization for AWS environments.",
    features: [
      "Cloud architecture design",
      "Migration strategy & execution",
      "Cost optimization",
      "Multi-region deployments",
      "Disaster recovery planning",
    ],
    price: "Starting at $175/hr",
  },
  {
    icon: Settings,
    title: "Automation & Integration",
    description:
      "Streamline operations with custom automation solutions and seamless system integrations.",
    features: [
      "Workflow automation",
      "API integrations",
      "Data synchronization",
      "Legacy system modernization",
      "RPA implementation",
    ],
    price: "Starting at $150/hr",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Design and implement robust data infrastructure for analytics, reporting, and machine learning.",
    features: [
      "Data warehouse design",
      "ETL/ELT pipeline development",
      "Real-time data streaming",
      "Data quality frameworks",
      "Analytics platform setup",
    ],
    price: "Starting at $175/hr",
  },
  {
    icon: Cpu,
    title: "Machine Learning Engineering",
    description:
      "Production-grade ML systems with proper monitoring, versioning, and scalability.",
    features: [
      "Model deployment & serving",
      "Feature engineering",
      "A/B testing frameworks",
      "Model monitoring & drift detection",
      "AutoML implementation",
    ],
    price: "Starting at $200/hr",
  },
  {
    icon: GitBranch,
    title: "DevOps Implementation",
    description:
      "Build robust CI/CD pipelines and infrastructure automation for faster, safer deployments.",
    features: [
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Container orchestration",
      "Monitoring & observability",
      "GitOps workflows",
    ],
    price: "Starting at $175/hr",
  },
  {
    icon: Server,
    title: "Microservices Architecture",
    description:
      "Design and implement scalable microservices architectures for complex enterprise systems.",
    features: [
      "Service decomposition",
      "API gateway design",
      "Event-driven architecture",
      "Service mesh implementation",
      "Distributed tracing",
    ],
    price: "Starting at $175/hr",
  },
  {
    icon: Shield,
    title: "Security Analysis",
    description:
      "Comprehensive security assessments and implementation of enterprise-grade security measures.",
    features: [
      "Security architecture review",
      "Penetration testing",
      "Compliance implementation",
      "Identity management",
      "Incident response planning",
    ],
    price: "Starting at $200/hr",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50/50 to-background">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Expert Solutions for
                <span className="block gradient-text">Complex Challenges</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                From AI development to cloud architecture, I offer comprehensive
                services tailored to your business needs. 15+ years of experience
                at your service.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 50}>
                <div className="glass-card p-8 h-full flex flex-col card-hover group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 flex-grow">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-border">
                    <span className="text-lg font-bold text-primary">
                      {service.price}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <SectionHeading
                badge="Get Started"
                title="Ready to Transform Your Business?"
                description="Let's discuss how I can help you achieve your technology goals. Free initial consultation included."
              />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    Schedule a Call
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="hero-outline" size="xl">
                    View My Work
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
