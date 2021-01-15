import { useState, useEffect, useRef } from 'react';

const toType = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. Cursus mi pretium tellus duis convallis tempus leo. Tempus leo eu aenean sed diam urna tempor. Urna tempor pulvinar vivamus fringilla lacus nec metus.';
const Hooks = (time = 10) => {
  const [timer, setTimer] = useState(time);
  const [startGameState, setStartGameState] = useState(false);
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const boxRef = useRef(null);
  const toTypeSplit = [toType.trim().split(' ')];

  const wordCount = text => {
    const arr = [...new Set(text.trim().split(' '))];
    const filteredArr = [];

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === toTypeSplit[0][i]) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr.length;
  };
  const handleChange = e => {
    const { value } = e.target;
    setText(value);
    setCount(wordCount(text));
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
