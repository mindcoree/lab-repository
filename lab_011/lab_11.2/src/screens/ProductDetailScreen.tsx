import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Platform, TouchableOpacity, Alert } from 'react-native';

export function ProductDetailScreen({ route }: any) {
  const { product } = route.params;
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (isAdded) {
      return;
    }

    setIsAdded(true);
    Alert.alert('Added to cart', `${product.name} has been added to your cart.`);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={{ marginVertical: 10, color: '#888' }}>OS: {Platform.OS}</Text>
        
        <TouchableOpacity
          style={[styles.addButton, isAdded && styles.addButtonAdded]}
          onPress={handleAddToCart}
          disabled={isAdded}
          activeOpacity={0.85}
        >
          <Text style={styles.addButtonText}>{isAdded ? 'Added to Cart' : 'Add to Cart'}</Text>
        </TouchableOpacity>

        {isAdded && <Text style={styles.successText}>The product was added to your cart.</Text>}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 300 },
  content: { padding: 20 },
  name: { fontSize: 24, fontWeight: 'bold' },
  price: { fontSize: 20, color: '#0066cc', marginVertical: 10 },
  description: { fontSize: 16, lineHeight: 24 },
  addButton: {
    backgroundColor: '#0066cc',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3 },
      android: { elevation: 5 }
    })
  },
  addButtonAdded: {
    backgroundColor: '#2a8f3d'
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  successText: {
    marginTop: 12,
    color: '#2a8f3d',
    fontWeight: '600'
  }
});