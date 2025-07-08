'use client';

import { TechDetails } from '@/lib/types';
import Typography from '@/components/general/typography';
import ImageWrapper from '@/components/data-display/image-wrapper';

const TechDetails = ({logo, darkModeLogo, label }: TechDetails) => {
  return (
    <div className="flex flex-col items-center gap-2">
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={label}
          className="transition-transform duration-300 md:hover:scale-110 w-10 h-10"
        />
      <Typography variant="body1">{label}</Typography>
    </div>
  );
};

export default TechDetails;
