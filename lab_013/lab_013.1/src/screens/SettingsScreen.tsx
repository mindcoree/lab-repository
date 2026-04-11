import React from 'react';
import { View, Text, StyleSheet, Switch, SafeAreaView } from 'react-native';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch value={false} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Notifications</Text>
        <Switch value={true} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
  label: { fontSize: 16 }
});
