import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

const CategoriesScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Pantalla de Categorías</Text>
            <Button title="Ver servicios" onPress={() => navigation.navigate('Services')} />
        </View>
    )
}

export default CategoriesScreen;