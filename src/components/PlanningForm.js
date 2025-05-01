import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../cssFiles/PlanningForm.css';

const PlanningForm = ({ onSubmit }) => {
  
  const [formData, setFormData] = useState(setInitData());

  const [checked, setChecked] = React.useState(false);
  const [checkdOpt, setCheckedOpt] = React.useState(false);
  const [checkdInflation, setCheckedInflation] = React.useState(false);

  const [errors, setErrors] = useState({});

  function setInitData(){
    let data = window.sessionStorage.getItem("formData");
    let initFormData = {
      initialAmount: '100000',
      profitPercentage: '5',
      years: '5',
      inflation: '3',
      monthlyDepositAmount: '1000',
      addPercentage: '0',
      taxPercentage: '25',
      partialWithdrawalPercentage: '90',
    };
    if(data){
      initFormData = JSON.parse(data);
    }
    return initFormData;
  }

  useEffect(() => {
    onSubmit(formData);
 },[]);

  const handleSelect = () => {
    if(!checked){
      setErrors({...errors,profitPercentage:"" })
    }
    setFormData({ ...formData, profitPercentage: "5" });
    setChecked(!checked);
  };

  const handleChangeOpt = () => {
    if(!checkdOpt){
      setErrors({...errors,partialWithdrawalPercentage:"" });
    }
    setFormData({ ...formData, partialWithdrawalPercentage: "100" });
    setCheckedOpt(!checkdOpt);
  };


  const handleChangeInflation = () => {
    if(!checkdInflation){
      setErrors({...errors,inflation:"" });
    }
    setFormData({ ...formData, inflation: "3" });
    setCheckedInflation(!checkdInflation);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form data
  const validate = () => {
    const newErrors = {};
    if (!/^\d+$/.test(formData.initialAmount)) newErrors.initialAmount = 'סכום התחלתי חייב להיות גדול מ-0 וחייב להיות מספר שלם , לא ניתן לשים מספר עשרוני';
    if (!/^\d+$/.test(formData.monthlyDepositAmount)) newErrors.monthlyDepositAmount = 'סכום הפקדה חודשית חייב להיות מספר שלם, לא ניתן לשים מספר עשרוני';
    if (!/^\d+(\.\d+)?$/.test(formData.profitPercentage) && !checked) newErrors.profitPercentage = 'יש למלא את אחוז הרווח המצופה או לבחור בערך ברחרת מחדל';
    if (!/^\d+(\.\d+)?$/.test(formData.inflation) && !checkdInflation) newErrors.inflation = 'יש למלא את אחוז האינפלציה הצפויה או לבחור בערך ברחרת מחדל';
    if (!/^\d+$/.test(formData.years)) newErrors.years = 'מספר השנים חייב להיות מספר שלם גדול מ-0';
    if (!/^\d+(\.\d+)?$/.test(formData.partialWithdrawalPercentage) && !checkdOpt) newErrors.partialWithdrawalPercentage = 'יש לשים מספר בין 1 ל 100 או לבחור את הללא בחירה';
    if (!/^\d+(\.\d+)?$/.test(formData.taxPercentage)) newErrors.taxPercentage = 'חייבים לציין את אחוז המס הצפוי';
    if (formData.addPercentage && !/^\d+(\.\d+)?%$/.test(formData.addPercentage) && !/^\d+$/.test(formData.addPercentage)) newErrors.addPercentage = 'ניתן לשים מספר בין 1 ל-100';
    return newErrors;
  };

  const handleReset = (e) => {
    let formDataReset = {
      initialAmount: '100000',
      profitPercentage: '5',
      years: '5',
      inflation: '3',
      monthlyDepositAmount: '1000',
      addPercentage: '0',
      taxPercentage: '25',
      partialWithdrawalPercentage: '90'
    };
    setFormData(formDataReset);
    setErrors({});
    setChecked(false);
    setCheckedOpt(false);
    setCheckedInflation(false);
    onSubmit(formDataReset);
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      window.sessionStorage.setItem("formData", JSON.stringify(formData));
      onSubmit(formData);
    } else {
      console.log('Form Error:', formErrors);
    }
  };

  return (
    <form className="planning-form" onSubmit={handleSubmit} onReset={handleReset}>
      <div className='field'>
        <div className="form-group">
          <label className="inputClass" htmlFor="initialAmount">סכום התחלתי:</label>
          <input
            type="number"
            id="initialAmount"
            name="initialAmount"
            value={formData.initialAmount}
            onChange={handleChange}
          />
        </div>
        {errors.initialAmount && <p className="error">{errors.initialAmount}</p>}
      </div>

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
          <label className="inputClass" htmlFor="years">מספר שנים:</label>
          <input
            type="number"
            id="years"
            name="years"
            value={formData.years}
            onChange={handleChange}
          />
        </div>
        {errors.years && <p className="error">{errors.years}</p>}
      </div>

      <div className='field'>
        <div className="form-group">
          <label className="inputClass" htmlFor="inflation">אחוז האינפלציה השנתית הצפויה:</label>
          <input
            type="text"
            id="inflation"
            name="inflation"
            value={formData.inflation}
            disabled={checkdInflation}
            onChange={handleChange}
            placeholder="x.y%"
          />

        </div>
        <div>
          <label className='checkboxLabel'>
            <input
              type="checkbox"
              checked={checkdInflation}
              onChange={handleChangeInflation}
            /> בחר ערך ברירת מחדל
          </label>
        </div>
        {errors.inflation && <p className="error">{errors.inflation}</p>}
      </div>

      <div className='field'>
        <div className="form-group">
          <label className="inputClass" htmlFor="monthlyDepositAmount">סכום הפקדה חודשית:</label>
          <input
            type="number"
            id="monthlyDepositAmount"
            name="monthlyDepositAmount"
            value={formData.monthlyDepositAmount}
            onChange={handleChange}
          />
        </div>
        {errors.monthlyDepositAmount && <p className="error">{errors.monthlyDepositAmount}</p>}
      </div>

      <div className='field'>
        <div className="form-group">
          <label className="inputClass" >אחוז נוסף למשיכה:</label>
          <input
            type="text"
            name="addPercentage"
            value={formData.addPercentage}
            onChange={handleChange}
            placeholder="Fixed number or x.y%"
          />
        </div>
        {errors.addPercentage && <p className="error">{errors.addPercentage}</p>}
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

      <div className='field'>
        <div className="form-group">
          <label className="inputClass" htmlFor="partialWithdrawalPercentage">אחוז המשיכה מתוך הרווח :</label>
          <input
            type="text"
            id="partialWithdrawalPercentage"
            name="partialWithdrawalPercentage"
            value={formData.partialWithdrawalPercentage}
            onChange={handleChange}
            placeholder="x.y%"
            disabled={checkdOpt}
          />
        </div>
        <div>
          <label className='checkboxLabel'>
            <input 
              type="checkbox"
              checked={checkdOpt}
              onChange={handleChangeOpt} />ללא בחירה
          </label>
        </div>
        {errors.partialWithdrawalPercentage && <p className="error">{errors.partialWithdrawalPercentage}</p>}
      </div>
      <div className='buttons'>
        <button type="submit">חשב</button>
        <button type='reset'>אתחל מחדש</button>
      </div>
      
    </form>
  );
};

PlanningForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PlanningForm;
