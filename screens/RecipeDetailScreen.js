import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const RecipeDetailScreen = ({ route }) => {
  const { recipe } = route.params;

  const nutritionData = [
    { label: 'Calories', value: `${recipe.nutritionData.calories} kcal` },
    { label: 'Total Fat', value: `${recipe.nutritionData.totalNutrients.FAT?.quantity.toFixed(1)} g` },
    { label: 'Saturated Fat', value: `${recipe.nutritionData.totalNutrients.FASAT?.quantity.toFixed(1)} g` },
    { label: 'Carbohydrates', value: `${recipe.nutritionData.totalNutrients.CHOCDF?.quantity.toFixed(1)} g` },
    { label: 'Dietary Fiber', value: `${recipe.nutritionData.totalNutrients.FIBTG?.quantity.toFixed(1)} g` },
    { label: 'Sugars', value: `${recipe.nutritionData.totalNutrients.SUGAR?.quantity.toFixed(1)} g` },
    { label: 'Protein', value: `${recipe.nutritionData.totalNutrients.PROCNT?.quantity.toFixed(1)} g` },
    { label: 'Sodium', value: `${recipe.nutritionData.totalNutrients.NA?.quantity.toFixed(1)} mg` },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.title}</Text>

      <Text style={styles.sectionHeader}>Ingredients:</Text>
      <Text style={styles.ingredients}>{recipe.ingredients}</Text>

      <Text style={styles.sectionHeader}>Nutrition Facts:</Text>
      <View style={styles.table}>
        <FlatList
          data={nutritionData}
          keyExtractor={(item) => item.label}
          renderItem={({ item }) => (
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>{item.label}</Text>
              <Text style={styles.tableCell}>{item.value}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f8f8' }, // Off-white background color
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 10, color: '#008080', textAlign: 'center' }, // Teal/blue-green color for the title
  sectionHeader: { fontSize: 20, fontWeight: '600', marginTop: 20, color: '#2E8B57' }, // SeaGreen for section headers
  ingredients: { fontSize: 16, marginTop: 5, lineHeight: 24, color: '#444' },
  table: { marginTop: 20, borderTopWidth: 1, borderTopColor: '#2E8B57', borderRadius: 10 }, // Border in SeaGreen
  tableRow: { flexDirection: 'row', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#2E8B57' }, // Row border in SeaGreen
  tableCell: { flex: 1, fontSize: 16, color: '#444', paddingHorizontal: 10 },
});

export default RecipeDetailScreen;
