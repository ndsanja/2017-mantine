import { Button, Container, Stack, Text, Title } from '@mantine/core';
import { useMantine } from '../../../../cores/theme/mantine';
const HomeBanner = () => {
  const { mantine } = useMantine();
  const mtn = mantine.theme;
  const screen = mantine.display;

  return (
    <Container
      fluid
      sx={{
        background: mtn.fn.primaryColor(),
        textAlign: 'center',
        color: mtn.white,
      }}
    >
      <Stack
        align="center"
        justify="center"
        spacing={screen.MD ? mtn.spacing.xl * 2 : mtn.spacing.xl}
        py={mtn.fn.largerThan('xs') ? mtn.spacing.xl * 3.5 : mtn.spacing.xl * 2}
        mx={
          screen.MD
            ? mtn.spacing.xl * 4
            : screen.SM
            ? mtn.spacing.xl
            : mtn.spacing.sm
        }
      >
        <Title order={screen.SM ? 1 : 3}>
          Pelayanan Terbaik dan Produk Berkualitas
        </Title>
        <Text
          sx={{
            fontSize: mtn.fontSizes.xs,
            [mtn.fn.largerThan('sm')]: { fontSize: mtn.fontSizes.md },
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
