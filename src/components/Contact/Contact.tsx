import { FC } from 'react';
import styles from './Contact.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';
import BaseText from '../common/BaseText';

const Contact: FC = () => {
  return (
    <div id="contact" className={styles.contactContainer}>
      <div className={styles.iconContainer}>
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
