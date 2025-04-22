import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Veiculos() {
  const [veiculoSelecionado, setVeiculoSelecionado] = useState(null);
  const [distancia, setDistancia] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularTotal = () => {
    const dist = parseFloat(distancia);
    if (!veiculoSelecionado || isNaN(dist)) {
      setResultado('Por favor, preencha todos os campos corretamente.');
      return;
    }

    let precoPorKm = 0;

    switch (veiculoSelecionado) {
      case 'carro':
        precoPorKm = 0.10;
        break;
      case 'moto':
        precoPorKm = 0.05;
        break;
      case 'caminhao':
        precoPorKm = 0.15;
        break;
      default:
        precoPorKm = 0;
    }

    const total = dist * precoPorKm;
    const tipoFormatado = veiculoSelecionado.charAt(0).toUpperCase() + veiculoSelecionado.slice(1);

    setResultado(`● Tipo: ${tipoFormatado}\n● Distância: ${dist} km\n● Total: R$ ${total.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerVeiculos}>
        <Text style={styles.label}>Selecione um veículo:</Text>
        <Picker
          selectedValue={veiculoSelecionado}
          onValueChange={(itemValue) => setVeiculoSelecionado(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Selecione..." value={null} />
          <Picker.Item label="Carro" value="carro" />
          <Picker.Item label="Moto" value="moto" />
          <Picker.Item label="Caminhão" value="caminhao" />
        </Picker>
      </View>

      <View style={styles.containerDistancia}>
        <Text style={styles.label}>Informe a distância em km:</Text>
        <TextInput
          style={styles.distancia}
          keyboardType="numeric"
          value={distancia}
          onChangeText={setDistancia}
        />
      </View>

      <View style={styles.botao}>
        <Button title="Calcular" onPress={calcularTotal} />
      </View>

      {resultado !== '' && (
        <Text style={styles.resultado}>{resultado}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
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
    marginTop: 20,
    fontSize: 16,
    backgroundColor: '#e0ffe0',
    padding: 10,
    borderRadius: 5,
  },
  distancia: {
    height: 50,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 10,
  },
  containerDistancia: {
    marginTop: 20,
  },
  botao: {
    marginTop: 20,
  }
});