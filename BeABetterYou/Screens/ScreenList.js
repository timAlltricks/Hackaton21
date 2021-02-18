import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ScreenList() {
  return (
    <View style={styles.container}>
      <Text>Accueil</Text>
      <Text>Actualités</Text>
      <Text>Communauté</Text>
      <Text>Traîtements</Text>
      <Text>Trophées</Text>
      <Text>Profil</Text>
      <StatusBar style="auto" />
    </View>
  );
}