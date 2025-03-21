// src/screens/GameScreen.js
import React, { useEffect } from 'react';
import { View, ImageBackground } from 'react-native';
import { useGameContext } from '../context/GameContext';
import Board from '../components/Board';
import calculateWinner from '../utils/calculateWinner';
import { globalStyles } from '../styles/styles'; 

export default function GameScreen({ navigation }) {
  const { gameMode, history, setHistory, currentMove, setCurrentMove, setWinner } = useGameContext();
  
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  useEffect(() => {
    if (gameMode === 'PvC' && !xIsNext) {
      const emptySquares = currentSquares.map((sq, i) => (sq === null ? i : null)).filter(i => i !== null);
      const randomMove = emptySquares[Math.floor(Math.random() * emptySquares.length)];
      if (randomMove !== undefined) {
        handlePlay(currentSquares.map((sq, i) => (i === randomMove ? 'O' : sq)));
      }
    }
  }, [xIsNext, gameMode, currentSquares]);

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);

    const winner = calculateWinner(nextSquares);
    if (winner || !nextSquares.includes(null)) {
      setWinner(winner || 'Draw');
      navigation.navigate('Result');
    }
  };

  const handleClick = (i) => {
    if (calculateWinner(currentSquares) || currentSquares[i]) return;
    const nextSquares = currentSquares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    handlePlay(nextSquares);
  };

  return (
    <ImageBackground source={require('../assets/images/bg.jpg')} style={globalStyles.background}>
      <View style={globalStyles.container}>
        <Board squares={currentSquares} onSquareClick={handleClick} />
      </View>
    </ImageBackground>
  );
}
