import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { useAppTheme } from '../theme/ThemeContext';

import {
  HomeScreen,
  SearchScreen,
  NotificationsScreen,
  ProfileScreen,
  SettingsScreen,
} from '../screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Создаем стеки для каждой вкладки
function HomeStack() {
  const { theme } = useAppTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.headerBackground },
        headerTintColor: theme.colors.headerTint,
      }}
    >
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  const { theme } = useAppTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.headerBackground },
        headerTintColor: theme.colors.headerTint,
      }}
    >
      <Stack.Screen name="ProfileMain" component={ProfileScreen} initialParams={{ userId: 'Me' }} options={{ title: 'Profile' }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
    </Stack.Navigator>
  );
}

// Компонент иконки с бейджем (для уведомлений)
type TabIconProps = {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
  size: number;
  badge?: number;
};

function TabIcon({ name, color, size, badge = 0 }: TabIconProps) {
  const { theme } = useAppTheme();

  return (
    <View style={styles.tabIconContainer}>
      <Ionicons name={name} size={size} color={color} />
      {badge > 0 && (
        <View style={[styles.badge, { backgroundColor: theme.colors.notificationBadge }]}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      )}
    </View>
  );
}

export default function AppNavigator() {
  const { theme } = useAppTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.tabInactive,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
        },
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
