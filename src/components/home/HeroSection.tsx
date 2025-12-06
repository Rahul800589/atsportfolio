import { Link } from "react-router-dom";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
// import profilePhoto from "@/assets/profile-photo.jpg";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "99%", label: "Client Satisfaction" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-background to-background" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-green-600 text-sm font-medium rounded-full mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for new projects
              </span>
            </div>

            <h1 className=" w-22 animate-fade-up stagger-1 md:text-4xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-6">
              Senior Full-Stack Developer
              <span className="block gradient-text text-green-600"> & Architect</span>
            </h1>

            <p className="animate-fade-up stagger-2 text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              15+ years building enterprise-grade solutions. Specializing in
              <span className="text-foreground font-medium"> AI/ML</span>,
              <span className="text-foreground font-medium"> Cloud Architecture</span>, and
              <span className="text-foreground font-medium"> Full-Stack Development</span>.
            </p>

            <div className="animate-fade-up stagger-3 flex flex-wrap gap-4 mb-12">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Start a Project
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="hero-outline" size="xl">
                  <Play className="w-5 h-5" />
                  View My Work
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="animate-fade-up stagger-4 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Photo */}
         <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
  <div className="animate-fade-up relative">
    {/* Decorative elements */}
    <div className="absolute -top-4 -left-4 w-72 h-72 md:w-[28rem] md:h-[28rem] bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-3xl" />
    <div className="absolute -bottom-4 -right-4 w-56 h-56 bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-full blur-2xl" />

    {/* Photo container */}
    <div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[28rem] lg:h-[28rem] rounded-3xl overflow-hidden shadow-2xl ring-2 ring-border/60">
      <img
        src="./sir6.jpg"
        alt="Ajit Singh - Senior Full-Stack Developer"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Floating badge */}
    <div className="absolute -bottom-6 -left-6 md:-left-10 bg-background rounded-2xl shadow-xl p-5 border border-border/50">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-green-500 flex items-center justify-center">
          <span className="text-white font-bold text-lg">15+</span>
        </div>
        <div>
          <div className="font-semibold text-foreground text-lg">Years</div>
          <div className="text-sm text-muted-foreground">Experience</div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
