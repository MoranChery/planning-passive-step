import '../cssFiles/ResultTable.css';

const ResultTable = ({formData,formDataPrint, calculation, hasAddPercentage}) => {
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
		<tr>
			<td>הסכום כולל הרווח אחרי {formData.years} שנים</td>
			<td>{formData.profitPercentage}%</td>
			<td>{calculation.totalWithProfit}</td>
		</tr>
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
			<td>הרווח אחרי הורדת מיסים</td>
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
		<tr className='blocker-up'>
			<td>הסכום המצטבר שנשאר</td>
			<td>--</td>
			<td>{calculation.totalAmountEnd}</td>
		</tr>
	</table>
</div>
);
}
export default ResultTable;