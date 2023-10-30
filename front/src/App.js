import './App.css';
import Car from './Class/Car'


function App() {
  let myCar = new Car("ssada");
  // myCar.color = "red";
  myCar.printColor("paramet")  
  myCar.printRED();

  return (
    <div className="App">
       
    </div>
  );
}

export default App;
