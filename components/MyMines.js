/*
Author:Mikah Dupuis
Date: 2024/02/10
File: MyMines.js
Brief: The Components that will be used in the main app
*/

import { Pressable, StyleSheet, Alert, Text } from 'react-native';
import { useState, useEffect } from 'react';

export const Mines = ({ id, tOrf, adjustScore }) => {
    const [btnStyle, changebtnStyle] = useState(styles.demoButton);
    const [scoreNumber, updateScore] = useState(0);

    const changeScore = (adjustScore) => {
        if (btnStyle == styles.safeSpot) {
            updateScore(s=>s+100);
            console.log("sending safe");
        }
        if (btnStyle == styles.bomb) {
            updateScore(0);
            console.log("sending bomb");
        }
        if (btnStyle == styles.demoButton) {
            echo = "long hold to reset"
        }
        adjustScore(scoreNumber);
    }
    const handlebtnStyle = (id, tOrf, adjustScore) => {
        if (tOrf == true) {
            changebtnStyle(styles.bomb)
            Alert.alert("BBOOOOMMM!!!! GAME OVER, You clicked on a mine.");

        }
        else {
            changebtnStyle(styles.safeSpot)
            
        }
        changeScore(adjustScore);
    }
    const startOver = () => {
        changebtnStyle(styles.demoButton)
    }

    return (
        <Pressable
            onPress={() => handlebtnStyle(id, tOrf, adjustScore)}
            onLongPress={()=> startOver() }
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