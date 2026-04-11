import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAppTheme } from '../theme/ThemeContext';

interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  type: 'user' | 'post' | 'hashtag';
}

export default function SearchScreen() {
  const { theme } = useAppTheme();
  const styles = createStyles(theme.colors);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [recentSearches] = useState<string[]>(['React Native', 'TypeScript', 'Mobile Development']);

  const mockResults: SearchResult[] = [
    { id: '1', title: 'reactnative', subtitle: '1.2K posts', type: 'hashtag' },
    { id: '2', title: 'John Developer', subtitle: '@johndev', type: 'user' },
    { id: '3', title: 'TypeScript Tips', subtitle: '150 posts', type: 'post' },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const filtered = mockResults.filter(
        (item) => item.title.toLowerCase().includes(query.toLowerCase()) || item.subtitle.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
      </View>

      {searchQuery.length === 0 ? (
        <View style={styles.recentContainer}>
          <Text style={styles.recentTitle}>Recent Searches</Text>
          {recentSearches.map((search, index) => (
            <TouchableOpacity key={index} style={styles.recentItem} onPress={() => handleSearch(search)}>
              <Ionicons name="time-outline" size={16} color="#999" />
              <Text style={styles.recentText}>{search}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.resultItem}>
              <Text style={styles.resultTitle}>{item.title}</Text>
              <Text style={styles.resultSubtitle}>{item.subtitle}</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

function createStyles(colors: {
  background: string;
  surface: string;
  text: string;
  mutedText: string;
  primary: string;
  border: string;
}) {
  return StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    searchContainer: { backgroundColor: colors.primary, padding: 16 },
    searchInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.surface,
      borderRadius: 10,
      paddingHorizontal: 12,
      height: 44,
    },
    searchInput: { flex: 1, marginLeft: 8, fontSize: 16, color: colors.text },
    recentContainer: { padding: 16 },
    recentTitle: { fontSize: 14, fontWeight: '600', color: colors.mutedText, marginBottom: 12 },
    recentItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    recentText: { marginLeft: 12, fontSize: 16, color: colors.text },
    resultItem: {
      padding: 16,
      backgroundColor: colors.surface,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    resultTitle: { fontSize: 16, fontWeight: '500', color: colors.text },
    resultSubtitle: { fontSize: 14, color: colors.mutedText },
  });
}
