import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

const caseStudies = [
  { title: "Digital Transformation for Fortune 500 Bank", industry: "Financial Services", challenge: "Legacy systems causing 40% slower processing.", solution: "Cloud-native microservices with real-time fraud detection.", results: ["60% faster processing", "99.99% uptime", "$5M savings"], techs: ["AWS", "Kubernetes", "Python"] },
  { title: "AI-Powered Healthcare Platform", industry: "Healthcare", challenge: "Fragmented data limiting care coordination.", solution: "Unified data platform with ML-powered analytics.", results: ["30% fewer readmissions", "50% faster diagnosis", "100% HIPAA compliant"], techs: ["TensorFlow", "AWS", "React"] },
  { title: "E-Commerce Recommendation Engine", industry: "Retail", challenge: "Generic recommendations with low conversions.", solution: "Deep learning personalization engine.", results: ["25% sales increase", "40% higher CTR"], techs: ["PyTorch", "FastAPI", "Redis"] },
];

const CaseStudies = () => (
  <Layout>
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50/50 to-background">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading badge="Case Studies" title="Success Stories" description="Deep dives into complex challenges and solutions" />
        </AnimatedSection>
        <div className="space-y-8">
          {caseStudies.map((study, i) => (
            <AnimatedSection key={study.title} delay={i * 100}>
              <div className="glass-card overflow-hidden">
                <div className="grid lg:grid-cols-3">
                  <div className="bg-gradient-to-br from-primary to-blue-600 p-8 text-primary-foreground">
                    <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">{study.industry}</span>
                    <h3 className="text-2xl font-bold mt-4 mb-4">{study.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.techs.map(t => <span key={t} className="text-xs bg-white/10 px-3 py-1 rounded-full">{t}</span>)}
                    </div>
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div><h4 className="text-sm font-semibold text-muted-foreground mb-2">Challenge</h4><p className="text-foreground">{study.challenge}</p></div>
                      <div><h4 className="text-sm font-semibold text-muted-foreground mb-2">Solution</h4><p className="text-foreground">{study.solution}</p></div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.results.map(r => <span key={r} className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm"><span className="w-1.5 h-1.5 bg-green-500 rounded-full" />{r}</span>)}
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

export default CaseStudies;
