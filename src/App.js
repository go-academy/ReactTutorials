import logo from './logo.svg';
import './App.css';
import AlertBox from './components/AlertBox';
import Toolbar from './components/Toolbar';
import Counter from './components/Counter';

function App() {
  console.log('App.js is re-rendered again');
  return (
    <Counter />
  );
}

export default App;
