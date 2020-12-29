import './App.css';
import Hooks from './hooks/Hooks';

function App() {
  const [time, startGame, handleChange, count, text, startGameState, boxRef] = Hooks();
  return (
    <div className="App">
      <h1>Word Typing Game</h1>
      <textarea
        ref={boxRef}
        disabled={!startGameState}
        onChange={handleChange}
        value={text}
      />
      <h4>
        Time Remaining:
        {time}
      </h4>
      <button type="button" disabled={startGameState} onClick={startGame}>
        {' '}
        {count > 0 ? 'Play again' : 'Start'}
      </button>
      <h4>
        Word Count:
        {count}
      </h4>

    </div>
  );
}

export default App;
