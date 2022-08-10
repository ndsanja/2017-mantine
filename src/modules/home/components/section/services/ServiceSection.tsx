import { Carousel } from '@mantine/carousel';
import {
  AspectRatio,
  Container,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import Image from 'next/image';

const ServiceSection = () => {
  const theme = useMantineTheme();
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
        py={theme.spacing.xl * 2}
        mx="sm"
      >
        <Title order={3}>Services</Title>
        <Text sx={{ fontSize: theme.fontSizes.xs }}>
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
  return (
    <Carousel
      sx={{ width: '100%' }}
      mx="auto"
      height="auto"
      align="start"
      slideGap="md"
      loop
    >
      <Carousel.Slide sx={{ background: 'blue' }}>
        <AspectRatio ratio={1 / 1}>
          <Image
            src="https://placeimg.com/640/480/arch"
            alt="duapuluh tuhuhbelas"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </AspectRatio>
      </Carousel.Slide>
      <Carousel.Slide sx={{ background: 'blue' }}>
        <AspectRatio ratio={1 / 1}>
          <Image
            src="https://placeimg.com/640/480/nature"
            alt="duapuluh tuhuhbelas"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </AspectRatio>
      </Carousel.Slide>
      <Carousel.Slide sx={{ background: 'blue' }}>
        <AspectRatio ratio={1 / 1}>
          <Image
            src="https://placeimg.com/640/480/tech"
            alt="duapuluh tuhuhbelas"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </AspectRatio>
      </Carousel.Slide>
    </Carousel>
  );
}
