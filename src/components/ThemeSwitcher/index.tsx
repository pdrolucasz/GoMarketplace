import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { Container, Button } from './styles';

import { useTheme } from '../../hooks/theme';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <Button onPress={toggleTheme}>
        <Icon
          name={theme.title === 'light' ? 'sun' : 'moon'}
          size={30}
          color="#e83f5b"
        />
      </Button>
    </Container>
  );
};

export default ThemeSwitcher;
