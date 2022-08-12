import { Anchor, Group } from '@mantine/core';
import { useMantine } from '../../../../cores/theme/mantine';

const MenuComp = () => {
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
    <Group
      position="center"
      align="center"
      spacing={mtn.spacing.xl}
      sx={{
        [mtn.fn.smallerThan('lg')]: {
          display: 'none',
        },
      }}
    >
      {data.map((menu) => (
        <Anchor
          key={menu.title}
          sx={{
            color: mtn.colorScheme === 'dark' ? mtn.colors.dark[0] : mtn.black,
          }}
        >
          {menu.title}
        </Anchor>
      ))}
    </Group>
  );
};

export default MenuComp;
