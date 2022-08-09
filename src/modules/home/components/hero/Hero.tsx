import { AspectRatio } from '@mantine/core';
import Image from 'next/image';

const Hero = () => {
  return (
    <AspectRatio ratio={16 / 9}>
      <Image
        src="https://placeimg.com/640/480/any"
        alt="duapuluh tuhuhbelas"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </AspectRatio>
  );
};

export default Hero;
