import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Создаем стеки для каждой вкладки
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#0066cc' }, headerTintColor: '#fff' }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#0066cc' }, headerTintColor: '#fff' }}>
      <Stack.Screen name="ProfileMain" component={ProfileScreen} initialParams={{ userId: 'Me' }} options={{ title: 'Profile' }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
    </Stack.Navigator>
  );
}

// Компонент иконки с бейджем (для уведомлений)
function TabIcon({ name, color, size, badge }: any) {
  return (
    <View style={styles.tabIconContainer}>
      <Ionicons name={name} size={size} color={color} />
      {badge > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      )}
    </View>
  );
}

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#0066cc',
        tabBarInactiveTintColor: '#999',
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStack} 
        options={{ tabBarIcon: ({ color, size }) => <TabIcon name="home" color={color} size={size} /> }} 
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{ tabBarIcon: ({ color, size }) => <TabIcon name="search" color={color} size={size} /> }} 
      />
      <Tab.Screen 
        name="Notifications" 
        component={NotificationsScreen} 
        options={{ tabBarIcon: ({ color, size }) => <TabIcon name="notifications" color={color} size={size} badge={2} /> }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileStack} 
        options={{ tabBarIcon: ({ color, size }) => <TabIcon name="person" color={color} size={size} /> }} 
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: { position: 'relative' },
  badge: { position: 'absolute', top: -4, right: -8, backgroundColor: '#dc3545', borderRadius: 10, minWidth: 18, height: 18, justifyContent: 'center', alignItems: 'center' },
  badgeText: { color: '#fff', fontSize: 10, fontWeight: 'bold' }
});
