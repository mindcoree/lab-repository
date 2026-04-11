import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppTheme } from '../theme/ThemeContext';

type HomeScreenProps = {
  navigation: {
    navigate: (screen: string, params?: { userId: string }) => void;
  };
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const { theme } = useAppTheme();
  const styles = createStyles(theme.colors);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>Welcome to the tab navigation lab.</Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Profile', { userId: 'ID-777' })}
        >
          <Text style={styles.primaryButtonText}>Open Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.secondaryButtonText}>Open Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function createStyles(colors: {
  background: string;
  surface: string;
  text: string;
  mutedText: string;
  primary: string;
}) {
  return StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    content: { flex: 1, padding: 20, justifyContent: 'center', gap: 12 },
    title: { fontSize: 28, fontWeight: '700', color: colors.text },
    subtitle: { fontSize: 16, color: colors.mutedText, marginBottom: 12 },
    primaryButton: {
      backgroundColor: colors.primary,
      borderRadius: 10,
      padding: 14,
      alignItems: 'center',
    },
    primaryButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
    secondaryButton: {
      borderWidth: 1,
      borderColor: colors.primary,
      borderRadius: 10,
      padding: 14,
      alignItems: 'center',
      backgroundColor: colors.surface,
    },
    secondaryButtonText: { color: colors.primary, fontSize: 16, fontWeight: '600' },
  });
}
