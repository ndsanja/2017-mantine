import { AspectRatio, SimpleGrid, Stack, Text } from '@mantine/core';
import { IconCoin } from '@tabler/icons';
import { useMantine } from '../../../../cores/theme/mantine';

const FeaturedService = () => {
  const { mantine: m } = useMantine();

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
      sx={{ background: m.theme.fn.primaryColor() }}
    >
      {data.map((item) => (
        <AspectRatio
          key={item.title}
          ratio={m.display.MD ? 1 / 1 : m.display.SM ? 2 / 1 : 1 / 1}
        >
          <Stack
            justify="center"
            align="center"
            sx={{
              color: m.theme.white,
            }}
          >
            <IconCoin size={70} />
            <Text sx={{ fontSize: m.theme.fontSizes.sm }}>{item.title}</Text>
          </Stack>
        </AspectRatio>
      ))}
    </SimpleGrid>
  );
};

export default FeaturedService;
