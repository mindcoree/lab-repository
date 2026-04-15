import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { ProfileCard } from './src/components/ProfileCard';
import { ContactSection } from './src/components/ContactSection';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <ProfileCard 
          name="Твое Имя" 
          role="Data Engineer" 
          bio="Перехожу из ML в Data Engineering. Учу React Native для универа."
          avatar="https://via.placeholder.com/100"
        />
        <ContactSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
  },
});
