
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
            monthlyDeposit: 0,
            years : 1
        }
    );

    const [calculatorHome, setCalculatorHome ] = useState([]);
    const [calculatorPassive, setCalculatorPassive ] = useState([]);

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
            monthlyDeposit: 0,
            years : 1
        }
        setHomeData(formDataReset);
        setPassiveData(passiveDataReset);
    };

    const calculatorHomeStep = () => {
        let calculatorHomeData = [];
        for (let month= 0; month < (homeData.monthlyRepaymentPeriodYears*12) ; month++){
            let row = {}
            if(month === 0){
                row = {
                    monthNum : month, 
                    totalInvestmentAmount: homeData.initialAmount,
                    monthlyRepaymentAmount : 0,
                    monthlyIncome: 0,
                }
            }
            else if(month === 1){
                row = {
                    monthNum : month, 
                    totalInvestmentAmount: homeData.initialAmount + parseInt(homeData.monthlyRepaymentAmount, 10),
                    monthlyRepaymentAmount : parseInt(homeData.monthlyRepaymentAmount, 10),
                    monthlyRentalAmount : parseInt(homeData.monthlyRentalAmount, 10),
                    monthlyIncome: parseInt(homeData.monthlyRepaymentAmount, 10) - parseInt(homeData.monthlyRentalAmount, 10)
                }
            }
            else {
                let calMonthlyRentalAmount = calculatorHomeData[month-1].monthlyRentalAmount; 
                if((month-1)%12 === 0 && month > 1){
                    calMonthlyRentalAmount = calculatorHomeData[month-1].monthlyRentalAmount * (1+(homeData.expectChangeRentYear/100)); 
                }
                row = {
                    monthNum : month, 
                    totalInvestmentAmount: calculatorHomeData[month-1].totalInvestmentAmount + calculatorHomeData[month-1].monthlyRepaymentAmount,
                    monthlyRepaymentAmount : calculatorHomeData[month-1].monthlyRepaymentAmount,
                    monthlyRentalAmount : calMonthlyRentalAmount,
                    monthlyIncome: calMonthlyRentalAmount - calculatorHomeData[month-1].monthlyRepaymentAmount
                }
            }
            calculatorHomeData.push(row);
        }
        setCalculatorHome(calculatorHomeData);
    }

    const calculatorPassiveStep = () => {

    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        calculatorHomeStep();
        console.log(calculatorHome);
        calculatorPassiveStep();
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