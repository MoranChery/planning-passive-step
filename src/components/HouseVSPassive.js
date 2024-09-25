
import '../cssFiles/HouseVSPassive.css';
import React, { useState } from 'react';

import HouseForm from "../components/HouseForm";
import PassiveForm from "../components/PassiveForm";

const HouseVSPassive = () => {
    const [homeData, setHomeData] = useState(
        {
            initialAmount: 150000,
            monthlyRepaymentAmount: 4000,
            monthlyRentalAmount: 4000,
            expectChangeRentYear: 3,
            monthlyRepaymentPeriodYears: 20,
            profitPercentage: 5,
            taxPercentage: 25
        }
    );

    const [passiveData, setPassiveData] = useState(
        {
            initialAmount: 150000,
            profitPercentage: 5,
            taxPercentage: 25,
            monthlyDeposit: 0
        }
    );

    const homeDataChange = (homeDataForm) => {
        let dataChnage = {
            ...homeData,
            initialAmount: homeDataForm.equity,
            monthlyRepaymentAmount: homeDataForm.monthlyRepaymentAmount,
            monthlyRentalAmount: homeDataForm.monthlyRentalAmount,
            expectChangeRentYear: homeDataForm.expectChangeRentYear,
            monthlyRepaymentPeriodYears: homeDataForm.monthlyRepaymentPeriodYears
        };

        let passiveDataChange = {
            ...passiveData,
            initialAmount: homeDataForm.equity,
            monthlyDeposit: (homeDataForm.monthlyRepaymentAmount - homeDataForm.monthlyRentalAmount)
        };

        setHomeData(dataChnage);
        setPassiveData(passiveDataChange);
    };

    const setPassiveDataForm = (passiveDataForm) => {
        setPassiveData(passiveDataForm)
    };

    const handleReset = (e) => {
        let formDataReset = {
            initialAmount: 150000,
            monthlyRepaymentAmount: 4000,
            monthlyRentalAmount: 4000,
            expectChangeRentYear: 3,
            monthlyRepaymentPeriodYears: 20,
            profitPercentage: 5,
            taxPercentage: 25
        };
        let passiveDataReset = {
            initialAmount: 150000,
            profitPercentage: 5,
            taxPercentage: 25,
            monthlyDeposit: 0
        }
        setHomeData(formDataReset);
        setPassiveData(passiveDataReset);
      }
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        // const formErrors = validate();
        // setErrors(formErrors);
        // if (Object.keys(formErrors).length === 0) {
        //   onSubmit(formData);
        // } else {
        //   console.log('Form Error:', formErrors);
        // }
      };

    return (
        <div>
            <div className="form-body">
                <HouseForm data={homeData} setData={homeDataChange}></HouseForm>
                <PassiveForm data={passiveData} setPassiveDataForm={setPassiveDataForm}  ></PassiveForm>
            </div>
            <div className='buttonsHomeVSPassive'>
                <button type='reset' onClick={handleReset}>אתחל מחדש</button>
                <button type="submit" onClick={handleSubmit}>השוואה</button>
            </div>       
        </div>

    );
};

export default HouseVSPassive;