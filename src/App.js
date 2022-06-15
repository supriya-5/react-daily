
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigationbar from './component/day5/navigationbar';
import Home from './component/day5/home';
import About from './component/day5/about';
import Contact from './component/day5/contact';
import Notfound from './component/day5/not found';
import LandingPage from './component/day5/landingpage';

function App() {
   
 
  return(
  
     <div className="App">
  <BrowserRouter>
  <Navigationbar/>
  <Routes>
    <Route path="/" element ={<LandingPage/>}/>
    <Route path = "/Home" element={<Home/>}/>
    <Route path = "/about" element={<About/>}/>
    <Route path = "/contact" element={<Contact/>}/>
    <Route path = "*" element={<Notfound/>}/>

  </Routes>
  
  </BrowserRouter>
     </div>
  )
}

export default App;
