import './style.css';
import './App.css';

import Login from './Login';
import Register from './Register';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from './Homepage';
import NavBar from './NavBar';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/Sticky-Subscription" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          
          
          
          <Route exact path="/Homepage" element={<Homepage />} />
          <Route exact path="/NavBar" element={<NavBar />} />
          
          
                  
        </Routes>
          
      </Router>
    </div>
  );
}

export default App;
