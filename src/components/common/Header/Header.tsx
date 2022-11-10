import { FC } from 'react';
import BaseTitle from '../BaseTitle';
import ThemeChange from './components/ThemeChange';
import styles from './Header.module.scss';
import { FaRegMoon } from 'react-icons/fa';
import { BsFillEmojiSunglassesFill } from 'react-icons/bs';
import BaseText from '../BaseText';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <BaseTitle size={32} title="{AT}" />
      <BaseText medium text=".about()" />
      <BaseText medium text=".projects()" />
      <BaseText medium text=".skills()" />
      <BaseText medium text=".contact()" />

      <ThemeChange />
    </div>
  );
};

export default Header;
