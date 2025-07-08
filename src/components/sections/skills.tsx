import { TECHNOLOGIES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TechDetails from '@/components/data-display/tech-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const SkillsSection = () => {
  return (
    <Container id="skills">
      <div className="flex flex-col items-center gap-3">
        <Tag label="Skills" />
        <Typography variant="subtitle" className="max-w-xl text-center text-sm">
          The skills, tools and technologies I work with:
        </Typography>
      </div>

      <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {TECHNOLOGIES.map((tech, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-2 bg-white/5 dark:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl shadow-sm hover:scale-[1.03] transition-transform"
          >
            <TechDetails {...tech} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SkillsSection;