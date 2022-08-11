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
  const { mantine: m } = useMantine();

  return (
    <Stack>
      <Container
        mx={m.display.MD ? m.theme.spacing.xl * 4 : m.theme.spacing.xl}
      >
        <SimpleGrid
          breakpoints={[
            { maxWidth: 'md', cols: 1, spacing: m.theme.spacing.xl * 2 },
            { minWidth: 'md', cols: 3, spacing: m.theme.spacing.xl },
          ]}
        >
          <Stack spacing={0} align={m.display.MD ? 'start' : 'center'}>
            <Title order={m.display.SM ? 1 : 2}>20.17</Title>
            <Text sx={{ fontSize: m.theme.fontSizes.sm }}>
              Duapuluh Tujuhbelas
            </Text>
          </Stack>
          <Stack>
            <Title order={m.display.SM ? 5 : 6}>Contact</Title>
            <Grid
              sx={{
                fontSize: m.theme.fontSizes.xs,
                [m.theme.fn.largerThan('sm')]: {
                  fontSize: m.theme.fontSizes.sm,
                },
              }}
            >
              <Grid.Col span={m.display.MD ? 3 : 2}>
                <IconMapPins size={m.display.SM ? 45 : 30} />
              </Grid.Col>
              <Grid.Col span={m.display.MD ? 9 : 10}>
                <Text>Jalan jalan kepasar minggu, Jawa Timur </Text>
              </Grid.Col>
            </Grid>
            <Grid
              gutter={m.theme.spacing.xl}
              sx={{
                fontSize: m.theme.fontSizes.xs,
                [m.theme.fn.largerThan('sm')]: {
                  fontSize: m.theme.fontSizes.sm,
                },
              }}
            >
              <Grid.Col span={m.display.MD ? 3 : 2}>
                <IconPhone size={m.display.SM ? 45 : 30} />
              </Grid.Col>
              <Grid.Col span={m.display.MD ? 9 : 10}>
                <Text>+62 8123 4567 8910</Text>
              </Grid.Col>
            </Grid>
            <Grid
              gutter={m.theme.spacing.xl}
              sx={{
                fontSize: m.theme.fontSizes.xs,
                [m.theme.fn.largerThan('sm')]: {
                  fontSize: m.theme.fontSizes.sm,
                },
              }}
            >
              <Grid.Col span={m.display.MD ? 3 : 2}>
                <IconMail size={m.display.SM ? 45 : 30} />
              </Grid.Col>
              <Grid.Col span={m.display.MD ? 9 : 10}>
                <Text>alamtemail1@mail.com</Text>
                <Text>alamt@mail.com</Text>
                <Text>email1@mail.com</Text>
              </Grid.Col>
            </Grid>
          </Stack>
          <Stack>
            <Title order={m.display.SM ? 5 : 6}>Information</Title>
            <SimpleGrid
              cols={2}
              sx={{
                fontSize: m.theme.fontSizes.xs,
                [m.theme.fn.largerThan('sm')]: {
                  fontSize: m.theme.fontSizes.sm,
                },
              }}
              spacing={m.theme.spacing.xl}
            >
              <Stack spacing={m.theme.spacing.xs}>
                <Text>How To Order</Text>
                <Text>Size Chart</Text>
                <Text>F.A.Q</Text>
                <Text>Term and Conditions</Text>
              </Stack>
              <Stack spacing={m.theme.spacing.xs}>
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
        mx={m.display.MD ? m.theme.spacing.xl * 4 : m.theme.spacing.sm}
        height="auto"
        py={m.theme.spacing.lg}
        withBorder
        mt={m.theme.spacing.md}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: m.display.MD ? 'row-reverse' : 'column',
            justifyContent: m.display.MD ? 'space-between' : 'center',
            alignItems: 'center',
          }}
        >
          <Group position="center" spacing={m.theme.spacing.xl}>
            <IconBrandInstagram size={m.display.SM ? 20 : 15} />
            <IconBrandWhatsapp size={m.display.SM ? 20 : 15} />
            <IconMail size={m.display.SM ? 20 : 15} />
            <IconBrandFacebook size={m.display.SM ? 20 : 15} />
          </Group>
          <Space h={m.display.MD ? 0 : m.theme.spacing.md} />
          <Group position="center" align="center">
            <Text
              sx={{
                fontSize: m.theme.fontSizes.xs,
                textAlign: m.display.MD ? 'left' : 'center',
                [m.theme.fn.largerThan('sm')]: {
                  fontSize: m.theme.fontSizes.sm,
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
