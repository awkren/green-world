import React from 'react';
import './App.css';
import Header from './page-structure/Header';
import SecondSection from './page-structure/SecondSection';
import UpperSection from './page-structure/UpperSection';
import Footer from './page-structure/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <UpperSection/>
      <SecondSection/>
      <Footer/>
    </div>
  );
}

export default App;
