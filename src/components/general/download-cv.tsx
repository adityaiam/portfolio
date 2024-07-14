'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/Aditya_Ingale_CV.pdf', '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
