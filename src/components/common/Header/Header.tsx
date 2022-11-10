import { FC } from 'react';
import BaseTitle from '../BaseTitle';
import ThemeChange from './components/ThemeChange';
import styles from './Header.module.scss';
import BaseText from '../BaseText';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <BaseTitle size={32} title="{AT}" />
      <Link href="/">
        <BaseText medium text=".about()" />
      </Link>
      <Link href="/#projects">
        <BaseText medium text=".projects()" />
      </Link>

      <BaseText medium text=".skills()" />
      <BaseText medium text=".contact()" />

      <ThemeChange />
    </div>
  );
};

export default Header;
