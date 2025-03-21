// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useGameContext } from '../context/GameContext';
import { globalStyles } from '../styles/styles';

export default function HomeScreen({ navigation }) {
  const { setGameMode, resetGame } = useGameContext();

  const handleModeSelect = (mode) => {
    resetGame();
    setGameMode(mode);
    navigation.navigate('Game');
  };

  return (
    <ImageBackground source={require('../assets/images/bg.jpg')} style={globalStyles.background}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Tic Tac Toe</Text>
        <Image
          source={require('../assets/images/icon.png')}
          style={globalStyles.logo}
        />

        <TouchableOpacity style={globalStyles.button} onPress={() => handleModeSelect('PvP')}>
          <Text style={globalStyles.buttonText}>Player vs Player</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.button} onPress={() => handleModeSelect('PvC')}>
          <Text style={globalStyles.buttonText}>Player vs Computer</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
