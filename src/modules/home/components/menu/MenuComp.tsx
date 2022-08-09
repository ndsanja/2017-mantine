import { Anchor, Group, useMantineTheme } from '@mantine/core';

const MenuComp = () => {
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
    <Group
      position="center"
      align="center"
      spacing="xl"
      sx={{
        [theme.fn.smallerThan('sm')]: {
          display: 'none',
        },
      }}
    >
      {data.map((menu) => (
        <Anchor
          key={menu.title}
          sx={{
            color:
              theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          }}
        >
          {menu.title}
        </Anchor>
      ))}
    </Group>
  );
};

export default MenuComp;
