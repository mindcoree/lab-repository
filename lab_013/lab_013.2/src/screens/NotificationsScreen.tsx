import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, RefreshControl } from 'react-native';
import { useAppTheme } from '../theme/ThemeContext';

export default function NotificationsScreen() {
  const { theme } = useAppTheme();
  const styles = createStyles(theme.colors);
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

function createStyles(colors: {
  background: string;
  surface: string;
  text: string;
  border: string;
  mutedText: string;
  primary: string;
  unreadBackground: string;
}) {
  return StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    header: {
      padding: 16,
      backgroundColor: colors.surface,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    headerTitle: { fontSize: 20, fontWeight: 'bold', color: colors.text },
    notificationItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      backgroundColor: colors.surface,
      borderBottomColor: colors.border,
      borderBottomWidth: 1,
    },
    unreadItem: { backgroundColor: colors.unreadBackground },
    avatar: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatarText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
    content: { flex: 1, marginLeft: 12 },
    userName: { fontWeight: 'bold', color: colors.text },
    unreadDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: colors.primary },
  });
}
