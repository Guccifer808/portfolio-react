import Image1 from '../../assets/img/projects/luxworld-1.webp';
import Image2 from '../../assets/img/projects/aquaceh-1.webp';
import Image3 from '../../assets/img/projects/react-dashboard-1.png';
import Image4 from '../../assets/img/projects/fitness-ts-1.png';
import Image5 from '../../assets/img/projects/dashboard-nextjs-1.png';
import Image6 from '../../assets/img/projects/img-filter-1.png';
import Image7 from '../../assets/img/projects/hotel-1.jpeg';
import Image8 from '../../assets/img/projects/nightchat-1.webp';
import Image9 from '../../assets/img/projects/kanban-ts-1.png';
import Image10 from '../../assets/img/projects/api-list-1.png';
import Image11 from '../../assets/img/projects/3d-phonecases.webp';
import Image12 from '../../assets/img/projects/vortex.webp';
import Image13 from '../../assets/img/projects/bcard.webp';
import Image14 from '../../assets/img/projects/firebase-crud.webp';
import Image15 from '../../assets/img/projects/invoicer.webp';
import Image16 from '../../assets/img/projects/zapquant-1.webp';

const PortfolioData = [
  {
    id: 1,
    type: 'Furnishing Website Project',
    image: Image1,
    delayAnimation: '0',
    modalDetails: [
      {
        project: 'Furnishing Website Project',
        client: 'LuxWorld LLC',
        techStack: 'HTML, CSS, Javascript, WordPress',
        preview: 'Website Link',
        link: 'https://luxworldfurnishing.com/',
      },
    ],
  },
  {
    id: 12,
    type: 'SaaS Landing with Dashboard',
    image: Image12,

    delayAnimation: '200',
    modalDetails: [
      {
        project: 'VorteX SaaS with Login and Dashboard',
        client: 'Pet Project',
        techStack:
          'React.js, TypeScript, TailwindCSS, Framer-motion, Anchor-link, Firebase, Email.js',
        preview: 'Live Preview',
        link: 'https://software-landing-one.vercel.app/',
        github: 'Github',
        githubLink: 'https://github.com/Guccifer808/software-landing',
      },
    ],
  },
  {
    id: 15,
    type: 'Invoicer',
    image: Image15,

    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Invoicing App',
        client: 'Pet Project',
        techStack: 'React.js, TypeScript, TailwindCSS, Redux',
        preview: 'Live Preview',
        link: 'https://invoicer-chi.vercel.app/',
        github: 'Github',
        githubLink: 'https://github.com/Guccifer808/Invoicer',
      },
    ],
  },
  {
    id: 16,
    type: 'ZapQuant Marketing',
    image: Image16,

    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Landing Page for ZapQuant',
        client: 'ZapQuant Marketing LLC',
        techStack: 'React.js, TypeScript, TailwindCSS, Framer-Motion, Vite',
        preview: 'Live Preview',
        link: 'https://zapquant-marketing.vercel.app/',
        github: 'Github',
        githubLink: 'https://github.com/Guccifer808/zapquant-marketing',
      },
    ],
  },
  {
    id: 4,
    type: 'Fitness Landing Page',
    image: Image4,

    delayAnimation: '0',
    modalDetails: [
      {
        project: 'Fitness Landing Page',
        client: 'Pet Project',
        techStack: 'React.js, TypeScript, TailwindCSS, Prettier',
        preview: 'Live Preview',
        link: 'https://fitness-ts.pages.dev/',
        github: 'Github',
        githubLink: 'https://github.com/Guccifer808/fitness-ts',
      },
    ],
  },
  {
    id: 5,
    type: 'Dashboard with Next.js',
    image: Image5,

    delayAnimation: '100',
    modalDetails: [
      {
        project: 'Dashboard with Next.js',
        client: 'Pet Project',
        techStack: 'Next.js, Chart.js, TailwindCSS, Prettier',
        preview: 'Live Preview',
        link: 'https://dashboard-nextjs-kappa.vercel.app/',
        github: 'Github',
        githubLink: 'https://github.com/Guccifer808/dashboard-nextjs',
      },
    ],
  },
  {
    id: 7,
    type: 'Hotel Booking',
    image: Image7,

    delayAnimation: '0',
    modalDetails: [
      {
        project: 'Hotel Booking',
        client: 'Pet Project',
        techStack: 'React.js, TailwindCSS',
        preview: 'Live Preview',
        link: 'https://hotel-reactjs.pages.dev/',
        github: 'Github',
        githubLink: 'https://github.com/Guccifer808/hotel-reactjs',
      },
    ],
  },

  {
    id: 9,
    type: 'Kanban TypeScript',
    image: Image9,

    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Kanban TypeScript',
        client: 'Pet Project',
        techStack: 'React.js, TypeScript',
        preview: 'Live Preview',
        link: 'https://kanban-ts.pages.dev/',
        github: 'Github',
        githubLink: 'https://github.com/Guccifer808/Kanban-ts',
      },
    ],
  },
  {
    id: 3,
    type: 'React Dashboard Project',
    image: Image3,

    delayAnimation: '200',
    modalDetails: [
      {
        project: 'React Dashboard Project',
        client: 'Pet Project',
        techStack:
          'React.js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, Data Grid',
        preview: 'Live Preview',
        link: 'https://react-admin-dashboard-v1.vercel.app/',
        github: 'Github',
        githubLink: 'https://github.com/Guccifer808/React-admin-dashboard-v1',
      },
    ],
  },
  {
    id: 2,
    type: 'Pool Website',
    image: Image2,

    delayAnimation: '100',
    modalDetails: [
      {
        project: 'Pool Website',
        client: 'Aqua-Ceh-Stroy LLC',
        techStack: 'HTML, CSS, Javascript, WordPress',
        preview: 'Website Link',
        link: 'https://aquacehstroy.com.ua/',
      },
    ],
  },
  {
    id: 8,
    type: 'NightChat App Google Auth',
    image: Image8,

    delayAnimation: '100',
    modalDetails: [
      {
        project: 'NightChat',
        client: 'Pet Project',
        techStack: 'Firebase, DaisyUI, Vite, Tailwind CSS',
        preview: 'Live Preview',
        link: 'https://livechat-gauth.pages.dev/',
        github: 'Github',
        githubLink: 'https://github.com/Guccifer808/livechat-gauth',
      },
    ],
  },
  {
    id: 11,
    type: 'three.js 3d iPhone Case Builder',
    image: Image11,

    delayAnimation: '200',
    modalDetails: [
      {
        project: '3d iPhone Case Builder',
        client: 'Pet Project',
        techStack: 'React.js, three.js, TailwindCSS, Framer-motion',
        preview: 'Live Preview',
        link: 'https://3d-phonecases.vercel.app/',
        github: 'Github',
        githubLink: 'https://github.com/Guccifer808/3d-phonecases',
      },
    ],
  },
  {
    id: 6,
    type: 'Image Filter App',
    image: Image6,

    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Image Filter App',
        client: 'Pet Project',
        techStack: 'React.js, Vite, Material UI',
        preview: 'Live Preview',
        link: 'https://image-filter-app.pages.dev/',
        github: 'Github',
        githubLink: 'https://github.com/Guccifer808/image-filter-app',
      },
    ],
  },

  {
    id: 10,
    type: 'API-list TypeScript',
    image: Image10,

    delayAnimation: '200',
    modalDetails: [
      {
        project: 'API-list TypeScript',
        client: 'Pet Project',
        techStack: 'React.js, TypeScript, Axios, TailwindCSS, Public APIs',
        preview: 'Live Preview',
        link: 'https://api-list-public.vercel.app/',
        github: 'Github',
        githubLink: 'https://github.com/Guccifer808/api-list',
      },
    ],
  },

  {
    id: 13,
    type: 'Business Card Generator',
    image: Image13,

    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Business Card Generator with T3 stack',
        client: 'Pet Project',
        techStack: 'Next.js, TypeScript, TailwindCSS, trpc, zod, prisma',
        preview: 'Live Preview',
        link: 'https://bcard-five.vercel.app/',
        github: 'Github',
        githubLink: 'https://github.com/Guccifer808/bcard',
      },
    ],
  },
  {
    id: 14,
    type: 'Firebase CRUD Todo',
    image: Image14,

    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Todo CRUD with Login',
        client: 'Pet Project',
        techStack: 'Next.js, TailwindCSS, Firebase',
        preview: 'Live Preview',
        link: 'https://to-do-crud-nextjs.vercel.app/',
        github: 'Github',
        githubLink: 'https://github.com/Guccifer808/ToDoCRUD-nextjs',
      },
    ],
  },
];

export default PortfolioData;
