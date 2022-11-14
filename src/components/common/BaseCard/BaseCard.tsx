import { FC } from 'react';
import Image from 'next/image';
import BaseText from '../BaseText/BaseText';
import styles from './baseCard.module.scss';
import BaseTitle from '../BaseTitle';
import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';

import Link from 'next/link';

interface Props {
  title: string;
  src: string;
  info: string;
  nextjs?: boolean;
  typescript?: boolean;
  reactjs?: boolean;
  nodejs?: boolean;
  mongodb?: boolean;
  linkfront?: string;
  linkback?: string;
  linkview?: string;
}
const BaseCard: FC<Props> = ({
  title,
  src,
  info,
  nextjs,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  linkfront,
  linkback,
  linkview,
}) => {
  return (
    <div>
      <div className={styles.cardGrid}>
        <div className={styles.infoContent}>
          <BaseTitle title={title} />
        </div>
        <div className={styles.imgContainer}>
          <Image src={`${src}`} width={350} height={150} alt={`image/${title}`} />
        </div>
        <div className={styles.textContainer}>
          <BaseText text={info} size={12} regular color="var(--color-text-third)" />
        </div>
        <div className={styles.techContainer}>
          {nextjs && (
            <BaseText text="Next.js" size={10} regular color="var(--color-text-third)" />
          )}
          {reactjs && (
            <BaseText text="ReactJS" size={10} regular color="var(--color-text-third)" />
          )}
          {typescript && (
            <BaseText
              text="Type Script"
              size={10}
              regular
              color="var(--color-text-third)"
              marginLeft={15}
            />
          )}
          {nodejs && (
            <BaseText
              text="Node.js"
              size={10}
              regular
              color="var(--color-text-third)"
              marginLeft={15}
            />
          )}
          {mongodb && (
            <BaseText
              text="Mongo DB"
              size={10}
              regular
              color="var(--color-text-third)"
              marginLeft={15}
            />
          )}
        </div>

        <div className={styles.iconContainer}>
          {linkfront && (
            <Link href={linkfront}>
              <div className={styles.frontContainer}>
                <AiFillGithub size={18} />
                <BaseText
                  text="Front-end"
                  size={10}
                  regular
                  color="var(--color-text-third)"
                />
              </div>
            </Link>
          )}
          {linkback && (
            <Link href={linkback}>
              <div className={styles.backContainer}>
                <AiFillGithub size={18} />
                <BaseText
                  text="Back-end"
                  size={10}
                  regular
                  color="var(--color-text-third)"
                />
              </div>
            </Link>
          )}
          {linkview && (
            <Link href={linkview}>
              <div className={styles.backContainer}>
                <BiLinkExternal size={18} />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BaseCard;
