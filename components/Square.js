// src/components/Square.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/styles';

export default function Square({ value, onPress }) {
  return (
    <TouchableOpacity style={globalStyles.square} onPress={onPress} activeOpacity={0.7}>
      <Text style={globalStyles.squareText}>{value}</Text>
    </TouchableOpacity>
  );
}