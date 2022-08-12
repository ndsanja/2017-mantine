import { AspectRatio, Box, Button, Grid } from '@mantine/core';
import Image from 'next/image';
import { useMantine } from '../../../../cores/theme/mantine';

const HeroGrid = () => {
  const { mantine } = useMantine();
  const mtn = mantine.theme;
  const screen = mantine.display;

  return (
    <Grid
      gutter={screen.MD ? mtn.spacing.md : 0}
      sx={{ rowGap: screen.MD ? 0 : mtn.spacing.lg }}
    >
      <Grid.Col span={screen.MD ? 4 : 12} sx={{ position: 'relative' }}>
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
        </Box>
      </Grid.Col>
      <Grid.Col span={screen.MD ? 4 : 12} sx={{ position: 'relative' }}>
        <Box sx={{ position: 'relative' }}>
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
        </Box>
      </Grid.Col>
      <Grid.Col span={screen.MD ? 4 : 12} sx={{ position: 'relative' }}>
        <Box sx={{ position: 'relative' }}>
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
        </Box>
      </Grid.Col>
      <Grid.Col span={screen.MD ? 8 : 12} sx={{ position: 'relative' }}>
        <Box sx={{ position: 'relative' }}>
          <AspectRatio ratio={screen.MD ? 2 / 0.96 : 1 / 1}>
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
        </Box>
      </Grid.Col>
      <Grid.Col span={screen.MD ? 4 : 12} sx={{ position: 'relative' }}>
        <Box sx={{ position: 'relative' }}>
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
        </Box>
      </Grid.Col>
    </Grid>
  );
};

export default HeroGrid;
