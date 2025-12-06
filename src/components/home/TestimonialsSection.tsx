import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: " Ajit Singh expertise in cloud architecture transformed our infrastructure. His solutions reduced our operational costs by 40% while improving performance significantly.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechVentures Inc.",
  },
  {
    quote: "Working with  Ajit Singh was exceptional. His deep understanding of AI/ML helped us build a recommendation engine that increased our revenue by 25% in the first quarter.",
    author: "Michael Torres",
    role: "VP of Engineering",
    company: "Global Retail Corp",
  },
  {
    quote: " Ajit Singh leadership on our digital transformation project was invaluable. He delivered a complex microservices architecture on time and under budget.",
    author: "Emily Watson",
    role: "Director of Technology",
    company: "FinanceFirst Bank",
  },
  {
    quote: "The security architecture  Ajit Singh designed for our healthcare platform exceeded all compliance requirements. His attention to detail is unmatched.",
    author: "Dr. Robert Kim",
    role: "Chief Medical Officer",
    company: "HealthTech Solutions",
  },
  {
    quote: " Ajit Singh full-stack expertise allowed us to launch our MVP in record time. His code quality and documentation are exemplary.",
    author: "Amanda Foster",
    role: "Founder & CEO",
    company: "StartupXYZ",
  },
  {
    quote: "His DevOps implementation reduced our deployment cycles from weeks to hours.  Ajit Singh is a true expert in modern software practices.",
    author: "David Park",
    role: "Engineering Manager",
    company: "CloudScale Systems",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            badge="Testimonials"
            title="What Clients Say"
            description="Trusted by industry leaders and innovative startups worldwide"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.author} delay={index * 100}>
              <div className="glass-card p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
