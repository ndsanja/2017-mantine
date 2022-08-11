import { Anchor, Group } from '@mantine/core';
import { useMantine } from '../../../../cores/theme/mantine';

const MenuComp = () => {
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
    <Group
      position="center"
      align="center"
      spacing={m.theme.spacing.xl}
      sx={{
        [m.theme.fn.smallerThan('lg')]: {
          display: 'none',
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
  );
};

export default MenuComp;
