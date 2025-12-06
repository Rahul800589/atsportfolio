import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Trophy, Users, TrendingUp, Award } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    title: "AWS Community Hero",
    year: "2024",
    description: "Recognized for exceptional contributions to the AWS community through technical content and mentorship.",
  },
  {
    icon: Users,
    title: "Top 1% Stack Overflow Contributor",
    year: "2023",
    description: "Achieved top contributor status with 50K+ reputation points helping developers worldwide.",
  },
  {
    icon: TrendingUp,
    title: "Tech Innovation Award",
    year: "2023",
    description: "Awarded for developing breakthrough AI solutions at Global Tech Summit.",
  },
  {
    icon: Award,
    title: "Enterprise Excellence Award",
    year: "2022",
    description: "Recognized for exceptional project delivery and client satisfaction at Fortune 500 company.",
  },
];

const achievements = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50M+", label: "Users Impacted" },
  { value: "$500M+", label: "Revenue Generated" },
  { value: "98%", label: "On-Time Delivery" },
];

export function AwardsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            badge="Recognition"
            title="Awards & Achievements"
            description="Celebrating milestones and recognition from the global tech community"
          />
        </AnimatedSection>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {awards.map((award, index) => (
            <AnimatedSection key={award.title} delay={index * 100}>
              <div className="glass-card p-6 flex gap-4 card-hover">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <award.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-foreground">{award.title}</h3>
                    <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Achievements Stats */}
        <AnimatedSection delay={400}>
          <div className="bg-gradient-to-r from-foreground to-navy-light rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement) => (
                <div key={achievement.label} className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-background/70 text-sm md:text-base">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
