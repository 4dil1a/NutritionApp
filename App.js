import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

import HomeScreen from './screens/HomeScreen';
import AddRecipeScreen from './screens/AddRecipeScreen';
import RecipeBookScreen from './screens/RecipeBookScreen';
import RecipeDetailScreen from './screens/RecipeDetailScreen';
import ProfileScreen from './screens/ProfileScreen';
import { RecipeProvider } from './context/RecipeContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Recipe Book"
        component={RecipeBookScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <RecipeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Main Tabs */}
          <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
          {/* Recipe Detail Screen */}
          <Stack.Screen name="Recipe Detail" component={RecipeDetailScreen} />
          <Stack.Screen name="Add Recipe" component={AddRecipeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecipeProvider>
  );
}
