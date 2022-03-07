import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Direction = ({ navigation }) => {
    const Home = () => {
        navigation.navigate('Home');
    }
    const Contacts = () => {
        navigation.navigate('Contacts');
    }
    return (
        <View style={styles.container}>
            <Text>Direction</Text>
            <Button title="Go to Home" onPress={Home}></Button>
            <Button title="Go to Contacts" onPress={Contacts}></Button>
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

export default Direction;