import logo from './money-graph-with-up-arrow.png';
import './cssFiles/App.css';
import PlanningForm from './components/PlanningForm.js';
import ResultForm from './components/ResultForm.js';
import AboutMe from './components/AboutMe.js';

import React, { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({}); 

  const handleSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p> תכנון הצעד הפסיבי </p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div class="sidenav">
        <AboutMe></AboutMe>
      </div>
      <body>
        <PlanningForm onSubmit={handleSubmit} />
        <ResultForm formData={formData}></ResultForm>
      </body>
    </div>
  );
}

export default App;
