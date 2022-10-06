import React, {useEffect, useState} from 'react';

const UseMovement = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [direction, setDirection] = useState('down');

    //event listener to window to move arrows with keys
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)

        function handleKeyDown(e) {
            if (e.key === 'ArrowUp') move('up');
            if (e.key === 'ArrowDown') move('down');
            if (e.key === 'ArrowRight') move('right');
            if (e.key === 'ArrowLeft') move('left');
        }

        return () => window.removeEventListener('keydown', handleKeyDown)
    }, []);

    function move(dir) {
        setDirection(dir)
        if (dir === 'up') {setY((y) => y - 20);}
        if (dir === 'down') {setY((y) => y + 20);}
        if (dir === 'right') {setX((x) => x + 20);}
        if (dir === 'left') {setX((x) => x - 20);}
    }

    return {
        x, y, direction, move
    }
};

export default UseMovement;
