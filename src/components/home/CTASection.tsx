import { Link } from "react-router-dom";
import { ArrowRight, Mail, Calendar } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-foreground via-navy-light to-foreground p-8 md:p-16 text-center">
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 bg-white/10 text-white/90 text-sm font-medium rounded-full mb-6">
                Ready to Transform Your Business?
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                Let's Build Something
                <span className="block mt-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Extraordinary Together
                </span>
              </h2>

              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you need to scale your infrastructure, implement AI solutions,
                or modernize your tech stack, I'm here to help you succeed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button
                    size="xl"
                    className="bg-white text-foreground hover:bg-white/90 rounded-full shadow-xl hover:shadow-2xl transition-all"
                  >
                    <Mail className="w-5 h-5" />
                    Get in Touch
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="xl"
                    className="bg-white/10 text-white border border-white/20 hover:bg-white/20 rounded-full"
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule a Call
                  </Button>
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/60 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  Available for new projects
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  Response within 24 hours
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full" />
                  Free initial consultation
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
