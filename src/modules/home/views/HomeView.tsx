import {
  Center,
  Container,
  Pagination,
  Space,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import FeaturedService from '../components/featured/FeaturedService';
import HeaderComp from '../components/header/HeaderComp';
import Hero from '../components/hero/Hero';
import HeroGrid from '../components/heroGrid/HeroGrid';
import MenuComp from '../components/menu/MenuComp';
import ProductList from '../components/productList/ProductList';

const HomeView = () => {
  const theme = useMantineTheme();
  return (
    <>
      <HeaderComp />
      <Container size="md">
        <Space h={theme.spacing.xl * 2} />
        <Stack align="center" justify="center" spacing={0}>
          <Title order={1}>20.17</Title>
          <Text>Duapuluh Tujuhbelas</Text>
        </Stack>
        <Space h={theme.spacing.xl * 2} />
        <MenuComp />
        <Space h={theme.spacing.xl * 2} />
        <Stack
          align="center"
          justify="center"
          spacing={0}
          sx={{ textAlign: 'center' }}
        >
          <Title
            order={1}
            sx={{ fontSize: theme.fontSizes.xl * 2, fontWeight: 400 }}
          >
            Official Website
          </Title>
          <Title
            order={1}
            sx={{ fontSize: theme.fontSizes.xl * 2, fontWeight: 400 }}
          >
            20.17
          </Title>
        </Stack>
        <Space h={theme.spacing.xl * 3} />
        <Hero />
        <Space h={theme.spacing.xl * 3} />
        <FeaturedService />
        <Space h={theme.spacing.xl * 3} />
        <HeroGrid />
        <Space h={theme.spacing.xl * 3} />
        <Title order={2} sx={{ fontWeight: 400, textAlign: 'center' }}>
          Product List
        </Title>
        <Space h={theme.spacing.xl * 2} />
        <ProductList />
        <Space h={theme.spacing.xl * 3} />
      </Container>
    </>
  );
};

export default HomeView;
