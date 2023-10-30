import './App.css';
import ChildrenProp from './components/ChildrenProp';
import FirstComp from './components/FirstComp';
import SecoundComp from './components/SecoundComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <FirstComp testFirstParameter='parameterGooFrom ParentComp to ChildComp' /> 
          <SecoundComp testSecoundParameter='parametetrGooFrom PC To CP'/> 
          <ChildrenProp >
            <p>parametetrGooFrom Child tag</p>
          </ChildrenProp>
      </header>
    </div>
  );
}

export default App;
