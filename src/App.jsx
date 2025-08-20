import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import QuickLinks from './components/QuickLinks';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const quickLinksData = [/* Your QuickLinks data here */];

  const filteredLinks = quickLinksData.filter(link =>
    link.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="main-content">
        <QuickLinks links={filteredLinks} searchTerm={searchTerm} />
      </main>
    </div>
  );
}

export default App;
