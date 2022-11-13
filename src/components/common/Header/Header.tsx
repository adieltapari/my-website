import { FC } from 'react';
import BaseTitle from '../BaseTitle';
import ThemeChange from './components/ThemeChange';
import styles from './Header.module.scss';
import BaseText from '../BaseText';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <BaseTitle size={32} title="Adiel" />

      <Link href="/">
        <BaseText medium text=".about" />
      </Link>
      <Link href="/#projects">
        <BaseText medium text=".projects" />
      </Link>
      <Link href="/#skills">
        <BaseText medium text=".skills" />
      </Link>
      <div>
        <BaseText medium text=".contact" />
      </div>
      <div className={styles.themeChangeContainer}>
        <ThemeChange />
      </div>
    </div>
  );
};

export default Header;
