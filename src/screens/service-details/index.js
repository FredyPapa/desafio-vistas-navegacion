import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

const ServiceDetailsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Pantalla de detalle del servicio</Text>
            <Button title="Volver al inicio" onPress={() => navigation.navigate('Categories')} />
        </View>
    )
}

export default ServiceDetailsScreen;