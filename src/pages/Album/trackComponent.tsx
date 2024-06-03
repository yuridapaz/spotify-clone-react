const TrackComponent = ({ element, number }: any) => {
  console.log(element);
  const convertTrackDuration = (ms: any) => {
    let seconds: number | string = Math.floor((ms / 1000) % 60);
    let minutes: number | string = Math.floor((ms / (1000 * 60)) % 60);
    seconds = seconds < 10 ? '0' + seconds : seconds;
    // minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  };

  const formatTrackDate = (date: any) => {
    let parseDate = new Date(date);
    return parseDate.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <tr key={element?.track?.id} className='group text-neutral-1'>
      <td className='rounded-l-md px-3 py-1.5 text-center font-light group-hover:bg-white/15'>{number}</td>
      <td className='flex items-center space-x-2 py-1.5 text-left font-light group-hover:bg-white/15 '>
        <img src={element?.track?.album?.images?.[2]?.url} className='h-10 w-10 rounded-md' />
        <div>
          <p className='text-white hover:cursor-pointer hover:underline'>{element?.track?.name}</p>
          <div className='flex items-center text-sm'>
            {element?.track?.explicit ? (
              <span className='mr-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-sm bg-neutral-1  text-[0.6rem] text-black'>
                E
              </span>
            ) : (
              ''
            )}
            <p className='hover:cursor-pointer hover:underline group-hover:text-white'>
              {element?.track?.artists?.map((artist: any, i: any, arr: any) => {
                if (i + 1 === arr.length) {
                  return artist.name;
                } else {
                  return artist.name + ', ';
                }
              })}
            </p>
          </div>
        </div>
      </td>
      <td className='py-1.5 text-left text-sm font-light hover:cursor-pointer hover:underline group-hover:bg-white/15 group-hover:text-white'>
        {element?.track?.album?.name}
      </td>
      {/* //REVIEW: min-w */}
      <td className='min-w-48 py-1.5 pr-10 text-left text-sm font-light group-hover:bg-white/15'>
        {formatTrackDate(element?.added_at)}
      </td>
      <td className='rounded-r-md px-4 py-1.5 text-center text-sm font-light group-hover:bg-white/15'>
        {convertTrackDuration(element?.track?.duration_ms)}
      </td>
    </tr>
  );
};

export default TrackComponent;
