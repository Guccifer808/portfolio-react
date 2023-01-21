import React, { useState } from 'react';
import ModalOneContent from '../../components/portfolio/modal/ModalOneContent';
import { ModalContext } from './ModalContext';

export const ModalProvider = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (modalConfig) => {
    const { title, content } = modalConfig;

    setModalOpened(true);
  };
  const closeModal = () => {
    setModalOpened(false);
  };

  const modalProviderValue = {
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={modalProviderValue}>
      {opened && <ModalOneContent />}
      {children}
    </ModalContext.Provider>
  );
};
