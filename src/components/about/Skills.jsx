import React from 'react';
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
  SiGithub,
  SiCssmodules,
  SiRedux,
  SiVite,
  SiMui,
  SiAxios,
  SiFirebase,
  SiMobx,
  SiShopify,
  SiI18Next,
  SiJest,
} from 'react-icons/si';

const skillsContent = [
  {
    skillClass: 'p100',
    skillIcon: <SiJavascript />,
    skillName: 'JAVASCRIPT',
  },
  {
    skillClass: 'p100',
    skillIcon: <SiTypescript />,
    skillName: 'TYPESCRIPT',
  },
  { skillClass: 'p100', skillIcon: <SiReact />, skillName: 'REACT.JS' },
  { skillClass: 'p100', skillIcon: <SiNextdotjs />, skillName: 'NEXT.JS' },
  { skillClass: 'p100', skillIcon: <SiHtml5 />, skillName: 'HTML' },
  { skillClass: 'p100', skillIcon: <SiCss3 />, skillName: 'CSS' },
  {
    skillClass: 'p100',
    skillIcon: <SiSass />,
    skillName: 'SASS',
  },
  {
    skillClass: 'p100',
    skillIcon: <SiTailwindcss />,
    skillName: 'TAILWINDCSS',
  },
  {
    skillClass: 'p100',
    skillIcon: <SiCssmodules />,
    skillName: 'CSS Modules',
  },

  { skillClass: 'p100', skillIcon: <SiGithub />, skillName: 'Git' },
  { skillClass: 'p100', skillIcon: <SiRedux />, skillName: 'Redux' },
  { skillClass: 'p100', skillIcon: <SiMobx />, skillName: 'MobX' },
  { skillClass: 'p100', skillIcon: <SiVite />, skillName: 'Vite' },
  { skillClass: 'p100', skillIcon: <SiMui />, skillName: 'Mui' },
  { skillClass: 'p100', skillIcon: <SiAxios />, skillName: 'Axios' },
  { skillClass: 'p100', skillIcon: <SiI18Next />, skillName: 'i18next' },
  { skillClass: 'p100', skillIcon: <SiJest />, skillName: 'Jest' },
  { skillClass: 'p100', skillIcon: <SiFirebase />, skillName: 'Firebase' },
  { skillClass: 'p100', skillIcon: <SiWordpress />, skillName: 'WordPress' },
  { skillClass: 'p100', skillIcon: <SiShopify />, skillName: 'Shopify' },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((value, i) => (
        <div className='col-6 col-md-3 mb-3 mb-sm-5' key={i}>
          <div className={`c100 ${value.skillClass}`}>
            <span>{value.skillIcon}</span>
            <div className='slice'>
              <div className='bar'></div>
              <div className='fill'></div>
            </div>
          </div>
          <h6 className='text-uppercase open-sans-font text-center mt-2 mt-sm-4'>
            {value.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
