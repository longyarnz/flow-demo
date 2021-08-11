import React from 'react';
import './App.css';
import RenderCustomFlow from './custom_flow/RenderCustomFlow'
import Sidebar from './custom_flow/Sidebar';

function App() {
  return (
    <div className="App">
      <RenderCustomFlow />
      <Sidebar />
    </div>
  );
}

export default App;
