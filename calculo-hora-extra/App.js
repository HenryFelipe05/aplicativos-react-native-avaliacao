import { StyleSheet, Text, View } from 'react-native';
import Salario  from './components/Salario';

export default function App() {
  return (
    <View style={styles.container}>
      <Salario></Salario>
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
