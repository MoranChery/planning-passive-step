
import '../cssFiles/HouseVSPassive.css';
import React, { useState } from 'react';

import HouseForm from "../components/HouseForm";
import PassiveForm from "../components/PassiveForm";

const HouseVSPassive = () => {
    const [data, setData] = useState(
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
            taxPercentage: 25
        }
    );

    const homeDataChange = (homeDataForm) => {
        let dataChnage = {
            ...data,
            initialAmount: homeDataForm.equity,
            monthlyRepaymentAmount: homeDataForm.monthlyRepaymentAmount,
            monthlyRentalAmount: homeDataForm.monthlyRentalAmount,
            expectChangeRentYear: homeDataForm.expectChangeRentYear,
            monthlyRepaymentPeriodYears: homeDataForm.monthlyRepaymentPeriodYears
        };

        let passiveDataChange = {
            ...passiveData,
            initialAmount: homeDataForm.equity
        };

        setData(dataChnage);
        setPassiveData(passiveDataChange);
    };

    const setPassiveDataForm = (passiveDataForm) => {
        
    };

    return (
        <div className="form-body">
            <HouseForm setData={homeDataChange}></HouseForm>
            <PassiveForm data={passiveData} setPassiveDataForm={setPassiveDataForm}  ></PassiveForm>
        </div>
    );
};

export default HouseVSPassive;