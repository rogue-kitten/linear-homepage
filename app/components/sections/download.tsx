import Image from 'next/image';
import { Button } from '../button';
import { Windows } from '../icons/windows';

export const DownloadApp = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='image-container'>
        <Image
          src='/image/appIcon.webp'
          alt='linear desktop app dowload icon'
          fill
          className='image max-w-[12.8rem]'
        />
      </div>
      <h2 className='my-9 text-center text-5xl leading-none tracking-tight md:text-9xl'>
        Build for the future <br /> Available today.
      </h2>
      <div className='my-9 flex items-center gap-4'>
        <Button href='/' variant='primary' size='large'>
          Sign up for free
        </Button>
        <Button href='/' variant='secondary' size='large'>
          <Windows className='mr-2' />
          Download
        </Button>
      </div>
    </div>
  );
};
