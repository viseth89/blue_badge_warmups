import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // Creating the state needed
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [hobbies, setHobbies] = useState()

  function updateName(e){
    setName(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
      <h3>     {name } </h3>
      <form>
        <label>Name:</label>
        <input onChange={(e) => updateName(e)}></input>

      </form>
      </header>
    </div>
  );
}


export default App;
