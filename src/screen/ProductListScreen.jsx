import React from 'react';
import {FlatList, StyleSheet, View, Text, Image, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import data from '../data/data.json';
import {FavoriteProvider} from '../context/FavoriteContext';

const ProductListScreen = ({route, navigation}) => {
  const {category} = route.params;
  const products = data.products.filter(
    product => product.categoryId === category.id,
  );

  const handleProductPress = product => {
    navigation.navigate('ProductDetails', {item: product});
  };

  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <View style={styles.header}>
        <Header />
        <View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../assets/search.png')}
              style={styles.searchIcon}
            />
            <TextInput placeholder="Search" style={styles.textInput} />
          </View>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={products}
          renderItem={({item}) => (
            <ProductCard item={item} handleProductClick={handleProductPress} />
          )}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </LinearGradient>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Add this
    padding: 20,
  },
  listContainer: {
    flex: 1, // Add this
  },
  flatListContent: {
    paddingBottom: 20, // Add some bottom padding for better scrolling
  },
  headingText: {
    fontSize: 28,
    color: '#000000',
    marginVertical: 20,
    fontFamily: 'Poppins-Regular',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 10, // Add some margin to separate from the list
  },
  searchIcon: {
    height: 26,
    width: 26,
    marginHorizontal: 12,
  },
  textInput: {
    fontSize: 18,
    width: '100%',
    fontFamily: 'Poppins-Regular',
  },
});
