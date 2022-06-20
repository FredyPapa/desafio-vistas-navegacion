import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

const ServicesScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Pantalla de servicios</Text>
            <Button title="Ir al detalle del servicio" onPress={() => navigation.navigate('ServiceDetails')} />
        </View>
    )
}

export default ServicesScreen;