import { Carousel } from '@mantine/carousel';
import { AspectRatio, Box, useMantineTheme } from '@mantine/core';
import Image from 'next/image';
import { useRef } from 'react';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';

const Hero = () => {
  const theme = useMantineTheme();
  const autoplay = useRef(Autoplay({ delay: 5000 as any }));

  return (
    <Carousel
      sx={{ width: '100%' }}
      mx="auto"
      height="auto"
      align="center"
      withControls={false}
      loop
      plugins={[autoplay.current]}
    >
      <Carousel.Slide sx={{ background: 'blue', position: 'relative' }}>
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
            background: theme.fn.linearGradient(
              180,
              theme.fn.rgba(theme.white, 0.0),
              theme.fn.rgba(theme.black, 1)
            ),
            zIndex: 10,
          }}
        ></Box>
      </Carousel.Slide>
      <Carousel.Slide sx={{ background: 'blue', position: 'relative' }}>
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
            background: theme.fn.linearGradient(
              180,
              theme.fn.rgba(theme.white, 0.0),
              theme.fn.rgba(theme.black, 1)
            ),
            zIndex: 10,
          }}
        ></Box>
      </Carousel.Slide>
      <Carousel.Slide sx={{ background: 'blue', position: 'relative' }}>
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
            background: theme.fn.linearGradient(
              180,
              theme.fn.rgba(theme.white, 0.0),
              theme.fn.rgba(theme.black, 1)
            ),
            zIndex: 10,
          }}
        ></Box>
      </Carousel.Slide>
    </Carousel>
  );
};

export default Hero;
