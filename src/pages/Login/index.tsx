import { Button } from '../../components/Button';

type LoginPageProps = {
  spotifyUrl: string;
};

const LoginPage = ({ spotifyUrl }: LoginPageProps) => {
  return (
    <div className='flex h-full min-h-screen w-full flex-col items-center justify-center gap-16 bg-primary'>
      <img
        src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png'
        alt='Spotify-logo'
        className='h-40 object-contain'
      />
      <a href={spotifyUrl} rel='noopener noreferrer'>
        <Button
          intent={'secondary'}
          size={'extraLarge'}
          className='ring-black ring-offset-2 ring-offset-primary hover:ring-1'
        >
          Open Spotify Link
        </Button>
      </a>
    </div>
  );
};

export default LoginPage;
