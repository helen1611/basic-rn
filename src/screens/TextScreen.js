import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return <View style={styles.ctn}>
        <Text>Enter Password:</Text>
        <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            placeholder="Fill your name"
            onChangeText={ (newValue) => {
                setPassword(newValue)
            }}
        />
        {password.length < 4 ? <Text>Password must be 4 characters</Text> : null}
        



        <Text>Enter Name: </Text>
        <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            placeholder="Fill your name"
            onChangeText={ (newValue) => {
                setName(newValue)
            }}
        />
        <Text>My name is: {name}</Text>

        
    </View>
};

const styles = StyleSheet.create({
    ctn: {
        padding: 10,
    },
    input: {
        marginVertical: 10,
        borderColor: '#a3a3a3',
        borderWidth: 1,
        padding: 10,
        borderRadius: 3
    }
});

export default TextScreen;