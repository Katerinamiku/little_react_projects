import React, {useRef, useState} from 'react';
import './App.css';

function padTime(time) {
    return time.toString().padStart(2, '0');
}

export default function App() {
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [title, setTitle] = useState('Start your countdown!');
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);
    const minutes = padTime(Math.floor(timeLeft / 60));
    const seconds = padTime(timeLeft - minutes * 60);

    function startTimer() {
        setTitle('Youre doing great!')
        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            setTimeLeft(timeLeft => {
                if (timeLeft >= 1) {
                    return timeLeft - 1
                } else {
                    setIsRunning(false);
                    return 0;
                }
            })
        }, 1000)
    }

    function stopTimer() {
        clearInterval(intervalRef.current);
        setTitle('Keep it up!')
        setIsRunning(false)
    }

    function resetTimer() {
        clearInterval(intervalRef.current);
        setTitle('Ready for another round?');
        setTimeLeft(25 * 60)
        setIsRunning(false)
    }

    return (
        <div className="app">
            <h2>{title}</h2>

            <div className="timer">
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
            </div>

            <div className="buttons">
                {isRunning ? <button onClick={stopTimer}>Stop</button>
                    : <button onClick={startTimer}>Start</button>}
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
}
