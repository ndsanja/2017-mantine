import { Carousel } from '@mantine/carousel';
import { AspectRatio, Box } from '@mantine/core';
import Image from 'next/image';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useMantine } from '../../../../cores/theme/mantine';

const Hero = () => {
  const { mantine } = useMantine();
  const mtn = mantine.theme;
  const screen = mantine.display;
  const autoplay = useRef(Autoplay({ delay: 5000 as any }));

  return (
    <Carousel
      sx={{ width: '100%' }}
      mx="auto"
      height="auto"
      align="start"
      withControls={false}
      loop
      plugins={[autoplay.current]}
    >
      <Carousel.Slide sx={{ position: 'relative' }}>
        <AspectRatio ratio={16 / 9}>
          <Image
            src="https://placeimg.com/640/480/arch"
            alt="duapuluh tuhuhbelas"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </AspectRatio>

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: mtn.fn.linearGradient(
              180,
              mtn.fn.rgba(mtn.white, 0.0),
              mtn.fn.rgba(mtn.black, 1)
            ),
            zIndex: 10,
          }}
        ></Box>
      </Carousel.Slide>
      <Carousel.Slide sx={{ position: 'relative' }}>
        <AspectRatio ratio={16 / 9}>
          <Image
            src="https://placeimg.com/640/480/nature"
            alt="duapuluh tuhuhbelas"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </AspectRatio>

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: mtn.fn.linearGradient(
              180,
              mtn.fn.rgba(mtn.white, 0.0),
              mtn.fn.rgba(mtn.black, 1)
            ),
            zIndex: 10,
          }}
        ></Box>
      </Carousel.Slide>
      <Carousel.Slide sx={{ position: 'relative' }}>
        <AspectRatio ratio={16 / 9}>
          <Image
            src="https://placeimg.com/640/480/tech"
            alt="duapuluh tuhuhbelas"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </AspectRatio>

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: mtn.fn.linearGradient(
              180,
              mtn.fn.rgba(mtn.white, 0.0),
              mtn.fn.rgba(mtn.black, 1)
            ),
            zIndex: 10,
          }}
        ></Box>
      </Carousel.Slide>
    </Carousel>
  );
};

export default Hero;
