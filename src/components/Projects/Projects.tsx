import { FC } from 'react';
import BaseTitle from '../common/BaseTitle';
import { TEXTS } from '../../constants/strings';
import BaseImage from '../common/BaseImage';
import avatar from '../../assets/images/avatar.jpg';

import BaseText from '../common/BaseText';

const Projects: FC = () => {
  return (
    <div id="projects">
      <BaseTitle size={38} title="Projects" marginTop={200} marginBottom={300} />
      <BaseText text="Back End" />
    </div>
  );
};

export default Projects;
