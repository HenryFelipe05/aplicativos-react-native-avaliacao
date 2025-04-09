import { StyleSheet, Text, View } from 'react-native';

export default function Veiculos() {
    return (
        <select>
            <option value={"Carro"}>Carro</option>
            <option value={"Moto"}>Moto</option>
            <option value={"Caminhao"}>Caminhão</option>
        </select>
    );
}

const styles = StyleSheet.create({

});