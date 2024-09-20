import '../cssFiles/PassiveForm.css';
import React, { useState } from 'react';



const PassiveForm = ({setData}) => {
    const [formData, setFormData] = useState({});

    const handleChange = (data) => {

    };

    return (
    <div>
        <p className='title'>השקעה פסיבית:</p>
    </div>    
    );
};

export default PassiveForm;