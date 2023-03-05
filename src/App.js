import './App.css';

import Login from './Login';
import Register from './Register';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
    
    <div className="App">
      <Router>
        <Routes>
        <Route path="/Sticky-Subscription" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
        

        </Routes>
        
    
    </Router>
      {/* {
        currentForm === 'Login' ? <Login onFormSwitch={toogleForm} /> : <Register onFormSwitch={toogleForm}/>
      } */}
    </div>
  );
}

export default App;
