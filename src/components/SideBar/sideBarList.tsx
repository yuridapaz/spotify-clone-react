import { IoLibrary } from 'react-icons/io5';
import { MdHomeFilled, MdSearch } from 'react-icons/md';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

const SideBarList = () => {
  const sideBarLinks = [
    {
      name: 'Home',
      icon: <MdHomeFilled />,
      link: '/'
    },
    {
      name: 'Search',
      icon: <MdSearch />,
      link: '/'
    },
    {
      name: 'Library',
      icon: <IoLibrary />,
      link: '/'
    }
  ];

  return (
    <ul className="mb-10 flex w-full flex-col">
      {sideBarLinks.map((obj, i) => (
        <Link to={obj.link} key={i}>
          {/* //REVIEW: Ordem do link - li - button// */}
          <li className="">
            <Button
              leadingIcon={obj.icon}
              intent={'invisible'}
              className="rounded-sm text-xl text-neutral-1 hover:text-white"
            >
              {obj.name}
            </Button>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default SideBarList;
