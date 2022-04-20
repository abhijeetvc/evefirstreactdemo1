import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import {BrowserRouter,Routes, Route} from 'react-router-dom'

function App() {
  return (
     <div>
       <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
       </ul>

       <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
          </Routes>
       </BrowserRouter>
     </div>
  );
}

export default App;

// abc.com
