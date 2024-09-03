import React, { useEffect, useState } from 'react';
import '../cssFiles/ResultForm.css';
import FormExplain from './FormExplain.js';
import ResultTable from './ResultTable.js';

const ResultForm = ({ formData }) => {
    const [formDataPrint, setFormDataPrint] = useState({});
    const [calculation, setCalculation] = useState({});
    const [hasAddPercentage, setHasAddPercentage] = useState(false);

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
            let annualInflationIsraelPercent = 3;
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

            let totalAmountEnd = totalWithProfit -partialWithdrawalAmount ;
            let totalAmountEndFormat = numberWithCommas((Math.round(totalAmountEnd * 100) / 100).toString());

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
    
            return {
                totalWithProfit: totalWithProfitFormat,
                annualInflationIsraelPercent : annualInflationIsraelPercent,
                annualInflationIsraelTotal: annualInflationIsraelTotalFormat,
                profitAfterInflation: profitAfterInflationFormat,
                taxAmount: taxAmountFormat,
                totalAfterTax: totalAfterTaxFormat,
                partialWithdrawalAmount: partialWithdrawalAmountFormat,
                monthlyAmount: monthlyAmountFormat,
                totalAmountEnd: totalAmountEndFormat,
                addPercentageAmount: addPercentageAmountFormat,
                totalAfterAddPercentage: totalAfterAddPercentageFormat,
                monthlyAmountAfterAddPercentage: monthlyAmountAfterAddPercentageFormat
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
         setCalculation(calculator());
    }, [formData]);

    
    return (
        <div className='result-form'>
            <label className='formExplainLabel'> תוצאה:</label>
            <ResultTable
                formData={formData}
                formDataPrint={formDataPrint}
                calculation={calculation}
                hasAddPercentage={hasAddPercentage}>
            </ResultTable>
            <label className='formExplainLabel'> הסבר:</label>
            <FormExplain
                formData={formData}
                formDataPrint={formDataPrint}
                calculation={calculation}
                hasAddPercentage={hasAddPercentage}>
            </FormExplain>
        </div>
    )
}
export default ResultForm;