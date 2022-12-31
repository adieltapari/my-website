import { FC } from 'react';
import BaseTitle from '../common/BaseTitle';
import React from 'react';
import BaseCard from '../common/BaseCard';
import styles from './Projects.module.scss';

const Projects: FC = () => {
  return (
    <div id="projects" className={styles.projectsContainer}>
      <BaseTitle size={38} title="Projects" marginTop={200} marginBottom={50} />
      <div className={styles.contentBaseCard}>
        <BaseCard
          title="Ecommerce"
          src="/ecommerce.png"
          info="Ecommerce development, using fech and firebase."
          reactjs
          linkfront="https://github.com/adieltapari/ecommerce-reactjs.git"
          linkview="https://ecommerce-reactjs-flax.vercel.app/"
          linkplayer="https://youtu.be/TsJgqbQ4Gt4"
        />
        <BaseCard
          title="My Website"
          src="/mywebsite.png"
          info="Personal full stack developer portfolio website."
          nextjs
          typescript
          linkfront="https://github.com/adieltapari/my-website.git"
          linkplayer="https://youtu.be/Gl5D20rVet4"
        />
        <BaseCard
          title="Affiliate System"
          src="/systemaffiliate.png"
          info="Created to carry out and manage surveys, with roles and permissions."
          reactjs
          typescript
          nodejs
          mongodb
          linkfront="https://github.com/adieltapari/"
          linkback="https://github.com/adieltapari/"
          linkview="https://frontend-home-file.vercel.app/"
          linkplayer="https://youtu.be/sQpA-KpP0hs"
        />
        <BaseCard
          title="Api Climate"
          src="/appclimate.jpg"
          info="With this app you can check the weather at a glance in a very complete way.
          "
          reactjs
          nodejs
          linkback="https://github.com/adieltapari/"
        />
      </div>
    </div>
  );
};

export default Projects;
