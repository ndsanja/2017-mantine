import { Carousel } from '@mantine/carousel';
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { useMediaQuery } from '@mantine/hooks';

const ServiceSection = () => {
  const theme = useMantineTheme();
  const largerThanXs = useMediaQuery('(min-width: 576px)', false);
  const largerThanSm = useMediaQuery('(min-width: 768px)', false);

  return (
    <Container
      fluid
      sx={{
        background: theme.fn.primaryColor(),
        textAlign: 'center',
        color: theme.white,
      }}
    >
      <Stack
        align="center"
        justify="center"
        spacing="xl"
        py={largerThanSm ? theme.spacing.xl * 3 : theme.spacing.xl * 2}
        mx={largerThanSm ? theme.spacing.xl * 4 : 'md'}
      >
        <Title order={largerThanSm ? 1 : largerThanXs ? 2 : 3}>Services</Title>
        <Text
          sx={{
            fontSize: theme.fontSizes.xs,
            [theme.fn.largerThan('xs')]: { fontSize: theme.fontSizes.md },
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
  const largerThanSm = useMediaQuery('(min-width: 768px)', false);

  const theme = useMantineTheme();
  const autoplay = useRef(Autoplay({ delay: 3000 as any }));

  return (
    <Carousel
      sx={{ width: '100%' }}
      mx="auto"
      height="auto"
      align="start"
      slideGap={largerThanSm ? 'md' : 0}
      slideSize={largerThanSm ? '50%' : '100%'}
      loop
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <Carousel.Slide sx={{ background: 'blue', position: 'relative' }}>
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
            bottom: theme.spacing.md,
            right: theme.spacing.md,
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
            bottom: theme.spacing.md,
            right: theme.spacing.md,
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
            bottom: theme.spacing.md,
            right: theme.spacing.md,
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
}
