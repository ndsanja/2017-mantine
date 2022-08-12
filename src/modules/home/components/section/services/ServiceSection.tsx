import { Carousel } from '@mantine/carousel';
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { useMantine } from '../../../../../cores/theme/mantine';

const ServiceSection = () => {
  const { mantine } = useMantine();
  const mtn = mantine.theme;
  const screen = mantine.display;

  return (
    <Container
      fluid
      sx={{
        background: mtn.fn.primaryColor(),
        textAlign: 'center',
        color: mtn.white,
      }}
    >
      <Stack
        align="center"
        justify="center"
        spacing="xl"
        py={screen.MD ? mtn.spacing.xl * 3 : mtn.spacing.xl * 2}
        mx={screen.MD ? mtn.spacing.xl * 4 : mtn.spacing.md}
      >
        <Title order={screen.MD ? 1 : screen.SM ? 2 : 3}>Services</Title>
        <Text
          sx={{
            fontSize: mtn.fontSizes.xs,
            [mtn.fn.largerThan('sm')]: { fontSize: mtn.fontSizes.md },
          }}
        >
          UB Merchandise & Creative berkomitmen memberikan layanan terbaik
          sesuai kebutuhan Anda
        </Text>
        <Slider />
      </Stack>
    </Container>
  );
};

export default ServiceSection;

function Slider() {
  const { mantine } = useMantine();
  const mtn = mantine.theme;
  const screen = mantine.display;

  const autoplay = useRef(Autoplay({ delay: 3000 as any }));

  return (
    <Carousel
      sx={{ width: '100%' }}
      mx="auto"
      height="auto"
      align="start"
      slideGap={screen.MD ? mtn.spacing.md : 0}
      slideSize={screen.MD ? '50%' : '100%'}
      loop
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <Carousel.Slide sx={{ position: 'relative' }}>
        <AspectRatio ratio={1 / 1}>
          <Image
            src="https://placeimg.com/640/480/arch"
            alt="duapuluh tuhuhbelas"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </AspectRatio>
        <Button
          sx={{
            position: 'absolute',
            bottom: mtn.spacing.md,
            right: mtn.spacing.md,
            zIndex: 20,
          }}
        >
          Product Name
        </Button>
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
        <AspectRatio ratio={1 / 1}>
          <Image
            src="https://placeimg.com/640/480/nature"
            alt="duapuluh tuhuhbelas"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </AspectRatio>
        <Button
          sx={{
            position: 'absolute',
            bottom: mtn.spacing.md,
            right: mtn.spacing.md,
            zIndex: 20,
          }}
        >
          Product Name
        </Button>
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
        <AspectRatio ratio={1 / 1}>
          <Image
            src="https://placeimg.com/640/480/tech"
            alt="duapuluh tuhuhbelas"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </AspectRatio>
        <Button
          sx={{
            position: 'absolute',
            bottom: mtn.spacing.md,
            right: mtn.spacing.md,
            zIndex: 20,
          }}
        >
          Product Name
        </Button>
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
}
