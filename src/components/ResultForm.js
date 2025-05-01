import React, { useEffect, useState } from 'react';
import '../cssFiles/ResultForm.css';
import FormExplain from './FormExplain.js';
import ResultTable from './ResultTable.js';

const ResultForm = ({ formData }) => {
    const [formDataPrint, setFormDataPrint] = useState({});
    const [calculation, setCalculation] = useState({});
    const [hasAddPercentage, setHasAddPercentage] = useState(false);
    const [hasMonthlyDepositAmount, setHasMonthlyDepositAmount] = useState(false);

    function numberWithCommas(numberStr) {
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(numberStr))
            numberStr = numberStr.replace(pattern, "$1,$2");
        return numberStr;
    }

    useEffect(() => {
        const calculator= () => {
            var initialAmountInt = parseInt(formData.initialAmount, 10);
            var yearsInt = parseInt(formData.years, 10);
            var profitPercentageInt = parseFloat(formData.profitPercentage, 10);
            let mathPow = Math.pow(((100+profitPercentageInt)/100), yearsInt);
            let totalWithProfit =initialAmountInt * mathPow;    
            let totalWithProfitFormat = numberWithCommas((Math.round(totalWithProfit * 100) / 100).toString());
            let initProfit = totalWithProfit-initialAmountInt;
            let initProfitFormat = numberWithCommas((Math.round(initProfit * 100) / 100).toString());
            let annualInflationIsraelPercent = parseFloat(formData.inflation, 10);
            let annualInflationIsraelTotal =  (initialAmountInt *(annualInflationIsraelPercent/100) * (mathPow-1))/ (((100+profitPercentageInt)/100)-1);
            let annualInflationIsraelTotalFormat = numberWithCommas((Math.round(annualInflationIsraelTotal * 100) / 100).toString());

            let profitAfterInflation = (totalWithProfit - annualInflationIsraelTotal - initialAmountInt);
            let profitAfterInflationFormat = numberWithCommas((Math.round(profitAfterInflation * 100) / 100).toString());
            
            let partialWithdrawalAmount = profitAfterInflation * parseInt(formData.partialWithdrawalPercentage, 10)/100;
            let partialWithdrawalAmountFormat = numberWithCommas((Math.round(partialWithdrawalAmount * 100) / 100).toString());

            let taxAmount = (partialWithdrawalAmount)*parseInt(formData.taxPercentage, 10)/100;
            let taxAmountFormat = numberWithCommas((Math.round(taxAmount * 100) / 100).toString());

            let totalAfterTax = partialWithdrawalAmount - taxAmount;
            let totalAfterTaxFormat = numberWithCommas((Math.round(totalAfterTax * 100) / 100).toString());

            let monthlyAmount = totalAfterTax/(yearsInt*12);
            let monthlyAmountFormat = numberWithCommas((Math.round(monthlyAmount * 100) / 100).toString());

            let addPercentageAmountFormat = "";
            let totalAfterAddPercentageFormat = "";
            let monthlyAmountAfterAddPercentageFormat ="";

            if(parseInt(formData.addPercentage, 10) > 0){
                setHasAddPercentage(true);
                let addPercentageAmount = totalAfterTax * parseInt(formData.addPercentage, 10)/100;
                addPercentageAmountFormat = numberWithCommas((Math.round(addPercentageAmount * 100) / 100).toString());
                let totalAfterAddPercentage = totalAfterTax - addPercentageAmount;
                totalAfterAddPercentageFormat = numberWithCommas((Math.round(totalAfterAddPercentage * 100) / 100).toString());
                let monthlyAmountAfterAddPercentage = totalAfterAddPercentage/(yearsInt*12);
                monthlyAmountAfterAddPercentageFormat = numberWithCommas((Math.round(monthlyAmountAfterAddPercentage * 100) / 100).toString());
            }
            else {
                setHasAddPercentage(false);
            }
            let monthlyDepositAmount = parseFloat(formData.monthlyDepositAmount || 0);
            let totalWithProfitIncludingDepositsFormat= 0;
            let totalYearslyDepositFormat= '';
            let depositProfitFormat = '';
            let totalProfitWithMonthFormat= '';
            let totalProfitFormat= '';
            if(monthlyDepositAmount > 0 ){
                let yearlyDeposit = monthlyDepositAmount * 12;
                let depositProfit = 0;
                if (yearlyDeposit > 0 && profitPercentageInt > 0) {
                    depositProfit = yearlyDeposit * ((Math.pow(((100 + profitPercentageInt) / 100), yearsInt) - 1) / ((profitPercentageInt) / 100));
                }
                
                setHasMonthlyDepositAmount(true);
                totalProfitWithMonthFormat = numberWithCommas((Math.round(depositProfit * 100) / 100).toString());
                let totalWithProfitIncludingDeposits = totalWithProfit + depositProfit;
                totalWithProfitIncludingDepositsFormat = numberWithCommas((Math.round(totalWithProfitIncludingDeposits * 100) / 100).toString());
                let totalYearslyDeposit = yearsInt * yearlyDeposit;
                totalYearslyDepositFormat = numberWithCommas((Math.round(totalYearslyDeposit * 100) / 100).toString());
                depositProfit = depositProfit-totalYearslyDeposit;
                depositProfitFormat = numberWithCommas((Math.round(depositProfit * 100) / 100).toString());
                let totalProfit = initProfit+depositProfit;
                totalProfitFormat = numberWithCommas((Math.round(totalProfit * 100) / 100).toString());
            }
            else{ 
                setHasMonthlyDepositAmount(false);
            }
            

            return {
                totalWithProfit: totalWithProfitFormat,
                initProfit: initProfitFormat,
                annualInflationIsraelPercent : annualInflationIsraelPercent,
                annualInflationIsraelTotal: annualInflationIsraelTotalFormat,
                profitAfterInflation: profitAfterInflationFormat,
                taxAmount: taxAmountFormat,
                totalAfterTax: totalAfterTaxFormat,
                partialWithdrawalAmount: partialWithdrawalAmountFormat,
                monthlyAmount: monthlyAmountFormat,
                addPercentageAmount: addPercentageAmountFormat,
                totalAfterAddPercentage: totalAfterAddPercentageFormat,
                monthlyAmountAfterAddPercentage: monthlyAmountAfterAddPercentageFormat,
                totalWithProfitIncludingDeposits: totalWithProfitIncludingDepositsFormat,
                totalYearslyDepositFormat: totalYearslyDepositFormat,
                depositProfit: depositProfitFormat,
                totalProfitWithMonth: totalProfitWithMonthFormat,
                totalProfit: totalProfitFormat
            }
        };


        let initialAmountFormat = "0";
        if (formData.initialAmount){
            initialAmountFormat = numberWithCommas(formData.initialAmount);
        }
        setFormDataPrint({
            initialAmount: initialAmountFormat,
            taxPercentage : formData.taxPercentage+"%"
         })
         let dataCal = calculator();
         setCalculation(dataCal);
    }, [formData]);

    
    return (
        <div className='result-form'>
            <label className='formExplainLabel'> תוצאה:</label>
            <ResultTable
                formData={formData}
                formDataPrint={formDataPrint}
                calculation={calculation}
                hasAddPercentage={hasAddPercentage}
                hasMonthlyDepositAmount={hasMonthlyDepositAmount}>
            </ResultTable>
            <label className='formExplainLabel'> הסבר:</label>
            <FormExplain
                formData={formData}
                formDataPrint={formDataPrint}
                calculation={calculation}
                hasAddPercentage={hasAddPercentage}
                hasMonthlyDepositAmount={hasMonthlyDepositAmount}>
            </FormExplain>
        </div>
    )
}
export default ResultForm;