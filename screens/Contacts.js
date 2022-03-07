import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import PedidosContext from '../context/pedidosContext';

const Contacts = ({ navigation }) => {
    const [ platy, setPlaty ] = useState([]);
    const { pedidos } = useContext(PedidosContext);
    
    useEffect(() => {
        setPlaty(pedidos)
    }, []);

    useEffect(() => {
        console.log(platy);
    }, [platy]);
    
    const home = () => {
        navigation.navigate('Home');
    }
    const direction = () => {
        navigation.navigate('Direction');
    }
    return (
        <View style={styles.container}>
            <Text>Contacts</Text>
            <Button title="Go to Home" onPress={home}></Button>
            <Button title="Go to Direction"  onPress={direction}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Contacts;