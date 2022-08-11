import {
  Anchor,
  Button,
  Group,
  Header,
  MediaQuery,
  Title,
} from '@mantine/core';
import { IconMenu2 } from '@tabler/icons';
import { ColorSchemeToggle } from '../../../../components/ColorSchemeToggle/ColorSchemeToggle';
import { useMantine } from '../../../../cores/theme/mantine';

const HeaderComp = () => {
  const { mantine: m } = useMantine();

  const data = [
    {
      title: 'Product',
      link: '/products',
    },
    {
      title: 'Service',
      link: '/services',
    },
    {
      title: 'Porfolio',
      link: '/portfolio',
    },
    {
      title: 'How To Order',
      link: '/how-to-order',
    },
    {
      title: 'About',
      link: '/about',
    },
  ];
  return (
    <Header
      height={m.display.SM ? 100 : 70}
      px={
        m.display.MD
          ? m.theme.spacing.xl * 4
          : m.display.SM
          ? m.theme.spacing.xl
          : m.theme.spacing.sm
      }
      withBorder={false}
      sx={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        background:
          m.theme.colorScheme === 'dark'
            ? m.theme.colors.dark[7]
            : m.theme.white,
      }}
    >
      <Group align="center" spacing={m.theme.spacing.sm}>
        <MediaQuery largerThan="lg" styles={{ display: 'none' }}>
          <IconMenu2 />
        </MediaQuery>
        <Title order={3}>20.17</Title>
      </Group>

      <Group
        position="center"
        align="center"
        spacing={m.theme.spacing.xl}
        sx={{
          display: 'none',
          [m.theme.fn.largerThan('lg')]: {
            display: 'flex',
          },
        }}
      >
        {data.map((menu) => (
          <Anchor
            key={menu.title}
            sx={{
              color:
                m.theme.colorScheme === 'dark'
                  ? m.theme.colors.dark[0]
                  : m.theme.black,
            }}
          >
            {menu.title}
          </Anchor>
        ))}
      </Group>
      <Group position="center" spacing={m.theme.spacing.sm}>
        <ColorSchemeToggle />
        <Button
          sx={{
            fontWeight: 600,
            fontSize: m.theme.fontSizes.xs,
            [m.theme.fn.largerThan('sm')]: { fontSize: m.theme.fontSizes.md },
          }}
        >
          Form Order
        </Button>
      </Group>
    </Header>
  );
};

export default HeaderComp;
