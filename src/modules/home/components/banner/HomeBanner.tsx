import {
  Button,
  Container,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';

const HomeBanner = () => {
  const theme = useMantineTheme();
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
        py={theme.spacing.xl * 2}
        mx="sm"
      >
        <Title order={2}>Pelayanan Terbaik dan Produk Berkualitas</Title>
        <Text>
          UB Merchandise & Creative berkomitmen memberikan layanan terbaik
          sesuai kebutuhan Anda. Jangan ragu, kami siap membantu!
        </Text>
        <Button variant="white">Hubungi Kami</Button>
      </Stack>
    </Container>
  );
};

export default HomeBanner;
