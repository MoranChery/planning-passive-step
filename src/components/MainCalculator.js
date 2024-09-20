import PlanningForm from '../components/PlanningForm.js';
import ResultForm from '../components/ResultForm.js';
import '../cssFiles/MainCalculator.css';
import React, { useState } from 'react';

const MainCalculator = () => {
    const [formData, setFormData] = useState({}); 

  const handleSubmit = (data) => {
    setFormData(data);
  };

    return (
        <div className="form-body">
            <PlanningForm onSubmit={handleSubmit} />
            <ResultForm formData={formData}></ResultForm>
        </div>
    );
};

export default MainCalculator;