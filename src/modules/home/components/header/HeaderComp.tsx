import {
  Anchor,
  Button,
  Group,
  Header,
  MediaQuery,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { IconMenu, IconMenu2 } from '@tabler/icons';
import { ColorSchemeToggle } from '../../../../components/ColorSchemeToggle/ColorSchemeToggle';

const HeaderComp = () => {
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
  const theme = useMantineTheme();
  return (
    <Header
      height={70}
      px="sm"
      withBorder={false}
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: theme.breakpoints.xl,
        background:
          theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      }}
    >
      <Group align="center" spacing="sm">
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <IconMenu2 />
        </MediaQuery>
        <Title order={3}>20.17</Title>
      </Group>

      <Group
        position="center"
        align="center"
        spacing="xl"
        sx={{
          display: 'none',
          [theme.fn.largerThan('md')]: {
            display: 'flex',
          },
        }}
      >
        {data.map((menu) => (
          <Anchor
            key={menu.title}
            sx={{
              color:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[0]
                  : theme.black,
            }}
          >
            {menu.title}
          </Anchor>
        ))}
      </Group>
      <Group position="center" spacing="sm">
        <ColorSchemeToggle />
        <Button>Order</Button>
      </Group>
    </Header>
  );
};

export default HeaderComp;
