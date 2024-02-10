import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Mines } from './components/MyMines';

export default function App() {

    const showAlert = () => {
        Alert.alert("INSTRUCTIONS:",
            "1. Click any box \n" +
            "2. This will reveal if that box is safe (Green) or not (Red)! \n" +
            "3. Watch your score rise as you avoid the Bomb tile \n" +
            "4. If you click on the bomb, you lose all your points and its game over \n" +
            "5. Once you are satisfied with your score, Select the Give Up Button Below and Look at your Spot on the Leaderboard"
        )
    }
    const [mineOrSafe, setMines] = useState([true, false, false]);

    const Shuffle = () => {
        let newMines = [false, false, false];
        newMines[Math.floor(Math.random() * 8)] = true;
        setMines(newMines);
    }


    return (
      <View style={styles.container}>
            <Button title='Instructions/How To Play' onPress={showAlert} />
            <Button title='Shuffle the Mines' onPress={Shuffle} />
          <View style={styles.buttonRow}>
                <Mines id={1} tOrf={mineOrSafe[0]} />
                <Mines id={2} tOrf={mineOrSafe[1]} />
                <Mines id={3} tOrf={mineOrSafe[2]} />
                <Mines id={4} tOrf={mineOrSafe[3]} />
                <Mines id={5} tOrf={mineOrSafe[4]} />
                <Mines id={6} tOrf={mineOrSafe[5]} />
                <Mines id={7} tOrf={mineOrSafe[6]} />
                <Mines id={8} tOrf={mineOrSafe[7]} />
          </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    buttonRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 200,
    },
});
