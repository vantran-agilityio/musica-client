import Image from 'next/image';

import imageLoader, { generateDataURL } from '@utils/imageLoader';
import Typography from '@components/Typography';
import { TagType } from '@/constants';

type Props = {
  artists: string[];
  thumbnail: string;
  title: string;
};

const SongDetail = ({ artists, thumbnail, title }: Props) => {
  return (
    <div className='flex gap-3'>
      <Image
        alt={title}
        className='rounded'
        src={thumbnail}
        loader={imageLoader}
        width={48}
        height={48}
        loading='lazy'
        placeholder={`data:image/svg+xml;base64,${generateDataURL(48, 48)}`}
      />
      <div className='flex flex-col justify-center'>
        <Typography
          className='font-bold cursor-pointer no-underline hover:underline truncate'
          Tag={TagType.h4}
        >
          {title}
        </Typography>
        <Typography
          className='text-white/40 font-bold truncate'
          Tag={TagType.h5}
        >
          {artists.join(', ')}
        </Typography>
      </div>
    </div>
  );
};

export default SongDetail;
