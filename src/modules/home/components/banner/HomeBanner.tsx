import { Button, Container, Stack, Text, Title } from '@mantine/core';
import { useMantine } from '../../../../cores/theme/mantine';
const HomeBanner = () => {
  const { mantine: m } = useMantine();

  return (
    <Container
      fluid
      sx={{
        background: m.theme.fn.primaryColor(),
        textAlign: 'center',
        color: m.theme.white,
      }}
    >
      <Stack
        align="center"
        justify="center"
        spacing={m.display.MD ? m.theme.spacing.xl * 2 : m.theme.spacing.xl}
        py={
          m.theme.fn.largerThan('xs')
            ? m.theme.spacing.xl * 3.5
            : m.theme.spacing.xl * 2
        }
        mx={
          m.display.MD
            ? m.theme.spacing.xl * 4
            : m.display.SM
            ? m.theme.spacing.xl
            : m.theme.spacing.sm
        }
      >
        <Title order={m.display.SM ? 1 : 3}>
          Pelayanan Terbaik dan Produk Berkualitas
        </Title>
        <Text
          sx={{
            fontSize: m.theme.fontSizes.xs,
            [m.theme.fn.largerThan('sm')]: { fontSize: m.theme.fontSizes.md },
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
