import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ResponsiveHeader } from './src/components/ResponsiveHeader';
import { AdaptiveLayout, FeatureCard, StatsRow, ResponsiveImage } from './src/components/AdaptiveLayout';
import { GridLayout, Card } from './src/components/GridLayout';
import { Text } from 'react-native';

export default function App() {
  const stats = [
    { label: 'Users', value: '10K+' },
    { label: 'Downloads', value: '50K' },
    { label: 'Rating', value: '4.9' },
  ];

  return (
    <SafeAreaProvider>
      <ResponsiveHeader title="My Dashboard" leftAction={{ icon: '☰', onPress: () => {} }} />
      <AdaptiveLayout
        content={
          <>
            <StatsRow stats={stats} />
            <ResponsiveImage />
            <GridLayout columns={2}>
              <FeatureCard icon="🚀" title="Fast" description="Built for speed and performance." variant="secondary" />
              <FeatureCard icon="🛡️" title="Secure" description="Your data is safe with us." variant="accent" />
            </GridLayout>
            <Card title="Recent Activity" subtitle="Last 24 hours">
              <Text>User John logged in.</Text>
            </Card>
          </>
        }
      />
    </SafeAreaProvider>
  );
}