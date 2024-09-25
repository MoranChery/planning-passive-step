import '../cssFiles/PassiveForm.css';
import React, { useState, useEffect } from 'react';



const PassiveForm = ({ data, setPassiveDataForm }) => {

    const [checked, setChecked] = useState(false);
    const [formData, setFormData] = useState({
        initialAmount: data.initialAmount,
        profitPercentage: data.profitPercentage,
        taxPercentage: data.taxPercentage,
        monthlyDeposit: 0,
        years : data.years
    });

    useEffect(() => {
        if (data.monthlyDeposit > 0) {
            setFormData({
                ...data,
                monthlyDeposit: data.monthlyDeposit
            })
        }
        else {
            setFormData({
                ...data,
                monthlyDeposit: 0
            })
        }
    }, [data]);

    const [errors, setErrors] = useState({});


    function numberWithCommas(number) {
        if (number) {
            var pattern = /(-?\d+)(\d{3})/;
            let numberStr = (number).toString()
            while (pattern.test(numberStr))
                numberStr = numberStr.replace(pattern, "$1,$2");
            return numberStr;
        }
        else {
            return '';
        }

    }

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
        <div className='house-form'>
            <p className='title'>השקעה פסיבית:</p>
            <div>
                <p className='label-p'>סכום השקעה ראשוני: {numberWithCommas(data.initialAmount)}</p>
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
                    <p className='label-p'>סכום הפקדה חודשי: {numberWithCommas(formData.monthlyDeposit)}</p>
                ) : (
                    <div></div>
                )}
                <div className='field'>
                    <div className="form-group">
                        <label className="inputClass" htmlFor="years">מספר שנים ראשונוצ להשקעה:</label>
                        <input
                            type="text"
                            id="years"
                            name="years"
                            value={formData.years}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.years && <p className="error">{errors.years}</p>}
                </div>
            </div>

        </div>
    );
};

export default PassiveForm;