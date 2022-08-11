import {
  Container,
  Footer,
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

  const theme = useMantineTheme();
  return (
    <Stack>
      <Container mx="xl">
        <Stack>
          <Stack align="center" justify="center" spacing={0} mb="xl">
            <Title order={largerThanXs ? 1 : 2}>20.17</Title>
            <Text sx={{ fontSize: theme.fontSizes.sm }}>
              Duapuluh Tujuhbelas
            </Text>
          </Stack>
          <Title order={largerThanXs ? 5 : 6}>Contact</Title>
          <Group
            sx={{
              fontSize: theme.fontSizes.xs,
              [theme.fn.largerThan('xs')]: {
                fontSize: theme.fontSizes.sm,
              },
            }}
          >
            <IconMapPins size={largerThanXs ? 45 : 30} />
            <Text>Jalan jalan kepasar minggu, Jawa Timur </Text>
          </Group>
          <Group
            sx={{
              fontSize: theme.fontSizes.xs,
              [theme.fn.largerThan('xs')]: {
                fontSize: theme.fontSizes.sm,
              },
            }}
          >
            <IconPhone size={largerThanXs ? 45 : 30} />
            <Text>+62 8123 4567 8901</Text>
          </Group>
          <Group
            sx={{
              fontSize: theme.fontSizes.xs,
              [theme.fn.largerThan('xs')]: {
                fontSize: theme.fontSizes.sm,
              },
            }}
          >
            <IconMail size={largerThanXs ? 45 : 30} />
            <Text>alamatemail@mail.com</Text>
          </Group>
          <Space h="xl" />
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
          <Space h="md" />
          <Group position="center" spacing="xl">
            <IconBrandInstagram size={largerThanXs ? 20 : 15} />
            <IconBrandWhatsapp size={largerThanXs ? 20 : 15} />
            <IconMail size={largerThanXs ? 20 : 15} />
            <IconBrandFacebook size={largerThanXs ? 20 : 15} />
          </Group>
        </Stack>
      </Container>
      <Footer mx="sm" height="auto" py="lg" withBorder mt="mt">
        <Group position="center" align="center">
          <Text
            sx={{
              fontSize: theme.fontSizes.xs,
              textAlign: 'center',
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
      </Footer>
    </Stack>
  );
};

export default FooterComp;
