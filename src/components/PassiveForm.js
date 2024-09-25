import '../cssFiles/PassiveForm.css';
import React, { useState, useEffect } from 'react';



const PassiveForm = ({ data, setPassiveDataForm }) => {

    const [checked, setChecked] = React.useState(false);
    const [formData, setFormData] = useState({
        initialAmount: data.initialAmount,
        profitPercentage: data.profitPercentage,
        taxPercentage: data.taxPercentage, 
        monthlyDeposit : 0
    });

    useEffect(() => {
        if(data.monthlyDeposit > 0 ){
            setFormData({
                ...formData,
                monthlyDeposit: data.monthlyDeposit
            })
        }
     },[data]);

    const [errors, setErrors] = useState({});

    const handleSelect = () => {
        if (!checked) {
            setErrors({ ...errors, profitPercentage: "" })
        }
        let dataForm = {
            ...formData,
            profitPercentage: 5
        };
        setFormData(dataForm);
        setPassiveDataForm(dataForm);
        setChecked(!checked);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        let dataForm = {
            ...formData,
            [name]: value,
        };
        setFormData(dataForm)
        setPassiveDataForm(dataForm);
    };

    return (
        <div>
            <p className='title'>השקעה פסיבית:</p>
            <div className='house-form'>
                <p className='label-p'>סכום השקעה ראשוני: {data.initialAmount}</p>
                <div className='field'>
                    <div className="form-group">
                        <label className="inputClass" htmlFor="profitPercentage">אחוז הרווח השנתי הצפוי:</label>
                        <input
                            type="text"
                            id="profitPercentage"
                            name="profitPercentage"
                            value={formData.profitPercentage}
                            disabled={checked}
                            onChange={handleChange}
                            placeholder="x.y%"
                        />

                    </div>
                    <div>
                        <label className='checkboxLabel'>
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={handleSelect}
                            /> בחר ערך ברירת מחדל
                        </label>
                    </div>
                    {errors.profitPercentage && <p className="error">{errors.profitPercentage}</p>}
                </div>
                <div className='field'>
                    <div className="form-group">
                        <label className="inputClass" htmlFor="taxPercentage">אחוז מס צפוי:</label>
                        <input
                            type="text"
                            id="taxPercentage"
                            name="taxPercentage"
                            value={formData.taxPercentage}
                            onChange={handleChange}
                            placeholder="Fixed number or x.y%"
                        />
                    </div>
                    {errors.taxPercentage && <p className="error">{errors.taxPercentage}</p>}
                </div>
                {formData.monthlyDeposit > 0 ? (
                    <p className='label-p'>סכום הפקדה חודשי: {formData.monthlyDeposit}</p>
                ):(
                    <div></div>
                )}
            </div>

        </div>
    );
};

export default PassiveForm;