import { Button } from '@mantine/core';
import { ColorSchemeToggle } from '../../../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../../../components/Welcome/Welcome';

const HomeView = () => {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Button>Primay Color</Button>
    </>
  );
};

export default HomeView;
