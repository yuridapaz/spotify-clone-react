import { useFetchAlbums, useFetchPlaylists } from '../../context/helpers';

import { Link } from 'react-router-dom';

const SideBarList = () => {
  const { data: playlistData } = useFetchPlaylists();
  const { data: albumData } = useFetchAlbums();
  const formatData = (arr: any, type: string) => {
    switch (type) {
      case 'album':
        return arr.map((elem: any) => ({
          id: elem.album.id,
          name: elem.album.name,
          type: elem.album.type,
          images: elem.album.images
        }));
        break;

      default:
        return arr.map((elem: any) => ({
          id: elem.id,
          name: elem.name,
          type: elem.type,
          images: elem.images
        }));
        break;
    }
  };

  if (playlistData && albumData) {
    const formatedPlaylistData = formatData(playlistData?.items, '');
    const formatedAlbumsData = formatData(albumData?.items, 'album');

    const displayData = [...formatedPlaylistData, ...formatedAlbumsData, ...formatedAlbumsData];
    // const displayData = [...formatedPlaylistData];
    // .map((value) => ({ value, sort: Math.random() }))
    // .sort((a, b) => a.sort - b.sort)
    // .map(({ value }) => value);

    return (
      <ul className='flex flex-col overflow-auto text-gray-400'>
        {displayData.map((listItem) => {
          return (
            <Link
              to={`/playlist/${listItem.id}`}
              className='mr-1 min-h-fit rounded-sm px-2 py-1 hover:bg-neutral-4'
              key={listItem.id}
            >
              <li className='relative min-h-fit max-w-fit truncate text-ellipsis text-nowrap pr-16 text-sm text-white '>
                {listItem.name}
                <span className='absolute right-2 top-1/2 -translate-y-1/2 text-xs capitalize text-neutral-1'>
                  • {listItem.type}
                </span>
              </li>
            </Link>
          );
        })}
      </ul>
    );
  }
};

export default SideBarList;
