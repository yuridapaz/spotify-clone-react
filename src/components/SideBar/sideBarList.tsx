import { useFetchAlbums, useFetchArtists, useFetchPlaylists } from '../../context/helpers';

import { Link } from 'react-router-dom';

const SideBarList = () => {
  const { data: playlistData } = useFetchPlaylists();
  const { data: albumData } = useFetchAlbums();
  const { data: artistsData } = useFetchArtists();
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

  if (playlistData && albumData && artistsData) {
    const formatedPlaylistData = formatData(playlistData?.items, '');
    const formatedAlbumsData = formatData(albumData?.items, 'album');
    const formatedArtistsData = formatData(artistsData?.artists?.items, '');

    const displayData = [...formatedPlaylistData, ...formatedAlbumsData, ...formatedArtistsData]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    return (
      <div>
        <ul className='text-white'>
          {displayData.map((listItem) => {
            return (
              <li key={listItem.id}>
                <Link to={`/`}>{listItem.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default SideBarList;
