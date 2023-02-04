/* eslint-disable */

import { ReactNode } from 'react';

type Props = {
  children: ReactNode | undefined;
  className?: string;
  href: string | any;
};

export const CustomLink = ({ href, className, children }: Props) => {
  if (typeof href === 'string') {
    return (
      <a className={className} href={href} rel="noreferrer" target="_blank">
        {children}
      </a>
    );
  }
  return (
    <button className={className} onClick={href} type="button">
      {children}
    </button>
  );
};
