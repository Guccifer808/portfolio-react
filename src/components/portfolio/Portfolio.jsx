import React from 'react';
import { Tabs, TabPanel } from 'react-tabs';
import PortfolioData from './portfolioData';
import Modal from './modal/Modal';
import withScrollToTop from '../../utils/WithScrollToTop';
import useModalStore from '../../store/modalStore';

const Portfolio = () => {
  const { getModal, modalId, setModalId, toggleModal } = useModalStore();

  const handleModal = (id) => {
    setModalId(id);
    toggleModal();
  };

  // Suppress the react-tabs bug error and prevent console logging
  console.error = () => {};

  return (
    <>
      <div className='portfolio-main'>
        <Tabs>
          <div className='container'>
            <TabPanel>
              <div className='tab-container'>
                {PortfolioData.map((item) => {
                  const { id, type, image, delayAnimation } = item;

                  return (
                    <div
                      key={id}
                      data-aos='fade-right'
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className='tab-content'
                        onClick={() => handleModal(id)}
                      >
                        <img src={image} alt='portfolio project' />
                        <h3>
                          <span className='conent-title'>{type}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
      {getModal && <Modal modalId={modalId} toggleModal={toggleModal} />}
    </>
  );
};

export default withScrollToTop(Portfolio);
