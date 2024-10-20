// src/screens/screen2.js
import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const productsData = {
  smartphone: [
    { name: 'Smartphone 1', price: 899, rating: 4, image: require('../assets/Data/1.png') },
    { name: 'Smartphone 2', price: 899, rating: 4, image: require('../assets/Data/2.png') },
    { name: 'Smartphone 3', price: 789, rating: 3, image: require('../assets/Data/3.png') },
    { name: 'Smartphone 4', price: 999, rating: 4, image: require('../assets/Data/4.png') },
  ],
  ipad: [
    { name: 'iPad 1', price: 799, rating: 4.5, image: require('../assets/Data/ipad.png') },
    { name: 'iPad 2', price: 899, rating: 4.7, image: require('../assets/Data/ipad.png') },
  ],
  macbook: [
    { name: 'MacBook 1', price: 1200, rating: 4.9, image: require('../assets/Data/macbook.png') },
    { name: 'MacBook 2', price: 1500, rating: 4.8, image: require('../assets/Data/macbook.png') },
  ],
};

const Screen2 = () => {
  const [category, setCategory] = useState('smartphone');
  const filteredProducts = productsData[category];

  return (
    <View style={styles.container}>
      {/* Header and search bar */}
      <View style={styles.header}>
        <Text style={styles.title}>Electronics</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
        />
        
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        <TouchableOpacity onPress={() => setCategory('smartphone')}>
          <View style={[styles.categoryItem, category === 'smartphone' && styles.selectedCategory]}>
            <Image source={require('../assets/Data/smart.png')} style={styles.categoryIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory('ipad')}>
          <View style={[styles.categoryItem, category === 'ipad' && styles.selectedCategory]}>
            <Image source={require('../assets/Data/ipad.png')} style={styles.categoryIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory('macbook')}>
          <View style={[styles.categoryItem, category === 'macbook' && styles.selectedCategory]}>
            <Image source={require('../assets/Data/macbook.png')} style={styles.categoryIcon} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Tab Bar */}
      <View style={styles.tabs}>
        <Text style={[styles.tabItem, styles.activeTab]}>Best Sales</Text>
        <Text style={styles.tabItem}>Best Matched</Text>
        <Text style={styles.tabItem}>Popular</Text>
      </View>

      {/* Product List */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
              <Text style={styles.productRating}>Rating: {item.rating} Stars</Text>
            </View>
          </View>
        )}
        ListFooterComponent={<Text style={styles.seeAll}>See all</Text>}
      />

      {/* Bottom Navigation */}
      
    </View>
  );
};

// Styles for the screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  searchInput: {
    flex: 3,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    marginRight: 10,
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCategory: {
    backgroundColor: '#e5e5ff',
  },
  categoryIcon: {
    width: 30,
    height: 30,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tabItem: {
    fontSize: 16,
    color: '#888',
  },
  activeTab: {
    color: '#00bcd4',
    borderBottomWidth: 2,
    borderBottomColor: '#00bcd4',
  },
  productItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    color: '#00bcd4',
    marginTop: 5,
  },
  productRating: {
    marginTop: 5,
    color: '#888',
  },
  seeAll: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#00bcd4',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  navIcon: {
    width: 30,
    height: 30,
  },
});

export default Screen2;
