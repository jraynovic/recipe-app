import { useState, useEffect } from 'react';
import Main from './components/Main'
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';

function App() {
  const [screenWidth, setScreenWidth] = useState(0)
  
 
    const css = screenWidth > 768? './App.css' : './Mobile.css'
    import `${css}`;
  window.addEventListener("resize", function() {
    setScreenWidth(window.innerWidth);
  });

  return (
    <BrowserRouter>
      {screenWidth}
      <Main/>
    </BrowserRouter>
  )
}

export default App;