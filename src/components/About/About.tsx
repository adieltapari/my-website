import { FC } from 'react';
import BaseTitle from '../common/BaseTitle';
import { TEXTS } from '../../constants/strings';
import BaseImage from '../common/BaseImage';
import avatar from '../../assets/images/avatar.jpg';
import BaseText from '../common/BaseText';
import { GiMountainClimbing } from 'react-icons/gi';
import { BsFillMusicPlayerFill } from 'react-icons/bs';
import { IoLogoGameControllerB } from 'react-icons/io';
import { FaRobot } from 'react-icons/fa';
import { FaMountain } from 'react-icons/fa';
import styles from './About.module.scss';

const About: FC = () => {
  return (
    <>
      <BaseImage
        circle
        right
        width={100}
        height={100}
        marginBottom={20}
        alt="portrait"
        marginTop={300}
        src={avatar}
      />
      <BaseTitle size={38} title={TEXTS.ABOUT.TITLE} marginBottom={50} marginTop={50} />
      <BaseText
        text="Electronic technician, student of the technical degree in Robotics. advanced engineering student
electronics (UTN).
Participate in robotics Olympics, be part of volunteer activities at the UTN. which I
incentive to found ADL ROBOTICS, an SME created with the aim of training.
Each workplace provided me with tools to learn to work as a team, solve problems,
be dynamic, creative and mark a pedagogical profile.
I am passionate about technology, proactive and with leadership skills, being critical about
my work so that it is carried out properly and with excellence.
I am currently training in BIG DATA, focusing on data engineering, due to the imminent advance of
social networks, digital marketing and innovation, it is necessary to adopt new strategies of
market."
      />
      <BaseTitle size={28} title="Hobbies" marginBottom={50} marginTop={50} />
      <div className={styles.contentIcon}>
        <GiMountainClimbing size={50} />
        <BsFillMusicPlayerFill size={50} />

        <IoLogoGameControllerB size={50} />
        <FaMountain size={50} />
        <FaRobot size={50} />
      </div>
    </>
  );
};

export default About;
