/*
Author:Mikah Dupuis
Date: 2024/02/10
File: MyMines.js
Brief: The Components that will be used in the main app
*/

import { Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';

export const Mines = ({ id, tOrf }) => {

    const [btnStyle, changebtnStyle] = useState(styles.demoButton);


    /*
    Pseudo-code:
    if (Button isPressed) {
        if (mine == true ) {
            setStyle = Exploded/GameOver
        } else {
            setStyle = SafeSpot
        }
    } else {
        setStyle = buttonNotPressed
    }
    */
    const handlebtnStyle = (id, tOrf) => {
        if (tOrf == true) {
            changebtnStyle(styles.bomb)
        }
        else {
            changebtnStyle(styles.safeSpot)
        }
    }

    return (

        <Pressable
            onPressOut= {()=> handlebtnStyle(id, tOrf)}
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