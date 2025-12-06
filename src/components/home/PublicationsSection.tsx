import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

const publications = [
  {
    title: "Building Scalable Microservices with Python and Kubernetes",
    excerpt: "A comprehensive guide to designing and deploying microservices architectures that can handle millions of requests.",
    date: "November 2024",
    readTime: "12 min read",
    category: "Architecture",
  },
  {
    title: "The Future of AI in Enterprise Applications",
    excerpt: "Exploring how large language models and generative AI are transforming business processes and decision-making.",
    date: "October 2024",
    readTime: "8 min read",
    category: "AI/ML",
  },
  {
    title: "DevOps Best Practices for Cloud-Native Applications",
    excerpt: "Lessons learned from implementing CI/CD pipelines and infrastructure as code at enterprise scale.",
    date: "September 2024",
    readTime: "10 min read",
    category: "DevOps",
  },
];

export function PublicationsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            badge="Publications"
            title="Latest Articles"
            description="Sharing insights and best practices from real-world experience"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {publications.map((pub, index) => (
            <AnimatedSection key={pub.title} delay={index * 100}>
              <article className="glass-card overflow-hidden group card-hover h-full flex flex-col">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-blue-500/10" />
                <div className="p-6 flex flex-col flex-grow">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3 w-fit">
                    {pub.category}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {pub.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                    {pub.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {pub.date}
                    </span>
                    <span>{pub.readTime}</span>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center">
            <Link to="/blog">
              <Button variant="hero-outline" size="lg">
                View All Articles
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
