import React, {useState, useReducer} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

/* 
    state: red: number, green: 0, blue: 0 
    action: how to change State Object { type : 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }
*/

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 
            ? state 
            : { ...state, red: state.red + action.payload };
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 
            ? state 
            : { ...state, green: state.green + action.payload };
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 
            ? state
            : { ...state, blue: state.blue + action.payload };
        default: 
            return state;
    }
};


const SquareScreen = () => {
    // ditpatch: run my reducer , define action (colorToChange, amount)
    // reducer: function reducer, argument#2: initialState object
    const [state, ditpatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const COLOR_INCREMENT = 15;

    return (
        <View>
            <ColorCounter 
                color="Red" 
                onIncrease = {() => ditpatch({ type: 'change_red', payload: COLOR_INCREMENT })}
                onDecrease = {() => ditpatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
            />
            <ColorCounter 
                color="Green" 
                onIncrease = {() => ditpatch({type: 'change_green', payload: COLOR_INCREMENT})}
                onDecrease = {() => ditpatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
            />
            <ColorCounter 
                color="Blue" 
                onIncrease = {() => ditpatch({type: 'change_blue', payload: COLOR_INCREMENT})}
                onDecrease = {() => ditpatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
            />
            <View style={{height: 150, width: 150, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}}></View>
        </View>
    )
};

const styles = StyleSheet.create({});

export default SquareScreen;