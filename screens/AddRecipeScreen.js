import React, { useState, useContext } from 'react';
import { View, TextInput, Text, StyleSheet, Alert, ScrollView, TouchableOpacity, Image } from 'react-native';
import { RecipeContext } from '../context/RecipeContext';

const AddRecipeScreen = ({ navigation }) => {
  const { addRecipe } = useContext(RecipeContext);
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  
  const handleAddRecipe = () => {
    if (!title || !ingredients) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    addRecipe(title, ingredients);
    setTitle('');
    setIngredients('');
    Alert.alert('Success', 'Recipe added successfully!');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.label}>Recipe Title:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter recipe title"
          value={title}
          onChangeText={setTitle}
        />
        
        <Text style={styles.label}>Ingredients (one per line):</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter ingredients, one per line"
          multiline
          value={ingredients}
          onChangeText={setIngredients}
        />
        
        <TouchableOpacity style={styles.button} onPress={handleAddRecipe}>
          <Text style={styles.buttonText}>Add Recipe</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Image fixed at the bottom */}
      <Image
        source={require('../assets/profile.png')}  // Replace with your image path
        style={styles.bottomImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    elevation: 3,
  },
  textArea: {
    height: 150,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#40E0D0',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
});

export default AddRecipeScreen;
