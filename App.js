import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { Mines } from './components/MyMines';

export default function App() {
    const [leaderboard, setLeaderboard] = useState([0, 0, 0, 0]);
    const [scoreNumber, updateScore] = useState(0);

    const updateFromComponent = (newScore, id) => {
        const sum = newScore.reduce((previousValue, currentValue, index) => previousValue + currentValue, 0);
        updateScore(sum);
    };

    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(c => c + 1 )
        }, 1200);

    }, []);




    const showAlert = () => {
        Alert.alert("INSTRUCTIONS:",
            "1. Click any box \n" +
            "2. This will reveal if that box is safe (Green) or not (Red)! \n" +
            "3. Watch your score rise as you avoid the Bomb tile \n" +
            "4. If you click on the bomb, you lose all your points and its game over \n" +
            "5. To reset the mines Hold the button for the mines, this will hide them again, and press shuffle to randomize to location of the mines" +
            "6. Once you are satisfied with your score, Select the Give Up Button Below and Look at your Spot on the Leaderboard (Not Functional)" +
            "\n NOTE: Because of the jumble mess of code that is this particular app, score updates, but takes a few clicks to display."
        )
    }
    const [mineOrSafe, setMines] = useState([true, false, false]);
    const Shuffle = () => {
        let newMines = [false, false, false];
        newMines[Math.floor(Math.random() * 12)] = true;
        newMines[Math.floor(Math.random() * 12)] = true;
        newMines[Math.floor(Math.random() * 12)] = true;
        setMines(newMines);
        setCount(0);
    }
    
    const makeLeaderboard = () => {
        setLeaderboard[3] = leaderboard[2];
        setLeaderboard[2] = leaderboard[1];
        setLeaderboard[1] = leaderboard[0];
        setLeaderboard[0] = scoreNumber;
        Alert.alert("Most Recent Scores \n "
            +"One: "+ leaderboard[0] + "\n Two: " +leaderboard[1] + "\n Three: " + leaderboard[2] + "\n Four: " + leaderboard[3]);
    }

    return (
      <View style={styles.container}>
            <Button title='Instructions/How To Play' onPress={showAlert} />
            <Button title='Shuffle the Mines' onPress={Shuffle} />
            <View style={styles.buttonRow}>
                <Mines id={1} tOrf={mineOrSafe[0]} adjustScore={updateFromComponent} />
                <Mines id={2} tOrf={mineOrSafe[1]} adjustScore={updateFromComponent} />
                <Mines id={3} tOrf={mineOrSafe[2]} adjustScore={updateFromComponent} />
                <Mines id={4} tOrf={mineOrSafe[3]} adjustScore={updateFromComponent} />
                <Mines id={5} tOrf={mineOrSafe[4]} adjustScore={updateFromComponent} />
                <Mines id={6} tOrf={mineOrSafe[5]} adjustScore={updateFromComponent} />
                <Mines id={7} tOrf={mineOrSafe[6]} adjustScore={updateFromComponent} />
                <Mines id={8} tOrf={mineOrSafe[7]} adjustScore={updateFromComponent} />
                <Mines id={9} tOrf={mineOrSafe[8]} adjustScore={updateFromComponent} />
                <Mines id={10} tOrf={mineOrSafe[9]} adjustScore={updateFromComponent} />
                <Mines id={11} tOrf={mineOrSafe[10]} adjustScore={updateFromComponent} />
                <Mines id={12} tOrf={mineOrSafe[11]} adjustScore={updateFromComponent} />

            </View>
            <Button title='Give up/Finished' onPress={makeLeaderboard}/>
            <Text style={{ fontSize: 24 }}>Score = {scoreNumber}</Text>
            <Text style={{ fontSize: 24 }}>Timer: {count} </Text>
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
