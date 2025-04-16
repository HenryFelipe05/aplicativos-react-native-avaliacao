import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Veiculos() {
  const [veiculoSelecionado, setVeiculoSelecionado] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecione um veículo:</Text>
      <Picker
        selectedValue={veiculoSelecionado}
        onValueChange={(itemValue) => setVeiculoSelecionado(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Selecione..." value={null} />
        <Picker.Item label="Carro" value="carro" />
        <Picker.Item label="Moto" value="moto" />
        <Picker.Item label="Caminhão" value="caminhao" />
      </Picker>

      {veiculoSelecionado && (
        <Text style={styles.resultado}>
          Veículo selecionado: {veiculoSelecionado}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  picker: {
    height: 50,
    backgroundColor: '#f0f0f0',
  },
  resultado: {
    marginTop: 16,
    fontSize: 16,
  },
});