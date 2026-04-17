import React, { useState } from 'react';
import { Text, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ResponsiveHeader } from './src/components/ResponsiveHeader';
import { AdaptiveLayout, FeatureCard, StatsRow, ResponsiveImage } from './src/components/AdaptiveLayout';
import { GridLayout, Card } from './src/components/GridLayout';

export default function App() {
  // 1. Создаем состояние для отслеживания количества кликов
  const [interactions, setInteractions] = useState(0);

  // 2. Функции-обработчики нажатий
  const handleMenuPress = () => {
    Alert.alert('Меню', 'Открываем боковое меню...');
  };

  const handleSettingsPress = () => {
    Alert.alert('Настройки', 'Переход в настройки приложения.');
  };

  const handleFeaturePress = (featureName: string) => {
    const newCount = interactions + 1;
    setInteractions(newCount);
    Alert.alert(
      'Успех!', 
      `Вы нажали на карточку "${featureName}".\nОбщее число взаимодействий: ${newCount}`
    );
  };

  // Динамические данные для статистики
  const stats = [
    { label: 'Users', value: '10K+' },
    { label: 'Clicks', value: interactions.toString() }, // Значение меняется при кликах
    { label: 'Rating', value: '4.9' },
  ];

  return (
    <SafeAreaProvider>
      <ResponsiveHeader 
        title="My Dashboard" 
        // Добавляем реальные действия в шапку
        leftAction={{ icon: '☰', onPress: handleMenuPress }} 
        rightAction={{ icon: '⚙️', onPress: handleSettingsPress }}
      />
      <AdaptiveLayout
        content={
          <>
            <StatsRow stats={stats} />
            
            <TouchableOpacity onPress={() => Alert.alert('Картинка', 'Тут может быть зум или смена фото')}>
              <ResponsiveImage />
            </TouchableOpacity>

            <GridLayout columns={2}>
              {/* Оборачиваем карточки в TouchableOpacity, чтобы они реагировали на клик */}
              <TouchableOpacity activeOpacity={0.7} onPress={() => handleFeaturePress('Fast')}>
                <FeatureCard 
                  icon="🚀" 
                  title="Fast" 
                  description="Built for speed and performance." 
                  variant="secondary" 
                />
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.7} onPress={() => handleFeaturePress('Secure')}>
                <FeatureCard 
                  icon="🛡️" 
                  title="Secure" 
                  description="Your data is safe with us." 
                  variant="accent" 
                />
              </TouchableOpacity>
            </GridLayout>

            <TouchableOpacity activeOpacity={0.8} onPress={() => Alert.alert('Активность', 'Загрузка новых данных...')}>
              <Card title="Recent Activity" subtitle="Click to refresh">
                <Text style={styles.activityText}>User John logged in.</Text>
                <Text style={styles.interactionText}>Ваши клики за сессию: {interactions}</Text>
              </Card>
            </TouchableOpacity>
          </>
        }
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  activityText: {
    fontSize: 14,
    color: '#444',
  },
  interactionText: {
    fontSize: 14,
    color: '#0066cc',
    marginTop: 8,
    fontWeight: 'bold',
  }
});