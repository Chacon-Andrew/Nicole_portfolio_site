import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar';
import FREO from './Pages/FREO';
import Home from './Pages/Home';

function App() {
  
  return (
    <div style={{overflowX: 'hidden'}}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/FREO' element={<FREO/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
