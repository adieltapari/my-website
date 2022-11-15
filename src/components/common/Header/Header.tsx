import { FC } from 'react';
import { Link } from 'react-scroll';

import BaseTitle from '../BaseTitle';
import ThemeChange from './components/ThemeChange';
import styles from './Header.module.scss';
import BaseText from '../BaseText';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <BaseTitle size={32} title="Adiel" />

      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-180}
        duration={900}
      >
        <BaseText bold text="ABOUT" />
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={50}
        duration={600}
      >
        <BaseText medium text="PROJECTS" />
      </Link>
      <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={50}
        duration={900}
      >
        <BaseText medium text="SKILLS" />
      </Link>
      <div>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={1500}
        >
          <BaseText medium text="CONTACT" />
        </Link>
      </div>
      <div className={styles.themeChangeContainer}>
        <ThemeChange />
      </div>
    </div>
  );
};

export default Header;
