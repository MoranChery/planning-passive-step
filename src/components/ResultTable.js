import '../cssFiles/ResultTable.css';

const ResultTable = ({formData,formDataPrint, calculation, hasAddPercentage, hasMonthlyDepositAmount}) => {
return (
<div className="tableCss">
	<table>
		<tr>
			<th></th>
			<th>אחוז</th>
			<th>סכום (ש״ח)</th>
		</tr>
		<tr>
			<td>סכום התחלתי</td>
			<td>--</td>
			<td>{formDataPrint.initialAmount}</td>
		</tr>
		{hasMonthlyDepositAmount &&
		<tr>
			<td>רווח על הסכום ההתחלתי</td>
			<td>--</td>
			<td>{calculation.initProfit}</td>
		</tr>
		}
		<tr>
			<td>הסכום כולל הרווח אחרי {formData.years} שנים (ללא הפקדה)</td>
			<td>{formData.profitPercentage}%</td>
			<td>{calculation.totalWithProfit}</td>
		</tr>
		{hasMonthlyDepositAmount &&
		<tr className='blocker-up'>
			<td>סכום הפקדה חודשית כוללת ל-{formData.years} שנים</td>
			<td>--</td>
			<td>{calculation.totalYearslyDepositFormat}</td>
		</tr>
		}
		{hasMonthlyDepositAmount &&
		<tr>
			<td>הרווח על ההפקדות החודשיות</td>
			<td>--</td>
			<td>{calculation.depositProfit}</td>
		</tr>
		}
		{hasMonthlyDepositAmount &&
		<tr>
			<td>הסכום כולל הפקדות חודשיות והרווח</td>
			<td>--</td>
			<td>{calculation.totalProfitWithMonth}</td>
		</tr>
		}
		{hasMonthlyDepositAmount &&
		<tr className='blocker-up'>
			<td> רווח כולל</td>
			<td>--</td>
			<td>{calculation.totalProfit}</td>
		</tr>
		}
		{hasMonthlyDepositAmount &&
		<tr>
			<td>סכום כולל</td>
			<td>--</td>
			<td>{calculation.totalWithProfitIncludingDeposits}</td>
		</tr>
		}
		<tr className='blocker-up'>
			<td>אינפלציה</td>
			<td>{calculation.annualInflationIsraelPercent}% </td>
			<td>{calculation.annualInflationIsraelTotal}</td>
		</tr>
        <tr>
			<td>הרווח אחרי הורדת האינפלציה</td>
			<td>--</td>
			<td>{calculation.profitAfterInflation}</td>
		</tr>
		<tr className='blocker-up'>
			<td>משיכת הרווח</td>
			<td>{formData.partialWithdrawalPercentage}%</td>
			<td>{calculation.partialWithdrawalAmount}</td>
		</tr>
		<tr>
			<td>מס על הרווח</td>
			<td>{formDataPrint.taxPercentage}</td>
			<td>{calculation.taxAmount}</td>
		</tr>
		<tr>
			<td>הרווח אחרי הורדת מיסים ואינפלציה</td>
			<td>--</td>
			<td>{calculation.totalAfterTax}</td>
		</tr>
		<tr>
			<td>קצבה חודשית ל-{formData.years} שנים</td>
			<td>--</td>
			<td>{calculation.monthlyAmount}</td>
		</tr>
		{hasAddPercentage &&
		<tr className='blocker-up'>
			<td>משיכה אחוז מראש מהרווח</td>
			<td>{formData.addPercentage}%</td>
			<td>{calculation.addPercentageAmount}</td>
		</tr>
		}
		{hasAddPercentage &&
		<tr>
			<td>הסכום אחרי משיכה חלקית של הרווח </td>
			<td>--</td>
			<td>{calculation.totalAfterAddPercentage}</td>
		</tr>
		}
		{hasAddPercentage &&
		<tr>
			<td>קצבה חודשית אחרי הורדת המשיכה מראש</td>
			<td>--</td>
			<td>{calculation.monthlyAmountAfterAddPercentage}</td>
		</tr>
		}
	</table>
</div>
);
}
export default ResultTable;