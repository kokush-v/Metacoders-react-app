import React, { useEffect } from 'react';
import NavBar from '../../components/nav-bar/NavBar';
import About from '../../components/short-about-block/ShrtAbout';
import Slider from '../../components/slider/Slider';
import MiniBlocks from '../../components/mini-blocks/MiniBlocks';
import Accordeon from '../../components/accordeon/Accordeon';
import Advertisement from '../../components/advertisement/Advertisement';
import ProjInProgress from '../../components/project-in-progress/ProjInProgress';
import Vacancies from '../../components/vacancies-list/Vacancies';

import './Main.scss';
import '../../components/FontAwesome';

const Main = () => {
   const fetchItem = async () => {
      await fetch('http://localhost:5000/getip');
   };

   useEffect(() => {
      fetchItem();
   }, []);

   return (
      <div className='App'>
         <NavBar />
         <main>
            <About />
            <Slider
               imgs={[
                  require('../../img/buisnes.png'),
                  require('../../img/forbes.png'),
                  require('../../img/protocol.png'),
               ]}
            />
            <MiniBlocks
               config={[
                  {
                     ic: 'calendar-check',
                     p: 'joins the programming team of the rocket startup to complete the product',
                  },
                  {
                     ic: 'calendar-check',
                     p: 'connects with rocket startups that have attracted more than 10 million $',
                  },
                  {
                     ic: 'calendar-check',
                     p: 'addresses language limitations and cultural differences among team members and supports remote collaboration.',
                  },
                  {
                     ic: 'calendar-check',
                     p: 'seeks to address the imbalance of regional job opportunities in the area of programming.',
                  },
                  {
                     ic: 'calendar-check',
                     p: "provides the developer's growth environment and the best salary through collaboration with S-className team members.",
                  },
                  {
                     ic: 'calendar-check',
                     p: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia in optio, dicta ea, numquam!',
                  },
               ]}
            />
            <Accordeon
               config={[
                  {
                     h2: "Connect Vietnam's top developers with Korean rocket startups.",
                     ul: [
                        {
                           b: 'Manage products long-term as a team member, not just a one-time outsourcing project.',
                           p: 'Development that only implements functions without understanding the product is just normal coders do. Of course, the development of functions must be accomplished.',
                        },
                        {
                           b: 'If there are various projects, I can work on the projects I want.',
                           p: 'Metacoders will be a window to connect with rocket startups, regardless of region or language. As Metacoders grows and creates more success, options can vary.',
                        },
                     ],
                  },
                  {
                     h2: 'You can work with the best team members.',
                     ul: [
                        {
                           b: 'Manage products long-term as a team member, not just a one-time outsourcing project.',
                           p: 'Development that only implements functions without understanding the product is just normal coders do. Of course, the development of functions must be accomplished.',
                        },
                        {
                           b: 'If there are various projects, I can work on the projects I want.',
                           p: 'Metacoders will be a window to connect with rocket startups, regardless of region or language. As Metacoders grows and creates more success, options can vary.',
                        },
                     ],
                  },
                  {
                     h2: 'Provides a fast growth environment.',
                     ul: [
                        {
                           b: 'Manage products long-term as a team member, not just a one-time outsourcing project.',
                           p: 'Development that only implements functions without understanding the product is just normal coders do. Of course, the development of functions must be accomplished.',
                        },
                        {
                           b: 'If there are various projects, I can work on the projects I want.',
                           p: 'Metacoders will be a window to connect with rocket startups, regardless of region or language. As Metacoders grows and creates more success, options can vary.',
                        },
                     ],
                  },
               ]}
            />
            <Advertisement />
            <ProjInProgress />
            <Vacancies
               config={[
                  {
                     h1: 'Junior Project Manager(한국어 필수)',
                     icon: 'clock',
                  },
                  {
                     h1: 'Admin Staff',
                     icon: 'clock',
                  },
                  {
                     h1: 'HR',
                     icon: 'clock',
                  },
                  {
                     h1: 'Project Manager as Scrum Master',
                     icon: 'clock',
                  },
                  {
                     h1: 'Finance & Accounting Manager',
                     icon: 'clock',
                  },
                  {
                     h1: 'Back-end Software Engineer',
                     icon: 'clock',
                  },
               ]}
            />
         </main>
      </div>
   );
};

export default Main;
