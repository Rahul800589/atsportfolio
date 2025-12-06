import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Brain, BarChart3, Cpu, Database, Zap, Layers } from "lucide-react";

const aiSkills = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Building predictive models and recommendation systems using supervised and unsupervised learning techniques.",
    expertise: ["Classification", "Regression", "Clustering", "Ensemble Methods"],
  },
  {
    icon: Cpu,
    title: "Deep Learning",
    description: "Developing neural network architectures for computer vision, NLP, and complex pattern recognition.",
    expertise: ["CNN", "RNN/LSTM", "Transformers", "GANs"],
  },
  {
    icon: BarChart3,
    title: "Data Science",
    description: "Extracting insights from complex datasets through statistical analysis and visualization.",
    expertise: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
  },
  {
    icon: Zap,
    title: "MLOps",
    description: "Deploying and monitoring ML models in production with automated pipelines and versioning.",
    expertise: ["MLflow", "Kubeflow", "SageMaker", "Model Monitoring"],
  },
  {
    icon: Database,
    title: "Big Data Processing",
    description: "Processing and analyzing large-scale datasets using distributed computing frameworks.",
    expertise: ["Spark", "Hadoop", "Kafka", "Airflow"],
  },
  {
    icon: Layers,
    title: "LLM & Generative AI",
    description: "Leveraging large language models and generative AI for intelligent applications.",
    expertise: ["OpenAI", "LangChain", "RAG", "Fine-tuning"],
  },
];

export function AIMLSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            badge="AI & Machine Learning"
            title="Intelligent Solutions"
            description="Harnessing the power of artificial intelligence to solve complex business challenges"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiSkills.map((skill, index) => (
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
                  {skill.expertise.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs font-medium bg-primary/5 text-primary rounded-full"
                    >
                      {item}
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
