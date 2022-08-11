import { AspectRatio, Box, Button, Grid } from '@mantine/core';
import Image from 'next/image';
import { useMantine } from '../../../../cores/theme/mantine';

const HeroGrid = () => {
  const { mantine: m } = useMantine();

  return (
    <Grid
      gutter={m.display.MD ? m.theme.spacing.md : 0}
      sx={{ rowGap: m.display.MD ? 0 : m.theme.spacing.lg }}
    >
      <Grid.Col span={m.display.MD ? 4 : 12} sx={{ position: 'relative' }}>
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
        </Box>
      </Grid.Col>
      <Grid.Col span={m.display.MD ? 4 : 12} sx={{ position: 'relative' }}>
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
        </Box>
      </Grid.Col>
      <Grid.Col span={m.display.MD ? 4 : 12} sx={{ position: 'relative' }}>
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
        </Box>
      </Grid.Col>
      <Grid.Col span={m.display.MD ? 8 : 12} sx={{ position: 'relative' }}>
        <Box sx={{ position: 'relative' }}>
          <AspectRatio ratio={m.display.MD ? 2 / 0.96 : 1 / 1}>
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
        </Box>
      </Grid.Col>
      <Grid.Col span={m.display.MD ? 4 : 12} sx={{ position: 'relative' }}>
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
        </Box>
      </Grid.Col>
    </Grid>
  );
};

export default HeroGrid;
