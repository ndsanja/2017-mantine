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
import { useMediaQuery } from '@mantine/hooks';
import HomeBanner from '../components/banner/HomeBanner';
import FeaturedService from '../components/featured/FeaturedService';
import FooterComp from '../components/footer/FooterComp';
import HeaderComp from '../components/header/HeaderComp';
import Hero from '../components/hero/Hero';
import HeroGrid from '../components/heroGrid/HeroGrid';
import MenuComp from '../components/menu/MenuComp';
import ProductList from '../components/productList/ProductList';
import CustomDesign from '../components/section/customDesign/CustomDesign';
import ServiceSection from '../components/section/services/ServiceSection';

const HomeView = () => {
  const theme = useMantineTheme();
  const largerThanXs = useMediaQuery('(min-width: 576px)', false);
  const largerThanSm = useMediaQuery('(min-width: 768px)', false);

  return (
    <>
      <HeaderComp />
      <Container size="md" px={largerThanSm ? theme.spacing.xl * 4 : 'xl'}>
        <Stack
          mt={theme.spacing.xl * 2}
          align="center"
          justify="center"
          spacing={0}
          sx={{
            display: 'none',
          }}
        >
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
            sx={{
              fontSize: theme.fontSizes.xl * 1.6,
              fontWeight: 600,
              [theme.fn.largerThan('xs')]: {
                fontSize: theme.fontSizes.xl * 2,
              },
            }}
          >
            Official Website
          </Title>
          <Title
            order={1}
            sx={{
              fontSize: theme.fontSizes.xl * 1.6,
              fontWeight: 600,
              [theme.fn.largerThan('xs')]: {
                fontSize: theme.fontSizes.xl * 2,
              },
            }}
          >
            20.17
          </Title>
        </Stack>
        <Space h={theme.spacing.xl * 3} />
        <Hero />
        <Space h={theme.spacing.xl * 4} />
        <FeaturedService />
        <Space h={theme.spacing.xl * 2.5} />
        <HeroGrid />
        <Space h={theme.spacing.xl * 4} />
        <Title
          order={largerThanSm ? 1 : largerThanXs ? 2 : 3}
          sx={{ fontWeight: 600, textAlign: 'center' }}
        >
          Product List
        </Title>
        <Space h={theme.spacing.xl * 2} />
        <ProductList />
        <Space h={theme.spacing.xl * 3} />
      </Container>
      <ServiceSection />
      <Space h={theme.spacing.xl} />
      <CustomDesign />
      <Space h={theme.spacing.xl * 3} />
      <HomeBanner />
      <Space h={theme.spacing.xl * 1.5} />
      <FooterComp />
    </>
  );
};

export default HomeView;
