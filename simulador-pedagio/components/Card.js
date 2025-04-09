import { View, StyleSheet } from "react-native";

export default function Card()
{
    <View style={[estilos.card, estilos.sombraCard]}></View>
}

const estilos = StyleSheet.create
({
    card: {
        backgroundColor: 'white',
        borderRadius: 20 ,       
    },
    sombraCard: {
        shadowColor: '#000',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: -1,
    }
});
