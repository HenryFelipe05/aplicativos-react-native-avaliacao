import { StyleSheet, Text, View } from 'react-native';
import Veiculos from './components/Veiculos';

export default function App() {
  return(
    <View style={styles.containerApp}>
      <Text>Simulador de Pedagio</Text>
      <Veiculos></Veiculos>
    </View>
    
  );
}

const styles = StyleSheet.create({
  containerApp: {
    marginTop: 50,
    display: "flex",
    width: "auto",
    justifyContent: "center",
    alignItems: "center"
  }
});