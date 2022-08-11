import {
  Anchor,
  Button,
  Group,
  Header,
  MediaQuery,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconMenu, IconMenu2 } from '@tabler/icons';
import { ColorSchemeToggle } from '../../../../components/ColorSchemeToggle/ColorSchemeToggle';

const HeaderComp = () => {
  const largerThanXs = useMediaQuery('(min-width: 576px)', false);
  const largerThanSm = useMediaQuery('(min-width: 768px)', false);
  const theme = useMantineTheme();

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
      height={largerThanXs ? 100 : 70}
      px={largerThanSm ? theme.spacing.xl * 4 : largerThanXs ? 'xl' : 'sm'}
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
        <Button
          sx={{
            fontWeight: 600,
            fontSize: theme.fontSizes.xs,
            [theme.fn.largerThan('xs')]: { fontSize: theme.fontSizes.md },
          }}
        >
          Form Order
        </Button>
      </Group>
    </Header>
  );
};

export default HeaderComp;
