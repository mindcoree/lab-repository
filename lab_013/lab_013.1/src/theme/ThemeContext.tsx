import React, { createContext, useContext, useMemo, useState } from 'react';

type ThemeColors = {
  background: string;
  surface: string;
  text: string;
  mutedText: string;
  primary: string;
  border: string;
  headerBackground: string;
  headerTint: string;
};

type AppTheme = {
  isDarkMode: boolean;
  colors: ThemeColors;
};

type ThemeContextValue = {
  theme: AppTheme;
  setIsDarkMode: (value: boolean) => void;
};

const lightColors: ThemeColors = {
  background: '#f5f5f5',
  surface: '#ffffff',
  text: '#222222',
  mutedText: '#666666',
  primary: '#0066cc',
  border: '#e5e5e5',
  headerBackground: '#0066cc',
  headerTint: '#ffffff',
};

const darkColors: ThemeColors = {
  background: '#111827',
  surface: '#1f2937',
  text: '#f9fafb',
  mutedText: '#9ca3af',
  primary: '#60a5fa',
  border: '#374151',
  headerBackground: '#0f172a',
  headerTint: '#f9fafb',
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const value = useMemo<ThemeContextValue>(() => {
    return {
      theme: {
        isDarkMode,
        colors: isDarkMode ? darkColors : lightColors,
      },
      setIsDarkMode,
    };
  }, [isDarkMode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useAppTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useAppTheme must be used within ThemeProvider');
  }

  return context;
}
