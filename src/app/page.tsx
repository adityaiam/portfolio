import HeroSection from '@/components/sections/hero';
import ContactSection from '@/components/sections/contact';
import AboutMeSection from '@/components/sections/about-me';
import SkillsSection from '@/components/sections/skills';
import ExperienceSection from '@/components/sections/experiences';
import WorkSection from '@/components/sections/work';
import EducationSection from '@/components/sections/education';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <WorkSection />
      <ContactSection />
    </>
  );
}
