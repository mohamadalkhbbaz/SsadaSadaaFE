import './App.css';
import  React, {useContext}   from 'react';
import { ColorContext } from './components/UseContextProider';

function App() {
  //5. use context
  
  const colorData = useContext(ColorContext);
  console.log('ssadad');
  return (
    <div>
    <h1>ssad</h1>
      <p>{colorData}</p>
    </div>
  );
}

export default App;
