
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import {BrowserRouter,Routes, Route, Link} from 'react-router-dom'
import Register from './Register'
import Login from './Login'

function App() {
  return (
     <div>
        <BrowserRouter>
       {/* <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
       </ul> */}

       {/* <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
       </ul> */}

          <Routes>
            <Route path="/" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
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
