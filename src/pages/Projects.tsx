import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Enterprise AI Analytics Platform",
    category: "AI/ML",
    description:
      "Built an enterprise-wide AI platform serving 50M+ users with real-time predictions and personalized recommendations using advanced machine learning algorithms.",
    problem:
      "Client needed to process and analyze 10TB+ of daily user data to deliver personalized experiences at scale.",
    solution:
      "Designed a distributed ML pipeline with real-time inference, automated model retraining, and A/B testing framework.",
    role: "Lead Architect & ML Engineer",
    technologies: ["Python", "TensorFlow", "AWS SageMaker", "Kubernetes", "Kafka", "React"],
    results: ["40% increase in user engagement", "60% faster recommendations", "$15M annual revenue increase"],
  },
  {
    title: "High-Frequency Trading System",
    category: "FinTech",
    description:
      "Architected a high-frequency trading platform processing $10B+ daily transactions with sub-millisecond latency and 99.999% uptime.",
    problem:
      "Legacy trading system couldn't handle increasing transaction volumes and lacked real-time risk management.",
    solution:
      "Built event-driven microservices architecture with in-memory processing and real-time fraud detection.",
    role: "Technical Lead & Architect",
    technologies: ["Python", "C++", "Redis", "PostgreSQL", "Kubernetes", "React"],
    results: ["99.999% uptime achieved", "0.5ms average latency", "$2M saved in operational costs"],
  },
  {
    title: "Healthcare Data Platform",
    category: "Healthcare",
    description:
      "Developed HIPAA-compliant data analytics platform for 500+ healthcare providers with real-time patient insights and predictive analytics.",
    problem:
      "Fragmented patient data across providers limiting care coordination and increasing readmission rates.",
    solution:
      "Created unified data lake with ML-powered risk scoring, FHIR integration, and provider dashboards.",
    role: "Full-Stack Developer & Data Engineer",
    technologies: ["Python", "Django", "React", "AWS", "PostgreSQL", "TensorFlow"],
    results: ["30% reduction in readmissions", "50% faster diagnosis", "100% HIPAA compliant"],
  },
  {
    title: "IoT Smart City Platform",
    category: "IoT",
    description:
      "Created real-time IoT analytics platform processing 10M+ sensor events per second for smart city infrastructure management.",
    problem:
      "City needed to optimize energy usage and traffic flow using data from thousands of connected sensors.",
    solution:
      "Built streaming data platform with edge computing, real-time analytics, and predictive maintenance.",
    role: "Solutions Architect",
    technologies: ["Kafka", "Spark", "Python", "InfluxDB", "React", "AWS IoT"],
    results: ["50% energy cost reduction", "35% traffic improvement", "90% uptime prediction accuracy"],
  },
  {
    title: "E-Commerce Recommendation Engine",
    category: "E-Commerce",
    description:
      "Developed ML-powered recommendation engine for major retail platform serving 5M+ daily active users.",
    problem:
      "Generic recommendations leading to low conversion rates and poor customer engagement.",
    solution:
      "Implemented collaborative filtering with deep learning models for personalized product recommendations.",
    role: "ML Engineer",
    technologies: ["Python", "PyTorch", "FastAPI", "Redis", "PostgreSQL", "React"],
    results: ["25% increase in sales", "40% higher CTR", "15% improvement in customer retention"],
  },
  {
    title: "Cloud Migration Platform",
    category: "Cloud",
    description:
      "Led enterprise cloud migration for Fortune 500 company, moving 500+ applications to AWS with zero downtime.",
    problem:
      "Legacy on-premise infrastructure causing scalability issues and high operational costs.",
    solution:
      "Developed migration automation framework with infrastructure as code and containerization strategy.",
    role: "Cloud Architect",
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "Python", "Jenkins"],
    results: ["40% cost reduction", "Zero downtime migration", "60% faster deployments"],
  },
  {
    title: "Real-Time Fraud Detection System",
    category: "Security",
    description:
      "Built ML-based fraud detection system analyzing millions of transactions in real-time with 99.9% accuracy.",
    problem:
      "Manual fraud review causing delays and missing sophisticated fraud patterns.",
    solution:
      "Developed ensemble ML models with real-time scoring and automated case management.",
    role: "ML Engineer & Security Specialist",
    technologies: ["Python", "XGBoost", "Kafka", "PostgreSQL", "React", "AWS"],
    results: ["99.9% detection accuracy", "$50M fraud prevented annually", "80% faster investigation"],
  },
  {
    title: "DevOps Automation Platform",
    category: "DevOps",
    description:
      "Created comprehensive DevOps platform automating CI/CD pipelines for 200+ microservices.",
    problem:
      "Manual deployments taking days and frequent production issues due to inconsistent environments.",
    solution:
      "Built GitOps-based automation with infrastructure as code, automated testing, and rollback capabilities.",
    role: "DevOps Lead",
    technologies: ["Kubernetes", "ArgoCD", "Terraform", "GitHub Actions", "Python", "Prometheus"],
    results: ["Deployment time: days to minutes", "90% reduction in incidents", "100% environment parity"],
  },
  {
    title: "Customer 360 Data Platform",
    category: "Data Engineering",
    description:
      "Designed unified customer data platform consolidating data from 50+ sources for personalized marketing.",
    problem:
      "Siloed customer data preventing unified view and personalized customer experiences.",
    solution:
      "Built real-time data integration pipeline with identity resolution and segment activation.",
    role: "Data Architect",
    technologies: ["Spark", "Airflow", "Snowflake", "Python", "dbt", "React"],
    results: ["360° customer view achieved", "3x marketing ROI improvement", "50% faster insights"],
  },
  {
    title: "Microservices Migration",
    category: "Architecture",
    description:
      "Led monolith to microservices transformation for enterprise application serving 10M+ users.",
    problem:
      "Monolithic architecture limiting team velocity and causing deployment bottlenecks.",
    solution:
      "Implemented domain-driven design with event sourcing and gradual strangler fig migration.",
    role: "Principal Architect",
    technologies: ["Java", "Spring Boot", "Kubernetes", "Kafka", "PostgreSQL", "React"],
    results: ["10x deployment frequency", "50% faster feature delivery", "99.9% availability"],
  },
  {
    title: "Mobile Banking App",
    category: "Mobile",
    description:
      "Developed cross-platform mobile banking application with biometric authentication and real-time notifications.",
    problem:
      "Outdated mobile experience causing customer churn to digital-first competitors.",
    solution:
      "Built modern React Native app with native feel, offline support, and advanced security.",
    role: "Mobile Tech Lead",
    technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Firebase"],
    results: ["4.8 App Store rating", "2M+ downloads", "50% increase in mobile transactions"],
  },
  {
    title: "Supply Chain Optimization",
    category: "Enterprise",
    description:
      "Created AI-powered supply chain optimization system reducing costs and improving delivery times.",
    problem:
      "Inefficient inventory management and routing causing excess costs and delays.",
    solution:
      "Developed predictive demand forecasting and route optimization using reinforcement learning.",
    role: "AI Solutions Architect",
    technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "React", "AWS"],
    results: ["25% cost reduction", "40% faster deliveries", "95% forecast accuracy"],
  },
  {
    title: "Video Streaming Platform",
    category: "Media",
    description:
      "Built scalable video streaming platform handling 1M+ concurrent viewers with adaptive bitrate streaming.",
    problem:
      "Existing platform couldn't handle peak loads and had poor user experience on slow connections.",
    solution:
      "Designed CDN-optimized architecture with edge computing and intelligent quality adaptation.",
    role: "Backend Architect",
    technologies: ["Python", "FFmpeg", "AWS CloudFront", "Redis", "PostgreSQL", "React"],
    results: ["1M+ concurrent viewers", "99.99% uptime", "50% bandwidth cost reduction"],
  },
  {
    title: "HR Analytics Platform",
    category: "Enterprise",
    description:
      "Developed comprehensive HR analytics platform with predictive attrition modeling and workforce planning.",
    problem:
      "High employee turnover and lack of data-driven insights for workforce decisions.",
    solution:
      "Built predictive models for attrition risk and skill gap analysis with interactive dashboards.",
    role: "Data Science Lead",
    technologies: ["Python", "Scikit-learn", "FastAPI", "PostgreSQL", "React", "Tableau"],
    results: ["30% reduction in attrition", "Improved hiring decisions", "$5M annual savings"],
  },
  {
    title: "API Gateway & Management",
    category: "Platform",
    description:
      "Designed enterprise API gateway handling 100M+ daily requests with rate limiting and analytics.",
    problem:
      "Inconsistent API management across teams causing security risks and poor developer experience.",
    solution:
      "Built centralized API gateway with OAuth 2.0, rate limiting, versioning, and developer portal.",
    role: "Platform Engineer",
    technologies: ["Kong", "Python", "Redis", "PostgreSQL", "React", "Kubernetes"],
    results: ["100M+ daily requests", "Zero security incidents", "80% faster API integration"],
  },
];

const Projects = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50/50 to-background">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                15+ Years of
                <span className="block gradient-text">Impactful Projects</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From AI platforms serving millions to secure financial systems,
                explore a selection of enterprise-grade solutions I've built
                throughout my career.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 50}>
                <div className="glass-card overflow-hidden">
                  <div className="grid lg:grid-cols-3">
                    {/* Left - Category & Title */}
                    <div className="bg-gradient-to-br from-primary to-blue-600 p-8 text-primary-foreground">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 rounded-full mb-4">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      <p className="text-primary-foreground/80 text-sm mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <p className="text-sm font-medium">
                        Role: {project.role}
                      </p>
                    </div>

                    {/* Right - Details */}
                    <div className="lg:col-span-2 p-8">
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                            Problem
                          </h4>
                          <p className="text-foreground text-sm leading-relaxed">
                            {project.problem}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                            Solution
                          </h4>
                          <p className="text-foreground text-sm leading-relaxed">
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                          Technologies
                        </h4>
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

                      <div className="pt-4 border-t border-border">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                          Key Results
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.results.map((result) => (
                            <span
                              key={result}
                              className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-medium"
                            >
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
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
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
