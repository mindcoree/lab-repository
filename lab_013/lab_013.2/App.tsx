import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider, useAppTheme } from './src/theme/ThemeContext';

function AppRoot() {
  const { theme } = useAppTheme();

  const navigationTheme = {
    ...DefaultTheme,
    dark: theme.isDarkMode,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.background,
      card: theme.colors.headerBackground,
      text: theme.colors.text,
      border: theme.colors.border,
      primary: theme.colors.primary,
      notification: theme.colors.notificationBadge,
    },
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar style={theme.isDarkMode ? 'light' : 'dark'} />
      <AppNavigator />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppRoot />
    </ThemeProvider>
  );
}
