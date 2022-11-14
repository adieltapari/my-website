import { FC, ReactElement } from 'react';
import style from './layout.module.scss';
import Header from '../Header/Header';
import Contact from '../../Contact';
interface Props {
  children?: ReactElement;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={style.layout}>{children}</div>
    </>
  );
};

export default Layout;
