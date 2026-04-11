import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppTheme } from '../theme/ThemeContext';

type ProfileScreenProps = {
  route: {
    params?: {
      userId?: string;
    };
  };
  navigation: {
    goBack: () => void;
    navigate: (screen: string) => void;
  };
};

export default function ProfileScreen({ route, navigation }: ProfileScreenProps) {
  const { theme } = useAppTheme();
  const styles = createStyles(theme.colors);
  const userId = route.params?.userId ?? 'Me';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>T</Text>
        </View>
        <Text style={styles.title}>User ID: {userId}</Text>
        <Text style={styles.description}>This screen is part of the tab + stack setup.</Text>

        <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.linkButtonText}>Open Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton} onPress={() => navigation.goBack()}>
          <Text style={styles.linkButtonText}>Go Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function createStyles(colors: {
  background: string;
  primary: string;
  text: string;
  mutedText: string;
}) {
  return StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    content: { alignItems: 'center', padding: 40 },
    avatarCircle: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    avatarText: { color: '#fff', fontSize: 40, fontWeight: 'bold' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, color: colors.text },
    description: { textAlign: 'center', color: colors.mutedText, marginBottom: 24 },
    linkButton: { paddingVertical: 10 },
    linkButtonText: { color: colors.primary, fontWeight: '700' },
  });
}
