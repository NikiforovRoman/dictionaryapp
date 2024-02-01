import {React, useState} from 'react';
import './App.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="app">
      <Header theme={theme} setTheme={setTheme} />
      <Main theme={theme} />
    </div>
  );
}

export default App;
