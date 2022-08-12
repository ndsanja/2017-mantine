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
  const { mantine } = useMantine();
  const mtn = mantine.theme;
  const screen = mantine.display;

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
      height={screen.SM ? 100 : 70}
      px={
        screen.MD
          ? mtn.spacing.xl * 4
          : screen.SM
          ? mtn.spacing.xl
          : mtn.spacing.sm
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
        background: mtn.colorScheme === 'dark' ? mtn.colors.dark[7] : mtn.white,
      }}
    >
      <Group align="center" spacing={mtn.spacing.sm}>
        <MediaQuery largerThan="lg" styles={{ display: 'none' }}>
          <IconMenu2 />
        </MediaQuery>
        <Title order={3}>20.17</Title>
      </Group>

      <Group
        position="center"
        align="center"
        spacing={mtn.spacing.xl}
        sx={{
          display: 'none',
          [mtn.fn.largerThan('lg')]: {
            display: 'flex',
          },
        }}
      >
        {data.map((menu) => (
          <Anchor
            key={menu.title}
            sx={{
              color:
                mtn.colorScheme === 'dark' ? mtn.colors.dark[0] : mtn.black,
            }}
          >
            {menu.title}
          </Anchor>
        ))}
      </Group>
      <Group position="center" spacing={mtn.spacing.sm}>
        <ColorSchemeToggle />
        <Button
          sx={{
            fontWeight: 600,
            fontSize: mtn.fontSizes.xs,
            [mtn.fn.largerThan('sm')]: { fontSize: mtn.fontSizes.md },
          }}
        >
          Form Order
        </Button>
      </Group>
    </Header>
  );
};

export default HeaderComp;
