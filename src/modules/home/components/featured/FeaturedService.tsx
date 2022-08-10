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
      title: 'Service 1',
    },
    {
      icon: 'icon',
      title: 'Service 2',
    },
    {
      icon: 'icon',
      title: 'Service 3',
    },
    {
      icon: 'icon',
      title: 'Service 4',
    },
  ];
  return (
    <SimpleGrid
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
            <IconCoin size={50} />
            <Text>Service 1</Text>
          </Stack>
        </AspectRatio>
      ))}
    </SimpleGrid>
  );
};

export default FeaturedService;
