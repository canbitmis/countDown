import { useState } from 'react'
import './App.css';
import Countdownlist from './components/Countdownlist';
import Fireworks3 from './components/Fireworks3';
function App() {
  const [countdown, setCountDown] = useState(false);
  return (
    <div className='container'>
      {countdown ? <Fireworks3/> : null}
        <Countdownlist setCountDown={setCountDown} />
    
    </div>
  );
}

      export default App;
