import React from 'react';
import './App.css';
import FavoriteMovie from './components/FavoriteMovie';
import PersonalPage from './components/PersonalInformation';
import Pet from './components/Pet';
import Time from './components/Time';

function App() {
  return (
    <div className="App">
      <FavoriteMovie/>
      <PersonalPage/>
      <Pet/>
      {/* <Time/> */}
    </div>
  );
}

export default App;