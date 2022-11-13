import { FC } from 'react';
import BaseTitle from '../common/BaseTitle';
import { IoLogoNodejs } from 'react-icons/io';
import { TbBrandJavascript } from 'react-icons/tb';
import { ImHtmlFive2 } from 'react-icons/im';
import { SiMongodb } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { SiTypescript } from 'react-icons/si';

import { TbBrandNextjs } from 'react-icons/tb';
import { IoLogoCss3 } from 'react-icons/io';
import styles from './Skills.module.scss';
import BaseText from '../common/BaseText';

const About: FC = () => {
  return (
    <div id="skills" className={styles.containerSkills}>
      <BaseTitle size={38} title="Skills" marginBottom={100} marginTop={200} />

      <div className={styles.contentIcon}>
        <div className={styles.contentIconColumn}>
          <IoLogoNodejs size={50} />
          <BaseText medium regular text="NodeJs" />
        </div>
        <div className={styles.contentIconColumn}>
          <TbBrandJavascript size={50} />
          <BaseText medium regular text="Java Script" />
        </div>
        <div className={styles.contentIconColumn}>
          <ImHtmlFive2 size={50} />
          <BaseText medium regular text="HTML5" />
        </div>
        <div className={styles.contentIconColumn}>
          <IoLogoCss3 size={50} />
          <BaseText medium regular text="CSS3" />
        </div>
        <div className={styles.contentIconColumn}>
          <SiMongodb size={50} />
          <BaseText medium regular text="Mongo DB" />
        </div>
        <div className={styles.contentIconColumn}>
          <TbBrandNextjs size={50} />
          <BaseText medium regular text="NextJS" />
        </div>
        <div className={styles.contentIconColumn}>
          <GrReactjs size={50} />
          <BaseText medium regular text="ReactJS" />
        </div>
        <div className={styles.contentIconColumn}>
          <SiTypescript size={50} />
          <BaseText medium regular text="Type Script" />
        </div>
      </div>
    </div>
  );
};

export default About;
