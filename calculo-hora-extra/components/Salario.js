import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Salario() {
  const [salarioBase, setSalarioBase] = useState('');
  const [horasTrabalhadas, setHorasTrabalhadas] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularSalario = () => {
    const base = parseFloat(salarioBase);
    const horas = parseFloat(horasTrabalhadas);

    if (isNaN(base) || isNaN(horas)) {
      setResultado('Por favor, preencha todos os campos corretamente.');
      return;
    }

    const valorHora = base / 160;
    let salarioFinal = 0;

    if (horas <= 160) {
      salarioFinal = valorHora * horas;
    } else {
      const horasExtras = horas - 160;
      salarioFinal = (valorHora * 160) + (valorHora * 1.5 * horasExtras);
    }

    setResultado(`Salário final: R$ ${salarioFinal.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Salário base (R$):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={salarioBase}
        onChangeText={setSalarioBase}
        placeholder="Ex: 2000"
      />

      <Text style={styles.label}>Horas trabalhadas:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={horasTrabalhadas}
        onChangeText={setHorasTrabalhadas}
        placeholder="Ex: 170"
      />

      <View style={styles.botao}>
        <Button title="Calcular" onPress={calcularSalario} />
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
    marginTop: 12,
  },
  input: {
    height: 50,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  botao: {
    marginTop: 20,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#e0ffe0',
    padding: 10,
    borderRadius: 5,
  },
});