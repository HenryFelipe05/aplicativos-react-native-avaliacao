import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker, Platform } from 'react-native';

export default function Formulario() {
  const [consumo, setConsumo] = useState('');
  const [bandeira, setBandeira] = useState('verde');
  const [total, setTotal] = useState(null);

  const calcular = () => {
    const c = parseFloat(consumo.replace(',', '.'));
    if (isNaN(c) || c <= 0) {
      alert('Informe um valor válido de consumo');
      return;
    }

    let preco = 0;
    if (bandeira === 'verde') preco = 0.50;
    else if (bandeira === 'amarela') preco = 0.55;
    else if (bandeira === 'vermelha1') preco = 0.60;
    else if (bandeira === 'vermelha2') preco = 0.70;

    setTotal((c * preco).toFixed(2));
  };

  return (
    <View>
      <Text>Consumo (kWh):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={consumo}
        onChangeText={setConsumo}
        placeholder="Ex: 200"
      />

      <Text>Bandeira Tarifária:</Text>
      <View style={styles.pickerBox}>
        <Picker
          selectedValue={bandeira}
          onValueChange={setBandeira}
          style={Platform.OS === 'ios' ? styles.pickerIOS : styles.picker}
        >
          <Picker.Item label="Verde" value="verde" />
          <Picker.Item label="Amarela" value="amarela" />
          <Picker.Item label="Vermelha 1" value="vermelha1" />
          <Picker.Item label="Vermelha 2" value="vermelha2" />
        </Picker>
      </View>

      <Button title="Calcular" onPress={calcular} />

      {total && (
        <Text style={styles.resultado}>Valor da conta: R$ {total}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 8,
    marginVertical: 10,
    borderRadius: 5,
  },
  pickerBox: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    marginBottom: 15,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  pickerIOS: {
    height: 150,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
