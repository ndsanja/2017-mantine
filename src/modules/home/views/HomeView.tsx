import { Container, Space, Stack, Text, Title } from '@mantine/core';
import { useMantine } from '../../../cores/theme/mantine';
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
  const { mantine: m } = useMantine();

  return (
    <>
      <HeaderComp />
      <Container
        size="md"
        px={m.display.MD ? m.theme.spacing.xl * 4 : m.theme.spacing.xl}
      >
        <Stack
          mt={m.theme.spacing.xl * 2}
          align="center"
          justify="center"
          spacing={0}
          sx={{
            display: 'none',
            [m.theme.fn.largerThan('lg')]: {
              display: 'flex',
            },
          }}
        >
          <Title order={1}>20.17</Title>
          <Text>Duapuluh Tujuhbelas</Text>
        </Stack>
        <Space h={m.theme.spacing.xl * 2} />
        <MenuComp />
        <Space h={m.theme.spacing.xl * 2} />
        <Stack
          align="center"
          justify="center"
          spacing={0}
          sx={{ textAlign: 'center' }}
        >
          <Title
            order={1}
            sx={{
              fontSize: m.theme.fontSizes.xl * 1.6,
              fontWeight: 600,
              [m.theme.fn.largerThan('sm')]: {
                fontSize: m.theme.fontSizes.xl * 2,
              },
            }}
          >
            Official Website
          </Title>
          <Title
            order={1}
            sx={{
              fontSize: m.theme.fontSizes.xl * 1.6,
              fontWeight: 600,
              [m.theme.fn.largerThan('sm')]: {
                fontSize: m.theme.fontSizes.xl * 2,
              },
            }}
          >
            20.17
          </Title>
        </Stack>
        <Space h={m.theme.spacing.xl * 3} />
        <Hero />
        <Space h={m.theme.spacing.xl * 4} />
        <FeaturedService />
        <Space h={m.theme.spacing.xl * 2.5} />
        <HeroGrid />
        <Space h={m.theme.spacing.xl * 4} />
        <Title
          order={m.display.MD ? 1 : m.display.SM ? 2 : 3}
          sx={{ fontWeight: 600, textAlign: 'center' }}
        >
          Product List
        </Title>
        <Space h={m.theme.spacing.xl * 2} />
        <ProductList />
        <Space h={m.theme.spacing.xl * 3} />
      </Container>
      <ServiceSection />
      <Space h={m.theme.spacing.xl} />
      <CustomDesign />
      <Space h={m.theme.spacing.xl * 3} />
      <HomeBanner />
      <Space h={m.theme.spacing.xl * 1.5} />
      <FooterComp />
    </>
  );
};

export default HomeView;
