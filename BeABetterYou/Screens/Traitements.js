import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Traitements() {
  return (
    <View style={styles.container}>
      <Text>Traitement</Text>
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