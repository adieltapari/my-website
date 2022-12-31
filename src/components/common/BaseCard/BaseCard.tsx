import { FC, useState } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import BaseText from '../BaseText/BaseText';
import styles from './baseCard.module.scss';
import BaseTitle from '../BaseTitle';
import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import { BsFillPlayCircleFill } from 'react-icons/bs';

import Link from 'next/link';
import PopUp from '../PopUp';

interface Props {
  title: string;
  src: string;
  linkplayer?: string;
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
  linkplayer,
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
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div>
      <div className={styles.cardGrid}>
        <div className={styles.infoContent}>
          <BaseTitle title={title} />
        </div>
        <div className={styles.imgContainer} onClick={showModal}>
          <Image src={`${src}`} width={350} height={150} alt={`image/${title}`} />
          <div className={styles.linkContainer}>
            <BsFillPlayCircleFill size={40} color={'#17202A'} />
          </div>
          <PopUp
            title=""
            children={
              <ReactPlayer
                url={`${linkplayer}`}
                width="100%"
                height="600px"
                playing={true}
                controls={false}
              />
            }
            modalIsOpen={modalIsOpen}
            closeModal={showModal}
          />
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
