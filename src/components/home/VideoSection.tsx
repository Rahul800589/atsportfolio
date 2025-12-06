import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Play } from "lucide-react";

export function VideoSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            badge="Introduction"
            title="Meet Ajit Singh "
            description="Learn about my approach to building enterprise-grade solutions"
          />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border/50 bg-foreground/5">
              {/* Video placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
                <div className="text-center">
                  <button className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-xl ml-10 hover:scale-110 transition-transform animate-pulse-glow">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </button>
                  <p className="mt-6 text-foreground font-medium">
                    Watch Introduction Video
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    2:30 minutes
                  </p>
                </div>
              </div>

              {/* Video thumbnail overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent pointer-events-none" />
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-foreground">200+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Global Clients</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
