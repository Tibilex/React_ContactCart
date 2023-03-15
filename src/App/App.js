import { useState, useEffect } from 'react';
import './App.css';

function App() {
  //let [str, setName] = useState('choisedDate');

  const [ datetime, setDatetime ] = useState('');

  function Data(event){
    console.log(datetime);
    fetch('http://localhost:8080/setDate?localDate=' + datetime, {

      method: 'POST', 
      mode: 'cors', 
    }).then(
      (result) => {
        console.log(result.body);
      });
  }

  function handleChange(ev) {
    if (!ev.target['validity'].valid) return;
    const dt= ev.target['value'];
    setDatetime(dt);
  }

  return (
    <div className="App">
        <label> User name: </label>
        <input className='choisedDate' type="date" onChange={handleChange} name="user_name"/>
        <button type="submit" onClick={Data}>Go</button>
    </div>
  );
}

export default App;