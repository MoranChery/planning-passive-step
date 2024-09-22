
import '../cssFiles/HouseVSPassive.css';
import React, { useState } from 'react';

import HouseForm from "../components/HouseForm";
import PassiveForm from "../components/PassiveForm";

const HouseVSPassive = () => {
    const [homeData, setHomeData] = useState({});
    const [passiveData, setPassiveData] = useState({});
    const homeDataChange = (data) => {
        let equity = homeData.equity;
        let dataChnage = {
            ...passiveData,
            ["initialAmount"]: equity,
        };
        setPassiveData(dataChnage);
        setHomeData(data);
    };

    return (
    <div className="form-body">
        <HouseForm setData={homeDataChange}></HouseForm>
        <PassiveForm data={passiveData} ></PassiveForm>
    </div>    
    );
};

export default HouseVSPassive;