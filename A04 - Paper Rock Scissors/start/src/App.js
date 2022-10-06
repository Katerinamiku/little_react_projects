import React, {useEffect, useState} from 'react';
import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';
import './App.css';

const choices = [
    {id: 1, name: 'rock', component: Rock, losesTo: 2},
    {id: 2, name: 'paper', component: Paper, losesTo: 3},
    {id: 3, name: 'scissors', component: Scissors, losesTo: 1}
];

export default function App() {
    const [userChoice, setUserChoice] = useState(null);
    const [compChoice, setCompChoice] = useState(null);
    const [wins, setWins] = useState(0)
    const [losses, setLosses] = useState(0);
    const [gameState, setGameState] = useState(null);//win lose draw

    useEffect(() => {
        restartGame();
    }, []);

    function restartGame() {
        setGameState(null);
        setUserChoice(null)
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        setCompChoice(randomChoice)
    }

    const handleUserChoise = (choice) => {
        const chosen = choices.find(c => c.id === choice);
        setUserChoice(chosen);
        //determine the winner
        if (chosen.losesTo === compChoice.id) {
            setGameState('lose')
            setLosses(losses => losses + 1)
        } else if (compChoice.losesTo === chosen.id) {
            setGameState('win')
            setWins(wins => wins + 1)
        } else if (compChoice.id === chosen.id) {
            setGameState('draw')
        }
    }

    const renderComponent = (choice) => {
        const Component = choice.component;
        return <Component/>
    }

    return (
        <div className="app">
            {/* information goes here */}
            <div className="info">
                <h2>Rock. Paper. Scissors</h2>

                {/* wins vs losses stats */}
                <div className="wins-losses">
                    <div className="wins">
                        <span className="number">{wins}</span>
                        <span className="text">{wins === 1 ? 'Win' : 'Wins'}</span>
                    </div>

                    <div className="losses">
                        <span className="number">{losses}</span>
                        <span className="text">{losses === 1 ? 'Loss' : 'Losses'}</span>
                    </div>
                </div>
            </div>

            {/* the popup to show win/loss/draw */}
            {gameState &&
                <div className={`game-state ${gameState}`} onClick={() => {
                    restartGame()
                }}>
                    <div>
                        <div className={'game-state-content'}>
                            <p>{renderComponent(userChoice)}</p>
                            {gameState === 'win' && <p>Congrats, you won!</p>}
                            {gameState === 'lose' && <p>Sorry, you lost!</p>}
                            {gameState === 'draw' && <p>Its drew.</p>}
                            <p>{renderComponent(compChoice)}</p>
                        </div>
                        <button onClick={() => {
                            restartGame()
                        }}>Play again
                        </button>
                    </div>
                </div>
            }


            <div className="choices">
                {/* choices captions */}
                <div>You</div>
                <div/>
                <div>Computer</div>

                {/* buttons for my choice */}
                <div>
                    <button className="rock" onClick={() => handleUserChoise(1)}>
                        <Rock/>
                    </button>
                    <button className="paper" onClick={() => handleUserChoise(2)}>
                        <Paper/>
                    </button>
                    <button className="scissors" onClick={() => handleUserChoise(3)}>
                        <Scissors/>
                    </button>
                </div>

                <div className="vs">vs</div>

                {/* show the computer's choice */}
                <div>
                    <button className="computer-choice">?</button>
                </div>
            </div>
        </div>
    );
}
