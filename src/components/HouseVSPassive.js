
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
            taxPercentage: 25,
            monthlyDeposit: 0
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
            initialAmount: homeDataForm.equity,
            monthlyDeposit: (homeDataForm.monthlyRepaymentAmount - homeDataForm.monthlyRentalAmount)
        };

        setData(dataChnage);
        setPassiveData(passiveDataChange);
    };

    const setPassiveDataForm = (passiveDataForm) => {
        setPassiveData(passiveDataForm)
    };

    return (
        <div>
            <div className="form-body">
                <HouseForm setData={homeDataChange}></HouseForm>
                <PassiveForm data={passiveData} setPassiveDataForm={setPassiveDataForm}  ></PassiveForm>
            </div>
            <div className='buttonsHomeVSPassive'>
                <button type='reset'>אתחל מחדש</button>
                <button type="submit">השוואה</button>
            </div>       
        </div>

    );
};

export default HouseVSPassive;