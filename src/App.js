import './App.css';
import {useState} from 'react';
import Login from './Login';
import Register from './Register';


function App() {

  const [currentForm, setCurrentForm] = useState('Login');

  const toogleForm = (forName) => {
    setCurrentForm(forName);
  }

  return (
    <div className="App">
      {
        currentForm === 'Login' ? <Login onFormSwitch={toogleForm} /> : <Register onFormSwitch={toogleForm}/>
      }
    </div>
  );
}

export default App;
