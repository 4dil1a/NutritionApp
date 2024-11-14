import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Profile Photo with Circular Border */}
      <Image 
        source={require('../assets/adel.jpeg')}  
        style={styles.profilePhoto} 
      />
      
      {/* Name as Embedded Text */}
      <Text style={styles.nameText}>
        Adilia Getia Haqia Ilmi
      </Text>
      
      {/* Description as Embedded Text */}
      <Text style={styles.descriptionText}>
        Hello, I'm Adilia from Diponegoro University Computer Engineering Department of 2026.
        During my time in Uni i have learned a lot of new things inside and outside of the engineering wolrd.
        I also met a lot of wonderfull people here. 
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,  // This creates the circular border
    borderWidth: 3,
    borderColor: '#000', // Border color for the circle
    marginBottom: 20,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    width: '80%',
  },
});

export default ProfileScreen;
