

import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Calendar } from "lucide-react";

const posts = [
  {
    title: "Building Scalable Microservices with Python",
    excerpt: "A guide to designing microservices architectures.",
    date: "Nov 2024",
    category: "Architecture",
    readTime: "12 min",
    image: "https://tse1.mm.bing.net/th/id/OIP.4SybpgNVzUJuuY6C_MaUHAHaFj?pid=Api&P=0&h=180"
  },
  {
    title: "The Future of AI in Enterprise",
    excerpt: "How LLMs are transforming business processes.",
    date: "Oct 2024",
    category: "AI/ML",
    readTime: "8 min",
    image: "https://tse4.mm.bing.net/th/id/OIF.GH9CQrbHDFTw6CLiYXtI1g?pid=Api&P=0&h=180"
  },
  {
    title: "DevOps Best Practices for Cloud-Native Apps",
    excerpt: "Lessons from implementing CI/CD at scale.",
    date: "Sep 2024",
    category: "DevOps",
    readTime: "10 min",
    image: "https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsb2clMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Securing Your AWS Infrastructure",
    excerpt: "Essential security patterns for cloud deployments.",
    date: "Aug 2024",
    category: "Security",
    readTime: "15 min",
    image: "https://tse4.mm.bing.net/th/id/OIP.ICLFM35e-nhGIqstO-XQiwHaEK?pid=Api&P=0&h=180"
  },
  {
    title: "Real-Time Data Pipelines with Kafka",
    excerpt: "Building streaming architectures for analytics.",
    date: "Jul 2024",
    category: "Data",
    readTime: "12 min",
    image: "https://tse3.mm.bing.net/th/id/OIP.t5VGJYTevy1DuM5b_vI92AHaE7?pid=Api&P=0&h=180"
  },
  {
    title: "React Performance Optimization",
    excerpt: "Techniques for faster React applications.",
    date: "Jun 2024",
    category: "Frontend",
    readTime: "9 min",
    image: "https://tse1.mm.bing.net/th/id/OIP._z40fnfE1592XeR5PrXb5wHaFB?pid=Api&P=0&h=180"
  },
];

const Blog = () => (
  <Layout>
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50/50 to-background">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            badge="Blog"
            title="Latest Articles"
            description="Insights from 15+ years in software development"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <AnimatedSection key={post.title} delay={i * 50}>
              <article className="glass-card overflow-hidden card-hover group h-full flex flex-col">

                {/* IMAGE BOX */}
                <div className="h-40 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* CARD CONTENT */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mb-3">
                    {post.category}
                  </span>

                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
