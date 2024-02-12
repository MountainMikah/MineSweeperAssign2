/*
Author:Mikah Dupuis
Date: 2024/02/10
File: MyMines.js
Brief: The Components that will be used in the main app
*/

import { Pressable, StyleSheet, Alert, Text } from 'react-native';
import { useState } from 'react';

export const Mines = ({ id, tOrf, }) => {
    const [btnStyle, changebtnStyle] = useState(styles.demoButton);
    const [theScore, setScore] = useState(0);



    const handlebtnStyle = (id, tOrf) => {
        if (tOrf == true) {
            changebtnStyle(styles.bomb)
            Alert.alert("BBOOOOMMM!!!! GAME OVER, You clicked on a mine.");
        }
        else {
            changebtnStyle(styles.safeSpot)
            setScore(+100)
        }

    }


    return (
        <Pressable
            onPress = {()=> handlebtnStyle(id, tOrf)}
            style={[styles.demoButton, btnStyle]}
        />
    )
}

const styles = StyleSheet.create({
    demoButton: {
        backgroundColor: 'grey',
        margin: 2,
        borderRadius: 5,
        height: 40,
        width: 40,
    },
    bomb: {
        backgroundColor: 'red',
    },
    safeSpot: {
        backgroundColor: 'green',
    },
})