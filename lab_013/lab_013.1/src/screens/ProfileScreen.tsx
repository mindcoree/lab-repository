import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen({ route, navigation }: ProfileProps) {
  const { userId } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>T</Text>
        </View>
        <Text style={styles.title}>User ID: {userId}</Text>
        <Text style={styles.description}>
          This data was passed from the Home screen using Route Parameters.
        </Text>
        
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { alignItems: 'center', padding: 40 },
  avatarCircle: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#0066cc', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  avatarText: { color: '#fff', fontSize: 40, fontWeight: 'bold' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  description: { textAlign: 'center', color: '#666', marginBottom: 30 },
  backButton: { padding: 10 },
  backButtonText: { color: '#0066cc', fontWeight: 'bold' }
});
