import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import profilePhoto from "@/assets/profile-photo.jpg";
import {
  Code2,
  Cloud,
  Brain,
  Shield,
  Users,
  Lightbulb,
  Target,
  Rocket,
} from "lucide-react";

const expertise = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "15+ years building robust web applications with Python, React, Node.js, and modern frameworks.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description:
      "Expert in designing and deploying scalable cloud solutions on AWS, GCP, and Azure.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Building intelligent systems with TensorFlow, PyTorch, and cutting-edge ML techniques.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Implementing enterprise-grade security measures and ensuring regulatory compliance.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description:
      "Leading and mentoring engineering teams across multiple time zones and disciplines.",
  },
  {
    icon: Lightbulb,
    title: "Technical Strategy",
    description:
      "Aligning technology decisions with business goals for maximum impact and ROI.",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "Committed to delivering the highest quality solutions that exceed expectations.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description:
      "Constantly exploring new technologies and approaches to solve complex problems.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Building strong partnerships with clients and teams to achieve shared success.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50/50 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                About Me
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Building the Future,
                <span className="block gradient-text">One Solution at a Time</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 15 years of experience in software engineering, I've had
                the privilege of working with Fortune 500 companies, innovative
                startups, and everything in between. My passion lies in
                transforming complex business challenges into elegant, scalable
                solutions.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-3xl" />
                <img
                  src="./sir3.jpg"
                  alt=" Ajit Singh Doe"
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Long Bio Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <SectionHeading
                badge="My Journey"
                title="15 Years of Professional Excellence"
                align="left"
              />
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  My journey in technology began in 2009 when I wrote my first lines
                  of code. What started as curiosity quickly evolved into a passion
                  that has driven me to continuously push the boundaries of what's
                  possible with technology. Over the past 15 years, I've evolved from
                  a junior developer to a Principal Solutions Architect, leading
                  teams and shaping the technical direction of enterprise-scale
                  projects.
                </p>

                <p>
                  Throughout my career, I've been fortunate to work on some of the
                  most challenging and impactful projects in the industry. From
                  architecting financial trading systems that process billions of
                  dollars in daily transactions to building healthcare platforms
                  that have improved patient outcomes for millions, each project has
                  reinforced my belief in technology's power to transform lives and
                  businesses.
                </p>

                <p>
                  My expertise spans the entire technology stack, from crafting
                  intuitive user interfaces with React and TypeScript to designing
                  robust backend systems with Python and Node.js. I specialize in
                  cloud-native architectures, having deployed and managed
                  infrastructure across AWS, Google Cloud, and Azure. My work in
                  artificial intelligence and machine learning has helped
                  organizations unlock insights from their data and automate
                  complex decision-making processes.
                </p>

                <p>
                  Security and compliance have always been central to my approach.
                  I've implemented security architectures for organizations in
                  highly regulated industries including healthcare (HIPAA),
                  finance (SOC2, PCI-DSS), and government. I believe that robust
                  security shouldn't come at the expense of user experience or
                  development velocity.
                </p>

                <p>
                  Beyond the technical aspects, I'm deeply committed to building
                  and mentoring high-performing engineering teams. I've led
                  distributed teams across multiple continents, fostering cultures
                  of excellence, continuous learning, and collaborative
                  problem-solving. I believe that the best solutions emerge when
                  diverse perspectives come together with a shared commitment to
                  quality.
                </p>

                <p>
                  Today, I continue to stay at the forefront of technology,
                  particularly in the rapidly evolving fields of AI/ML, cloud
                  computing, and DevOps. I'm passionate about sharing my knowledge
                  through technical writing, speaking at conferences, and
                  mentoring the next generation of engineers. Whether you're a
                  Fortune 500 company looking to modernize your infrastructure or
                  a startup ready to scale, I'm here to help you navigate the
                  complex technology landscape and achieve your goals.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeading
              badge="Expertise"
              title="What I Bring to the Table"
              description="A comprehensive skill set developed over 15 years of solving complex problems"
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 100}>
                <div className="glass-card p-8 h-full card-hover group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeading
              badge="Values"
              title="What Drives Me"
              description="The principles that guide my work and relationships"
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
