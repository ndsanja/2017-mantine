import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    color:
      theme.colorScheme === 'dark'
        ? theme.fn.primaryColor()
        : theme.fn.primaryColor(),
    fontSize: 100,
    fontWeight: 900,
    letterSpacing: -2,

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },
}));
