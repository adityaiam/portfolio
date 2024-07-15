'use client';
import * as React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { mergeClasses } from '@/lib/utils';

interface LinkProps extends NextLinkProps {
  className?: string;
  children?: React.ReactNode;
  noCustomization?: boolean;
  externalLink?: boolean;
  withUnderline?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      noCustomization,
      children = null,
      className = '',
      externalLink = false,
      withUnderline = false,
      ...props
    }: LinkProps,
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Check if the link is a hash link
      if (props.href && typeof props.href === 'string' && props.href.startsWith('#')) {
        e.preventDefault();
        const targetId = props.href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      }
    };

    return (
      <NextLink
        {...props}
        target={externalLink ? '_blank' : '_self'}
        ref={ref}
        className={mergeClasses(
          noCustomization ??
            'text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600',
          withUnderline
            ? 'underline underline-offset-4 transition-all hover:text-gray-900 active:text-gray-600'
            : '',
          className
        )}
        onClick={handleClick} // Add click handler
      >
        {children}
      </NextLink>
    );
  }
);

Link.displayName = 'Link';

export default Link;
