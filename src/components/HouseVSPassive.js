
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

        console.log("homeData:", data);
    };

    const passiveDataChange = (data) => {
        console.log("passiveData:", data);
        setPassiveData(data);
    };

    return (
    <div className="form-body">
        <HouseForm setData={homeDataChange}></HouseForm>
        <PassiveForm setData={passiveDataChange} ></PassiveForm>
    </div>    
    );
};

export default HouseVSPassive;