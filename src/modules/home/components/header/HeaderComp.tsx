import {
  Anchor,
  Button,
  Group,
  Header,
  Title,
  useMantineTheme,
} from '@mantine/core';
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
      px="xl"
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
        [theme.fn.smallerThan('xs')]: {
          display: 'none',
        },
      }}
    >
      <Title order={3}>20.17</Title>
      <Group position="center" align="center" spacing="xl">
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
      <Group position="center" spacing="xl">
        <ColorSchemeToggle />
        <Button>Order</Button>
      </Group>
    </Header>
  );
};

export default HeaderComp;
