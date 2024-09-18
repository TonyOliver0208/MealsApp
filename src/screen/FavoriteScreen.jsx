import React, {useContext} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {FavoriteContext} from '../context/FavoriteContext';
import ProductCard from '../components/ProductCard';
import LinearGradient from 'react-native-linear-gradient';

const FavoriteScreen = ({navigation}) => {
  const {favorites} = useContext(FavoriteContext);

  const handleProductPress = product => {
    navigation.navigate('ProductDetails', {item: product});
  };

  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      {favorites.length === 0 ? (
        <Text style={styles.emptyText}>No favorite items yet</Text>
      ) : (
        <FlatList
          data={favorites}
          renderItem={({item}) => (
            <ProductCard item={item} handleProductClick={handleProductPress} />
          )}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />
      )}
    </LinearGradient>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
});
