import React from 'react';
import HeaderTopComp from "../components/layout/HeaderTopComp";
import HeaderComp from "../components/layout/HeaderComp";
import BuyerProtectionComp from "../components/BuyerProtectionComp";
import FooterComp from "../components/layout/FooterComp";

const BuyerProtection = () => {
    return (
        <div>
            <HeaderTopComp/>
            <HeaderComp/>
            <BuyerProtectionComp/>
            <FooterComp/>
        </div>
    );
};

export default BuyerProtection;
