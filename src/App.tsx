import React from 'react';
import Octocat from './img/Octocat.png';
import './App.css';
import CommitsContainer from './pages/main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <header className="App-header ">
            <img src={Octocat} alt="logo Github" />
            <h2>All my commits</h2>
        </header>
        <CommitsContainer />
    </div>
  );
}

export default App;
