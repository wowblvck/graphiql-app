import { Participant } from '../components/Participants/participants.types';
import indarPhoto from '../assets/img/Indar_Basto.jpg';
import viktorPhoto from '../assets/img/Viktor_Minkov.jpeg';
import railiaPhoto from '../assets/img/Railia_Balakaeva.jpg';

export const participants: Participant[] = [
  {
    id: 1,
    name: 'Indar Basto',
    role: ['Team lead', 'Frontend developer'],
    githubLink: 'https://github.com/wowblvck',
    img: indarPhoto,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    name: 'Viktor Minkov',
    role: ['Frontend developer'],
    githubLink: 'https://github.com/ViktorMinkov',
    img: viktorPhoto,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    name: 'Railia Balakaeva',
    role: ['Frontend developer'],
    githubLink: 'https://github.com/RallyZK',
    img: railiaPhoto,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];
