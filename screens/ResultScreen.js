import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useGameContext } from '../context/GameContext';
import { globalStyles } from '../styles/styles';

export default function ResultScreen({ navigation }) {
    const { winner, resetGame, gameMode } = useGameContext();

    function handleRestart() {
        resetGame();
        navigation.navigate('Home');
    }

    let resultMessage = '';
    if (gameMode === 'PvC') {
        if (winner === 'X') {
            resultMessage = "You Win!";
        } else if (winner === 'O') {
            resultMessage = 'You Lost!';
        } else {
            resultMessage = "Draw!";
        }
    } else if (gameMode === 'PvP') {
        if (winner && (winner === 'X' || winner === 'O')) {
            resultMessage = `Player ${winner} Wins!`;
        } else {
            resultMessage = "Draw!";
        }
    }

    return (
        <ImageBackground source={require('../assets/images/bg.jpg')} style={globalStyles.background}>
            <View style={globalStyles.container}>
                {winner !== null ? (
                    <Text style={globalStyles.resultText}>{resultMessage}</Text>
                ) : null}
                <TouchableOpacity style={globalStyles.button} onPress={handleRestart}>
                    <Text style={globalStyles.buttonText}>Play Again</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}