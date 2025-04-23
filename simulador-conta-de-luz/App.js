import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Formulario from './components/Formulario';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Simulador de Conta de Luz</Text>
      <Formulario />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
