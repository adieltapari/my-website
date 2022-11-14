import { FC, useState } from 'react';
import BaseTitle from '../common/BaseTitle';

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
          info="Ecommerce development, frontend developed in reactjs and backend using fech and firebase"
        />
        <BaseCard
          title="My Website"
          src="/mywebsite.png"
          info="Personal full stack developer portfolio"
        />
        <BaseCard
          title="Affiliate System"
          src="/systemaffiliate.png"
          info="Created to carry out and manage surveys, with roles and permissions."
        />
        <BaseCard
          title="Api Climate"
          src="/appclimate.jpg"
          info="With this app you can check the weather at a glance in a very complete way.
          "
        />
      </div>
    </div>
  );
};

export default Projects;
