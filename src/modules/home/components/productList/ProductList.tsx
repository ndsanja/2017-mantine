import {
  Anchor,
  AspectRatio,
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
          <Anchor
            key={item.title}
            sx={{
              color:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[0]
                  : theme.black,
            }}
          >
            {item.title}
          </Anchor>
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
              <Title order={5} sx={{ fontWeight: 400 }}>
                {prod.title}
              </Title>
              <Text sx={{ fontSize: theme.fontSizes.xs }}>Selengkapnya</Text>
            </Card.Section>
            <Card.Section mt="sm" px="sm">
              <Group position="apart" sx={{ fontSize: theme.fontSizes.xs }}>
                <Text>Rp 80000</Text>
                <Text
                  sx={{
                    color: theme.colors.gray[7],
                    textDecoration: 'line-through',
                  }}
                >
                  Rp 100000
                </Text>
              </Group>
            </Card.Section>
            <Card.Section mt="sm" px="sm">
              <Group sx={{ fontSize: theme.fontSizes.sm }}>
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
