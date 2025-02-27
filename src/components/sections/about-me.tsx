import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Content */}
        <div className="flex flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I&apos;m Aditya Ingale, a passionate full stack developer specializing in React.js, Next.js, and Spring Boot. At 21 years old, I am dedicated to creating exceptional digital experiences that are user-friendly, visually appealing, and highly performant. My journey in web development began in 2020, and I have continually evolved by embracing new challenges and learning the latest technologies.
          </Typography>
          <Typography>
            Currently pursuing an MCA (2023-2025), I previously completed my BBA in Computer Applications with a CGPA of 8.80 and an A+ grade. My educational background has equipped me with a strong foundation in computer science and application development.
          </Typography>
          <Typography>
            Professionally, I&apos;ve worked as a Data Annotator at Ideas To Impacts Digital Pvt. Ltd, where I ensured the accuracy of image data for algorithm training. More recently, I served as a Team Lead at TDS Management Consultant Pvt. Ltd.
          </Typography>
          <Typography>
            In addition to my technical skills, I am proficient with tools like Figma and IntelliJ IDEA. I am always eager to take on new challenges and expand my knowledge. You can follow me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            .
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Full Stack Developer</Typography>
              <Typography component="li">Quick Learner</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Listener</Typography>
              <Typography component="li">Building Vixar Studio</Typography>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
