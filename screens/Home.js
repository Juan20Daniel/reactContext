import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import PedidosContext from '../context/pedidosContext';

const Home = ({ navigation }) => {
    const [ platy, setPlaty ] = useState({ 
        category: "comida", 
        price: 20, 
        description: "Sopa de murciélago con nutela xd", 
    });
    const { platillo, selectPaty } = useContext(PedidosContext);
    
    const lookValue = () => {
        console.log(platillo);
    }
    const goContacts = () => {
        navigation.navigate('Contacts');
    }
    const goDirection = () => {
        navigation.navigate('Direction');
    }
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Take value" onPress={() => selectPaty(platy)}></Button>
            <Button title="Look value" onPress={() => lookValue()}></Button>
            <Button title="Go to contacts" onPress={goContacts}></Button>
            <Button title="Go to Direction" onPress={goDirection}></Button>
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

export default Home;