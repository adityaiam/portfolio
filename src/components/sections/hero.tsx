'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import AdityaIngale from '/public/images/aditya_ingale.png';
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const HeroSection = () => {
  return (
    <Container id="hero" className="py-20 md:py-28">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Content */}
        <div className="flex flex-col gap-6 md:max-w-2xl">
          <Typography variant="h1">
            Hi, I&apos;m <span className="font-bold text-gray-900 dark:text-gray-900">Aditya Ingale</span>{' '}
            <span className="inline-block animate-waving-hand">🙋🏻‍♂️</span>
          </Typography>

          <Typography className=" text-lg leading-relaxed">
            I&apos;m a passionate full-stack developer specializing in{' '}
            <strong className="text-black dark:text-white">App Development, Web Applications, UI/UX Design, and large-scale systems designs</strong>, focused on
            building high-performance, user-friendly, and visually engaging digital experiences that solve real-world problems.
            <br />
            I genuinely enjoy crafting applications from the ground up — and even today, I feel the same excitement with every new project I build.
          </Typography>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
            <MapPin className="h-5 w-5" />
            <Typography>Ahmednagar (Ahilyanagar), Maharashtra, India</Typography>
          </div>

          {/* Social Icons */}
          <div className="pt-2">
            <SocialIcons />
          </div>
        </div>

        {/* Image */}
        <div className="relative h-[300px] w-[260px] md:h-[360px] md:w-[300px]">
          <div className="absolute top-2 left-4 h-full w-full rounded-xl z-0" />
          <Image
            src={AdityaIngale}
            alt="Aditya Ingale"
            className="relative z-10 rounded-xl border-4 border-white dark:border-neutral-800 object-cover shadow-2xl"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
