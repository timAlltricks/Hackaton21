import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CustomButton from '../utils/Button';

export default function ScreenList({ navigation }) {
  return (
    <View style={styles.container}>
      <CustomButton text="Accueil" action={() => navigation.navigate('Accueil')} styleMode="main" />
      <CustomButton text="Actualités" action={() => navigation.navigate('Actualités')} styleMode="main" />
      <CustomButton text="Communauté" action={() => navigation.navigate('Communauté')} styleMode="main" />
      <CustomButton text="Traîtements" action={() => navigation.navigate('Traîtements')} styleMode="main" />
      <CustomButton text="Trophées" action={() => navigation.navigate('Trophées')} styleMode="main" />
      <CustomButton text="Profil" action={() => navigation.navigate('Profil')} styleMode="main" />
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