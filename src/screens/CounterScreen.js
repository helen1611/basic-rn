import React, { useState, useReducer } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const reducer = (state, action) => {
    switch (action.type){
        case 'increase':
            return { ...state, counter: state.counter + action.payload };
        case 'decrease': 
            return { ...state, counter: state.counter - action.payload };
        default:
            return state;
    }
};

const CounterScreen = () => {
    const [state, ditpatch] = useReducer(reducer, {counter: 0});

    return (
        <View>
            <Button 
                title="Increase"
                onPress= { () => ditpatch({type: 'increase', payload: 1})}
            />
            <Button 
                title="Decrease"
                onPress= { () => ditpatch({type: 'decrease', payload : 1})}
            />
            <Text>Counter Screen: {state.counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;
