import { NextPage } from 'next';
import { useState } from 'react';
import { motion } from 'framer-motion';

import Head from 'next/head';
import BaseImage from '../components/common/BaseImage';
import BaseTitle from '../components/common/BaseTitle';

import avatar from '../assets/images/avatar.jpg';
import styles from '../styles/index.module.scss';
import { TEXTS } from '../constants/strings';
import Layout from '../components/common/Layout';
import { HiCursorClick } from 'react-icons/hi';

import { VARIANTS_OPACITY } from '../constants/animation';
import BaseText from '../components/common/BaseText';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home: NextPage = () => {
  const [showExperience, setShowExperience] = useState(false);

  return (
    <div>
      <Head>
        <title>Adiel Tapari</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Developer - Robotics - Mountain climber." />
        <meta property="og:title" content="🚀 Adiel Tapari" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1589254065909-b7086229d08c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
      </Head>
      {!showExperience && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{
            type: 'spring',
            duration: 0.8,
            delay: 0.3,
            stiffness: 260,
            damping: 20,
          }}
          onClick={() => setShowExperience(!showExperience)}
        >
          <BaseImage
            circle
            center
            pointer
            width={100}
            height={100}
            alt="portrait"
            marginTop={200}
            src={avatar}
            handleEvent={() => setShowExperience(!showExperience)}
          />
          <BaseTitle center pointer size={40} marginTop={35} title={TEXTS.TITLE_PAGE} />
          <BaseText center medium marginTop={10} text="FullStack Developer" />
          <div className={styles.iconClick}>
            <HiCursorClick size={20} />
          </div>
        </motion.div>
      )}
      {showExperience && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={VARIANTS_OPACITY}
          transition={{ ease: 'easeOut', delay: 0.2 }}
        >
          <Layout>
            <div>
              <About />
              <Projects />
              <Skills />
            </div>
          </Layout>
          <Contact />
        </motion.div>
      )}
    </div>
  );
};

export default Home;
