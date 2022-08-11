import {
  Box,
  Container,
  Footer,
  Grid,
  Group,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconMail,
  IconMapPins,
  IconPhone,
} from '@tabler/icons';

const FooterComp = () => {
  const largerThanXs = useMediaQuery('(min-width: 577px)', false);
  const largerThanSm = useMediaQuery('(min-width: 768px)', false);

  const theme = useMantineTheme();
  return (
    <Stack>
      <Container mx={largerThanSm ? theme.spacing.xl * 4 : 'xl'}>
        <SimpleGrid
          breakpoints={[
            { maxWidth: 'sm', cols: 1, spacing: 'xl' },
            { minWidth: 'sm', cols: 3, spacing: 'xl' },
          ]}
        >
          <Stack spacing={0} align={largerThanSm ? 'start' : 'center'}>
            <Title order={largerThanXs ? 1 : 2}>20.17</Title>
            <Text sx={{ fontSize: theme.fontSizes.sm }}>
              Duapuluh Tujuhbelas
            </Text>
          </Stack>
          <Stack>
            <Title order={largerThanXs ? 5 : 6}>Contact</Title>
            <Grid
              sx={{
                fontSize: theme.fontSizes.xs,
                [theme.fn.largerThan('xs')]: {
                  fontSize: theme.fontSizes.sm,
                },
              }}
            >
              <Grid.Col span={largerThanSm ? 3 : 2}>
                <IconMapPins size={largerThanXs ? 45 : 30} />
              </Grid.Col>
              <Grid.Col span={largerThanSm ? 9 : 10}>
                <Text>Jalan jalan kepasar minggu, Jawa Timur </Text>
              </Grid.Col>
            </Grid>
            <Grid
              gutter="xl"
              sx={{
                fontSize: theme.fontSizes.xs,
                [theme.fn.largerThan('xs')]: {
                  fontSize: theme.fontSizes.sm,
                },
              }}
            >
              <Grid.Col span={largerThanSm ? 3 : 2}>
                <IconPhone size={largerThanXs ? 45 : 30} />
              </Grid.Col>
              <Grid.Col span={largerThanSm ? 9 : 10}>
                <Text>+62 8123 4567 8910</Text>
              </Grid.Col>
            </Grid>
            <Grid
              gutter="xl"
              sx={{
                fontSize: theme.fontSizes.xs,
                [theme.fn.largerThan('xs')]: {
                  fontSize: theme.fontSizes.sm,
                },
              }}
            >
              <Grid.Col span={largerThanSm ? 3 : 2}>
                <IconMail size={largerThanXs ? 45 : 30} />
              </Grid.Col>
              <Grid.Col span={largerThanSm ? 9 : 10}>
                <Text>alamtemail1@mail.com</Text>
                <Text>alamt@mail.com</Text>
                <Text>email1@mail.com</Text>
              </Grid.Col>
            </Grid>
          </Stack>
          <Stack>
            <Title order={largerThanXs ? 5 : 6}>Information</Title>
            <SimpleGrid
              cols={2}
              sx={{
                fontSize: theme.fontSizes.xs,
                [theme.fn.largerThan('xs')]: {
                  fontSize: theme.fontSizes.sm,
                },
              }}
              spacing="xl"
            >
              <Stack spacing="xs">
                <Text>How To Order</Text>
                <Text>Size Chart</Text>
                <Text>F.A.Q</Text>
                <Text>Term and Conditions</Text>
              </Stack>
              <Stack spacing="xs">
                <Text>Portfolio</Text>
                <Text>Digital Flipbook</Text>
                <Text>Shopee</Text>
                <Text>Tokopedia</Text>
              </Stack>
            </SimpleGrid>
          </Stack>
        </SimpleGrid>
      </Container>
      <Footer
        mx={largerThanSm ? theme.spacing.xl * 4 : 'sm'}
        height="auto"
        py="lg"
        withBorder
        mt="mt"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: largerThanSm ? 'row-reverse' : 'column',
            justifyContent: largerThanSm ? 'space-between' : 'center',
            alignItems: 'center',
          }}
        >
          <Group position="center" spacing="xl">
            <IconBrandInstagram size={largerThanXs ? 20 : 15} />
            <IconBrandWhatsapp size={largerThanXs ? 20 : 15} />
            <IconMail size={largerThanXs ? 20 : 15} />
            <IconBrandFacebook size={largerThanXs ? 20 : 15} />
          </Group>
          <Space h={largerThanSm ? 0 : 'md'} />
          <Group position="center" align="center">
            <Text
              sx={{
                fontSize: theme.fontSizes.xs,
                textAlign: largerThanSm ? 'left' : 'center',
                [theme.fn.largerThan('xs')]: {
                  fontSize: theme.fontSizes.sm,
                },
              }}
            >
              &copy; 2022 Duapuluh Tujuhbelas All Right Reserved.
              <br />
              Made by @ndsanja
            </Text>
          </Group>
        </div>
      </Footer>
    </Stack>
  );
};

export default FooterComp;
