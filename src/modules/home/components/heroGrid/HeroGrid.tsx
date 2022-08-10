import {
  AspectRatio,
  Box,
  Button,
  Grid,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import Image from 'next/image';

const HeroGrid = () => {
  const theme = useMantineTheme();
  return (
    <Grid sx={{ gap: theme.spacing.md }}>
      <Grid.Col p={0} span={12} sx={{ position: 'relative' }}>
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
      </Grid.Col>
      <Grid.Col p={0} span={12} sx={{ position: 'relative' }}>
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
      </Grid.Col>
      <Grid.Col p={0} span={12} sx={{ position: 'relative' }}>
        <AspectRatio ratio={1 / 1}>
          <Image
            src="https://placeimg.com/640/480/people"
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
      </Grid.Col>
      <Grid.Col p={0} span={12} sx={{ position: 'relative' }}>
        <AspectRatio ratio={theme.fn.largerThan('xs') ? 1 / 1 : 2 / 0.97}>
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
      </Grid.Col>
      <Grid.Col p={0} span={12} sx={{ position: 'relative' }}>
        <AspectRatio ratio={1 / 1}>
          <Image
            src="https://placeimg.com/640/480/animal"
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
      </Grid.Col>
    </Grid>
  );
};

export default HeroGrid;
