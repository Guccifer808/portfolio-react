const ModaSixContent = () => {
  return (
    <div className='slideshow'>
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Airbnb Clone</h3>
          <div className='row open-sans-font'>
            <div className='col-12 col-sm-6 mb-2'>
              <i className='fa fa-file-text-o pr-2'></i>
              <span className='project-label'>Project </span>:{' '}
              <span className='ft-wt-600 uppercase'>Airbnb Clone with API</span>
            </div>
            {/* End .col */}

            <div className='col-12 col-sm-6 mb-2'>
              <i className='fa fa-user-o pr-2'></i>
              <span className='project-label'>Client </span>:{' '}
              <span className='ft-wt-600 uppercase'>Pet Project</span>
            </div>
            {/* End .col */}

            <div className='col-12 col-sm-6 mb-2'>
              <i className='fa fa-code pr-2'></i>
              <span className='project-label'>Tech Stack </span>:{' '}
              <span className='ft-wt-600 uppercase'>React.js, TailwindCSS</span>
            </div>
            {/* End .col */}

            <div className='col-12 col-sm-6 mb-2'>
              <i className='fa fa-external-link pr-2'></i>
              <span className='project-label'>Preview </span>:{' '}
              <span className='ft-wt-600 uppercase'>
                <a
                  href='https://github.com/Guccifer808/airbnb'
                  target='_blank'
                  rel='noreferrer'
                >
                  GitHub Repo
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src='img/projects/airbnb-1.webp' alt='airbnb' />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModaSixContent;
