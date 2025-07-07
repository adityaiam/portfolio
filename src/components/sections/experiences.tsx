'use client';

import { EXPERIENCES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const formatDate = (date: Date) =>
  date.toLocaleString('default', { month: 'short', year: 'numeric' });

const ExperienceSection = () => {
  return (
    <Container id="experience" className="bg-gray-50 dark:bg-neutral-900 flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-4 mb-16">
        <Tag label="Experience" />
        <Typography
          variant="subtitle"
          className="max-w-2xl text-center text-gray-700 dark:text-gray-300"
        >
          Here’s a summary of my professional journey, showcasing key projects and growth.
        </Typography>
      </div>

      <div className="space-y-12">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-neutral-800 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border-gray-900 dark:border-gray-900"
          >
            {/* Company Header */}
            <div className="flex items-center gap-5">
              <img
                src={experience.logo.src}
                alt={experience.logoAlt}
                className="h-20 w-20 rounded-xl bg-gray-100 dark:bg-neutral-700 p-1 object-contain"
              />
              <div>
                <h3 className="text-sm md:text-2xl font-bold text-gray-900 dark:text-white">
                  {experience.company}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {experience.location} · {formatDate(experience.startDate)} –{' '}
                  {formatDate(experience.endDate)}
                </p>
              </div>
            </div>

            {/* Timeline of Roles */}
            <div className="mt-8 ml-4 pl-4 border-l-[3px] border-gray-200 dark:border-neutral-700 space-y-8 relative">
              {experience.roles.map((role, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[25px] top-1.5 w-4 h-4 bg-gray-900 dark:bg-gray-900 rounded-full border-4 border-white dark:border-neutral-800 shadow-md" />

                  <h4 className="text-lg font-semibold">
                    {role.position}
                  </h4>
                  <p className="text-sm mb-2">
                    {formatDate(role.startDate)} – {formatDate(role.endDate)} · {role.type}
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {role.summary.map((point, pIndex) => (
                      <li key={pIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ExperienceSection;