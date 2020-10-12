import React from 'react';
import './App.css';
// Components
import Route from './Route'
import Nav from './Components/Nav'
import {ShoesCartList} from './Components/Context'


function App() {
  return (
    <ShoesCartList>
          <div className="App">
      <Nav/>
      <br/> <br />
        <Route/>
    </div>
    </ShoesCartList>

  );
}

export default App;
