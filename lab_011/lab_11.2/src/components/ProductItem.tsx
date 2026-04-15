import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Product } from '../data/products';

interface ProductItemProps {
  product: Product;
  onPress: (product: Product) => void;
}

export function ProductItem({ product, onPress }: ProductItemProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(product)}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 12, padding: 12, marginHorizontal: 16, marginVertical: 6, elevation: 2 },
  image: { width: 80, height: 80, borderRadius: 8 },
  info: { flex: 1, marginLeft: 12, justifyContent: 'center' },
  name: { fontSize: 16, fontWeight: 'bold' },
  category: { fontSize: 12, color: '#0066cc' },
  price: { fontSize: 18, fontWeight: 'bold', marginTop: 4 },
});