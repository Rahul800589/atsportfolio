import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Download, FileText, Briefcase, GraduationCap } from "lucide-react";

const Resume = () => (
  <Layout>
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50/50 to-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">Resume</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Download My Resume</h1>
              <p className="text-lg text-muted-foreground mb-8">15+ years of experience in full-stack development, AI/ML, and cloud architecture</p>
              <Button variant="hero" size="xl"><Download className="w-5 h-5" />Download PDF Resume</Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="glass-card p-8 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4"><Briefcase className="w-6 h-6 text-primary" /><h2 className="text-2xl font-bold">Experience Highlights</h2></div>
                <div className="space-y-4">
                  {[
                    { role: "Principal Solutions Architect", company: "Fortune 500 Tech", years: "2022-Present" },
                    { role: "Senior Tech Lead", company: "Global Financial Services", years: "2018-2022" },
                    { role: "Lead Software Engineer", company: "Healthcare Startup", years: "2015-2018" },
                  ].map(e => (
                    <div key={e.role} className="flex justify-between items-start border-l-2 border-primary pl-4">
                      <div><h3 className="font-semibold">{e.role}</h3><p className="text-sm text-muted-foreground">{e.company}</p></div>
                      <span className="text-sm text-muted-foreground">{e.years}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4"><GraduationCap className="w-6 h-6 text-primary" /><h2 className="text-2xl font-bold">Education</h2></div>
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold">M.S. Computer Science</h3>
                  <p className="text-sm text-muted-foreground">Stanford University • 2009</p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4"><FileText className="w-6 h-6 text-primary" /><h2 className="text-2xl font-bold">Key Skills</h2></div>
                <div className="flex flex-wrap gap-2">
                  {["Python", "React", "AWS", "Kubernetes", "TensorFlow", "PostgreSQL", "Docker", "TypeScript"].map(s => (
                    <span key={s} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </Layout>
);

export default Resume;
