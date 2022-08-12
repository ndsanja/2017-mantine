import {
  Container,
  Footer,
  Grid,
  Group,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconMail,
  IconMapPins,
  IconPhone,
} from '@tabler/icons';
import { useMantine } from '../../../../cores/theme/mantine';

const FooterComp = () => {
  const { mantine } = useMantine();
  const mtn = mantine.theme;
  const screen = mantine.display;

  return (
    <Stack>
      <Container mx={screen.MD ? mtn.spacing.xl * 4 : mtn.spacing.xl}>
        <SimpleGrid
          breakpoints={[
            { maxWidth: 'md', cols: 1, spacing: mtn.spacing.xl * 2 },
            { minWidth: 'md', cols: 3, spacing: mtn.spacing.xl },
          ]}
        >
          <Stack spacing={0} align={screen.MD ? 'start' : 'center'}>
            <Title order={screen.SM ? 1 : 2}>20.17</Title>
            <Text sx={{ fontSize: mtn.fontSizes.sm }}>Duapuluh Tujuhbelas</Text>
          </Stack>
          <Stack>
            <Title order={screen.SM ? 5 : 6}>Contact</Title>
            <Grid
              sx={{
                fontSize: mtn.fontSizes.xs,
                [mtn.fn.largerThan('sm')]: {
                  fontSize: mtn.fontSizes.sm,
                },
              }}
            >
              <Grid.Col span={screen.MD ? 3 : 2}>
                <IconMapPins size={screen.SM ? 45 : 30} />
              </Grid.Col>
              <Grid.Col span={screen.MD ? 9 : 10}>
                <Text>Jalan jalan kepasar minggu, Jawa Timur </Text>
              </Grid.Col>
            </Grid>
            <Grid
              gutter={mtn.spacing.xl}
              sx={{
                fontSize: mtn.fontSizes.xs,
                [mtn.fn.largerThan('sm')]: {
                  fontSize: mtn.fontSizes.sm,
                },
              }}
            >
              <Grid.Col span={screen.MD ? 3 : 2}>
                <IconPhone size={screen.SM ? 45 : 30} />
              </Grid.Col>
              <Grid.Col span={screen.MD ? 9 : 10}>
                <Text>+62 8123 4567 8910</Text>
              </Grid.Col>
            </Grid>
            <Grid
              gutter={mtn.spacing.xl}
              sx={{
                fontSize: mtn.fontSizes.xs,
                [mtn.fn.largerThan('sm')]: {
                  fontSize: mtn.fontSizes.sm,
                },
              }}
            >
              <Grid.Col span={screen.MD ? 3 : 2}>
                <IconMail size={screen.SM ? 45 : 30} />
              </Grid.Col>
              <Grid.Col span={screen.MD ? 9 : 10}>
                <Text>alamtemail1@mail.com</Text>
                <Text>alamt@mail.com</Text>
                <Text>email1@mail.com</Text>
              </Grid.Col>
            </Grid>
          </Stack>
          <Stack>
            <Title order={screen.SM ? 5 : 6}>Information</Title>
            <SimpleGrid
              cols={2}
              sx={{
                fontSize: mtn.fontSizes.xs,
                [mtn.fn.largerThan('sm')]: {
                  fontSize: mtn.fontSizes.sm,
                },
              }}
              spacing={mtn.spacing.xl}
            >
              <Stack spacing={mtn.spacing.xs}>
                <Text>How To Order</Text>
                <Text>Size Chart</Text>
                <Text>F.A.Q</Text>
                <Text>Term and Conditions</Text>
              </Stack>
              <Stack spacing={mtn.spacing.xs}>
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
        mx={screen.MD ? mtn.spacing.xl * 4 : mtn.spacing.sm}
        height="auto"
        py={mtn.spacing.lg}
        withBorder
        mt={mtn.spacing.md}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: screen.MD ? 'row-reverse' : 'column',
            justifyContent: screen.MD ? 'space-between' : 'center',
            alignItems: 'center',
          }}
        >
          <Group position="center" spacing={mtn.spacing.xl}>
            <IconBrandInstagram size={screen.SM ? 20 : 15} />
            <IconBrandWhatsapp size={screen.SM ? 20 : 15} />
            <IconMail size={screen.SM ? 20 : 15} />
            <IconBrandFacebook size={screen.SM ? 20 : 15} />
          </Group>
          <Space h={screen.MD ? 0 : mtn.spacing.md} />
          <Group position="center" align="center">
            <Text
              sx={{
                fontSize: mtn.fontSizes.xs,
                textAlign: screen.MD ? 'left' : 'center',
                [mtn.fn.largerThan('sm')]: {
                  fontSize: mtn.fontSizes.sm,
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
