import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomButton from '../utils/Button';

export default function ScreenList({ navigation }) {
  return (
    <View style={styles.container}>
      <CustomButton text="Accueil" action={() => navigation.navigate('Accueil')} styleMode="main" />
      <CustomButton text="Actualités" action={() => navigation.navigate('Actualites')} styleMode="main" />
      <CustomButton text="Communauté" action={() => navigation.navigate('Communaute')} styleMode="main" />
      <CustomButton text="Traîtements" action={() => navigation.navigate('Traitements')} styleMode="main" />
      <CustomButton text="Trophées" action={() => navigation.navigate('Trophees')} styleMode="main" />
      <CustomButton text="Mon compte" action={() => navigation.navigate('Profile')} styleMode="main" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});