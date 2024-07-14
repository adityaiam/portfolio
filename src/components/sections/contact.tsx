'use client';

import { useState } from 'react';
import { Copy, Mail} from 'lucide-react';
import { IoLogoWhatsapp } from "react-icons/io5";

import SocialIcons from '@/components/data-display/social-icons';
import Tag from '@/components/data-display/tag';
import IconButton from '@/components/general/icon-button';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import useWindowSize from '@/hooks/use-window-size';
import { copyTextToClipboard } from '@/lib/utils';
import WPQR from '/public/images/wpqr.svg';
import Image from 'next/image';

let email = 'adityaingale1814@gmail.com';
let wp = 'https://wa.me/918485846179';

type CopyValue = 'email' | 'wp';

const ContactSection = () => {
  const { width } = useWindowSize();
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(
    null
  );

  const handleCopyClick = async (text: string, type: CopyValue) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setCopiedValueType(type);
      let timoutId: any = setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
        clearTimeout(timoutId);
      }, 1500);
    } catch (error) {
      setIsCopied(false);
      setCopiedValueType(null);
      alert('Unable to copy!');
    }
  };

  return (
    <Container id="contact">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Get in touch" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.
        </Typography>
      </div>

      <div className="flex flex-col items-center gap-4 md:gap-12">
        <div className="flex flex-col items-center md:gap-4">
          <div className="flex items-center gap-4 md:gap-5">
            <Mail className="h-6 w-6 md:h-8 md:w-8" />
            <Typography variant="h5">{email}</Typography>
            <IconButton
              size={width && width < 768 ? 'md' : 'lg'}
              onClick={() => handleCopyClick(email, 'email')}
              showTooltip={isCopied && copiedValueType === 'email'}
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton>
          </div>

          <div className="flex items-center gap-4 md:gap-5">
            <IoLogoWhatsapp className="h-6 w-6 md:h-8 md:w-8" />
            <Typography variant="h5">WhatsApp</Typography>
            <IconButton
              size={width && width < 768 ? 'md' : 'lg'}
              onClick={() => handleCopyClick(wp, 'wp')}
              showTooltip={isCopied && copiedValueType === 'wp'}
              tooltipText="Copied!"
            >
              <Image src={WPQR} alt="WhatsApp" width={75}/>
            </IconButton>
          </div>

          

        </div>
        <div className="flex flex-col items-center gap-2">
          <Typography className="text-center">
            You may also find me on these platforms!
          </Typography>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
