import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { RecipeContext } from '../context/RecipeContext';

const HomeScreen = ({ navigation }) => {
  const { recipes } = useContext(RecipeContext);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const renderRecipe = ({ item }) => (
    <TouchableOpacity
      style={styles.recipeCard}
      onPress={() => navigation.navigate('Recipe Detail', { recipe: item })}
    >
      <Text style={styles.recipeTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const filteredRecipes = selectedCategory
    ? recipes.filter((recipe) => recipe.category === selectedCategory)
    : recipes.slice(-5);

  return (
    <View style={styles.container}>
      {/* Header Section with Image */}
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1J_mKnH02VVgRE_oDaoxKLQh4gWha9Krd4Es9bQu6Asp9crt1jsH-hniJ5nUR5ZTeFds&usqp=CAU' }} // Change this path to your image
          style={styles.headerImage}
        />
        <Text style={styles.welcomeText}>Welcome to Recipe App!</Text>
      </View>

      {/* Section Header positioned right below the header image */}
      <Text style={styles.sectionHeader}>Recently Added Recipes:</Text>

      {recipes.length === 0 ? (
        <View style={styles.noRecipesContainer}>
          <Image
            source={require('../assets/recipe.png')}  // Replace with your embedded image path
            style={styles.noRecipesImage}
          />
          <Text style={styles.noRecipesText}>No recipes added</Text>
        </View>
      ) : (
        <FlatList
          data={filteredRecipes}
          renderItem={renderRecipe}
          keyExtractor={(item) => item.title}
          style={styles.recipeList}
        />
      )}

      {selectedCategory && (
        <FlatList
          data={filteredRecipes}
          renderItem={renderRecipe}
          keyExtractor={(item) => item.title}
          style={styles.categoryList}
        />
      )}

      {/* Add Recipe Button positioned below the recipes list */}
      <TouchableOpacity
        style={styles.addRecipeButton}
        onPress={() => navigation.navigate('Add Recipe')}
      >
        <Text style={styles.addRecipeText}>Add Recipe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
  },
  headerContainer: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  welcomeText: {
    position: 'absolute',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },
  addRecipeButton: {
    backgroundColor: '#40E0D0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    position: 'absolute', // Fixed position at the bottom of the screen
    bottom: 20, // Keep it above the device's bottom edge
  },
  addRecipeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  recipeList: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  recipeCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  noRecipesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,  // Reduced margin-top to bring closer to the "Recently Added Recipes"
    marginBottom: 50,  // Reduced margin-bottom
  },
  noRecipesImage: {
    width: '75%', // Adjusted width to keep the image proportionate but still impactful
    height: 250,  // Adjusted height to match the smaller image scale
    resizeMode: 'contain', // Ensure the image scales proportionally
  },
  noRecipesText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 0,  // Add a small margin to keep text close to the image
  },
});

export default HomeScreen;
