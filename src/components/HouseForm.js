import '../cssFiles/HouseForm.css';
import React, { useState, useEffect } from 'react';



const HouseForm = ({ data, setData }) => {
    const [formData, setFormData] = useState({
        equity: data.initialAmount,
        monthlyRepaymentAmount: data.monthlyRepaymentAmount,
        monthlyRentalAmount: data.monthlyRentalAmount,
        expectChangeRentYear: data.expectChangeRentYear,
        monthlyRepaymentPeriodYears: data.monthlyRepaymentPeriodYears
    });

    useEffect(() => {
        setFormData(
            {
                equity: data.initialAmount,
                monthlyRepaymentAmount: data.monthlyRepaymentAmount,
                monthlyRentalAmount: data.monthlyRentalAmount,
                expectChangeRentYear: data.expectChangeRentYear,
                monthlyRepaymentPeriodYears: data.monthlyRepaymentPeriodYears
            }
        )
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let dataChnage = {
            ...formData,
            [name]: value,
        };
        setFormData(dataChnage);
        setData(dataChnage);
    };

    return (
        <div className='house-form'>
            <p className='title'>דירה להשקעה:</p>
            <form >

                <div className='field'>
                    <div className="form-group">
                        <label className="inputClass" > סך כל ההשקעה הראשונית: </label>
                        <input
                            type="number"
                            id="equity"
                            name="equity"
                            value={formData.equity}
                            onChange={handleChange}>
                        </input>
                    </div>
                </div>

                <div className='field'>
                    <div className="form-group">
                        <label className="inputClass" > סכום החזר חודשי (משכנתא/הלוואה): </label>
                        <input
                            type="number"
                            id="monthlyRepaymentAmount"
                            name="monthlyRepaymentAmount"
                            value={formData.monthlyRepaymentAmount}
                            onChange={handleChange}>
                        </input>
                    </div>
                </div>

                <div className='field'>
                    <div className="form-group">
                        <label className="inputClass" > תקופת ההחזר החודשי - שנים (משכנתא/הלוואה): </label>
                        <input
                            type="number"
                            id="monthlyRepaymentPeriodYears"
                            name="monthlyRepaymentPeriodYears"
                            value={formData.monthlyRepaymentPeriodYears}
                            onChange={handleChange}>
                        </input>
                    </div>
                </div>

                <div className='field'>
                    <div className="form-group">
                        <label className="inputClass"> סכום שכירות חודשית: </label>
                        <input
                            type="number"
                            id="monthlyRentalAmount"
                            name="monthlyRentalAmount"
                            value={formData.monthlyRentalAmount}
                            onChange={handleChange}>
                        </input>
                    </div>
                </div>

                <div className='field'>
                    <div className="form-group">
                        <label className="inputClass"> אחוז שינוי בדמי שכירות לשנה: </label>
                        <input
                            type="number"
                            id="expectChangeRentYear"
                            name="expectChangeRentYear"
                            value={formData.expectChangeRentYear}
                            onChange={handleChange}>
                        </input>
                    </div>
                </div>

            </form>
        </div>

    );
};

export default HouseForm;