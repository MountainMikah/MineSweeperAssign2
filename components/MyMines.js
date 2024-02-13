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
    const [trackNum, setTrackNum] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);


    const changeScore = (adjustScore, id) => {
        if (btnStyle == styles.safeSpot) {
            const changingScore = scoreNumber + 100;
            updateScore(changingScore);
            console.log("sending safe");
        }
        if (btnStyle == styles.bomb) {
            const bombScore = 0
            updateScore(bombScore);
            console.log("sending bomb");
        }
        if (btnStyle == styles.demoButton) {
            echo = "long hold to reset"
        }
        const holder = [...trackNum,scoreNumber];
        setTrackNum(holder)
        adjustScore(trackNum, id);
    }


    const handlebtnStyle = (id, tOrf, adjustScore) => {
        if (tOrf == true) {
            changebtnStyle(styles.bomb)
            Alert.alert("BBOOOOMMM!!!! GAME OVER, You clicked on a mine.");

        }
        else {
            changebtnStyle(styles.safeSpot)
            
        }
        changeScore(adjustScore, id);
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