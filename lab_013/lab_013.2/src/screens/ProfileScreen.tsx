import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { alignItems: 'center', padding: 40 },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#0066cc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarText: { color: '#fff', fontSize: 40, fontWeight: 'bold' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  description: { textAlign: 'center', color: '#666', marginBottom: 24 },
  linkButton: { paddingVertical: 10 },
  linkButtonText: { color: '#0066cc', fontWeight: '700' },
});
