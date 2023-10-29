import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import About from './components/About';
import Footer from './components/Footer';
import ErrorPage404 from './components/ErrorPage404';
import Home from './components/Home';

import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  // const ShowNavBar = ()=>
  // {
  //   if(window.location.pathname == '/navbar')
  //   return  <Navbar/>
  // }
  // const ShowContent = ()=>
  // {
  //   if(window.location.pathname == '/content')
  //   return  <Content/>
  // }

  

  return (
    // <div className="App">
    //   <header className="App-header">
    //   {/* {ShowNavBar()}
    //   {ShowContent()}
    //      <About />
    //      <Footer /> */}

         
    //   </header>
    // </div>
   <div>
      <Navbar />
        <BrowserRouter> 
        {/* فيها الراوت ل كل السستم */}
            <Routes> 
              <Route path='/' element={<Home />} />
              <Route path='/content' element={<Content />} />
              <Route path='/about' element={<About />} />
              <Route path='/*' element={<ErrorPage404 />} />
            </Routes>
          </BrowserRouter>
      <Footer />
   </div>

  );
}

export default App;
