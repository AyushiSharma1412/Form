import React from 'react';
import Navbar from './Navbar';
import Form from './Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>Welcome to My Website</h1>
        <Form />
      </div>
    </div>
  );
}

export default App;
