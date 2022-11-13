import { FC, useState } from 'react';
import BaseTitle from '../common/BaseTitle';

import BaseCard from '../common/BaseCard';
import styles from './Projects.module.scss';

const Projects: FC = () => {
  return (
    <div id="projects">
      <BaseTitle size={38} title="Projects" marginTop={200} marginBottom={50} />
      <div className={styles.contentBaseCard}>
        <BaseCard
          title="Ecommerce"
          src="/ecommerce.png"
          info="Desarrollo de ecommerce, fronend desarrollado en reactjs y backend utilizando fech y firebase"
        />
        <BaseCard
          title="My Website"
          src="/mywebsite.png"
          info="desarrollo de pagina web en reactjs"
        />
        <BaseCard
          title="Affiliate System"
          src="/systemaffiliate.png"
          info="Affiliate is an application created to carry out and manage surveys, with roles and permissions."
        />
        <BaseCard
          title="Api climate"
          src="/appclimate.jpg"
          info="activida dedicadas..."
        />
      </div>
    </div>
  );
};

export default Projects;
