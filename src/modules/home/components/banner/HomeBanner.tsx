import {
  Button,
  Container,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
const HomeBanner = () => {
  const theme = useMantineTheme();
  const largerThanXs = useMediaQuery('(min-width: 577px)', false);

  return (
    <Container
      fluid
      sx={{
        background: theme.fn.primaryColor(),
        textAlign: 'center',
        color: theme.white,
      }}
    >
      <Stack
        align="center"
        justify="center"
        spacing="xl"
        py={
          theme.fn.largerThan('xs')
            ? theme.spacing.xl * 3.5
            : theme.spacing.xl * 2
        }
        mx={largerThanXs ? 'xl' : 'sm'}
      >
        <Title order={largerThanXs ? 1 : 3}>
          Pelayanan Terbaik dan Produk Berkualitas
        </Title>
        <Text
          sx={{
            fontSize: theme.fontSizes.xs,
            [theme.fn.largerThan('xs')]: { fontSize: theme.fontSizes.md },
          }}
        >
          UB Merchandise & Creative berkomitmen memberikan layanan terbaik
          sesuai kebutuhan Anda. Jangan ragu, kami siap membantu!
        </Text>
        <Button variant="white">Hubungi Kami</Button>
      </Stack>
    </Container>
  );
};

export default HomeBanner;
