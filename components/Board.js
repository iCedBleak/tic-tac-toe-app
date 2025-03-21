// src/components/Board.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Square from './Square';
import { globalStyles } from '../styles/styles';

export default function Board({ squares, onSquareClick }) {
  return (
    <View style={globalStyles.board}>
      {Array(3).fill(null).map((_, row) => (
        <View key={row} style={globalStyles.row}>
          {Array(3).fill(null).map((_, col) => {
            const index = row * 3 + col;
            return <Square key={index} value={squares[index]} onPress={() => onSquareClick(index)} />;
          })}
        </View>
      ))}
    </View>
  );
}