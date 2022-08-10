import { Footer, Group, Stack, Text } from '@mantine/core';

const FooterComp = () => {
  return (
    <Stack>
      <Footer mx="sm" height="auto" py="lg" withBorder>
        <Group position="center" align="center">
          <Text>&copy; ndsanja 2022</Text>
        </Group>
      </Footer>
    </Stack>
  );
};

export default FooterComp;
