import '../cssFiles/FormExplain.css';

const FormExplain = ({formData,formDataPrint, calculation, hasAddPercentage}) => {
    
    return (
        <div className='form-explain'>
            <label>במידה ותפקידו סכום התחלתי של
                <span className='spanCss'> {formDataPrint.initialAmount} </span>
                ש״ח לתקופה של {formData.years} שנים:
            </label>
            <label>הסכום שהצטבר כולל רווח של {formData.profitPercentage}% שנתי הוא 
                <span className='spanCss'> {calculation.totalWithProfit} </span>ש״ח
            </label>
            <label>בהנחה כי האינפלציה השנתית בישראל היא 
                <span className='spanCss'> {calculation.annualInflationIsraelPercent}% </span>
            </label>
            <label>המטרה היא למשוך את הרווח שיצטבר כאשר הסכום שנשאר הוא כולל את האינפציה, כלומר:</label>
            <label> על הסכום המצטבר של {calculation.totalWithProfit} יש אינפלציה של
                <span className='spanCss'> {calculation.annualInflationIsraelTotal}</span> ש״ח
            </label>
            <label>הרווח אחרי חישוב אינפלציה הוא :
                <span className='spanCss'> {calculation.profitAfterInflation}</span> ש״ח
            </label>
            <label>במידה ומושכים  
                <span className='spanCss'> {formData.partialWithdrawalPercentage}% 
                </span> מהרווח, הסכום שהתקבל הוא
                <span className='spanCss'> {calculation.partialWithdrawalAmount}</span>
            </label>
            <label>כאשר מושכים את הרווח שהצטבר יש מס של 
                <span> {formDataPrint.taxPercentage}</span> ,כלומר המס הוא:
                <span className='spanCss'> {calculation.taxAmount}</span> ש״ח
            </label>
            <label> הרווח הכולל שהתקבל הוא
                <span className='spanCss'> {calculation.totalAfterTax}</span> ש״ח אחרי מיסים ואינפלציה.
            </label>
            <label>ניתן לקבל מסכום זה קצבה חודשית של 
                <span className='spanCss'> {calculation.monthlyAmount} </span>ש״ח למשך {formData.years} שנים. 
            </label>
            {hasAddPercentage &&
                <div>
                    <label>במידה ותרצו לקחת {formData.addPercentage}% מראש מהרווח, שזה סכום של 
                        <span className='spanCss'> {calculation.addPercentageAmount} </span> ש״ח
                    </label>
                <label>הסכום שישאר הוא 
                    <span className='spanCss'> {calculation.totalAfterAddPercentage} </span>ש״ח למשך {formData.years} שנים. 
                </label>
                <label>אז הסכום שיהיה ניתן לקבל כקצבה חודשית הוא 
                    <span className='spanCss'> {calculation.monthlyAmountAfterAddPercentage} </span> ש״ח
                </label>
            </div>
            }
            <label>הסכום שנישאר בחסכון, אותו ניתן להפקיד שוב ל-{formData.years} שנים הבאות:
                <span className='spanCss'> {calculation.totalAmountEnd} </span>ש״ח.
            </label>
        </div>
    )
}
export default FormExplain;