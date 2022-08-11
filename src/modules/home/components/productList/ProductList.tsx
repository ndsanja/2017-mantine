import {
  Anchor,
  AspectRatio,
  Box,
  Card,
  Center,
  Group,
  Pagination,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import Image from 'next/image';

const ProductList = () => {
  const theme = useMantineTheme();
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
      <Group align="center" spacing="sm" mb="xl">
        {menu.map((item) => (
          <Text
            key={item.title}
            sx={{
              fontSize: theme.fontSizes.xs,
              fontWeight: 600,
              textDecoration:
                item.title === 'New Product' ? 'underline' : 'none',
              color:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[0]
                  : theme.black,
              [theme.fn.largerThan('xs')]: {
                fontSize: theme.fontSizes.md,
              },
            }}
          >
            {item.title}
          </Text>
        ))}
      </Group>
      <SimpleGrid
        breakpoints={[
          { maxWidth: 'xs', cols: 2, spacing: 'sm' },
          { maxWidth: 'sm', cols: 2, spacing: 'xl' },
          { maxWidth: 'md', cols: 3, spacing: 'xl' },
          { minWidth: 'md', cols: 4, spacing: 'xl' },
        ]}
      >
        {data.map((prod) => (
          <Card key={prod.title} p={0} shadow="md" pb="md" radius={0}>
            <AspectRatio ratio={1 / 1}>
              <Image
                src="https://placeimg.com/640/480/tech"
                alt="duapuluh tuhuhbelas"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </AspectRatio>
            <Card.Section mt="md" px="sm">
              <Title
                order={6}
                sx={{
                  fontWeight: 600,
                  fontSize: theme.fontSizes.xs,
                  [theme.fn.largerThan('xs')]: { fontSize: theme.fontSizes.md },
                }}
              >
                {prod.title}
              </Title>
              {/* <Text sx={{ fontSize: theme.fontSizes.xs }}>Selengkapnya</Text> */}
            </Card.Section>
            <Card.Section mt="sm" px="sm">
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  fontSize: theme.fontSizes.xs,
                  [theme.fn.largerThan('xs')]: { fontSize: theme.fontSizes.sm },
                }}
              >
                <Text>Rp 80000</Text>
                <Text
                  sx={{
                    color: theme.colors.gray[7],
                    textDecoration: 'line-through',
                  }}
                >
                  Rp 100000
                </Text>
              </Box>
            </Card.Section>
            <Card.Section mt="sm" px="sm">
              <Group
                sx={{
                  fontSize: theme.fontSizes.sm,
                  [theme.fn.largerThan('xs')]: { fontSize: theme.fontSizes.md },
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
        <Pagination mt={theme.spacing.xl * 2} total={3} radius="xl" />
      </Center>
    </>
  );
};

export default ProductList;
