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
  const { mantine: m } = useMantine();

  return (
    <Container
      fluid
      sx={{
        background: m.theme.fn.primaryColor(),
        textAlign: 'center',
        color: m.theme.white,
      }}
    >
      <Stack
        align="center"
        justify="center"
        spacing="xl"
        py={m.display.MD ? m.theme.spacing.xl * 3 : m.theme.spacing.xl * 2}
        mx={m.display.MD ? m.theme.spacing.xl * 4 : m.theme.spacing.md}
      >
        <Title order={m.display.MD ? 1 : m.display.SM ? 2 : 3}>Services</Title>
        <Text
          sx={{
            fontSize: m.theme.fontSizes.xs,
            [m.theme.fn.largerThan('sm')]: { fontSize: m.theme.fontSizes.md },
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
  const { mantine: m } = useMantine();

  const autoplay = useRef(Autoplay({ delay: 3000 as any }));

  return (
    <Carousel
      sx={{ width: '100%' }}
      mx="auto"
      height="auto"
      align="start"
      slideGap={m.display.MD ? m.theme.spacing.md : 0}
      slideSize={m.display.MD ? '50%' : '100%'}
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
            bottom: m.theme.spacing.md,
            right: m.theme.spacing.md,
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
            background: m.theme.fn.linearGradient(
              180,
              m.theme.fn.rgba(m.theme.white, 0.0),
              m.theme.fn.rgba(m.theme.black, 1)
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
            bottom: m.theme.spacing.md,
            right: m.theme.spacing.md,
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
            background: m.theme.fn.linearGradient(
              180,
              m.theme.fn.rgba(m.theme.white, 0.0),
              m.theme.fn.rgba(m.theme.black, 1)
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
            bottom: m.theme.spacing.md,
            right: m.theme.spacing.md,
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
            background: m.theme.fn.linearGradient(
              180,
              m.theme.fn.rgba(m.theme.white, 0.0),
              m.theme.fn.rgba(m.theme.black, 1)
            ),
            zIndex: 10,
          }}
        ></Box>
      </Carousel.Slide>
    </Carousel>
  );
}
