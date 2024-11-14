import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { RecipeContext } from '../context/RecipeContext';

const RecipeBookScreen = ({ navigation }) => {
  const { recipes } = useContext(RecipeContext);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter recipes based on the search query
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderRecipe = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Recipe Detail', { recipe: item })}
    >
      <Text style={styles.recipeTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search recipes..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {filteredRecipes.length === 0 ? (
        <View style={styles.noRecipesContainer}>
          <Image
            source={require('../assets/recipe.png')}
            style={styles.noRecipesImage}
          />
          <Text style={styles.noRecipesText}>No recipes found</Text>
        </View>
      ) : (
        <FlatList
          data={filteredRecipes}
          keyExtractor={(item) => item.title}
          renderItem={renderRecipe}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  noRecipesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  noRecipesImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  noRecipesText: {
    fontSize: 18,
    color: '#888',
    marginTop: 10,
  },
});

export default RecipeBookScreen;
