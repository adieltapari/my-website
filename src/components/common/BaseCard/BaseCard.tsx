import { FC } from 'react';
import Image from 'next/image';
import BaseText from '../BaseText/BaseText';
import styles from './baseCard.module.scss';
import BaseTitle from '../BaseTitle';
import { AiFillGithub } from 'react-icons/ai';

interface Props {
  title: string;
  src: string;
  info: string;
}
const BaseCard: FC<Props> = ({ title, src, info }) => {
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
          <BaseText text={info} size={10} regular color="var(--color-text-third)" />
        </div>
        <div className={styles.iconContainer}>
          <div className={styles.backContainer}>
            <AiFillGithub size={18} />
            <BaseText text="Back-end" size={10} regular color="var(--color-text-third)" />
          </div>
          <div className={styles.frontContainer}>
            <AiFillGithub size={18} />
            <BaseText
              text="Front-end"
              size={10}
              regular
              color="var(--color-text-third)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseCard;
