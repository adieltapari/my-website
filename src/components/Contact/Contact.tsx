import { FC } from 'react';
import styles from './Contact.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { TbReport } from 'react-icons/tb';

import Link from 'next/link';
import BaseText from '../common/BaseText';

const Contact: FC = () => {
  return (
    <div id="contact" className={styles.contactContainer}>
      <div className={styles.iconContainer}>
        <Link href="https://docs.google.com/document/d/1XNW5Ftjun4v8lDd8tV92u8idvZiB-70VTAE0BuRZAIM/edit?usp=sharing">
          <TbReport size={30} />
        </Link>
        <Link href="https://github.com/adieltapari">
          <AiFillGithub size={30} />
        </Link>
        <Link href="https://www.linkedin.com/in/adieltapari">
          <BsLinkedin size={30} />
        </Link>
      </div>
      <BaseText
        regular
        text="Made with
♥
by
Adiel Tapari ©
2022"
        marginBottom={25}
      />
    </div>
  );
};

export default Contact;
