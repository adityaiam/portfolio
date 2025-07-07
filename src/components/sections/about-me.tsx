import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50 dark:bg-neutral-900" id="about">
      <div className="self-center mb-6">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Content */}
        <div className="flex flex-col gap-6">
          <Typography variant="h3">
            A quick overview of who I am:
          </Typography>

          <Typography>
            I’m <strong>Aditya Ramesh Ingale</strong>, a passionate <strong>Full-Stack Developer</strong> specializing in <strong>App Development</strong>, <strong>Web Applications</strong>, <strong>UI/UX Design</strong>, and <strong>large-scale systems design</strong>. I focus on building high-performance, user-friendly, and visually engaging digital experiences that solve real-world problems.
          </Typography>

          <Typography>
            I genuinely enjoy crafting applications from the ground up — and even today, I feel the same excitement with every new project I build.
          </Typography>

          <Typography>
            My journey began in 2020. Since then, I’ve worked across various domains, from AI annotation to leading large teams. I interned as a <strong>Data Annotator</strong> at <strong>Ideas To Impacts Digital Pvt. Ltd</strong>, and later served as a <strong>Team Lead</strong> at <strong>TDS Management Consultant Pvt. Ltd</strong>, managing a 50-member team and daily operations.
          </Typography>

          <Typography>
            Today, I’m a <strong>Software Developer</strong> at <strong>Chrysalis Software & Systems Pvt. Ltd</strong>, where I develop scalable apps using React, Firebase, and native technologies — delivering solutions to real client use cases.
          </Typography>

          <Typography>
            I hold a <strong>BBA in Computer Applications</strong> (with A+ grade and 8.80 CGPA) and am currently pursuing my <strong>MCA (2023–2025)</strong> from Savitribai Phule Pune University.
          </Typography>

          <Typography>
            Beyond coding, I love working with tools like <strong>Figma</strong>, <strong>Jira</strong>, and <strong>Docker</strong>. I’m currently building <strong>Nextme</strong> — a project showcasing my ability to design and build full-stack, real-time experiences. You can explore more of my work on{' '}
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

          <Typography>Here’s what defines me:</Typography>

          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Full-Stack Developer</Typography>
              <Typography component="li">App & Web App Specialist</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Quick Learner & Problem Solver</Typography>
              <Typography component="li">Building <strong>Nextme</strong></Typography>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;