import Image from 'next/image';

import styles from '@/styles/components/next-image.module.scss';
import displayStyles from '@/styles/helper/display.module.scss';

type Props = {
  alt?: string;
  className: string;
  spSrc?: string;
  src: string;
};

export const NextImage = ({ src, spSrc, className, alt }: Props) => {
  return (
    <>
      <picture className={`${displayStyles.pc} ${styles.image} ${className ? className : ''}`}>
        <Image alt={alt ? alt : ''} layout="fill" src={src} />
      </picture>
      <picture className={`${displayStyles.sp} ${styles.image} ${className ? className : ''}`}>
        <Image alt={alt ? alt : ''} layout="fill" src={spSrc ? spSrc : src} />
      </picture>
    </>
  );
};
