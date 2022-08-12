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
  const { mantine } = useMantine();
  const mtn = mantine.theme;
  const screen = mantine.display;

  return (
    <>
      <HeaderComp />
      <Container size="md" px={screen.MD ? mtn.spacing.xl * 4 : mtn.spacing.xl}>
        <Stack
          mt={mtn.spacing.xl * 2}
          align="center"
          justify="center"
          spacing={0}
          sx={{
            screen: 'none',
            [mtn.fn.largerThan('lg')]: {
              screen: 'flex',
            },
          }}
        >
          <Title order={1}>20.17</Title>
          <Text>Duapuluh Tujuhbelas</Text>
        </Stack>
        <Space h={mtn.spacing.xl * 2} />
        <MenuComp />
        <Space h={mtn.spacing.xl * 2} />
        <Stack
          align="center"
          justify="center"
          spacing={0}
          sx={{ textAlign: 'center' }}
        >
          <Title
            order={1}
            sx={{
              fontSize: mtn.fontSizes.xl * 1.6,
              fontWeight: 600,
              [mtn.fn.largerThan('sm')]: {
                fontSize: mtn.fontSizes.xl * 2,
              },
            }}
          >
            Official Website
          </Title>
          <Title
            order={1}
            sx={{
              fontSize: mtn.fontSizes.xl * 1.6,
              fontWeight: 600,
              [mtn.fn.largerThan('sm')]: {
                fontSize: mtn.fontSizes.xl * 2,
              },
            }}
          >
            20.17
          </Title>
        </Stack>
        <Space h={mtn.spacing.xl * 3} />
        <Hero />
        <Space h={mtn.spacing.xl * 4} />
        <FeaturedService />
        <Space h={mtn.spacing.xl * 2.5} />
        <HeroGrid />
        <Space h={mtn.spacing.xl * 4} />
        <Title
          order={screen.MD ? 1 : screen.SM ? 2 : 3}
          sx={{ fontWeight: 600, textAlign: 'center' }}
        >
          Product List
        </Title>
        <Space h={mtn.spacing.xl * 2} />
        <ProductList />
        <Space h={mtn.spacing.xl * 3} />
      </Container>
      <ServiceSection />
      <Space h={mtn.spacing.xl} />
      <CustomDesign />
      <Space h={mtn.spacing.xl * 3} />
      <HomeBanner />
      <Space h={mtn.spacing.xl * 1.5} />
      <FooterComp />
    </>
  );
};

export default HomeView;
