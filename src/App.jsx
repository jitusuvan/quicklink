import React from 'react';
import './App.css';
import Header from './components/Header';
import QuickLinks from './components/QuickLinks';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <QuickLinks />
      </main>
    </div>
  );
}

export default App;
