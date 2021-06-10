import logo from './logo.svg';
import './App.css';

const arr = [1, 2, 3, 4];

function App() {
  return (
    <div>
      <h1>I'm being tested</h1>
      <ul>
        {arr.map(num => <li className={num}>{num}</li>)}
      </ul>
    </div>
  );
}

export default App;
