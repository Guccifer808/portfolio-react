import React from 'react';
import CloseImg from '../../../assets/img/cancel.svg';
import PortfolioData from '../portfolioData';

const Modal = ({ modalId, toggleModal }) => {
  return (
    <div className='modal_portfolio'>
      <div className='modal__outside' onClick={() => toggleModal()}></div>
      <div className='modal__content'>
        {PortfolioData.filter((item) => item.id === modalId).map((item) => {
          return (
            <div key={item.id} data-aos='fade'>
              <h2 className='heading mb-2'>{item.type}</h2>
              <div className='modal__details'>
                {item.modalDetails.map((details, i) => {
                  return (
                    <div key={i} className='row open-sans-font'>
                      <div className='col-12 col-sm-6 mb-2'>
                        <i className='fa fa-file-text-o pr-2'></i>
                        Project:{' '}
                        <span className='ft-wt-600 uppercase'>
                          {details.project}
                        </span>
                      </div>
                      <div className='col-12 col-sm-6 mb-2'>
                        <i className='fa fa-user-o pr-2'></i>
                        Client :{' '}
                        <span className='ft-wt-600 uppercase'>
                          {details.client}
                        </span>
                      </div>
                      <div className='col-12 col-sm-6 mb-2'>
                        <i className='fa fa-code pr-2'></i>
                        Tech Stack :{' '}
                        <span className='ft-wt-600 uppercase'>
                          {details.techStack}
                        </span>
                      </div>
                      <div className='col-12 col-sm-6 mb-2'>
                        <i className='fa fa-external-link pr-2'></i>
                        Preview :{' '}
                        <a
                          className='preview-link'
                          target='_blank'
                          rel='noopener noreferrer nofollow'
                          href={details.link}
                        >
                          {details.preview}
                        </a>
                        {details.githubLink && details.github ? (
                          <div className='col-12 col-sm-6 mb-2'>
                            <i className='fa fa-external-link pr-2'></i>
                            Github :{' '}
                            <a
                              className='preview-link'
                              target='_blank'
                              rel='noopener noreferrer nofollow'
                              href={details.githubLink}
                            >
                              {details.github}
                            </a>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
              <figure className='modal__img'>
                <img src={item.image} alt='portfolio project' loading='lazy' />
              </figure>

              <button className='close-modal' onClick={() => toggleModal()}>
                <img src={CloseImg} alt='portfolio project' />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Modal;
