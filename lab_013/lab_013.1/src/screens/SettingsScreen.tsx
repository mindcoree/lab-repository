import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, SafeAreaView } from 'react-native';
import { useAppTheme } from '../theme/ThemeContext';

export default function SettingsScreen() {
  const { theme, setIsDarkMode } = useAppTheme();
  const [areNotificationsEnabled, setAreNotificationsEnabled] = useState(true);
  const styles = createStyles(theme.colors);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch value={theme.isDarkMode} onValueChange={setIsDarkMode} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Notifications</Text>
        <Switch
          value={areNotificationsEnabled}
          onValueChange={setAreNotificationsEnabled}
        />
      </View>
    </SafeAreaView>
  );
}

function createStyles(colors: {
  background: string;
  text: string;
  border: string;
}) {
  return StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: colors.background },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    label: { fontSize: 16, color: colors.text },
  });
}
