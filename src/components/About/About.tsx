import { FC } from 'react';
import BaseTitle from '../common/BaseTitle';
import { TEXTS } from '../../constants/strings';
import BaseImage from '../common/BaseImage';
import avatar from '../../assets/images/avatar.jpg';
import BaseText from '../common/BaseText';

const About: FC = () => {
  return (
    <div>
      <BaseImage
        circle
        right
        width={100}
        height={100}
        marginBottom={20}
        alt="portrait"
        marginTop={200}
        src={avatar}
      />
      <BaseTitle size={38} title={TEXTS.ABOUT.TITLE} marginBottom={300} />
      <BaseText text="prueba prueba" />
      <BaseText text="prueba prueba" />
    </div>
  );
};

export default About;
