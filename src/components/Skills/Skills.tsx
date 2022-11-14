import { FC } from 'react';
import BaseTitle from '../common/BaseTitle';
import { IoLogoNodejs } from 'react-icons/io';
import { TbBrandJavascript } from 'react-icons/tb';
import { ImHtmlFive2 } from 'react-icons/im';
import { SiMongodb } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { SiTypescript } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { SiAdobexd } from 'react-icons/si';

import { TbBrandNextjs } from 'react-icons/tb';
import { IoLogoCss3 } from 'react-icons/io';
import styles from './Skills.module.scss';
import BaseText from '../common/BaseText';

const About: FC = () => {
  return (
    <div id="skills" className={styles.containerSkills}>
      <BaseTitle size={38} title="Skills" marginBottom={100} marginTop={200} />
      <BaseText
        medium
        regular
        text="These are some of the technologies and software that I use in my projects."
        marginBottom={50}
      />

      <div className={styles.contentIcon}>
        <div className={styles.contentIconColumn}>
          <ImHtmlFive2 size={40} />
          <BaseText medium regular text="HTML5" />
        </div>
        <div className={styles.contentIconColumn}>
          <IoLogoCss3 size={40} />
          <BaseText medium regular text="CSS3" />
        </div>
        <div className={styles.contentIconColumn}>
          <IoLogoNodejs size={40} />
          <BaseText medium regular text="Node.js" />
        </div>
        <div className={styles.contentIconColumn}>
          <SiMongodb size={40} />
          <BaseText medium regular text="Mongo DB" />
        </div>
        <div className={styles.contentIconColumn}>
          <TbBrandNextjs size={40} />
          <BaseText medium regular text="Next.js" />
        </div>
        <div className={styles.contentIconColumn}>
          <GrReactjs size={40} />
          <BaseText medium regular text="ReactJS" />
        </div>
        <div className={styles.contentIconColumn}>
          <AiFillGithub size={40} />
          <BaseText medium regular text="GitHub" />
        </div>
        <div className={styles.contentIconColumn}>
          <SiAdobexd size={40} />
          <BaseText medium regular text="Adobe XD" />
        </div>
        <div className={styles.contentIconColumn}>
          <SiTypescript size={40} />
          <BaseText medium regular text="Type Script" />
        </div>
        <div className={styles.contentIconColumn}>
          <TbBrandJavascript size={40} />
          <BaseText medium regular text="Java Script" />
        </div>
      </div>
    </div>
  );
};

export default About;
