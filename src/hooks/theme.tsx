import React, {
  useState,
  useCallback,
  useContext,
  createContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import { DefaultTheme } from 'styled-components';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

interface ThemeContext {
  toggleTheme(): void;
  theme: DefaultTheme;
}

const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const storagedTheme = await AsyncStorage.getItem('@GoMarketPlace:theme');

      if (storagedTheme) {
        setTheme(JSON.parse(storagedTheme));
      }
    }

    loadProducts();
  }, []);

  const toggleTheme = useCallback(async () => {
    const themeUsed = theme.title === 'light' ? dark : light;

    setTheme(themeUsed);

    await AsyncStorage.setItem(
      '@GoMarketPlace:theme',
      JSON.stringify(themeUsed),
    );
  }, [theme.title]);

  const value = React.useMemo(() => ({ theme, toggleTheme }), [
    theme,
    toggleTheme,
  ]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContext {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}
