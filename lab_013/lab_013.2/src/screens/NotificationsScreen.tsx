import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationsScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: '1', user: 'Jane Smith', message: 'liked your post', read: false },
    { id: '2', user: 'Mike Johnson', message: 'commented on your post', read: true },
  ]);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.notificationItem, !item.read && styles.unreadItem]}>
            <View style={styles.avatar}><Text style={styles.avatarText}>{item.user[0]}</Text></View>
            <View style={styles.content}>
              <Text><Text style={styles.userName}>{item.user}</Text> {item.message}</Text>
            </View>
            {!item.read && <View style={styles.unreadDot} />}
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { padding: 16, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#e0e0e0' },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  notificationItem: { flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#fff', borderBottomColor: '#f0f0f0', borderBottomWidth: 1 },
  unreadItem: { backgroundColor: '#f0f8ff' },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#0066cc', justifyContent: 'center', alignItems: 'center' },
  avatarText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  content: { flex: 1, marginLeft: 12 },
  userName: { fontWeight: 'bold' },
  unreadDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#0066cc' }
});
