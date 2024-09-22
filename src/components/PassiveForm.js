import '../cssFiles/PassiveForm.css';
import React, { useState } from 'react';



const PassiveForm = ({ data }) => {

    const [checked, setChecked] = React.useState(false);
    const [formData, setFormData] = useState({
        initialAmount: '100000',
        profitPercentage: '5',
        years: '5',
        addPercentage: '10',
        taxPercentage: '25',
        partialWithdrawalPercentage: '90',
    });

    const [errors, setErrors] = useState({});

    const handleSelect = () => {
        if (!checked) {
            setErrors({ ...errors, profitPercentage: "" })
        }
        setFormData({ ...formData, profitPercentage: "5" });
        setChecked(!checked);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
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
            </div>

        </div>
    );
};

export default PassiveForm;