import { EDUCATION } from '@/lib/data';
import EducationDetails from '@/components/data-display/education-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const EducationSection = () => {
  return (
    <Container id='education'>
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Education" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          A quick summary of my education background
        </Typography>
      </div>

      {EDUCATION?.map((experience, index) => (
        <EducationDetails {...experience} key={index} />
      ))}
    </Container>
  );
};

export default EducationSection;
