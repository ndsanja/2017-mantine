import { AspectRatio, SimpleGrid, Stack, Text } from '@mantine/core';
import { IconCoin } from '@tabler/icons';
import { useMantine } from '../../../../cores/theme/mantine';

const FeaturedService = () => {
  const { mantine } = useMantine();
  const mtn = mantine.theme;
  const screen = mantine.display;

  const data = [
    {
      icon: 'icon',
      title: 'Pelayanan Terbaik',
    },
    {
      icon: 'icon',
      title: 'Produk Berkualitas',
    },
    {
      icon: 'icon',
      title: 'Profesional',
    },
    {
      icon: 'icon',
      title: 'Harga Terjangkau',
    },
  ];
  return (
    <SimpleGrid
      p="lg"
      breakpoints={[
        { maxWidth: 'md', cols: 2 },
        { minWidth: 'md', cols: 4 },
      ]}
      sx={{ background: mtn.fn.primaryColor() }}
    >
      {data.map((item) => (
        <AspectRatio
          key={item.title}
          ratio={screen.MD ? 1 / 1 : screen.SM ? 2 / 1 : 1 / 1}
        >
          <Stack
            justify="center"
            align="center"
            sx={{
              color: mtn.white,
            }}
          >
            <IconCoin size={70} />
            <Text sx={{ fontSize: mtn.fontSizes.sm }}>{item.title}</Text>
          </Stack>
        </AspectRatio>
      ))}
    </SimpleGrid>
  );
};

export default FeaturedService;
