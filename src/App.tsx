import { useEffect, useState } from 'react'
import Card from './components/Card'
import { kanjis } from './flashcardData'
import './App.css'

function App() {

  return (
    <>
      <button>カタカナ語</button>
      <h1>Flashcard ARTS3630!</h1>
      <Card kanjiList={kanjis} />
    </>
  )
}

export default App
