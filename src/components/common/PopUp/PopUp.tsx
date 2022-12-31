import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import BaseImage from '../BaseImage';
import CloseModal from '../../../../public/close-circle.svg';
import Modal from 'react-modal';
import styles from './popUp.module.scss';

interface Props {
  title?: string;
  children: ReactNode;
  modalIsOpen: boolean;
  closeModal?(): void;
}

const customStyles = {
  content: {
    top: '50%',
    width: '80%',
    height: '80%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    border: 'none',
    background: '',
    bakgroundColor: 'rgba(0,0,0,0.5)',
  },
  overlay: {
    background: 'rgba(0,0,0,0.5)',
  },
};

const PopUp: FC<Props> = ({ title, children, closeModal, modalIsOpen }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: 'easeOut' }}
        >
          <div className={styles.modalContainer}>
            <div className={styles.header}>
              <div className={styles.title}>{title}</div>
              <div className={styles.close} role="button" onClick={closeModal}>
                <BaseImage src={CloseModal} width={35} height={35} alt="portrait" />
              </div>
            </div>
            {children}
          </div>
        </motion.div>
      </Modal>
    </>
  );
};

export default PopUp;
