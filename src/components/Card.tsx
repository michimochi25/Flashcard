import './Card.css'
import { useState } from 'react';

function Card({ kanjiList }: any) {
    const [weekIndex, setWeekIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const increment = () => {
        if (currentIndex < kanjiList[weekIndex].materials.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else if (weekIndex < kanjiList.length - 1) {
            setWeekIndex(weekIndex + 1);
            setCurrentIndex(0);
        } else {
            setCurrentIndex(0);
            setWeekIndex(0);
        }
        setShowAnswer(false);
    }

    const decrement = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (weekIndex > 0) {
            setWeekIndex(weekIndex - 1);
            setCurrentIndex(kanjiList[weekIndex - 1].materials.length - 1);
        }
        setShowAnswer(false);
    }

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    const renderCurrentItem = () => {
        const currentItem = kanjiList[weekIndex].materials[currentIndex];
        return (
            <h2 style={{ color: "black" }}>{currentItem.romaji}</h2>
        );
    };

    const renderAnswer = () => {
        const currentItem = kanjiList[weekIndex].materials[currentIndex];
        if (showAnswer) {
            return (
                <>
                    <h2 className='kanji'>{currentItem.kanji}</h2>
                    <h2>{currentItem.meaning}</h2>
                </>

            )
        }
        return null;
    }

    return (
        <div id="card">
            <div className='arrow-container'>
                <button onClick={decrement}>&lt;</button>
                <button onClick={increment}>&gt;</button>
            </div>

            <button id="showAnswerBtn" onClick={toggleAnswer}>Show Answer</button>
            <h2 className='week'>Week: {weekIndex + 1}</h2>
            {renderCurrentItem()}
            {renderAnswer()}
        </div >
    )
}

export default Card