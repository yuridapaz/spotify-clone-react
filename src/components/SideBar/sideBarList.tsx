import { MdHomeFilled, MdSearch } from 'react-icons/md';

import { Button } from '../Button';
import { IoLibrary } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const SideBarList = () => {
  const sideBarLinks = [
    {
      name: 'Home',
      icon: <MdHomeFilled className='h-6 w-6' />,
      link: '/teste30'
    },
    {
      name: 'Search',
      icon: <MdSearch className='h-6 w-6' />,
      link: '/teste'
    },
    {
      name: 'Library',
      icon: <IoLibrary className='h-6 w-6' />,
      link: '/'
    }
  ];

  return (
    <ul className='mb-8'>
      {sideBarLinks.map((obj, i) => (
        <li className='' key={i}>
          <Link to={obj.link}>
            <Button
              leadingIcon={obj.icon}
              intent={'invisible'}
              className='rounded-sm text-xl text-neutral-1 hover:text-white'
            >
              {obj.name}
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SideBarList;
