import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useAppTheme } from '../theme/ThemeContext';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const { theme } = useAppTheme();
  const styles = createStyles(theme.colors);
  const userName = 'Timur Medihanov';
  const unreadNotifications = 5;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.userName}>{userName}</Text>
        </View>

        <View style={styles.statsSection}>
          <TouchableOpacity 
            style={styles.statCard} 
            onPress={() => navigation.navigate('Profile', { userId: 'ID-777' })}
          >
            <Text style={styles.statValue}>42</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </TouchableOpacity>
          {/* Другие карточки статов аналогично */}
        </View>

        <View style={styles.actionsSection}>
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Profile', { userId: 'ID-777' })}
          >
            <Text style={styles.primaryButtonText}>View Profile</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('Settings')}
          >
            <Text style={styles.secondaryButtonText}>Settings</Text>
          </TouchableOpacity>
        </View>
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
  border: string;
  headerTint: string;
}) {
  return StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    content: { flex: 1, padding: 20 },
    welcomeSection: { marginBottom: 30 },
    welcomeText: { fontSize: 16, color: colors.mutedText },
    userName: { fontSize: 28, fontWeight: 'bold', color: colors.text },
    statsSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 30,
    },
    statCard: {
      flex: 1,
      backgroundColor: colors.surface,
      borderRadius: 12,
      padding: 16,
      marginHorizontal: 6,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.border,
      elevation: 3,
    },
    statValue: { fontSize: 24, fontWeight: 'bold', color: colors.primary },
    statLabel: { fontSize: 12, color: colors.mutedText },
    actionsSection: { gap: 12 },
    primaryButton: {
      backgroundColor: colors.primary,
      borderRadius: 8,
      padding: 16,
      alignItems: 'center',
    },
    primaryButtonText: {
      color: colors.headerTint,
      fontSize: 16,
      fontWeight: '600',
    },
    secondaryButton: {
      borderWidth: 1,
      borderColor: colors.primary,
      borderRadius: 8,
      padding: 16,
      alignItems: 'center',
      backgroundColor: colors.surface,
    },
    secondaryButtonText: {
      color: colors.primary,
      fontSize: 16,
      fontWeight: '600',
    },
  });
}
