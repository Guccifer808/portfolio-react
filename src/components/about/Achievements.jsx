const achievementsContent = [
  { title: '6', subTitle1: 'years of', subTitle2: 'experience' },
  { title: '71', subTitle1: 'completed', subTitle2: 'projects' },
  { title: '71', subTitle1: 'Happy', subTitle2: 'customers' },
  { title: '∞', subTitle1: 'problems', subTitle2: 'solved' },
];

const Achievements = () => {
  return (
    <div className='row'>
      {achievementsContent.map((value, i) => (
        <div className='col-6' key={i}>
          <div className='box-stats with-margin'>
            <h3 className='poppins-font position-relative'>{value.title}</h3>
            <p className='open-sans-font m-0 position-relative text-uppercase'>
              {value.subTitle1}{' '}
              <span className='d-block'>{value.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
