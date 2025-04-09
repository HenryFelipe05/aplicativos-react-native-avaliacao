import { StyleSheet, Text, View } from 'react-native';
import { Card } from './components/Card';
import { Veiculos } from './components/veiculos.js';

export default function App() {
  return (
    <View style={estilos.container}>
      <Text>Simulador de Pedágio</Text>
      <Card>
          <Veiculos></Veiculos>
      </Card>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    borderColor: black
  }
});
