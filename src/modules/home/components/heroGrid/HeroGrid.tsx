import {
  AspectRatio,
  Grid,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import Image from 'next/image';

const HeroGrid = () => {
  const theme = useMantineTheme();
  return (
    <Grid gutter="md">
      <Grid.Col span={12}>
        <AspectRatio ratio={1 / 1}>
          <Image
            src="https://placeimg.com/640/480/arch"
            alt="duapuluh tuhuhbelas"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </AspectRatio>
      </Grid.Col>
      <Grid.Col span={12}>
        <AspectRatio ratio={1 / 1}>
          <Image
            src="https://placeimg.com/640/480/tech"
            alt="duapuluh tuhuhbelas"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </AspectRatio>
      </Grid.Col>
      <Grid.Col span={12}>
        <AspectRatio ratio={1 / 1}>
          <Image
            src="https://placeimg.com/640/480/people"
            alt="duapuluh tuhuhbelas"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </AspectRatio>
      </Grid.Col>
      <Grid.Col span={12}>
        <AspectRatio ratio={theme.fn.largerThan('xs') ? 1 / 1 : 2 / 0.97}>
          <Image
            src="https://placeimg.com/640/480/nature"
            alt="duapuluh tuhuhbelas"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </AspectRatio>
      </Grid.Col>
      <Grid.Col span={12}>
        <AspectRatio ratio={1 / 1}>
          <Image
            src="https://placeimg.com/640/480/animal"
            alt="duapuluh tuhuhbelas"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </AspectRatio>
      </Grid.Col>
    </Grid>
  );
};

export default HeroGrid;
