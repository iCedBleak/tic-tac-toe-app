// src/context/GameContext.js
import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export function GameProvider({ children }) {
  const [gameMode, setGameMode] = useState(null); // 'PvP' or 'PvC'
  const [winner, setWinner] = useState(null);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const resetGame = () => {
    setWinner(null);
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  };

  return (
    <GameContext.Provider value={{ gameMode, setGameMode, winner, setWinner, history, setHistory, currentMove, setCurrentMove, resetGame }}>
      {children}
    </GameContext.Provider>
  );
}

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGameContext must be used within a GameProvider');
  return context;
};
