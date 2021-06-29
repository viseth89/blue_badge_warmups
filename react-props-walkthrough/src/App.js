import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import View from './components/View'

function App() {
  // Creating the state needed
  const [name, setName] = useState("Austin")
  const [age, setAge] = useState(25)
  const [hobbies, setHobbies] = useState("Skating")

  function updateName(e){
    setName(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
      {/* View */}

      <View name = {name} age={age} hobbies={hobbies} />
      {/* Input */}

      </header>
    </div>
  );
}


export default App;
