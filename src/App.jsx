import React from 'react';
import Intro from './components/intro/Intro';
import Nextport from './components/nextPort/Nextport';

function App() {
  return (
    <div className="App">
     <Intro />
     <Nextport className="z-50"/>
    </div>
  );
}

export default App;
