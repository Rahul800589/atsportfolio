import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { TechnologiesSection } from "@/components/home/TechnologiesSection";
import { CloudDevOpsSection } from "@/components/home/CloudDevOpsSection";
import { AIMLSection } from "@/components/home/AIMLSection";
import { SecuritySection } from "@/components/home/SecuritySection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { VideoSection } from "@/components/home/VideoSection";
import { PublicationsSection } from "@/components/home/PublicationsSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { AwardsSection } from "@/components/home/AwardsSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { ClientsToolsSection } from "@/components/home/ClientsToolsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ExperienceSection />
      <TechnologiesSection />
      <CloudDevOpsSection />
      <AIMLSection />
      <SecuritySection />
      <ProjectsSection />
      <TestimonialsSection />
      <VideoSection />
      <PublicationsSection />
      <CertificationsSection />
      <AwardsSection />
      <CaseStudiesSection />
      <ClientsToolsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
