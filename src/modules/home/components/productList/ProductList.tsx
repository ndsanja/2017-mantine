import {
  Anchor,
  AspectRatio,
  Box,
  Card,
  Center,
  Group,
  Pagination,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import Image from 'next/image';
import { useMantine } from '../../../../cores/theme/mantine';

const ProductList = () => {
  const { mantine } = useMantine();
  const mtn = mantine.theme;
  const screen = mantine.display;
  const data = [
    {
      title: 'Product 1',
    },
    {
      title: 'Product 2',
    },
    {
      title: 'Product 3',
    },
    {
      title: 'Product 4',
    },
    {
      title: 'Product 5',
    },
    {
      title: 'Product 6',
    },
    {
      title: 'Product 7',
    },
    {
      title: 'Product 8',
    },
  ];

  const menu = [
    {
      title: 'New Product',
      action: '#',
    },
    {
      title: 'Best Seller',
      action: '#',
    },
    {
      title: 'Sale',
      action: '#',
    },
  ];
  return (
    <>
      <Group align="center" spacing={mtn.spacing.sm} mb={mtn.spacing.xl}>
        {menu.map((item) => (
          <Text
            key={item.title}
            sx={{
              fontSize: mtn.fontSizes.xs,
              fontWeight: 600,
              textDecoration:
                item.title === 'New Product' ? 'underline' : 'none',
              color:
                mtn.colorScheme === 'dark' ? mtn.colors.dark[0] : mtn.black,
              [mtn.fn.largerThan('sm')]: {
                fontSize: mtn.fontSizes.md,
              },
            }}
          >
            {item.title}
          </Text>
        ))}
      </Group>
      <SimpleGrid
        breakpoints={[
          { maxWidth: 'sm', cols: 2, spacing: 'sm' },
          { maxWidth: 'md', cols: 2, spacing: 'xl' },
          { maxWidth: 'lg', cols: 3, spacing: 'xl' },
          { minWidth: 'lg', cols: 4, spacing: 'xl' },
        ]}
      >
        {data.map((prod) => (
          <Card
            key={prod.title}
            p={0}
            shadow="md"
            pb={mtn.spacing.md}
            radius={0}
          >
            <AspectRatio ratio={1 / 1}>
              <Image
                src="https://placeimg.com/640/480/tech"
                alt="duapuluh tuhuhbelas"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </AspectRatio>
            <Card.Section mt={mtn.spacing.md} px={mtn.spacing.sm}>
              <Title
                order={6}
                sx={{
                  fontWeight: 600,
                  fontSize: mtn.fontSizes.xs,
                  [mtn.fn.largerThan('sm')]: {
                    fontSize: mtn.fontSizes.md,
                  },
                }}
              >
                {prod.title}
              </Title>
              {/* <Text sx={{ fontSize: mtn.fontSizes.xs }}>Selengkapnya</Text> */}
            </Card.Section>
            <Card.Section mt={mtn.spacing.sm} px={mtn.spacing.sm}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  fontSize: mtn.fontSizes.xs,
                  [mtn.fn.largerThan('sm')]: {
                    fontSize: mtn.fontSizes.sm,
                  },
                }}
              >
                <Text>Rp 80000</Text>
                <Text
                  sx={{
                    color: mtn.colors.gray[7],
                    textDecoration: 'line-through',
                  }}
                >
                  Rp 100000
                </Text>
              </Box>
            </Card.Section>
            <Card.Section mt={mtn.spacing.sm} px={mtn.spacing.sm}>
              <Group
                sx={{
                  fontSize: mtn.fontSizes.sm,
                  [mtn.fn.largerThan('sm')]: {
                    fontSize: mtn.fontSizes.md,
                  },
                }}
              >
                <Anchor sx={{ color: 'green' }}>Tokopedia</Anchor>

                <Anchor sx={{ color: 'orangered' }}>Shopee</Anchor>
              </Group>
            </Card.Section>
          </Card>
        ))}
      </SimpleGrid>
      <Center>
        <Pagination mt={mtn.spacing.xl * 2} total={3} radius="xl" />
      </Center>
    </>
  );
};

export default ProductList;
