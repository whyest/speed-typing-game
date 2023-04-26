import React, { useState, useEffect, useRef } from 'react'
import useWordGame from './hooks/useWordGame'

function App() {
  const {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  } = useWordGame(60)

  return (
    <div>
      <h1>Сколько слов в минуту ты печатаешь?</h1>
      <textarea
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <h4>Время: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Старт
      </button>
      <h1>Количество слов: {wordCount}</h1>
    </div>
  )
}

export default App
