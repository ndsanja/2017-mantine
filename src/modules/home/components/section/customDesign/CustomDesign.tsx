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

const CustomDesign = () => {
  const theme = useMantineTheme();
  return (
    <Container
      fluid
      sx={{
        textAlign: 'center',
      }}
    >
      <Stack
        align="center"
        justify="center"
        spacing="xl"
        py={theme.spacing.xl * 2}
        mx="sm"
      >
        <Title order={2}>Custom Design</Title>
        <Text>
          UB Merchandise & Creative menyediakan layanan jasa kreatif untuk
          memenuhi kebutuhan digitalisasi Anda
        </Text>
        <Slider />
      </Stack>
    </Container>
  );
};

export default CustomDesign;

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
