import { useState, useEffect, useRef } from 'react';

const Hooks = (time = 10) => {
  const [timer, setTimer] = useState(time);
  const [startGameState, setStartGameState] = useState(false);
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const boxRef = useRef(null);

  const handleChange = e => {
    const { value } = e.target;
    setText(value);
  };
  const wordCount = text => {
    const arr = text.trim().split(' ');
    const filteredArr = arr.filter(word => word !== '');
    return filteredArr.length;
  };

  const decrementTime = () => {
    setTimer(prevTime => prevTime - 1);
  };

  const startGame = () => {
    setStartGameState(true);
    setCount(0);
    setText('');
    boxRef.current.disabled = false;
    boxRef.current.focus();
  };

  const endGame = () => {
    setTimer(time);
    setStartGameState(false);
    setText('');
    setCount(wordCount(text));
  };

  useEffect(() => {
    if (startGameState && timer > 0) {
      setTimeout(decrementTime, 1000);
    } else if (timer === 0) {
      endGame();
    }
  }, [timer, startGameState]);

  return [timer, startGame, handleChange, count, text, startGameState, boxRef];
};

export default Hooks;
