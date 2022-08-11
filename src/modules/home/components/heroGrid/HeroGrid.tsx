import {
  AspectRatio,
  Box,
  Button,
  Grid,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';

const HeroGrid = () => {
  const theme = useMantineTheme();
  const largerThanSm = useMediaQuery('(min-width: 768px)', false);

  return (
    <Grid
      gutter={largerThanSm ? 'md' : 0}
      sx={{
        [theme.fn.smallerThan('sm')]: {
          gap: theme.spacing.md,
        },
      }}
    >
      <Grid.Col span={largerThanSm ? 4 : 12} sx={{ position: 'relative' }}>
        <Box sx={{ position: 'relative' }}>
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
        </Box>
      </Grid.Col>
      <Grid.Col span={largerThanSm ? 4 : 12} sx={{ position: 'relative' }}>
        <Box sx={{ position: 'relative' }}>
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
        </Box>
      </Grid.Col>
      <Grid.Col span={largerThanSm ? 4 : 12} sx={{ position: 'relative' }}>
        <Box sx={{ position: 'relative' }}>
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
        </Box>
      </Grid.Col>
      <Grid.Col span={largerThanSm ? 8 : 12} sx={{ position: 'relative' }}>
        <Box sx={{ position: 'relative' }}>
          <AspectRatio ratio={largerThanSm ? 2 / 0.96 : 1 / 1}>
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
        </Box>
      </Grid.Col>
      <Grid.Col span={largerThanSm ? 4 : 12} sx={{ position: 'relative' }}>
        <Box sx={{ position: 'relative' }}>
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
        </Box>
      </Grid.Col>
    </Grid>
  );
};

export default HeroGrid;
