import {
  AspectRatio,
  SimpleGrid,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { IconCoin } from '@tabler/icons';
import React from 'react';

const FeaturedService = () => {
  const theme = useMantineTheme();
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
        { maxWidth: 'sm', cols: 2 },
        { minWidth: 'sm', cols: 4 },
      ]}
      sx={{ background: theme.fn.primaryColor() }}
    >
      {data.map((item) => (
        <AspectRatio key={item.title} ratio={1 / 1}>
          <Stack
            justify="center"
            align="center"
            sx={{
              color: theme.white,
            }}
          >
            <IconCoin size={70} />
            <Text sx={{ fontSize: theme.fontSizes.sm }}>{item.title}</Text>
          </Stack>
        </AspectRatio>
      ))}
    </SimpleGrid>
  );
};

export default FeaturedService;
