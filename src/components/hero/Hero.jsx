import React, { useState } from 'react';
import Modal from 'react-modal';
import Index from '../../components/about/index';
import CloseImg from '../../assets/img/cancel.svg';
import heroImg from '../../assets/img/hero/hero-1.png';
import Typed from 'react-typed';
//rename to home?
//

const heroContent = {
  heroImage: 'img/hero/dark.jpg',
  heroMobileImage: 'img-mobile',
  heroTitleName: 'Sergey Danyliuk',
  heroDescriptions: `I'm a Ukrainian based web developer focused on
  crafting clean & user‑friendly experiences, I am passionate about
  building excellent software that improves the lives of those
  around me.`,
  heroBtn: 'more about me',
};

const heroDesignation = ['web developer'];
const heroDescriptions = [
  `I'm a Ukrainian based web developer focused on
  crafting clean and user‑friendly experiences, I am passionate about
  building excellent software that improves the lives of those
  around me.`,
];

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className='row home-details-container align-items-center'>
        <div
          className='col-lg-4 bg position-fixed d-none d-lg-block'
          style={{
            backgroundImage: `url(${heroImg}`,
          }}
        ></div>
        <div className='col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start'>
          <div>
            {/* Disabled img on mobile */}
            <img
              src={heroImg}
              className='img-fluid main-img-mobile d-sm-block d-lg-none'
              alt='hero'
            />
            <h1 className='text-uppercase poppins-font'>
              I'm {heroContent.heroTitleName}.
              <Typed
                strings={heroDesignation}
                typeSpeed={30}
                className='heroTitleNameTyped'
              />
            </h1>
            <p className='open-sans-font'>
              <Typed strings={heroDescriptions} typeSpeed={25} />
            </p>
            <button className='button' onClick={toggleModal}>
              <span className='button-text'>{heroContent.heroBtn}</span>
              <span className='button-icon fa fa-arrow-right'></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel='My dialog'
        className='custom-modal dark hero'
        overlayClassName='custom-overlay dark'
        closeTimeoutMS={500}
        appElement={document.getElementById('root')}
      >
        <div>
          <button className='close-modal' onClick={toggleModal}>
            <img src={CloseImg} alt='close icon' />
          </button>
          {/* End close icon */}

          <div className='box_inner about'>
            <div data-aos='fade-up' data-aos-duration='1200'>
              <div className='title-section text-left text-sm-center'>
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className='title-bg'>Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
